SELECT * FROM pets;
SELECT * FROM users;

SELECT name, breed FROM pets;
SELECT name FROM users;

-- Only Vesna's pets... Vesna's ID: 2
SELECT name FROM pets
WHERE user_id = 2;

-- Page one of pets (3 per page)
SELECT name FROM pets
OFFSET 0
LIMIT 3;

-- Page two of pets (3 per page)
SELECT name FROM pets
OFFSET 3 -- Skip 3 rows
LIMIT 3; -- Show only 3 rows

-- Page three of pets (3 per page)
SELECT name FROM pets
OFFSET 6 -- Skip 6 rows
LIMIT 3; -- Show only 3 rows

-- Page four of pets (3 per page)
SELECT name FROM pets
OFFSET 9 -- Skip 6 rows
LIMIT 3; -- Show only 3 rows

SELECT age, count(*) as num_of_age 
FROM users where age > 5 
Group By age 
order by COUNT(*) desc;

-- Get all users and pets at the same time...?
SELECT 
    users.name AS user_name,
    pets.name AS pet_name
FROM users -- LEFT TABLE
JOIN pets     -- RIGHT TABLE
ON users.id = pets.user_id; -- What to glue the tables together based on.

-- ORDER BY
SELECT * FROM pets
ORDER BY name DESC;

-- Let's say we want to know how many pets each user has...
SELECT 
    users.name AS user_name,
    COUNT(pets.id)     -- Aggregate Function
FROM users -- LEFT TABLE
JOIN pets     -- RIGHT TABLE
ON users.id = pets.user_id
GROUP BY users.name;

-- Add Tagel to users table:
INSERT INTO users(name) VALUES('Tagel');

-- Example left join:
SELECT 
    users.name AS user_name,
    pets.name AS pet_name
FROM users -- LEFT TABLE
LEFT JOIN pets     -- RIGHT TABLE
ON users.id = pets.user_id;


