const Blog = require("../moduls/blog");

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((resultValue) => {
            // console.log(resultValue)
            res.render('blogs/index', { title: "blogs", blogs: resultValue })
        })
}
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}
const blog_details = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) =>
            res.render('blogs/blog', { title: 'MyBlog', blog: result })
        )
        .catch((err) => console.log(err))
}
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => console.log("error => ", err))
}
const blog_delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: "/blogs" }))
        .catch((err) => console.log(err))
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_details,
    blog_create_post,
    blog_delete
}