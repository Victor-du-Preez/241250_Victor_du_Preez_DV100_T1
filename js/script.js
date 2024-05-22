//disappearing navbar
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

//search bar



//cart counter



//sort by