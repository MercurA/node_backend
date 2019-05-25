# Resourses

    DELETE http://localhost:3001/delete/:id

- headers:
        
        {
            Content-Type: application/json
        }


- params

        {
            id: string        
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
