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
	id_user INTEGER REFERENCES users(id),
	title TEXT NOT NULL,
	content TEXT NOT NULL,
  created_date TEXT NOT NULL
);

-- ALTER TABLE posts ADD COLUMN id_user INTEGER REFERENCES users(id);

INSERT INTO users (email, name, password, created_date) VALUES ('fulano@email.com', 'Fulano da Silva', 'senha1', datetime('now', 'localtime'));

INSERT INTO users (email, name, password, created_date) VALUES ('ciclano@email.com', 'Ciclano Souza', 'senha2', datetime('now', 'localtime'));

INSERT INTO users (email, name, password, created_date) VALUES ('maria@email.com', 'Maria José', 'senha3', datetime('now', 'localtime'));

INSERT INTO posts (id_user, title, content, created_date) VALUES ('1', 'Primeiro Post do Fulano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'));

INSERT INTO posts (id_user, title, content, created_date) VALUES ('1', 'Segundo Post do Fulano', 'Lorem ipsum dolor sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'));

INSERT INTO posts (id_user, title, content, created_date) VALUES ('2', 'Primeiro Post do Ciclano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce facilisis sapien sit amet justo egestas, nec tempus risus mollis. Nullam lacinia at nulla sed dapibus. Maecenas dapibus ullamcorper hendrerit. Sed a porttitor lacus, vitae faucibus metus. Mauris id aliquet nunc. Nunc non pretium leo, id mollis diam. Aliquam sed suscipit neque. Donec a maximus purus. Phasellus vehicula quis neque in aliquet.', datetime('now', 'localtime'));

INSERT INTO posts (id_user, title, content, created_date) VALUES ('3', 'Primeiro Post da Maria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex dui, vestibulum sit amet maximus ac, scelerisque sed quam. Curabitur id elit sit amet metus consequat pellentesque nec eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at purus non magna mattis tempus. Aenean mattis elementum pulvinar. Maecenas pulvinar, tellus id vestibulum faucibus, sem diam vestibulum magna, a molestie erat arcu quis purus.', datetime('now', 'localtime'));

SELECT * FROM users

SELECT * FROM posts
