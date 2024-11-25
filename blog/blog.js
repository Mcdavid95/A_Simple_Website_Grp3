// import axios from 'axios';

const url = "https://public-api.wordpress.com/wp/v2/sites/bo1atit07.wordpress.com/posts";
const blogSection = document.querySelector(".blogposts")

axios.get(url)
.then((response) =>{
    postData = response.data;
    postData.forEach(post => {
        console.log('Data:', post)
        const imageUrl = post["jetpack_featured_media_url"]
        console.log('imageUrl:', imageUrl)
        const postElement = document.createElement('div');
        postElement.classList.add('blog')

        postElement.innerHTML = `
        <div class="image">
                <img src='${imageUrl}'>
                <span class="read-more-button">
                    <a href="post1.html">Read More</a>
                </span>
            </div>
            <div class="text-overlay">
                    <h2 class="post-title">${post.title.rendered}</h2>
                    <p class="post-summary">${post.excerpt.rendered}</p>
                    <h5>${post.date}</h5>
                    
                    
            </div>`

            blogSection.appendChild(postElement)

    });
})
.catch((error) => {
    if (error.response) {
        responseError = error.response.status;
    }
})
