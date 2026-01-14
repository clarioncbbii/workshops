-- create table 'categories'
CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

-- populate the categories table with some test data
INSERT INTO categories(name) VALUES('Technology');
INSERT INTO categories(name) VALUES('Lifestyle');
INSERT INTO categories(name) VALUES('Education');


-- create table 'posts'
CREATE TABLE IF NOT EXISTS posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);

-- populate the post table with some test data
INSERT INTO posts(title, content, category_id) VALUES('Introduction to Node.js', 'Node.js is a JavaScript runtime...', 1);
INSERT INTO posts(title, content, category_id) VALUES('Daily Yoga Practices', 'Yoga is beneficial for health...', 2);
INSERT INTO posts(title, content, category_id) VALUES('Learning SQL Basics', 'SQL is a standard language for...', 3);

-- ===========================================================================

-- A JOIN combines the two tables together, matching the rows in the right table with the rows in the left table. 
-- The ON clause specifies which column in the left table to match with which column in the right table. The result is a table with the columns from both tables, joined together. 
-- the AS keyword allows you to rename the column for the category
SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id;

-- show the posts with their accompanying category
SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id
WHERE categories.id = 1;

-- this is how we would do it if we only know the category name:
SELECT posts.title, posts.content, categories.name AS category
FROM posts
JOIN categories ON posts.category_id = categories.id
WHERE categories.name = 'Technology';
