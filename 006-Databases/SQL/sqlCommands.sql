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