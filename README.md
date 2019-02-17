![Seahawks Chat](src/assets/SeahawksYakker.JPG)
=================================================

## Seahawks Yakker Chat

### Author: Matt McQuain, et al. 

### Links and Resources
* [CodeSandbox Link](https://codesandbox.io/s/ywxr41l9xz)


### Modules
#### `server.js`
##### Handle socket.io on / emit calls

###### `text`
* We push the values into our history array.
* The incoming method is emmited and sent out w/ the payload.

###### `delete`
* The history method is emmited with an array, then saved to the server. 

###### `history`
* The history array is updated and emiited back w/ our newly updated history. 

### Setup
#### `.env` requirements
* `PORT` - Port Number (localhost:3000)
* `MONGODB_URI` - URL to the running mongo instance/db

### Bugs
* Importing the finished code directly to Codesandbox did not yeild the styling I wanted. Currently working on that. 

#### UML
Link to an image of the UML for your application and response to events