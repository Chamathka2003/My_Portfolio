<?php
class Database {
    private $host = "localhost";
    private $db_name = "portfolio_db";
    private $username = "webuser";
    private $password = "123";
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8mb4",
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("set names utf8mb4 collate utf8mb4_unicode_ci");
        } catch(PDOException $exception) {
            echo json_encode([
                'message' => 'Connection error: ' . $exception->getMessage()
            ]);
        }

        return $this->conn;
    }
}
