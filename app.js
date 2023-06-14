let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: false,

  onLeave: function (origin, destination, direction) {
    activateNavItem($("#icons").find("li").eq(destination.index));

    let tl = new TimelineMax({
      onStart: function () {
        fullpage_api.setAllowScrolling(false);
      },
      onComplete: function () {
        fullpage_api.setAllowScrolling(true);
      },
    });

    if (window.innerHeight > window.innerWidth) {
      tl.from(".view-container", {delay: 1,opacity: 0,scale: 0, ease: Expo.easeOut,});
      // tl.from(".desc", { opacity: 0, x: "-100%", ease: Expo.easeOut }, "<");
    } else {
      tl.fromTo(
        ".reveal-left",
        0.6,
        { delay: 0.6, opacity: 0, ease: Expo.easeOut, x: "-100" },
        { delay: 0.6, opacity: 1, ease: Expo.easeOut, x: "0" }
      );
      tl.fromTo(
        ".reveal-right",
        0.6,
        { opacity: 0, ease: Expo.easeOut, x: "100" },
        { opacity: 1, ease: Expo.easeOut, x: "0" },
        "<"
      );
      tl.fromTo(
        ".behance-circle",
        0.6,
        { opacity: 0, ease: Expo.easeOut, scaleX: 0, scaleY: 0 },
        { opacity: 1, ease: Expo.easeOut, scaleX: 1, scaleY: 1 },
        "<"
      );
      tl.fromTo(
        ".desc",
        0.6,
        { opacity: 0, y: "100", ease: Expo.easeOut },
        { opacity: 1, y: "0", ease: Expo.easeOut },
        "<"
      );
    }
  },

  afterRender: function (origin, destination, direction) {
    activateNavItem($("#icons").find("li").eq($(".section.active").index()));
  },
});

$(".navIcon").click(function () {
  var destination = $(this).closest("li");
  fullpage_api.moveTo(destination.index() + 1);
});

function activateNavItem(item) {
  item.addClass("active").siblings().removeClass("active");
}

//PRELOADER
window.addEventListener('load', ()=>{
    // const loader = document.querySelector('.loader');
    gsap.to(".loader", 1, {opacity:0, scale:0, ease: Expo.easeInOut})

  if (window.innerHeight > window.innerWidth) {

    const portraitTimeline = gsap.timeline({ duration: 1 });

    portraitTimeline.from(".img-container", { opacity: 0, scale: 0, ease: Expo.easeOut });
    portraitTimeline.from("nav", { opacity: 0, y: -100, ease: Expo.easeOut }, '<');
    portraitTimeline.from("footer", { y: 100, ease: Expo.easeOut }, "<");
  } else {

    //PARALLAX EFFECT
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {

        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.translate = `${x}px ${y}px`;

      })
    }
    gsap.from("nav", 0.6, { delay: 0.3, opacity: 0, y: "-100", ease: Expo.easeOut, });
    gsap.fromTo(".stag", 0.6, { delay: 0.35, opacity: 0, y: "100", ease: Expo.easeOut }, { delay: 0.35, opacity: 1, y: "0", ease: Expo.easeOut });
    gsap.fromTo(".img-container", 0.6, { delay: 0.5, opacity: 0, ease: Expo.easeOut, scaleX: 0, scaleY: 0 }, { delay: 0.55, opacity: 1, ease: Expo.easeOut, scaleX: 1, scaleY: 1 });
    gsap.fromTo(".left", 0.6, { delay: 0.7, opacity: 0, ease: Expo.easeOut, x: "-100" }, { delay: 0.7, opacity: 1, ease: Expo.easeOut, x: "0" });
    gsap.fromTo(".right", 0.6, { delay: 0.7, opacity: 0, ease: Expo.easeOut, x: "100" }, { delay: 0.7, opacity: 1, ease: Expo.easeOut, x: "0" });
    gsap.fromTo(".behance-circle", 0.6, { delay: 0.75, opacity: 0, ease: Expo.easeOut, scaleX: 0, scaleY: 0 }, { delay: 0.75, opacity: 1, ease: Expo.easeOut, scaleX: 1, scaleY: 1 });
    gsap.fromTo(".desc", 0.6, { delay: 0.8, opacity: 0, y: "100", ease: Expo.easeOut }, { delay: 0.8, opacity: 1, y: "0", ease: Expo.easeOut });
  }

})




// ui
var i = "OFF";

const menu = gsap.timeline();

menu.to("#burger-box", {display: "grid",backdropFilter: "blur(20px)",ease: Expo.easeOut,});
menu.to(".burg-link-box", { display: "grid", ease: Expo.easeOut }, "<");
menu.from(".burger-links",{ opacity: 0, y:50, ease: Expo.easeOut, stagger: 0.1 },"<");

menu.pause(0);

let burger = document.getElementById("burger").addEventListener("click", () => {
  if (i == "OFF") {
    i = "ON";
    menu.play();

    document.querySelector("#burger").classList.remove("fa-bars");
    document.querySelector("#burger").classList.add("fa-xmark");
  } else if (i == "ON") {
    document.querySelector("#burger").classList.remove("fa-xmark");
    document.querySelector("#burger").classList.add("fa-bars");
    i = "OFF";
    // menu.timeScale(1.3);
    menu.reverse(0);
  }
});




let contactBtn = document.getElementById('contactBtn');
let closeContact = document.getElementById('closeContact');
let formBtn = document.getElementById('formBtn');

contactAnimation = gsap.timeline();
contactAnimation.to('#contactBg', { display: 'grid', backdropFilter: 'blur(15px)', backgroundColor: 'rgba(0, 0, 0, 0.3)', ease: Expo.easeOut });
contactAnimation.from('#contactForm', { opacity: 0, scale:0, ease: Expo.easeOut },'<.1.5');
contactAnimation.pause(0);


contactBtn.addEventListener('click', ()=> {
  contactAnimation.play();
})

closeContact.addEventListener('click', ()=> {
  contactAnimation.reverse(0);
})

formBtn.addEventListener('mouseover', ()=> {
  gsap.to('#formBtn', .8, { backgroundColor: 'rgba(0,0,0,1)', border: 'solid 2px #212121', color: '#f4f4f4', ease: Expo.easeOut})
})

formBtn.addEventListener('mouseout', () => {
  gsap.to('#formBtn', .8, { backgroundColor: 'rgba(0,0,0,.0)', border: 'solid 2px #212121', color: '#000000', ease: Expo.easeOut })
});

const date = new Date();

let year = date.getFullYear();

console.log(year)

let copyrightYear = document.querySelector('#copyright-year');

copyrightYear.textContent = `©${year} Novu Atelier`

console.log(copyrightYear.textContent);

