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

##### Dev Notes:
Only for me while in development:<br/>
Start DB: ```dynamo```<br/>
Start lambda: ```sam local start-api```<br/>
Use the aws cli to access the dynamoDB directly during development
```$bash
aws dynamodb create-table --table-name Users --attribute-definitions AttributeName=ID,AttributeType=S --key-schema AttributeName=ID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --endpoint-url http://localhost:8000
aws dynamodb list-tables --endpoint-url http://localhost:8000
aws dynamodb describe-table --table-name Users --endpoint-url http://localhost:8000
aws dynamodb scan --table-name Users --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name Users --endpoint-url http://localhost:8000
```
[https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html#Tools.CLI.UsingWithDDBLocal]
[https://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html]
