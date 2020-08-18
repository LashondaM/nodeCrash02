const express = require('express');
const { Server } = require('http');

// we start an express app by envoking it into a constant/variable
const app = express();

// setting the view engine
app.set("view engine", "ejs")


// listen for requests
app.listen(3000);


app.get('/' ,(req, res)=>{


    res.render('index', {title: 'home'})
   
})

app.get('/about', (req, res) =>{
    // res.sendFile("./views/about.html", {root: __dirname} )
    res.render('about', {title: 'About'})
})


// app.get('/about-us', (req, res) => {
//     res.redirect('./about')
// })


app.get("/blogs/create", (req, res) => {
    res.render('create', {title: 'Create'})
})

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname} )
    res.status(404).render("404", {title: '404'})
})
