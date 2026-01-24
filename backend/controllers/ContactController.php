<?php
require_once 'models/ContactMessage.php';

class ContactController {
    private $db;
    private $contactMessage;

    public function __construct($db) {
        $this->db = $db;
        $this->contactMessage = new ContactMessage($db);
    }

    public function handleRequest($method, $uri) {
        switch($method) {
            case 'GET':
                $this->handleGet($uri);
                break;
            case 'POST':
                $this->handlePost();
                break;
            default:
                http_response_code(405);
                echo json_encode(['message' => 'Method not allowed']);
                break;
        }
    }

    private function handleGet($uri) {
        // Check if requesting by email
        if (preg_match('/\/contact\/email\/(.+)/', $uri, $matches)) {
            $email = urldecode($matches[1]);
            $this->contactMessage->email = $email;
            $stmt = $this->contactMessage->readByEmail();
            
            $messages = [];
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $message_item = [
                    'id' => $id,
                    'name' => $name,
                    'email' => $email,
                    'message' => $message,
                    'created_at' => $created_at
                ];
                array_push($messages, $message_item);
            }
            
            http_response_code(200);
            echo json_encode($messages);
        } else {
            // Get all messages
            $stmt = $this->contactMessage->readAll();
            
            $messages = [];
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $message_item = [
                    'id' => $id,
                    'name' => $name,
                    'email' => $email,
                    'message' => $message,
                    'created_at' => $created_at
                ];
                array_push($messages, $message_item);
            }
            
            http_response_code(200);
            echo json_encode($messages);
        }
    }

    private function handlePost() {
        $data = json_decode(file_get_contents("php://input"));

        if(!empty($data->name) && !empty($data->email) && !empty($data->message)) {
            $this->contactMessage->name = $data->name;
            $this->contactMessage->email = $data->email;
            $this->contactMessage->message = $data->message;

            if($this->contactMessage->create()) {
                http_response_code(201);
                echo json_encode([
                    'message' => 'Message received successfully!',
                    'status' => 'success'
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'message' => 'Failed to send message',
                    'status' => 'error'
                ]);
            }
        } else {
            http_response_code(400);
            echo json_encode([
                'message' => 'Incomplete data',
                'status' => 'error'
            ]);
        }
    }
}
