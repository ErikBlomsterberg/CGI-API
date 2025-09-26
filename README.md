# CGI REST-API

A REST-API built with Node.js and Express.  
Contains a single endpoint which retrieves data.

## Set up

1. Run 'git clone https://github.com/ErikBlomsterberg/CGI-API.git' in the terminal.

2. Create a file named '.env' in the project root and write 'PORT=3000' in the file.

3. Run 'npm install' in the terminal to install dependencies.

4. (Optional) Change value of constant 'filePath' in 'src\routes\dataRoutes.js' to use a different csv-file. Is currently set to 'data/data.csv' (file is included in the project).

## Start server

Run 'npm start' in the terminal to start server.

## Call endpoint

With browser:  
Enter 'http://localhost:3000/api/data?limit=x' in the searchbar (OBS! replace x with a whole number > 0, or omit limit).
Example1: 'http://localhost:3000/api/data?limit=10', which returns the first ten rows of data. Example2: 'http://localhost:3000/api/data', which returns all data rows.

With cURL:  
Run 'curl -i http://localhost:3000/api/data?limit=x' in the terminal (OBS! replace x with a whole number > 0, or omit limit).
Example1: 'curl -i http://localhost:3000/api/data?limit=10', which returns the first ten rows of data. Example2: 'curl -i http://localhost:3000/api/data', which returns all data rows.

## Data files

'data\data.csv' is a csv-file containing user-info. Columns: id;name;age;email.  
'data\onlyHeaders.csv' is a csv-file with only column headers (id;name;age;email).  
'data\empty.csv' is an empty csv-file.
