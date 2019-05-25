# Resourses

    POST http://localhost:3001/add

- headers:
        
        {
            Content-Type: application/json
        }

- body:

        Object exemple:

        {
            name: "John"
        }

### On Success

- will return an object of type:

        {
            success: true,
            data: object | array
        }

### on Failure

        {
            success: false,
            message: string
        }
        