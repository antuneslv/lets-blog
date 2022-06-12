DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	email TEXT NOT NULL UNIQUE,
	name TEXT NOT NULL,
  password TEXT NOT NULL,
  created_date TEXT NOT NULL
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
  created_date TEXT NOT NULL
);

ALTER TABLE posts ADD COLUMN id_user INTEGER REFERENCES users(id);

INSERT INTO users (email, name, password, created_date) VALUES ('fulano@email.com', 'Fulano da Silva', '123456', datetime('now', 'localtime'));

INSERT INTO users (email, name, password, created_date) VALUES ('ciclano@email.com', 'Ciclano Souza', '321321', datetime('now', 'localtime'));

INSERT INTO users (email, name, password, created_date) VALUES ('maria@email.com', 'Maria José', '654321', datetime('now', 'localtime'));

INSERT INTO posts (title, content, created_date, id_user) VALUES ('Primeiro Post do Fulano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'), '1');

INSERT INTO posts (title, content, created_date, id_user) VALUES ('Segundo Post do Fulano', 'Lorem ipsum dolor sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'), '1');

INSERT INTO posts (title, content, created_date, id_user) VALUES ('Primeiro Post do Ciclano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'), '2');

INSERT INTO posts (title, content, created_date, id_user) VALUES ('Primeiro Post da Maria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus.', datetime('now', 'localtime'), '3');

SELECT * FROM users

SELECT * FROM posts

SELECT *, (SELECT name FROM users WHERE id_user = id) as author FROM posts

