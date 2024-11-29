AOS.init({
    duration: 2000, // Animation duration in ms
    once: false, // Whether animation should happen only once while scrolling down
  });


      function toggleMenu() {
    var menuIcon = document.getElementById("menu-icon");
    var menu = document.getElementsByClassName("menu")[0];

    if (menu.style.display === "none") {
      menu.style.display = "block";
      menuIcon.src = "../Frankistar/Assets/Close.svg";
    } else {
      menu.style.display = "none";
      menuIcon.src = "../Frankistar/Assets/hambuger.svg";
    }
  }

  const url = "https://public-api.wordpress.com/wp/v2/sites/bo1atit07.wordpress.com/posts";
  
  axios.get(url)
  .then((response) =>{
      postData = response.data;
      console.log('postData0:', postData[0])
      postData.forEach(post => {
          console.log('post:', post)
          if (post == postData[0]) {
              
              // const imageUrl = post["jetpack_featured_media_url"];
              const featuredElement = document.querySelector('.blog .featured')
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
              AOS.refresh()
      });
  })
  .catch((error) => {
      if (error.response) {
          responseError = error.response.status;
      }
  })
  