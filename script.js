
const users = [
    { username: 'alice', password: 'password123' },
    { username: 'bob', password: 'letmein' },
];

const blogPosts = [
    {
        title: 'My First Blog Post',
        content: 'Welcome to my cute and girly blog!',
        author: 'alice',
        date: '2023-10-02',
        comments: [],
    },
    {
        title: 'Another Girly Post',
        content: 'This is another cute post on my blog.',
        author: 'bob',
        date: '2023-10-03',
        comments: [],
    },

];


function authenticateUser(username, password) {
    return users.some((user) => user.username === username && user.password === password);
}


function displayBlogPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';

    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; // Clear previous comments

    blogPosts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>By ${post.author} on ${post.date}</p>
            <p>${post.content}</p>
            <button onclick="viewPost(${index})">View Post</button>
        `;
        postsList.appendChild(postItem);

        // Append comments to the comments container
        if (post.comments.length > 0) {
            const commentsHeader = document.createElement('h4');
            commentsHeader.textContent = 'Comments:';
            commentsContainer.appendChild(commentsHeader);

            post.comments.forEach((comment) => {
                const commentItem = document.createElement('div');
                commentItem.innerHTML = `
                    <p><strong>${comment.author}</strong> (${comment.date}): ${comment.text}</p>
                `;
                commentsContainer.appendChild(commentItem);
            });
        }
    });
}



function handleRegistration() {
    const newUsername = document.getElementById('signup-username').value;
    const newPassword = document.getElementById('signup-password').value;

    alert(`Account created for ${newUsername}! You can now log in.`);
    

    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';


    showSection('login');
}

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegistration();
});

x
