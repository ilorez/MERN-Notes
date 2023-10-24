const express = require('express');
const Blog = require("../moduls/blog");

const router = express.Router();

// blogs root
router.get('/', (req, res) => {

    Blog.find().sort({ createdAt: -1 })
        .then((resultValue) => {
            // console.log(resultValue)
            res.render('index', { title: "blogs", blogs: resultValue })
        })
})
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// one single blog
router.get('/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) =>
            res.render('blog', { title: 'MyBlog', blog: result })
        )
        .catch((err) => console.log(err))
})

//post sdata to db
router.post('/', (req, res) => {
    // console.log("---------------------------------------------")
    // console.log(req)
    // console.log(req.body)
    // console.log("---------------------------------------------")
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => console.log("error => ", err))
})
// delete request
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: "/blogs" }))
        .catch((err) => console.log(err))
})

module.exports = router;