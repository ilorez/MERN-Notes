const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController")

// blogs root
router.get('/', blogController.blog_index)
router.get('/create', blogController.blog_create_get);
// one single blog
router.get('/:id', blogController.blog_details)
//post sdata to db
router.post('/', blogController.blog_create_post)
// delete request
router.delete("/:id", blogController.blog_delete)

module.exports = router;