# Universport

A blog about sport

## Setup

Create database :
```sh
$ psql -U postgres -c "CREATE DATABASE blog_sport;"
```
Create users table :
```sh
$ psql -U postgres -d blog_sport -c "CREATE TABLE users (id SERIAL PRIMARY KEY NOT NULL,email VARCHAR(255),password VARCHAR(255));"
```
Create admin :
```sh
$ psql -U postgres -d blog_sport -c "CREATE EXTENSION pgcrypto;"
$ psql -U postgres -d blog_sport -c " INSERT INTO users (email,password) values ('admin@admin.fr', crypt('password',gen_salt('md5')));"
```

