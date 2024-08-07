const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} );

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        })
        faq.classList.toggle("active");
    })
})


Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.4,
  });

Shery.makeMagnet(".nav-part1 a, nav .social i" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });  

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

const lenis = new Lenis({
    duration: 2
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// const lenis = new Lenis({
//     duration: 1.2
//  });
//  function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//  }
  
//   requestAnimationFrame(raf)


// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// });


// const cursor = new MouseFollower({
//     el: null,
//     container: document.body,
//     className: 'mf-cursor',
//     innerClassName: 'mf-cursor-inner',
//     textClassName: 'mf-cursor-text',
//     mediaClassName: 'mf-cursor-media',
//     mediaBoxClassName: 'mf-cursor-media-box',
//     iconSvgClassName: 'mf-svgsprite',
//     iconSvgNamePrefix: '-',
//     iconSvgSrc: '',
//     dataAttr: 'cursor',
//     hiddenState: '-hidden',
//     textState: '-text',
//     iconState: '-icon',
//     activeState: '-active',
//     mediaState: '-media',
//     stateDetection: {
//         '-pointer': 'a,button',
//         '-hidden': 'iframe'
//     },
//     visible: true,
//     visibleOnState: false,
//     speed: 0.55,
//     ease: 'expo.out',
//     overwrite: true,
//     skewing: 2,
//     skewingText: 2,
//     skewingIcon: 2,
//     skewingMedia: 2,
//     skewingDelta: 0.001,
//     skewingDeltaMax: 0.15,
//     stickDelta: 0.15,
//     showTimeout: 20,
//     hideOnLeave: true,
//     hideTimeout: 300,
//     hideMediaTimeout: 300
// });



