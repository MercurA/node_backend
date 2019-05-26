# Resourses

    POST http://localhost:3001/admin/add

- headers:
        
        {
            Content-Type: application/json,
            Authorization: Bearer token,
            email: string
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
        