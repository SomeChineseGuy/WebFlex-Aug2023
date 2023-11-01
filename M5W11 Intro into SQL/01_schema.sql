CREATE TABLE users(
  id SERIAL PRIMARY KEY, -- serial is an integer that auto increments
  name TEXT, -- TEXT is a string of characters
  email TEXT,
  age integer -- This is a normal number 
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY, -- serial is an integer that auto increments
  name TEXT,
  species TEXT,
  breed TEXT,
  sex TEXT,
  user_id INTEGER,
  age INTEGER
);