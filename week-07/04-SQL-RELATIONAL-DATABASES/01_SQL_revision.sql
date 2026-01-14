-- ! SQL does not like double quotes! Use single quotes or backticks for strings!

-- First, we start by creating the table called 'biscuits'
-- IF NOT EXISTS so you do not duplicate tables
-- our table needs to know what data types we are storing --> constraint
-- hence the data types e.g. INT/TEXT/VARCHAR/etc.
CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR,
  src TEXT,
  description TEXT,
  crunchiness INT
);

-- ============================================================================================
-- *CRUD ==> CREATE (post)

-- CREATE data entry for our table --> POST method
INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES 
('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4)

-- ============================================================================================
--* CRUD ==> READ (http method: GET)
--! We usually do not select IDs to be revealed to the user (= sensitive data)
--the id represents each entry uniquely (=unique identifier)
-- SQL id values are UNIQUE; meaning if a row is deleted, that id is gone forever

-- NOTE: Selecting the data does not update the table; it just filters the data 
-- Select the name and description of the biscuits
-- READ data in the table --> GET method
SELECT biscuit_name, description FROM biscuits;

-- Select the name and description of the biscuits only for custard creams
SELECT biscuit_name, description FROM biscuits WHERE biscuit_name = 'Custard Cream';

-- Select the name and crunchiness of the biscuits in alphabetical order
-- ORDER BY keyword is used to order data in SQL --> ASC is alphabetical order from A to Z 
-- *if you don't specify ASC or DESC, it will do ASC by default*
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name ASC;
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name DESC;

-- Select the name and crunchiness of the biscuits in alphabetical order (only the first 3 results)
-- LIMIT keyword to do this
SELECT biscuit_name, crunchiness FROM biscuits ORDER BY biscuit_name ASC LIMIT 3

-- Select all columns in biscuits and rename those that are confusing (by giving them an alias)
-- AS keyword 
SELECT id, biscuit_name AS "biscuit name", src AS "image link", description, crunchiness FROM biscuits

-- ============================================================================================
--* CRUD ==> UPDATE (http method: PUT or PATCH --> we only look at PUT on this course)

-- NOTE: PUT vs PATCH
-- PUT --> Puts an entry into the table as a whole; you will have to add values for every column in the table, even if there is nothing to update. 
-- If you do not specify a value, it becomes null (is more versatile than PATCH)
-- PATCH --> only updates one value in the row 

--! ALWAYS (!!!) specify WHERE you want the data to be updated OR ELSE YOU UPDATE EVERYTHING!
-- e.g. update the custard cream entry in the biscuits table
UPDATE biscuits SET crunchiness = 4 WHERE biscuit_name = 'Custard Cream'

-- Update the custard cream entry in the biscuits table and get confirmation_sent_at
UPDATE biscuits SET crunchiness = 5, biscuit_name = 'Custard Cream' WHERE id = 2 RETURNING * 

-- ============================================================================================
--* CRUD ==> DELETE (http method: DELETE)

--! ALWAYS (!!!) specify WHERE you want the data to be delete OR ELSE YOU DELETE EVERYTHING!
DELETE FROM biscuits WHERE id = '5';



