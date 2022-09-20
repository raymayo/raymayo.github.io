new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: false,

    onLeave: function (origin, destination, direction) {
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

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX * speed) / 100
//         const y = (window.innerWidth - e.pageY * speed) / 100

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }