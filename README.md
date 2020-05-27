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

/---------------------- Values Routes -----------------------------------/

VALUES URL: https://essentialapi.herokuapp.com/values

    .GET ONLY

Example object

        {
            "id": 1,
            "name": "Career",
            "description": "Any task related to work, or financial gain"
        },

/------------------------User Values---------------------------------------/

USER ENDPOINT URL: https://essentialapi.herokuapp.com/users

This pulls ALL of the users, and this is where the account management endpoints send their data. Retrieving this list will get you a list of all user accounts. Register will post directly to this table.

NO EXAMPLE. Should be a list

User/:ID ENDPOINT URL: https://essentialapi.herokuapp.com/users/${id} or /1

Example object response:

        {
            "id": 1,
            "username": "ShawnB84",
            "password": "20QI6NsnP776%6MqEmEsUI922YTxacnMM9M"
            "email": "ShawnBatson@example.com",
            "firstName: "Shawn",
            "lastName": "Batson",
        },

USER/FOCUS URL: https://essentialapi.herokuapp.com/users/:id/focus

.POST

    Example object to Post:

        {
            "userId": 5,
            "valuesId": 6
        }

    Example return from that specific post action:

RESPONSE (200) Success

    [
        {
            "userId": 5,
            "valuesId": 1,
            "name": "Career",
            "description": "Any task related to work, or financial gain"
        },
        {
            "userId": 5,
            "valuesId": 2,
            "name": "Education",
            "description": "Any task that involves learning, or school-work"
        },
        {
            "userId": 5,
            "valuesId": 6,
            "name": "Family",
            "description": "Any task centered around the family or home"
        }
    ]

        --This is a 200 type response. It will return all associated values the user has chosen.



.GET

    Example return:  Same as directly above.

USER/FOCUS URL: https://essentialapi.herokuapp.com/users/:id/focus/:id

.GET

    Example Object Response:

        {
            "userId": 4,
            "valuesId": 2,
            "name": "Education",
            "description": "Any task that involves learning, or school-work"
        }

.DELETE

    You should just recieve an OK (200) or Not Found (404) if successfull/doesn't exist

USER/INITIATIVES URL: https://essentialapi.herokuapp.com/users/:id/initiatives

.POST

    Example object to Post:

        {
            "iName": "test Initiative",
            "iDescription": "test Initiative Description",
            "dueDate": "05-05-21",
            "userId": 5,             //this is the users specific ID
            "userValuesId": 1,          //this is their chosen value's ID
            "completed": false,
            "repeatable": false
        }

    Example return from that specific post action:

RESPONSE (200) Success

    [
        {
            "userId": 5,
            "iName": "Go to school",
            "iDescription": "I'm going to school!",
            "dueDate": "01-01-21",
            "completed": 0,
            "repeatable": 1
        },
        {
            "userId": 5,
            "iName": "test Initiative",
            "iDescription": "test Initiative Description",
            "dueDate": "05-05-21",
            "completed": 0,
            "repeatable": 0
        }

]

        --This is a 200 type response. It will return all associated Initiatives the user has input.



.GET

    Example return:  Same as directly above.

USER/INITIATIVES URL: https://essentialapi.herokuapp.com/users/:id/initiatives/:id

.GET

    Example Object Response:

        {
            "id": 1,
            "iName": "Go to school",
            "iDescription": "I'm going to school!",
            "dueDate": "01-01-21",
            "userId": 1,
            "userValuesId": 3,
            "completed": 0,
            "repeatable": 1
        }

.DELETE

    You should just recieve an OK (200) or Not Found (404) if successfull/doesn't exist
