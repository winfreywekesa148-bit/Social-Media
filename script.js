// function to display posts (render posts)
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');

        const title = document.createElement('h1');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        postList.appendChild(li);
    });
}

//fetch
async function post() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayPosts(data);
    } catch(error) {
        console.error('Error fetching posts:', error);
    };
    
}

console.log(post());
