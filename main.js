document.addEventListener("DOMContentLoaded", function() {
    const adminForm = document.getElementById('adminForm');
    const messageDiv = document.getElementById('message');

    adminForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const postTitle = document.getElementById('postTitle').value;
        const movieTitle = document.getElementById('movieTitle').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;

        // Basic validation
        if (!postTitle || !movieTitle || !description || !category) {
            messageDiv.textContent = "All fields are required!";
            messageDiv.style.color = 'red';
            return;
        }

        // Data structure for the new post/movie
        const newPost = {
            postTitle,
            movieTitle,
            description,
            category,
            createdAt: new Date().toISOString()
        };

        // Option 1: Storing data locally (localStorage)
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Option 2: Send data to backend (if applicable)
        /*
        fetch('http://api.yoursite.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */

        // Success message
        messageDiv.textContent = "New post/movie added successfully!";
        messageDiv.style.color = 'green';

        // Clear form fields
        adminForm.reset();
    });
});
