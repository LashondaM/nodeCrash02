const express = require('express');
const {Server} = require('http');
const { nextTick } = require('process');
const morgan = require('morgan')
const mongoose = require('mongoose')
const blog = require('./models/blog');
const Blog = require('./models/blog');

const app = express();


app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))


const dbURI = 'mongodb+srv://Lmiller007:OreoCookies11@nodecrash02.zgsnt.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect takes 2 arguments. 
// 1) is the database UR1
// 2 is our settings object
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true} )
.then((result) =>{
  console.log('connected to db');
  app.listen(3000);
})
.catch((err) => {
  console.log(err)
})

// route sandbox
app.post('/add-blog', (req, res) => {
    // new Blog takes the blog model and saves a new collection item to a variable in this case blog
    const blog = new Blog({
        title: 'Jamie eats dirt',
        snippet: "It's true!",
        body: "and his tooth is broken, what a loser"
    })

    blog.save()
.then((result) => {
    res.send(result)
})
.catch((err) => {
    console.log(err)
})

})
// use the .save method on blog
// .save is an asynchonous function

// return all records in blogs collection
app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err)
    })
})
// app.post takes two arguments
// first: url
// second: the callback function to fire


// return a single record from a blog collection
app.get('/single-blog', (req, res) =>{
    Blog.findById('5f3c1f1dfcddf336c8e59019')
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err)
    })
})


app.use(express.static('public'))
app.use(morgan('dev'))


// examples of middleware below
// app.use((req,res,next) => {
//   console.log('new request made')
//   console.log('host: ', req.hostname)
//   console.log('path:', req.path)
//   console.log('method: ', req.method)
//   // next allows us to run another method after app.use
//   next();
// })
// app.use((req,res,next) =>{
//   console.log('new request made')
//   console.log('second bit of middleware')
//   next();
// })


app.get('/', (req, res) =>{
res.redirect('/blogs') })



// res.sendFile('/views/index.html', {root: __dirname});
    // res.render('index',{title: 'Peach', blogs: blogs})
    // res.render takes an argument of a string that is the file to render.
    // ejs automatically knows to look in your view folder
    // re.render takes a second optional argument that is an object
    // that objects property value pairs are passed to the ejs file as variables and their values

app.get('/about', (req, res) =>{
    // res.sendFile('/views/about.html', {root: __dirname})
    // res.send('<p>about page</p>');
    res.render('about', {title:"About"})
    // res.render takes an argument of a string that is the file to render.
    // ejs automatically knows to look in your view folder
});
app.get("/blogs", (req,res) => {
    Blog.find()
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    })
})


app.post('/blogs', (req, res) => {
    console.log(req.body)
    const blog = new Blog(
        req.body
    )
    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
})


app.get("/blogs/create", (req,res) => {
    res.render('create', {title: 'Create'})
  })

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })
app.use((req,res) => {
    // res.status(404).sendFile('/views/404.html', {root: __dirname})
    res.status(404).render("404", {title: "404"})
});