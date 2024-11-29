
AOS.init({
    duration: 1000,
    once: false,
    offset: 300,
})

const url = "https://public-api.wordpress.com/wp/v2/sites/bo1atit07.wordpress.com/posts";
const blogSection = document.querySelector(".blogposts")

axios.get(url)
.then((response) =>{
    postData = response.data;
    console.log('postData0:', postData[0])
    postData.forEach(post => {
        console.log('post:', post)
        if (post == postData[0]) {
            
            // const imageUrl = post["jetpack_featured_media_url"];
            const featuredElement = document.querySelector('.featured')
            featuredElement.innerHTML = `
             <div class="text-overlay">
                <i><h5>Featured</h5><i>
                <h2 class="post-title">${post.title.rendered}</h2>
                <p class="post-summary">${post.excerpt.rendered}</p>
            </div>
            <span class="read-more">
                    <a href='post.html?id=${post.id}' title='Read More About This Post'>
                    <i class="fas fa-arrow-right"></i>
                    </a>
            </span>`
        }
        const imageUrl = post["jetpack_featured_media_url"]
        
        const postElement = document.createElement('div');
        postElement.classList.add('blog')

        postElement.setAttribute('data-aos', 'fade-up')

        postElement.innerHTML = `
        <div class="image">
                <img src='${imageUrl}'>
                <span class="read-more-button">
                    <a href="post.html?id=${post.id}">></a>
                </span>
            </div>
            <div class="text-overlay">
                    <h2 class="post-title">${post.title.rendered}</h2>
                    <p class="post-summary">${post.excerpt.rendered}</p>
                    <h5>${new Date(post.date).toDateString()}</h5>
                    
                    
            </div>`

            blogSection.appendChild(postElement)
            AOS.refresh()
    });
})
.catch((error) => {
    if (error.response) {
        responseError = error.response.status;
    }
})
