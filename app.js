new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: false,

    onLeave: function (origin, destination, direction) {
        gsap.timeline({ delay: 0.5 }).fromTo('.reveal', 0.5, { opacity: 0 }, { opacity: 1 })

        activateNavItem($('#icons').find('li').eq(destination.index));
    },


    afterRender: function () {
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
document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100

        
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

    })
}



        const images = {
            projOne: { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
            projTwo: { image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" }
        }

        let page = document.getElementById('fullpage');

        page.children[0].children[0].style.backgroundImage = `url(${images.projOne.image})`
        page.children[1].children[0].style.backgroundImage = `url(${images.projTwo.image})`




        // const ui = gsap.timeline({delay:0.5})

        // ui
        gsap.from('nav', .6, {delay:0.3, opacity: 0, y: '-100', ease: "expo.out" })
        gsap.fromTo('.stag', .6, {delay:0.35, opacity: 0, y: '100', ease: "expo.out" }, {delay:0.35, opacity: 1, y: '0', ease: "expo.out" })
        gsap.fromTo('.img-container', 0.6, {delay:0.5, opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 }, {delay:0.55, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 })
        gsap.fromTo('.left', 0.6, { delay:0.7, opacity: 0, ease: "expo.out" ,x:'-100'}, { delay:0.7, opacity: 1, ease: "expo.out", x:'0' })
        gsap.fromTo('.right', 0.6, { delay:0.7, opacity: 0, ease: "expo.out" ,x:'100'}, { delay:0.7, opacity: 1, ease: "expo.out", x:'0' })
        gsap.fromTo('.behance-circle', 0.6, { delay:0.75, opacity: 0, ease: "expo.out" ,scaleX: 0, scaleY: 0}, { delay:0.75, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 })
        gsap.fromTo('.desc', .6, {delay:0.9, opacity: 0, y: '100', ease: "expo.out" }, {delay:0.9, opacity: 1, y: '0', ease: "expo.out" });


    



