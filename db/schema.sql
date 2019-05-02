CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  note_title VARCHAR(255) NOT NULL,
  note_body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);
