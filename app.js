document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let menu = document.getElementById('hamburger-menu');
    let dotContainer = document.getElementsByClassName('dot-container')
    let menuItems = document.querySelectorAll('.menu-option');
    let homeImg = document.getElementById('nav-logo-img')
    let menuTl = gsap.timeline();
    var toggle = true;


    // nevigation when clicked on logo image
    homeImg.addEventListener('click', () =>{
        window.location.href = '#';
})

    let logoTimeline = gsap.timeline();
    let mm = gsap.matchMedia();


    mm.add("(min-width: 481px)", () => {
    // Making logo image appear once scrolled 
    logoTimeline.fromTo('.nav-logo-img', { 
        opacity: 0,
        display: 'none',
    }, 
    { 
        opacity: 1, 
        display : 'inline',
        scrollTrigger: {
            trigger: '.hero-contianer',
            scrub: 1,
              start: "60% 50%",
              end: "70% 50%",
            //   markers: true,
          }
    });

    });
    mm.add("(max-width: 480px)", () => {
        logoTimeline.fromTo('.nav-logo-img', { 
            opacity: 0,
            display: 'none',
        }, 
        { 
            opacity: 1, 
            display : 'inline',
            scrollTrigger: {
                trigger: '.hero-contianer',
                scrub: 1,
                  start: "80% 50%",
                  end: "80% 50%",
                //   markers: true,
              }
        });

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

   });