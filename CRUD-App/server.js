const express = require('express');

const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

// READ - Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// READ - Get a single post
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
});

// CREATE - Add a new post
app.post('/api/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// UPDATE - Update a post
app.put('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

// DELETE - Delete a post
app.delete('/api/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Post not found' });
    posts.splice(index, 1);
    res.json({ message: 'Post deleted successfully' });
});

app.listen(8000, () => console.log('Server running on port 8000'));