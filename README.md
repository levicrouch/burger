# burger

## Overview
This application is is modeled as a RESTful MVC application. The application is hosted on [Heroku](https://burger-app-bc.herokuapp.com/), once loaded, the user can chose from a list of burgers and devour, or UN-Devour them. As they are devoured or UN-devoured, the burger is placed in a different div on the same page.

## Technical Details
As this is a RESTful, full-stack, MVC application, the functionality is broken-up as follows:
- Model 
    - Uses a hosted Heroku, JawsDB database (MySQL).
    - Uses an ORM for interfacing between the with the database and controller.
- View
    - Uses handlebars running from Express to render the views from the controller to the client
- Controller
    - Manages the routes used by the application
        - `/`
            - GET route - displays the data and allows creation and updates of the row data
            - Response data is rendered via handlebars
        - `/api/burgers/all`
            - GET route for displaying all records as JSON
        - `/api/burgers`
            - POST route for creating new rows
            -  Response data is rendered via handlebars
        - `/api/burgers/:id`
            - PUT route for updating the state of the burger from `devoured = true` to `devoured = false` keying off the id column
            - Response data is rendered via handlebars
    -  Uses Express, Express Router, and pulls in the ORM model to interface with the database data is rendered via handlebars
