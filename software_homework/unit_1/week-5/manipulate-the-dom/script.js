let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  
  document.getElementById("main-title").textContent = "DOM Toretto"

  // Part 2

  document.querySelector("body").style.backgroundColor = "green" 

  // Part 3
  
  const domList = document.getElementById("favorite-things")
  domList.removeChild(domList.children[5]) ;
 

  // Part 4
  const specialTitles = document.querySelectorAll(".special-title") ; 
  specialTitles.forEach((element) => element.style.fontSize = "2rem")


  // Part 5

  const pastRaces = document.getElementById("past-races");
  pastRaces.removeChild(pastRaces.children[3]) ; 


  // Part 6
const newPastRace = document.createElement("li") ; 
newPastRace.textContent = "Khartoum" ; 
pastRaces.appendChild(newPastRace) ; 

  // Part 7

  const parentBlog = document.querySelector(".main")

  const newBlog = document.createElement("div")
  newBlog.classList.add("blog-post") 
  newBlog.classList.add("purple") 
  
  const heading = document.createElement("h2")
  heading.textContent = "Khartoum"

  const blogPost = document.createElement("p")
  blogPost.textContent = "I visited my beautiful family"

  parentBlog.appendChild(newBlog) 
  newBlog.appendChild(heading) ; 
  newBlog.appendChild(blogPost)
  

  // Part 8
  


  document.querySelector("#quote-title").addEventListener("click", randomQuote)

  randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

  // Part 9 
  const blogPostsTotal = document.querySelectorAll(".blog-post");


  blogPostsTotal.forEach(function(blog) {
    // Mouseout handler to toggle the class .purple
    blog.addEventListener("mouseout", function() {
      blog.classList.toggle("purple");
    });

    // Mouseenter handler to toggle the class .red
    blog.addEventListener("mouseenter", function() {
      blog.classList.toggle("red");
    });
  });

});


//I have some issues with Part 9. The event handler isn't working as intended. 
