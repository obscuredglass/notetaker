DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  note_title VARCHAR(255) NOT NULL,
  note_body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);

INSERT INTO  notes 
(note_title, note_body, created_at)

VALUES	 
	("Movies to watch", "Oldboy, Salesman, Casablanca", NOW());
    
 INSERT INTO notes
	(note_title, note_body, created_at)
VALUES	 
	("Thing to do when I get home", "feed/walk the dog, prepare lunch and dinner", NOW());
 
 INSERT INTO notes
	(note_title, note_body, created_at)
VALUES	 
	("Pick up groceries", "eggs, OJ, pineapple", NOW());