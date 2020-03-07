# fullstack-rev-mongo

This app is a cold-caller app, with three functionalities: add student, random student, display all students

1. Complete writing the seed function found in your seed.js file located in your root directory. 
   You may want to check what is being required such that you understand what is happening in your database.
   Run your seed function.

2. Ensure that your back end is completely set-up. Check your db folder and your server folder.

3. Start up your server and using Postman, see if your requests are able to reach your database and return expected data.

4. Start writing out your front end code.
   List - GET all students' names and images to render
        - store students in an array in state of App component
        - [implement feature last] clicking on a student's name conditionally renders text input box that allows name change via PUT
   Random - get one random student from the list (MVP - get from state)
          - use the student list in App component's state to retrieve one student's information
   Add - add a student to list with a POST method with the student name and image url (imgurl)
       - implement onChange event listeners to the input fields, store to state, and query onSubmit
   