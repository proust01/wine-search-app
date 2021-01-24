# wine-search-app

This app is React / Node.js wine search application.


`Clon or Download Frontend App : `\
[wine-search-app-frontend](https://github.com/proust01/wine-search-app-frontend)

-- Stack Used : 

      Frontend : React, Redux
      Backend : Node.js, Express, MongoDB, MVC design pattern
      
## Backend Server

For first task, it started with using Node.js and Express libraries. <br>
Basically, It's used a MVC design pattern. from the repositories, you will see Model, View(Frontend), Controller(routers).<br>
It has one model(productModel) and 2 routers (breakdown, product). They all designed to deliver expected output from requested API.
<br>(Ex. /api/breakdown/year/{lotCode} )\
Most importantly, I made a Edit page and hooked up with MongoDB. You can check it when you click Edit Icon from Product Info Page.\
`CAUTION : YOU MUST INSTALL MONGODB AND SEED DATA TO MONGODB FIRST! (See below for more info)`\


# Getting Started with Wine Search App (Backend)

### `Clon or Download Repository`

### `npm install`

### `nodemon server.js`

Runs the app in the development mode.\
Open [http://localhost:5000/products](http://localhost:5000/products) to view it in the browser.\
It'll fetch all the wine data.


### `test with APIs`

[http://localhost:5000/breakdown/year-variety/{lotCode}](http://localhost:5000/breakdown/year-variety/{lotCode})


### `Comment out Codes & Back from VS Code for MongoDB`

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

`Clon or Download Frontend App : `\
[https://github.com/proust01/wine-search-app-frontend](https://github.com/proust01/wine-search-app-frontend)


