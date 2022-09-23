new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: false,

    onLeave: function (origin, destination, direction) {

        activateNavItem($('#icons').find('li').eq(destination.index));

        let tl = new TimelineMax({
            onStart: function () { fullpage_api.setAllowScrolling(false) },
            onComplete: function () { fullpage_api.setAllowScrolling(true) },
        });

        tl.fromTo('.reveal-left' , 0.6, { delay: 0.6, opacity: 0, ease: "expo.out", x: '-100' }, { delay: 0.6, opacity: 1, ease: "expo.out", x: '0'})
        tl.fromTo('.reveal-right', 0.6, { opacity: 0, ease: "expo.out", x: '100' }, { opacity: 1, ease: "expo.out", x: '0' }, '<')
        tl.fromTo('.behance-circle', 0.6, {opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 }, {opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 }, '<')
        tl.fromTo('.desc', .6, {opacity: 0, y: '100', ease: "expo.out" }, {opacity: 1, y: '0', ease: "expo.out" }, '<');
       
        

    },

    // afterLoad: function (origin, destination, direction) {
    //     if (destination.index === 0) {
    //         console.log("page one")
    //     } else if (destination.index === 1) {
    //         console.log("page two")

    //     } else if (destination.index === 2) {
    //         console.log("page three")

    //     } else {
    //         console.log("page four")

    //     }
    // },


    afterRender: function (origin, destination, direction) {
        activateNavItem($('#icons').find('li').eq($('.section.active').index()))
    }


});

$('.navIcon').click(function () {
    var destination = $(this).closest('li');
    fullpage_api.moveTo(destination.index() + 1);
});

function activateNavItem(item) {
    item.addClass('active').siblings().removeClass('active');
}



//PRELOADER
// window.addEventListener('load', ()=>{
//     const loader = document.querySelector('.loader');
//     loader.className += ' hidden';
// })


//PARALLAX EFFECT
// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed');
//         const x = (window.innerWidth - e.pageX * speed)/100
//         const y = (window.innerHeight - e.pageY * speed)/100

        
        
//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

//     })
// }



        const images = {
            projOne: { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
            projTwo: { image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
            projThree: { image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
            projFour: { image: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }
        }

        let page = document.getElementById('fullpage');

        page.children[0].children[0].style.backgroundImage = `url(${images.projOne.image})`
        page.children[1].children[0].style.backgroundImage = `url(${images.projTwo.image})`
        page.children[2].children[0].style.backgroundImage = `url(${images.projThree.image})`
        page.children[3].children[0].style.backgroundImage = `url(${images.projFour.image})`




        // const ui = gsap.timeline({delay:0.5})

        // ui
        gsap.from('nav', .6, {delay:0.3, opacity: 0, y: '-100', ease: "expo.out" })
        gsap.fromTo('.stag', .6, {delay:0.35, opacity: 0, y: '100', ease: "expo.out" }, {delay:0.35, opacity: 1, y: '0', ease: "expo.out" })
        gsap.fromTo('.img-container', 0.6, {delay:0.5, opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 }, {delay:0.55, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 })
        gsap.fromTo('.left', 0.6, { delay:0.7, opacity: 0, ease: "expo.out" ,x:'-100'}, { delay:0.7, opacity: 1, ease: "expo.out", x:'0' })
        gsap.fromTo('.right', 0.6, { delay:0.7, opacity: 0, ease: "expo.out" ,x:'100'}, { delay:0.7, opacity: 1, ease: "expo.out", x:'0' })
        gsap.fromTo('.behance-circle', 0.6, { delay:0.75, opacity: 0, ease: "expo.out" ,scaleX: 0, scaleY: 0}, { delay:0.75, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 })
        gsap.fromTo('.desc', .6, {delay:0.8, opacity: 0, y: '100', ease: "expo.out" }, {delay:0.8, opacity: 1, y: '0', ease: "expo.out" });


        var i = 'OFF'


        let burger =  document.getElementById('burger').addEventListener('click', () => {
            if (i == "OFF") {
                i = "ON";
                document.querySelector('#burger').classList.remove("fa-bars");
                document.querySelector('#burger').classList.add("fa-xmark");
                
                gsap.to('nav', .1, { paddingBottom: '100vh', ease: Expo.easeOut })
                gsap.to('nav', 1, { backdropFilter: 'blur(10px)', ease: Expo.easeOut })
                gsap.to('#burger-box', 1, {delay:.6, display: 'grid', ease: Expo.easeOut })
                gsap.to('.burger-links', 1, { delay: .6, opacity: 0.8, ease: Expo.easeOut, stagger: 0.1 })
            }

            else if (i == "ON") {
                document.querySelector('#burger').classList.remove("fa-xmark");
                document.querySelector('#burger').classList.add("fa-bars");
                i = "OFF";
                gsap.to('.burger-links', .8, {opacity: 0, ease: Expo.easeOut, stagger: 0.1 })
                gsap.to('#burger-box', .5, { display: 'none', ease: Expo.easeOut })
                gsap.to('nav', 1, { backdropFilter: 'blur(0px)', ease: Expo.easeOut })
                gsap.to('nav', .1, { delay: 1, paddingBottom: 'calc(1.35vw + 1.35vh)', ease: Expo.easeOut })

            }
        })



