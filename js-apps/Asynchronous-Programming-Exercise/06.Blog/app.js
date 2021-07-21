function attachEvents() {
    let loadPostButton = document.getElementById('btnLoadPosts');
    loadPostButton.addEventListener('click', getPosts)
    let viewPostButton = document.getElementById('btnViewPost');
    viewPostButton.addEventListener('click', displayPost)
}

attachEvents();

async function getPosts(){
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url);
    const data = await res.json();
    const selectPost = document.getElementById('posts');

    Object.values(data).map(option).forEach(o => selectPost.appendChild(o));

}

function option(post){
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;
    return result;
}

function displayPost(){
    const postId = document.getElementById('posts').value;
    getComments(postId);
}

async function getComments(postId){
    const commentsUlEl = document.getElementById('post-comments'); 
    commentsUlEl.innerHTML = '';
    
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const [postRes, commentRes] = await Promise.all([
        fetch(postsUrl),
        fetch(commentsUrl)
    ]);
    

    const postData = await postRes.json();
    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;



    const commentData = await commentRes.json();
    const comments = Object.values(commentData).filter(comment => comment.postId == postId);
    comments.map(displayComments).forEach(comment => commentsUlEl.appendChild(comment));
    
}
function displayComments(comments){
    let result = document.createElement('li');
    result.textContent = comments.text;
    result.value = comments.id;
    return result;
}
    