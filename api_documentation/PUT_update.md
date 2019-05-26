# Resourses

    PUT http://localhost:3001/admin/update/:id

- headers:
        
        {
            Content-Type: application/json,
            Authorization: Bearer token,
            email: string
        }

- params

        {
            id: string
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
