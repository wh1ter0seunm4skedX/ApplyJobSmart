CREATE TABLE Users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       username VARCHAR(255) NOT NULL,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Messages (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          subject VARCHAR(255) NOT NULL,
                          body TEXT NOT NULL,
                          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CVs (
                     id INT AUTO_INCREMENT PRIMARY KEY,
                     name VARCHAR(255) NOT NULL,
                     content TEXT NOT NULL,
                     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE JobDescriptions (
                                 id INT AUTO_INCREMENT PRIMARY KEY,
                                 title VARCHAR(255) NOT NULL,
                                 description TEXT NOT NULL,
                                 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Applications (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              message_id INT NOT NULL,
                              cv_id INT NOT NULL,
                              job_description_id INT NOT NULL,
                              applied_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                              FOREIGN KEY (message_id) REFERENCES Messages(id) ON DELETE CASCADE,
                              FOREIGN KEY (cv_id) REFERENCES CVs(id) ON DELETE CASCADE,
                              FOREIGN KEY (job_description_id) REFERENCES JobDescriptions(id) ON DELETE CASCADE
);
