# essentialism-back-end

Essentialism

/-----------------------------/Auth Routes/---------------------------/

REGISTER METHOD url: https://essentialapi.herokuapp.com/auth/register

.POST ONLY

Example Object

    BODY

{
"username": "ShawnB84",
"password": "12b3s",
"email": "ShawnBatson@example.com",
"firstName: "Shawn",
"lastName": "Batson",
}

/----------------------------------------/

example RESPONSE from creation example

    (201) Successfully Created

    {
    "id": 2,
    "username": "ShawnB84",
    "password": "12b3s",
    "email": "ShawnBatson@example.com",
    "firstName: "Shawn",
    "lastName": "Batson",
    }

    (500) Server Error

        {
        message: Whoops, It looks like there was an error with the server
        }

        (409) Conflict

        {
        message: That username has already been taken
        }

/----------Login--------------/

LOGIN URL: https://essentialapi.herokuapp.com/auth/login

.POST ONLY

    Example Object

    BODY

{
"username": "ShawnB84",
"password": "12b3s"
}

    RESPONSE 200 success

Example RESPONSE from logging in

    {
        "id": 1,
        "username": "ShawnB84",
        "password": "20QI6NsnP776%6MqEmEsUI922YTxacnMM9M"
        "email": "ShawnBatson@example.com",
        "firstName: "Shawn",
         "lastName": "Batson",
    }

    (401) Unauthorized

    {
        message: "Invalid Credentials"
    }

    (500) Server Error

    {
        message: Whoops, It looks like there was an error with the server
    }

/---------------------- -----------------------------------/
