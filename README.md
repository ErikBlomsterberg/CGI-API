# CGI REST API

A REST API built with Node.js and Express.
Contains a single endpoint which retrieves data.

## Set up

1. Run 'git clone https://github.com/ErikBlomsterberg/CGI-API.git' from the terminal.

2. Create a file named '.env' in the project root. Add 'PORT=3000' to the file.

3. Run 'npm install' from the terminal to install dependencies.

## Start server

1. Run 'npm start' from the terminal.

## Endpoint call

From browser:
Enter 'http://localhost:3000/api/data?limit=x' in the searchbar (OBS! replace x with a whole number > 0).
Example: 'http://localhost:3000/api/data?limit=10', which return the first ten rows of data.

With cURL:
Run 'curl -i http://localhost:3000/api/data?limit=x' from the terminal (OBS! replace x with a whole number > 0).
Example: 'curl -i http://localhost:3000/api/data?limit=10', which return the first ten rows of data.

# Data file

data.xlxs is an excel-file containing user-info. Columns: id, name, age, email.
