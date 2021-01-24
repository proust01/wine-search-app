# wine-search-app (BackEnd Server)

This app is React / Node.js wine search application.


`Clone or Download Frontend App : `\
[wine-search-app-frontend](https://github.com/proust01/wine-search-app-frontend)

-- Stack Used : 

      ### Frontend : React, Redux (Actions, Reducers, Store)
      ### Backend : Node.js, Express, MongoDB, MVC design pattern
      
## Front App and Backend Server

### `Node.js and Express with MVC design pattern`
For first task, it started with using Node.js and Express libraries. <br>
Basically, It's using a MVC design pattern. From the repositories, you will see Model, View(Frontend), Controller(routers).<br>
(For easy implementation for app, frontend is separated from Entire code.)
It has one model(productModel) and 2 routers (breakdown, product). They all designed to deliver expected output from requested API.
<br>(Ex. /api/breakdown/year/{lotCode} )\


### `Edit Page with MongoDB`
On top of Task Requirements, I added Edit Page for Edit current Wind data.\
By clicking Edit Icon on top of Wine Info Page, you can open editing page for current wine data.\
All current wine data is already fetched in input box so you can only change the data you need. However, due to time line for task, it only uploads first component for the wine. Rest is remained to be fixed later on.\
`CAUTION : YOU MUST INSTALL MONGODB AND SEED DATA TO MONGODB FIRST! (See below for more info)`\

### `Redux State Management`
For frontend task, it started with using React.js and Redux library for State Management. <br>
Basically, It used a Actions / Reducers / Screens / Components design pattern. For Redux, it has a store.js for storing all states.<br>
`For more info for frontend : `\
[wine-search-app-frontend](https://github.com/proust01/wine-search-app-frontend)

# Getting Started with Wine Search App (Backend)

### `Clone or Download Repository`

### `npm install`

### `nodemon server.js`

Runs the app in the development mode.\
Open [http://localhost:5000/products](http://localhost:5000/products) to fetch the products data in the browser.\
It'll fetch all the wine data.


### `test with APIs`

[http://localhost:5000/breakdown/year-variety/{lotCode}](http://localhost:5000/breakdown/year-variety/{lotCode})
Fetches all Components Key : Value Data from server.


### `MongoDB Prep : Comment out & Uncomment from VS Code for MongoDB`

Server is currently fetching a data from data.js so in order to use MongoDB, we need to comment out some code.\
`routers/productRouter.js` : Line 12 (comment out), Line 13 (back for MongoDB Command)\
`routers/breakdownRouter.js` : Line 11, 40, 68, 96 (comment out), Line 13, 41, 69, 97 (back for MongoDB Command)

### `Seed Data to MongoDB`

Before Editing page, You must be installed with MongoDB. [MongoDB Community Edition Download]\
Once installed, you can seed the data with this api.\
[http://localhost:5000/products/seed](http://localhost:5000/products/seed)\
This will store data to MongoDB.\

### `Run nodemon server.js`

Now it's ready for MongoDB and Editing Page. Try API and Check if it stores data properly.

## Learn More

You can test MongoDB with FrontEnd Web application.\

`Clone or Download Frontend App : `\
[https://github.com/proust01/wine-search-app-frontend](https://github.com/proust01/wine-search-app-frontend)


