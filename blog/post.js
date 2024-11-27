
AOS.init({
    duration: 1000,
    once: false,
})
const urlParam = new URLSearchParams(window.location.search)
const postId = urlParam.get('id')
console.log('postId:', postId)
const url = `https://public-api.wordpress.com/wp/v2/sites/bo1atit07.wordpress.com/posts/${postId}`;

if (postId) {
    axios.get(url)
.then((response) => {
    const postData = response.data;

        const postSection = document.querySelector('.post p')
        postSection.innerHTML = `
        <h1>${postData.title.rendered}</h1>
        <p>${postData.content.rendered}</p>`
    
})
.catch((error) => {
    console.log('Error Fetching Post', error)
})
}
else {
    document.body.innerHTML = `
    <h1>Error: Post Not Found...</h1>`
}

