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

window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
})
