document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let homeImg = document.getElementById('nav-logo-img')
    let menu = document.getElementById('hamburger-menu');
    let dotContainer = document.getElementsByClassName('dot-container')
    let menuItems = document.querySelectorAll('.menu-option');

    let projectTl = gsap.timeline();
    let menuTl = gsap.timeline({ paused: true });
    var toggle = true;

    let mm = gsap.matchMedia();

    // nevigation when clicked on logo image
    homeImg.addEventListener('click', () =>{
        window.location.href = '/';
    })


// Animation for menu toggle (reversed start and end states)
menuTl.fromTo(
    ".hamburger-menu-contianer",
    { 
        opacity: 0, 
        display: "none", 
        y: 50 
    }, 
    { 
        opacity: 1, 
        display: "block", 
        y: 0, 
        duration: 0.2 
    }
  );
  
  menuTl.fromTo(
    ".menu-option-container",
    { 
        rotation: 8 
    },
    { 
        rotation: 0, 
        duration: 0.2 
    },"-=.2"
  );
  
  menuTl.fromTo(
    ".resume-option",
    { 
        y: 20, 
        rotation: -8 },
    { 
        y: 0, 
        rotation: 0, 
        duration: 0.2 
    },"-=.2"
  );

    // Toggling menu on click
    menu.addEventListener('click', () => {
        toggle = !toggle;
        if (toggle ?  menuTl.reverse() : menuTl.play());
        if (toggle ? gsap.to(dotContainer, {rotation: 0, duration : 0.3}) : gsap.to(dotContainer, {rotation: 90, duration : 0.3}));
    })

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            toggle = !toggle;
            menuTl.reverse();
            if (toggle ? gsap.to(dotContainer, {rotation: 0, duration : 0.3}) : gsap.to(dotContainer, {rotation: 90, duration : 0.3}));
        });
    });


    mm.add("(min-width: 769px)", () => {
    projectTl.to('.project-details-one', {

        scrollTrigger: {
            trigger: '.project-details-one',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=800', // end after scrolling 500px beyond the start
            // markers : true,
        }
    });

    projectTl.to('.project-deatails-two', {

        scrollTrigger: {
            trigger: '.project-deatails-two',
            pin: true, // pin the trigger element while active
            start: '0% 0%', // when the top of the trigger hits the top of the viewport
            end: '+=600', // end after scrolling 500px beyond the start
            // markers : true,
        }
    });
})

mm.add("(max-width: 768px)", () => {
    projectTl.to('.project-details-one', {

        scrollTrigger: {
            trigger: '.project-details-one',
            pin: false, 
        }
    });

    projectTl.to('.project-deatails-two', {

        scrollTrigger: {
            trigger: '.project-deatails-two',
            pin: false, 

        }
    });
})




});