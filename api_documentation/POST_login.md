# Resourses

    POST http://localhost:3001/login

- headers:
        
        {
            Content-Type: application/json,
        }

- body:

        Object exemple:

        {
            email: string
        }

### On Success

- will return an object of type:

        {
            success: true,
            data: token
        }

### on Failure

        {
            success: false,
            message: string
        }