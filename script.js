gsap.registerPlugin(ScrollTrigger);
let tl1 = gsap.timeline()

gsap.to(".section-bg",120,{
    scrollTrigger: {
      trigger: ".animation-section",
      toggleActions: "restart none none none",
      scrub: true,
      pin: true,
    
    },
    xPercent:-75,
    ease: "expo",
    delay:20,

    });
   let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation-section",
      toggleActions: "restart none none none",
      start: 'center center',
      scrub: true,
        pin: true,
        
    }
  
  });

    tl.to(".left-content",50,{
        // scrollTrigger: {
        //   trigger: ".animation-section",
        //   toggleActions: "restart none none none",
        //   scrub: true,
        //   pin: true,
        
        // },
        delay:20,
        yPercent:0,
        immediateRender: false,
        ease:"curve",
        
  stagger:20,

        
    
        });
        gsap.from(".left-content",{
           delay:10,
            yPercent:2000,
            stagger:20,

        
            });

            tl1.to(".moniter-area",{
                scrollTrigger: {
                  trigger: ".animation-section",
                  toggleActions: "restart none none none",
                  scrub: true,
                  pin: true,
                
                },
                scale:1.2,
                ease: "expo",
                delay:100,
                duration:120
                
            
                },25);
            

                tl1.to(".laptop",{
                    scrollTrigger: {
                      trigger: ".animation-section",
                      toggleActions: "restart none none none",
                      scrub: true,
                      pin: true,
                      start:"center center",
                      duration:50

                    
                    },
                    ease: "expo",
                    yPercent:0,
                    // delay:50,
                    autoAlpha:1,
                    immediateRender: false,
                    yoyo:true,
                    repeat:1,
                    duration:50,
                    repeatDelay: 1

                    
                
                    }
                    );
                    gsap.set(".laptop",{
                      yPercent:1000,
                      autoAlpha:0,



                    });
                    
                
                


                    gsap.to(".progress-container",50,{
                        scrollTrigger: {
                          trigger: ".animation-section",
                          toggleActions: "restart none none none",
                          scrub: true,
                          pin: true,
                        
                        },
                        ease: "expo",
                        delay:50,
                        xPercent:100,
                        opacity:1,
                        width:"100%"
                        
                    
                        }
                        
                        );
    
                        gsap.from(".progress-container", {
                            xPercent: 0,
                            opacity: 0,
                            ease: "expo",
                            width:0
                        });
                        // gsap.set(".progress-bar", {
                        //     xPercent: 0,
                           
                        // });