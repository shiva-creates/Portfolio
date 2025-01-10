document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let homeImg = document.getElementById('nav-logo-img')
    let menu = document.getElementById('hamburger-menu');
    let dotContainer = document.getElementsByClassName('dot-container')
    let menuItems = document.querySelectorAll('.menu-option');

    let projectTl = gsap.timeline();
    let menuTl = gsap.timeline();
    var toggle = true;

    let mm = gsap.matchMedia();

    // nevigation when clicked on logo image
    homeImg.addEventListener('click', () =>{
        window.location.href = '/';
    })


    // Animation for menu toogle animation with ratoation and y axis movements
    menuTl.fromTo(".hamburger-menu-contianer", 
        { opacity: 1,
            display:'block',
        y: 0  
         }, 
        { opacity: 0,
            display: 'none',
            y: 50,
        duration: 0.2,
    });

    menuTl.fromTo(".menu-option-container", 
        { 
            rotation: 0  
         }, 
        { 
            rotation: 8,
    }, "-=.2");

    menuTl.fromTo(".resume-option", 
        { 
            y: 0,
            rotation: 0  
         }, 
        {
            y: 20,
            rotation: -8
    }, "-=.2");

    // Toggling menu on click
    menu.addEventListener('click', () => {
        toggle = !toggle;
        if (toggle ? menuTl.play() : menuTl.reverse());
        if (toggle ? gsap.to(dotContainer, {rotation: 0, duration : 0.3}) : gsap.to(dotContainer, {rotation: 90, duration : 0.3}));
    })

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            console.log(menuItem);
            menuTl.reverse();
            gsap.to(dotContainer, { rotation: 90, duration: 0.3 });
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