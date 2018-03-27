# scraping (GizHeadlines)

# What Is It?
A web application that utilizes cheerio to scrape articles from Gizmodo.com.  Users can then choose articles they would like to save and then add notes to saved articles.

# How Do I Use It?

### Using Heroku
The application is hosted on Heroku and can be accessed by clicking on the following link [GizHeadlines](https://gizheadlines.herokuapp.com/)

### On Your Local Machine
Execute the following steps to setup and run the application on your local machine.

1. Clone this repository to your machine and then run ```npm install```.
2. Ensure you have installed MongoDB.  The name of the database will be ```gizheadlines```
3. Run ```node server``` or ```nodemon server``` from the ```scraping``` directory.
4. Point your browser to ```http://localhost:3000```

# Under The Hood
The application uses MongoDB to store the scraped headlines, saved headlines as well as notes associated with headlines.  Node.js is used for the backend, Express is used as the application server, Handlebars as the web template system and Mongoose as the ORM. Below is a list of all Node packages used:

* [express](https://www.npmjs.com/package/express)
* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cheerio](https://www.npmjs.com/package/cheerio)
* [request](https://www.npmjs.com/package/request)
