CREATE TABLE transactions (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"amount" bigInt NOT NULL,
	"date" varchar,
	"category_id" bigint,
	CONSTRAINT "transactions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE categories (
	"_id" serial NOT NULL,
	"category" varchar NOT NULL,
    CONSTRAINT "categories_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE users (
	"_id" serial NOT NULL,
	"username" varchar UNIQUE NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY("_id")
) WITH (
	OIDS=FALSE
);

CREATE TABLE account (
	"_id" serial NOT NULL,
	"budget" bigInt NOT NULL,
	CONSTRAINT "account_pk" PRIMARY KEY("_id")
) WITH (
	OIDS=FALSE
);

ALTER TABLE transactions ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("category_id") REFERENCES categories("_id");
ALTER TABLE transactions ADD CONSTRAINT "transactions_fk1" FOREIGN KEY ("user_id") REFERENCES users("_id");

INSERT INTO categories VALUES (1, 'test');
INSERT INTO categories VALUES (2, 'Housing/Rent');
INSERT INTO categories VALUES (3, 'Utilities');
INSERT INTO categories VALUES (4, 'Gas');
INSERT INTO categories VALUES (5, 'Groceries');
INSERT INTO categories VALUES (6, 'Dining Out');
INSERT INTO categories VALUES (7, 'Drinks');
INSERT INTO categories VALUES (8, 'Entertainment');
INSERT INTO categories VALUES (9, 'Savings');
INSERT INTO categories VALUES (10, 'Other');


-- INSERT INTO transactions VALUES (999, 'idk', 123.45, '10/18/2021', 6);
-- INSERT INTO account VALUES (1, 5000);

-- To Delete all transactions, uncomment delete and run command: 
-- DELETE FROM transactions
-- psql -d postgres://qnvdfcpn:E0IDs55E1KoIP0bLva8N5nw5aEJZ3olj@kashin.db.elephantsql.com/qnvdfcpn -f transactions_postgres_create.sql