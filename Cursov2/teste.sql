CREATE DATABASE teste CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;


CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(200),
    PRIMARY KEY (id)
);

INSERT INTO users 
(
    nome, 
    email,
    age,
    password
)
VALUES
(
    "Varnahal",
    "varnahal0712@gmail.com",
    18,
    "minhasenhafoof"
);

UPDATE users  SET nome ="Varnahal" WHERE id=2;

ALTER TABLE users
ADD COLUMN age int AFTER email;