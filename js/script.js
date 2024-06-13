//navbar scroll effect//

let lastScrollTop = 1; // Set starting point
let navbar = document.getElementById("navbar"); // Targets navbar
let threshold = 750; // Set threshold for disappearance

if (navbar) { // Check if navbar exists
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY; // Get current Y level value
        
        if (scrollTop > lastScrollTop && scrollTop > threshold) {
            navbar.style.top = "-100px"; // Hide Navbar
        } else {
            navbar.style.top = "0"; // Show Navbar
        }
        lastScrollTop = scrollTop; // Updates values based off new Y levels
    });
}

// Item added to cart alert and counter logic
let bookButton = document.getElementById('bookButton'); // Targets bookButton
let cartCounter = document.querySelector('.circle');
let cartCount = 0;

// Counter on flights page
let counterElements = document.querySelectorAll(".counter"); // Select all elements with the class "counter"

counterElements.forEach(counter => { // forEach iterates over each element with the class "counter"
    let countDisplay = counter.querySelector("#counter-display");
    let increaseButtons = counter.querySelectorAll("#increase"); // Creates variables for the buttons and counter
    let decreaseButtons = counter.querySelectorAll("#decrease");

    let count = 0; // Starting count for each counter

    increaseButtons.forEach(button => {
        button.addEventListener("click", () => { // Listens for when the increase button is pressed
            if (count < 5) { // Sets a max count of 5 per item
                count++; // Increases the count by 1
                cartCount++;
                updateCartCounter(0);
            }
            countDisplay.innerText = count; // Displays the current count in the countDisplay
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener("click", () => { // Listens for when the decrease button is pressed
            if (count > 0) { // Prevents the count being 0
                count--; // Decreases the count if it's above 0
                cartCount--;
                updateCartCounter(0);
            }
            countDisplay.innerText = count; // Displays the current count in the countDisplay
        });
    });
});


function updateCartCounter() {
    if (cartCount > 0) {
        cartCounter.innerText = cartCount;
        cartCounter.style.display = 'inline-block';
    } else {
        cartCounter.style.display = 'none';
    }
}

// Initialize the cart counter display based on initial cart count
updateCartCounter(0);


// Listen for the book button click event
bookButton.addEventListener('click', function() {
  let flightsPageCounter = parseInt(document.getElementById('counter-display').innerText); // Get the current count from the flights page counter
  cartCount += flightsPageCounter; // Add the flights page counter value to the cart count
  cartCounter.innerText = cartCount; // Update the cart counter
  alert('Item Added to Cart!'); // Alert when book button is clicked
});

document.addEventListener("DOMContentLoaded", function() {
  // Get cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Display cart items on the page
  let cartItemsList = document.getElementById("cartItems");
  if (cartItemsList) {
      cartItems.forEach(item => {
          let li = document.createElement("li");
          li.textContent = item.name + " - Quantity: " + item.quantity;
          cartItemsList.appendChild(li);
      });
  } else {
      console.error("Cart items list element not found.");
  }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Show the popup
        alert('Message Sent!'); 
    });

