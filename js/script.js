//*disappearing navbar*//



let lastScrollTop = 1; //set starting point
let navbar = document.getElementById("navbar"); //targets navbar
let threshold = 750; //set threshold for disappearance

if (navbar) { // Check if navbar exists
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY //get current Y level value
        
        if (scrollTop > lastScrollTop && scrollTop > threshold) {
            navbar.style.top = "-100px"; // Hide Navbar
        } else {
            navbar.style.top = "0"; // Show Navbar
        }
        lastScrollTop = scrollTop; //updates values based off new Y levels
    });
} 


//*item added to cart alert*//


    const bookButton = document.getElementById('bookButton'); //targets bookButton
    bookButton.addEventListener('click', function() { //listens for a click
        alert('Item Added to Cart!'); //makes the alert pop up when button is clicked
    });



//*counter on flights page*//


let counterElements = document.querySelectorAll(".counter"); //select all elements with the class "counter"

counterElements.forEach(counter => { //forEach iterates over each element with the class "counter"
    let countDisplay = counter.querySelector("#counter-display");
    let increaseButtons = counter.querySelectorAll("#increase"); //creates variables for the buttons and counter
    let decreaseButtons = counter.querySelectorAll("#decrease");

  let count = 1; //starting count for each counter

  increaseButtons.forEach(button => {
    button.addEventListener("click", () => { //listens for when the increase button is pressed
    if (count < 5) { //sets a max count of 5 per item
      count++;} //increases the count by 1
      countDisplay.innerText = count; //displays the current count in the countDisplay
    });
  });

  decreaseButtons.forEach(button => {
    button.addEventListener("click", () => { //listens for when the decrease button is pressed
      if (count > 1) { //prevents the count being 0, as you cant add 0 things to cart
        count--;} //decreases the count if its above 0, and if the button has been pressed
      
      countDisplay.innerText = count; //displays the current count in the countDisplay
    });
  });
});



//*search bar*//





//*cart counter*//



//*sort by*//