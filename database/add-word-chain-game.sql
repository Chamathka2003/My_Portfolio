-- Add Word Chain Puzzle Game project to portfolio
INSERT INTO projects (name, description, technologies, category, github_url, live_url) 
VALUES (
    'Word Chain Puzzle Game',
    'An interactive word puzzle game developed using vanilla JavaScript with a custom Linked List for word management. Features include word validation, scoring system, undo/redo functionality, riddles, and multiple difficulty levels. Designed with a modular architecture separating game logic, UI, and utilities for maintainability and scalability.',
    'JavaScript, Linked List, DOM Manipulation, Game Logic, Modular Architecture',
    'Web Application',
    NULL,
    NULL
);

-- Verify the insertion
SELECT * FROM projects WHERE name = 'Word Chain Puzzle Game';
