# Setup

- clone repository:

        git clone https://github.com/MercurA/node_backend.git

- navigate to folder:

        cd node_backend

- install of not already nodemon globally

        npm install -g nodemon

- install required node packages

        npm install

- start server

        npm run dev

## Test API

- with [Postman](https://www.getpostman.com/downloads/) make your 1st post:

        - endpoint http:localhost:3001/post
        - sent object example:
        {
            "name": "John" 
        }

- or using [cURL](https://curl.haxx.se/download.html)

        curl -X POST -H {"Content-Type": "application/json"} -d '{name: "John"}' http://127.0.0.1:3001/add