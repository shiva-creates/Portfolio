document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let homeImg = document.getElementById('nav-logo-img')
    let menu = document.getElementById('hamburger-menu');
    let dotContainer = document.getElementsByClassName('dot-container')
    let menuItems = document.querySelectorAll('.menu-option');

    let aboutHeroTl = gsap.timeline();
    let aboutRealmeTl = gsap.timeline();
    let menuTl = gsap.timeline();
    let mm = gsap.matchMedia();
    var toggle = true;

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
    aboutHeroTl.to('.about-hero-img', {
        scale: '0.6',
        // y:'200',
        scrollTrigger: {
            trigger: '.about-hero-img',
            start: 'top top',
            end: '+=800', 
            scrub: 1,
            // markers : true,
            pin: true, 
        }
    });

    aboutHeroTl.to('.about-me-para-container', {
        y:'-180',
        // y:'200',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top top', 
            end: '+=800', 
            scrub: 1, 
            // markers : true,
        }
    });
});

mm.add("(max-width: 768px)", () => {
    aboutHeroTl.to('.about-hero-img', {
    });

    aboutHeroTl.to('.about-me-para-container', {
    });
});




aboutHeroTl.to('.about-real-me-container',  {
    backgroundColor : '#121212',
    color : 'white',
    scrollTrigger: {
        trigger: '.about-real-me-container',
        start: '10% 50%', 
        end: '+=150', 
        scrub: 1, 
        // markers : true,
    }
})

aboutHeroTl.to('.outline-text-real-me',  {
    textShadow: '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
    color: '#121212',
    scrollTrigger: {
        trigger: '.about-real-me-container',
        start: '10% 50%', 
        end: '+=150', 
        scrub: 1, 
        // markers : true,
    }
})

new Splide('#splide', {
    type: 'loop',
    perPage: 1,
    focus: 'center',
    autoplay: true,
    interval: 5000,
    pagination: false,
    padding: '10%',
    breakpoints: {
    }
  }).mount();

})