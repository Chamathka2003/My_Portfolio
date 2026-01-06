<?php
require_once 'models/Project.php';

class ProjectController {
    private $db;
    private $project;

    public function __construct($db) {
        $this->db = $db;
        $this->project = new Project($db);
    }

    public function handleRequest($method, $uri) {
        switch($method) {
            case 'GET':
                $this->handleGet($uri);
                break;
            case 'POST':
                $this->handlePost();
                break;
            case 'PUT':
                $this->handlePut($uri);
                break;
            case 'DELETE':
                $this->handleDelete($uri);
                break;
            default:
                http_response_code(405);
                echo json_encode(['message' => 'Method not allowed']);
                break;
        }
    }

    private function handleGet($uri) {
        // Check if requesting specific project
        if (preg_match('/\/projects\/(\d+)/', $uri, $matches)) {
            $id = $matches[1];
            $this->project->id = $id;
            
            if($this->project->readOne()) {
                $project_item = [
                    'id' => $this->project->id,
                    'name' => $this->project->name,
                    'description' => $this->project->description,
                    'technologies' => $this->project->technologies,
                    'category' => $this->project->category,
                    'github_url' => $this->project->github_url,
                    'live_url' => $this->project->live_url,
                    'image_url' => $this->project->image_url,
                    'created_at' => $this->project->created_at
                ];
                
                http_response_code(200);
                echo json_encode($project_item);
            } else {
                http_response_code(404);
                echo json_encode(['message' => 'Project not found']);
            }
        } else {
            // Get all projects
            $stmt = $this->project->readAll();
            
            $projects = [];
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $project_item = [
                    'id' => $id,
                    'name' => $name,
                    'description' => $description,
                    'technologies' => $technologies,
                    'category' => $category ?? null,
                    'github_url' => $github_url ?? null,
                    'live_url' => $live_url ?? null,
                    'image_url' => $image_url ?? null
                ];
                array_push($projects, $project_item);
            }
            
            http_response_code(200);
            echo json_encode($projects);
        }
    }

    private function handlePost() {
        $data = json_decode(file_get_contents("php://input"));

        if(!empty($data->title)) {
            $this->project->title = $data->title;
            $this->project->description = $data->description ?? '';
            $this->project->technologies = $data->technologies ?? '';
            $this->project->github_url = $data->github_url ?? '';
            $this->project->demo_url = $data->demo_url ?? '';

            if($this->project->create()) {
                http_response_code(201);
                echo json_encode([
                    'id' => $this->project->id,
                    'title' => $this->project->title,
                    'description' => $this->project->description,
                    'technologies' => $this->project->technologies,
                    'github_url' => $this->project->github_url,
                    'demo_url' => $this->project->demo_url
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['message' => 'Unable to create project']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Incomplete data']);
        }
    }

    private function handlePut($uri) {
        if (preg_match('/\/projects\/(\d+)/', $uri, $matches)) {
            $id = $matches[1];
            $data = json_decode(file_get_contents("php://input"));

            $this->project->id = $id;
            $this->project->title = $data->title;
            $this->project->description = $data->description ?? '';
            $this->project->technologies = $data->technologies ?? '';
            $this->project->github_url = $data->github_url ?? '';
            $this->project->demo_url = $data->demo_url ?? '';

            if($this->project->update()) {
                http_response_code(200);
                echo json_encode([
                    'id' => $this->project->id,
                    'title' => $this->project->title,
                    'description' => $this->project->description,
                    'technologies' => $this->project->technologies,
                    'github_url' => $this->project->github_url,
                    'demo_url' => $this->project->demo_url
                ]);
            } else {
                http_response_code(404);
                echo json_encode(['message' => 'Project not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Invalid request']);
        }
    }

    private function handleDelete($uri) {
        if (preg_match('/\/projects\/(\d+)/', $uri, $matches)) {
            $id = $matches[1];
            $this->project->id = $id;

            if($this->project->delete()) {
                http_response_code(204);
            } else {
                http_response_code(500);
                echo json_encode(['message' => 'Unable to delete project']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Invalid request']);
        }
    }
}
