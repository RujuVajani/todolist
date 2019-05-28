# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
> - For XSS vulnerability e.g. If we add <script>alert('hacked');</script> in text box it will give alert message with existing code but I have updated with escape function to escape special characters while adding Item to list (it can be unescaped before any further operations e.g. sending email  ) 
> - I have added Edit feature with pencil symbol
> - After updating item Click on Update button to update in list
> - I have added test cases for Add, update and delete item in test_coverage shell script ( Also created excel file with different scenarios)
> - For executing test cases run locally 'node app' and execute  ./test_coverage.sh (can even add unit test cases)
> - To setup and install kubernetes I have added 2 files for OCX and unix ( install_osx.sh and install_unix.sh)
> - To start with minikube run ./run_minikube.sh -> It will start minikube , create deployment service and curl for output
