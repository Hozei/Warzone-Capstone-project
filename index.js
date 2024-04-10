import express from "express";

// app.js
const app = express();
const port = 3000;


// Middleware to serve static files (stylesheets, images, etc.)
app.use(express.static("public"));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/about', (req, res) => {
    res.render("about.ejs");
});

app.get('/contact', (req, res) => {
    res.render("contact.ejs");
});

// app.js continued...
// Sample route for displaying a single blog post
app.get('/posts/:id', (req, res) => {
    // Logic to fetch and render a single blog post
    const postId = req.params.id;
    // Fetch blog post with postId from database or other source
    const blogPost = {
        title: 'Sample Blog Post',
        content: 'This is a sample blog post content.'
    };
    res.render('post', { post: blogPost });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
