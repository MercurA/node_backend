# Resourses

    GET http://localhost:3001/admin/get


- headers

        {
            Authorization: Bearer token,
            email: string
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
