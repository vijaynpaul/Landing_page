/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


const navBarBuilder = document.querySelector('#navbar__list');
const sectionNames = document.querySelectorAll('section');

function NavBar() {

    for (i = 0; i < sectionNames.length; i++) {
        const id = sectionNames[i].id;
        const dataNav = sectionNames[i].dataset.nav;

        const litag = document.createElement('li');

        litag.innerHTML = `<a class = "menu__link" href = "#${id}"> ${dataNav}</a>`;
        navBarBuilder.appendChild(litag);
    }

}
NavBar();
// console.log(NavBar);




// Add class 'active' to section when near top of viewport
// for (let section of sectionNames) {



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
// console.log(sectionNames[0]);

const li = document.querySelectorAll("li");


function checkActiveState() {
    let len = sectionNames.length;

    for (i = 0; i < len; i++) {
        let position = sectionNames[i].getBoundingClientRect();

        if (position.top <= 150 && position.bottom >= 150) {
            li[i].classList.add("your-active-class");
        } else {
            li[i].classList.remove("your-active-class");
        }
    };
    // console.log(li);
};
checkActiveState();

window.addEventListener('scroll', checkActiveState);





// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList =
    document.querySelectorAll(anchorSelector);

// Iterate through each of the links
anchorList.forEach(link => {
    link.onclick = function(e) {

        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();

        // Get the destination to scroll to
        // using the hash property
        let destination =
            document.querySelector(this.hash);

        // Scroll to the destination using
        // scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});