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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const btnScroll = document.getElementById('btn');


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
for(let section of sections){
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    let liId = 'li_' + section.id;
    let hrefAnchor = `#${section.id}`;
    let idAnchor = 'id_' + section.id;
    
    newLi.setAttribute('class', 'menu__link');
    newLi.setAttribute('data-link', section.id);
    newLi.setAttribute('id', liId);
    
    newA.setAttribute('href', hrefAnchor);
    newA.setAttribute('id', idAnchor);
    newA.innerHTML = section.id;

    newLi.appendChild(newA);
    navList.appendChild(newLi);
    
    // Add class 'active' to section when near top of viewport
    section.addEventListener('mouseover', function() {
    section.classList.add('your-active-class');
    newLi.classList.add('active');
    
    });
    section.addEventListener('mouseout', function() {
    section.classList.remove('your-active-class');
    newLi.classList.remove('active');
    });
    
    
    
    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    let anchor =  document.getElementById(idAnchor);
    anchor.addEventListener('click', e => {
        e.preventDefault();
        smoothScrollElem = document.getElementById(section.id);
        smoothScrollElem.scrollIntoView({behavior : 'smooth', block: "start"});
        
       
           
    });
}

   
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 

// Set sections as active.scroll(function () {

//Button Scroll To Top
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 300) {
            btnScroll.style.display = 'block';
        } else {
            btnScroll.style.display = 'none';
        }    
});

btnScroll.addEventListener('click', function() {
     window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
});
