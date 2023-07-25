
# Social Network API

## Description
The Social Network Web Application is a server-based platform that allows users to connect, share thoughts, and interact with each other. It is built using a social network API and utilizes MongoDB as the underlying database managed through Mongoose models. The application provides a set of API endpoints that enable users to perform various actions like creating, updating, and deleting users, thoughts, reactions to thoughts, and managing friends on a user's friend list.
<br>
<br>
**Key Features:**

- **Server Startup & Database Sync:** When the application is started, it starts the server and ensures synchronization of Mongoose models with the MongoDB database.
<br>

- **GET Routes for Users & Thoughts:** The application supports API GET routes that allow users to retrieve data related to users and thoughts. When accessed via tools like Insomnia, the data is displayed in formatted JSON, making it easy for users to consume and understand.
<br>

- **CRUD Operations on Users & Thoughts:** The application supports API endpoints for POST, PUT, and DELETE operations on users and thoughts. Users can create new users and thoughts, update existing ones, and delete unwanted entries from the database.
<br>

- **Reactions to Thoughts:** Users can also interact with thoughts by adding reactions to them. The application supports API endpoints for creating and deleting reactions, allowing users to express their feelings or opinions about specific thoughts.
<br>

- **Manage Friends List:** Users can build their social circle by adding or removing friends. The application provides API endpoints for adding and removing friends from a user's friend list, enhancing the social experience and connectivity.
<br>

Overall, the Social Network Web Application is designed to offer a seamless and interactive platform for users to connect, share thoughts, and engage with others in a meaningful way. By providing a comprehensive set of API endpoints, it enables users to perform a wide range of actions, making the social networking experience enjoyable and enriching.

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [License](#license)
- [Contributors](#contributors)
- [Contact](#contact)


## Installation
You will need to install the following packages for this application:
<br>
1. [Express.js](https://www.npmjs.com/package/express) `npm i express`
2. [Mongoose](https://www.npmjs.com/package/mongoose) `npm i mongoose`

Once you've installed the necessary packages, you can run **nodemon** for ease of use while working within the server. This will automatically restart your server should you make changes:
1. [Nodemon](https://www.npmjs.com/package/nodemon) `npm i nodemon`
	- This will automatically reload your server when you make changes.

## API Endpoints

**Users & Friends**
- GET all users: api/users
- GET single user: api/users/:userID
- POST new user: api/users
- PUT user update: api/users/:userID
- DELETE user: api/users/:userID
	- NOTE: This will also remove the associated thoughts posted by the user.
- POST new friend: api/users/:userID/friends/:friendID
- DELETE friend: api/users/:userID/friends/:friendID 

**Thoughts & Reactions**
- GET all thoughts: api/thoughts
- GET single thought: api/thoughts/:thoughtID
- POST new thought: api/thoughts
- PUT user update: api/thoughts/:thoughtsID
- DELETE thought: api/thoughts/:thoughtID
- POST reaction: api/:thoughtID/reactions
- DELETE reaction: api/:thoughtID/reactions/:reactionID
## Usage
Before using this application, you need to make sure that you install the necessary packages.
<br>
- Install packages:
    - Express.js > `npm i express`
    - Mongoose > `npm i mongoose`

- devDependencies:
	- Nodemon > `npm i nodemon`
	- This will get your server up and running.

## Demonstration
[Social-Network-API-Demo.webm](https://github.com/HarrisSte/Social-Network-API/assets/126029841/63e5d5f6-94d3-40bc-9ec0-ed51d3e3b13c)
 

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributors
A multitude of sources were referenced during the development of this application. These sources included accessing articles provided through the bootcamp itself; these were primarily supplied via Lisa. A great deal of information and guidance came through reading documentation for MongoDB and Mongoose. Additional articles I read through were sourced by Medium, StackOverflow, and W3Schools. Additional support was provided in office hours for bug fixes; as well as garnering the assistance from my classmates and colleagues.


## Contact
[GitHub](https://github.com/HarrisSte)
<br>
[LinkedIn](https://www.linkedin.com/in/stephanie-harris-5069aa224/)
<br>
[Email](mailto:st3phanie.harris@gmail.com)
