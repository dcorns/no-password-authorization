# no-password-authorization
A service for authorizing users without a password using AWS Lambda and AWS dynamodb.
### Data Structures
#### Main dynamodb tables:
User, 
### Testing
##### Add user to main database:
curl -H "Content-Type: application/jsonon/json" -d '{"add":"user","email":"bob@gmail.com"}' http://localhost:3000/add
##### Remove user from main database:
curl -H "Content-Type: application/jsonon/json" -d '{"remove":"user","email":"bob@gmail.com"}' http://localhost:3000/remove