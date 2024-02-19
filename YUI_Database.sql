CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  display_name VARCHAR,
  password VARCHAR,
  is_admin BOOLEAN,
  created_at TIMESTAMP
);

create table follows(
	id serial primary key,
	user_id integer,
	following_user_id integer,
	created_at timestamp
)

create table artworks(
	id serial primary key,
	title varchar,
	description varchar,
	url varchar,
	user_id integer,
	category_id integer,
	published bit,
	created_at timestamp
)

CREATE TABLE nfts (
  id SERIAL PRIMARY KEY,
  token VARCHAR,
  artwork_id INTEGER,
  created_at TIMESTAMP
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  display VARCHAR,
  created_at TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment VARCHAR,
  user_id INTEGER,
  comment_parent_id INTEGER,
  created_at TIMESTAMP
);


CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  artwork_id VARCHAR,
  user_id INTEGER,
  created_at TIMESTAMP
);


CREATE TABLE feedbacks (
  id SERIAL PRIMARY KEY,
  email VARCHAR,
  content VARCHAR
);

-- Chèn dữ liệu mẫu cho bảng Users
INSERT INTO users (email, display_name, password, is_admin, created_at)
VALUES 
  ('user1@example.com', 'User One', 'password123', false, CURRENT_TIMESTAMP),
  ('user2@example.com', 'User Two', 'password456', false, CURRENT_TIMESTAMP),
  ('admin@example.com', 'Admin User', 'adminpass', true, CURRENT_TIMESTAMP),
  ('user3@example.com', 'User Three', 'password789', false, CURRENT_TIMESTAMP),
  ('user4@example.com', 'User Four', 'passwordabc', false, CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Follows
INSERT INTO follows (user_id, following_user_id, created_at)
VALUES 
  (1, 2, CURRENT_TIMESTAMP),
  (2, 3, CURRENT_TIMESTAMP),
  (3, 1, CURRENT_TIMESTAMP),
  (4, 2, CURRENT_TIMESTAMP),
  (5, 1, CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Artworks
INSERT INTO artworks (title, description, url, user_id, category_id, published, created_at)
VALUES 
  ('Artwork 1', 'Description 1', 'https://example.com/artwork1', 1, 1, B'1', CURRENT_TIMESTAMP),
  ('Artwork 2', 'Description 2', 'https://example.com/artwork2', 2, 2, B'0', CURRENT_TIMESTAMP),
  ('Artwork 3', 'Description 3', 'https://example.com/artwork3', 3, 1, B'1', CURRENT_TIMESTAMP),
  ('Artwork 4', 'Description 4', 'https://example.com/artwork4', 4, 3, B'0', CURRENT_TIMESTAMP),
  ('Artwork 5', 'Description 5', 'https://example.com/artwork5', 5, 2, B'1', CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng NFTs
INSERT INTO nfts (token, artwork_id, created_at)
VALUES 
  ('NFTToken1', 1, CURRENT_TIMESTAMP),
  ('NFTToken2', 2, CURRENT_TIMESTAMP),
  ('NFTToken3', 3, CURRENT_TIMESTAMP),
  ('NFTToken4', 4, CURRENT_TIMESTAMP),
  ('NFTToken5', 5, CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Categories
INSERT INTO categories (display, created_at)
VALUES 
  ('Category 1', CURRENT_TIMESTAMP),
  ('Category 2', CURRENT_TIMESTAMP),
  ('Category 3', CURRENT_TIMESTAMP),
  ('Category 4', CURRENT_TIMESTAMP),
  ('Category 5', CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Comments
INSERT INTO comments (comment, user_id, comment_parent_id, created_at)
VALUES 
  ('Comment 1', 1, null, CURRENT_TIMESTAMP),
  ('Comment 2', 2, null, CURRENT_TIMESTAMP),
  ('Reply to Comment 1', 3, 1, CURRENT_TIMESTAMP),
  ('Comment 3', 4, null, CURRENT_TIMESTAMP),
  ('Reply to Comment 2', 5, 2, CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Bookmarks
INSERT INTO bookmarks (artwork_id, user_id, created_at)
VALUES 
  ('bookmark1', 1, CURRENT_TIMESTAMP),
  ('bookmark2', 2, CURRENT_TIMESTAMP),
  ('bookmark3', 3, CURRENT_TIMESTAMP),
  ('bookmark4', 4, CURRENT_TIMESTAMP),
  ('bookmark5', 5, CURRENT_TIMESTAMP);

-- Chèn dữ liệu mẫu cho bảng Feedbacks
INSERT INTO feedbacks (email, content)
VALUES 
  ('feedback1@example.com', 'Feedback message 1'),
  ('feedback2@example.com', 'Feedback message 2'),
  ('feedback3@example.com', 'Feedback message 3'),
  ('feedback4@example.com', 'Feedback message 4'),
  ('feedback5@example.com', 'Feedback message 5');
