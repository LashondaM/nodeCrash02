// // route sandbox
// app.post('/add-blog', (req, res) => {
//     // new Blog takes the blog model and saves a new collection item to a variable in this case blog
//     const blog = new Blog({
//         title: 'Jamie eats dirt',
//         snippet: "It's true!",
//         body: "and his tooth is broken, what a loser"
//     })

//     blog.save()
// .then((result) => {
//     res.send(result)
// })
// .catch((err) => {
//     console.log(err)
// })

// })
// // use the .save method on blog
// // .save is an asynchonous function

// // return all records in blogs collection
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })

// // return a single record from a blog collection
// app.get('/single-blog', (req, res) =>{
//     Blog.findById('5f3c1f1dfcddf336c8e59019')
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })


