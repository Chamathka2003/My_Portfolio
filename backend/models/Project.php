<?php
class Project {
    private $conn;
    private $table_name = "projects";

    public $id;
    public $name;
    public $description;
    public $technologies;
    public $category;
    public $github_url;
    public $live_url;
    public $image_url;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function readAll() {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function readOne() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = :id LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if($row) {
            $this->name = $row['name'];
            $this->description = $row['description'];
            $this->technologies = $row['technologies'];
            $this->category = $row['category'] ?? null;
            $this->github_url = $row['github_url'] ?? null;
            $this->live_url = $row['live_url'] ?? null;
            $this->image_url = $row['image_url'] ?? null;
            $this->created_at = $row['created_at'] ?? null;
            return true;
        }

        return false;
    }

    public function create() {
        $query = "INSERT INTO " . $this->table_name . " 
                  SET name=:name, description=:description, technologies=:technologies, 
                      github_url=:github_url, live_url=:live_url, image_url=:image_url, category=:category";

        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->technologies = htmlspecialchars(strip_tags($this->technologies));
        $this->github_url = htmlspecialchars(strip_tags($this->github_url ?? ''));
        $this->live_url = htmlspecialchars(strip_tags($this->live_url ?? ''));
        $this->image_url = htmlspecialchars(strip_tags($this->image_url ?? ''));
        $this->category = htmlspecialchars(strip_tags($this->category ?? ''));

        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":technologies", $this->technologies);
        $stmt->bindParam(":github_url", $this->github_url);
        $stmt->bindParam(":live_url", $this->live_url);
        $stmt->bindParam(":image_url", $this->image_url);
        $stmt->bindParam(":category", $this->category);

        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }

    public function update() {
        $query = "UPDATE " . $this->table_name . " 
                  SET name=:name, description=:description, technologies=:technologies,
                      github_url=:github_url, live_url=:live_url, image_url=:image_url, category=:category 
                  WHERE id=:id";

        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->technologies = htmlspecialchars(strip_tags($this->technologies));
        $this->github_url = htmlspecialchars(strip_tags($this->github_url ?? ''));
        $this->live_url = htmlspecialchars(strip_tags($this->live_url ?? ''));
        $this->image_url = htmlspecialchars(strip_tags($this->image_url ?? ''));
        $this->category = htmlspecialchars(strip_tags($this->category ?? ''));

        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":technologies", $this->technologies);
        $stmt->bindParam(":github_url", $this->github_url);
        $stmt->bindParam(":live_url", $this->live_url);
        $stmt->bindParam(":image_url", $this->image_url);
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":id", $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function delete() {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }
}
