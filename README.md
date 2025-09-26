# CGI REST API

A REST API built with Node.js and Express.
Contains a single endpoint which retrieves data.

## Set up

1. Run 'git clone https://github.com/ErikBlomsterberg/CGI-API.git' in the terminal.

2. Create a file named '.env' in the project root. Add 'PORT=3000' to the file.

3. Run 'npm install' to install dependencies.

## Run

1. Run 'npm start' in the terminal.

## Endpoint call

From browser:

Enter 'http://localhost:3000/api/data?limit=x' in the searchbar (OBS! replace x with a whole number > 0).
Example: 'http://localhost:3000/api/data?limit=10', which return the first ten rows of data.
