-- CRUD: Create, Read, Update, Destroy
-- This creates a new table
CREATE TABLE products(
    id INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);

-- Inserting data into your table
INSERT INTO products
VALUES (1, "Pen", 1.20);

INSERT INTO products (id, name)
VALUES (2, "Pencil");

-- Show all the data inside a table
SELECT * FROM 'products';

-- Select specific columns from a table
SELECT pName, pPrice FROM 'products';

-- Select columns from a table based on a condition:
SELECT * FROM 'products' WHERE country="Mexico";
-- Documentation: https://www.w3schools.com/sql/sql_where.asp

-- Updating data in a table
UPDATE products 
SET price = 0.80
WHERE id = 2;

-- Altering the table
ALTER TABLE products
ADD stock INT;

-- Deleting a record
DELETE FROM products
WHERE id = 2;

-- Establishing relationships between tables via Foreign Keys
CREATE TABLE orders (
    id INT NOT NULL,
    order_number INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
)

-- Using join to extract data from two linked tables
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;