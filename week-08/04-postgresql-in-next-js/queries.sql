 -- create a table to store rollercoasters data 
 CREATE TABLE IF NOT EXISTS rollercoasters (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  height INT,
  country VARCHAR(255),
  url TEXT
);

-- create new data in the table 
INSERT INTO rollercoasters (name, height, country, url) VALUES ('Kingda Ka', 139, 'USA', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Kingda_Ka.jpg'),
('Steel Dragon 2000', 97, 'Japan', 'https://www.coaster101.com/wp-content/uploads/2020/12/steel-dragon-2000_1-600x430.jpg'),
('Top Thrill Dragster', 128, 'USA', 'https://www.themeparkjames.co.uk/theme-parks/northamerica/usa/cedar-point/rides/top-thrill-dragster/sign.jpg'),
('Red Force', 112, 'Spain', 'https://www.eurekamagazine.co.uk/media/hbolf0zl/ferrari-20land_red-20force.jpg?width=1002&height=564&v=1d9d7a56b2b0f20'),
('Fury 325', 99, 'USA', 'https://fox28savannah.com/resources/media2/16x9/full/1015/center/80/0e3991ec-9aca-4c28-babf-2c223760685c-large16x9_CarowindsFury325APPhoto.jpg');

