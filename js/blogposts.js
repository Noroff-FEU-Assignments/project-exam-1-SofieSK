const url = "http://myschoolprojectworld.no/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts");

async function getPosts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch (error) {
        console.log(error);
    }
}

getPosts();

function createHTML(posts) {
    posts.forEach(function (posts) {
        console.log(posts);
        postsContainer.innerHTML +=
            `<a href="blogposts.html${post.id}" >
        <h2>${post.title}</h2>
        <img src="${post.images[0].src}" alt="${post.title}">
        <a/>`;
    })
}