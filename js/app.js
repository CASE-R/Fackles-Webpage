const navSlide = () => {
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    navMenu.addEventListener('click',()=>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .2}s`;
            }
            console.log(index / 7);
            // Above automatically gives delay to each link in navMenu, and automates additional links
        });
        // navMenu Icon Animation
        navMenu.classList.toggle('toggle');
    });
}

// Groups defined function(s) from above
const app = () => {
    navSlide();
}
// Calls grouped function
app();
