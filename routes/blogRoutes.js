const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');


router.get("/", blogController.blog_index);


router.get("/create", blogController.blog_create_get);


  router.post('/', blogController.blog_create_post);


  // serve unique post
router.get('/:id', blogController.blog_details);

// delete blog posts
router.delete('/:id', blogController.blog_delete);

  module.exports = router;