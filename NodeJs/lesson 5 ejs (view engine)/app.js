const express = require('express');
const app = express()
app.set('view engine', 'ejs');

app.listen(3000)
app.get('/', (req, res) => {
    const blogs = [
        {
            title: "Getting Started with Node.js",
            snippet: "Learn the basics of Node.js and how to set up your first server."
        },
        {
            title: "Responsive Web Design Techniques",
            snippet: "Explore techniques for creating responsive and mobile-friendly web designs."
        },
        {
            title: "Introduction to JavaScript Promises",
            snippet: "Learn about JavaScript promises and how to handle asynchronous operations."
        },
        {
            title: "Building RESTful APIs with Express.js",
            snippet: "Create RESTful APIs using Express.js and Node.js for your web applications."
        },
        {
            title: "Securing Your Web Applications",
            snippet: "Discover best practices for securing your web applications from common vulnerabilities."
        }
    ];

    // You can now use this 'blogs' array in your Node.js application to display blog data.

    res.render('page', { title: "Home", blogs: blogs })

})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
app.get('/create/blog', (req, res) => {
    res.render('create', { title: "Create a blog" })
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})






