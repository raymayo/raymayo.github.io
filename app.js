let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: false,

  onLeave: function (origin, destination, direction) {
    activateNavItem($("#icons").find("li").eq(destination.index));

    const section = destination.item; // the incoming section
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "expo.out" },
      onStart: () => fullpage_api.setAllowScrolling(false),
      onComplete: () => fullpage_api.setAllowScrolling(true),
    });

    if (window.innerHeight > window.innerWidth) {
      tl.from(section.querySelector(".view-container"), {
        opacity: 0,
        scale: 0,
        duration: 1,
      });
    } else {
      tl.from(section.querySelectorAll(".reveal-lefty"), { opacity: 0, x: -100 }, 0.6)
        .from(section.querySelectorAll(".reveal-righty"), { opacity: 0, x: 100 }, "<")
        .from(section.querySelector(".behance-circle"), { opacity: 0, scale: 0 }, "<")
        .from(section.querySelector(".desc"), { opacity: 0, y: 100 }, "<");
    }
  },


  afterRender: function () {
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
window.addEventListener('load', () => {
  gsap.to(".loader", 1, { opacity: 0, scale: 0, ease: Expo.easeInOut });

  // Capture mouse position before animation starts
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Fallback if no mousemove has occurred yet
  document.addEventListener("mousemove", e => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }, { once: true }); // Only run once initially

  if (window.innerHeight > window.innerWidth) {
    const portraitTimeline = gsap.timeline({ duration: 1 });

    portraitTimeline.from(".img-container", { opacity: 0, scale: 0, ease: Expo.easeOut });
    portraitTimeline.from("nav", { opacity: 0, y: -100, ease: Expo.easeOut }, '<');
    portraitTimeline.from("footer", { y: 100, ease: Expo.easeOut }, "<");
  } else {
    // Apply initial parallax offset based on mouse position
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - mouseX * speed) / 100;
      const y = (window.innerHeight - mouseY * speed) / 100;
      layer.style.translate = `${x}px ${y}px`;
    });

    // Parallax on move
    document.addEventListener("mousemove", function parallax(e) {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.translate = `${x}px ${y}px`;
      });
    });

    // Staggered animations
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "Expo.easeOut" } });

    tl.from("nav", { opacity: 0, y: -100 }, 0.3)
      .from(".stag", { opacity: 0, y: 100 }, 0.35)
      .from(".img-container", { opacity: 0, scaleX: 0, scaleY: 0 }, 0.55)
      .from(".left", { opacity: 0, x: -100 }, 0.7)
      .from(".right", { opacity: 0, x: 100 }, 0.7)
      .from(".behance-circle", { opacity: 0, scaleX: 0, scaleY: 0 }, 0.75)
      .from(".desc", { opacity: 0, y: 100 }, 0.8);

  }
});










// ui
var i = "OFF";

const menu = gsap.timeline();

menu.to("#burger-box", { display: "grid", backdropFilter: "blur(20px)", ease: Expo.easeOut, });
menu.to(".burg-link-box", { display: "grid", ease: Expo.easeOut }, "<");
menu.from(".burger-links", { opacity: 0, y: 50, ease: Expo.easeOut, stagger: 0.1 }, "<");

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
contactAnimation.from('#contactForm', { opacity: 0, scale: 0, ease: Expo.easeOut }, '<.1.5');
contactAnimation.pause(0);


contactBtn.addEventListener('click', () => {
  contactAnimation.play();
})

closeContact.addEventListener('click', () => {
  contactAnimation.reverse(0);
})

formBtn.addEventListener('mouseover', () => {
  gsap.to('#formBtn', .8, { backgroundColor: 'rgba(0,0,0,1)', border: 'solid 2px #212121', color: '#f4f4f4', ease: Expo.easeOut })
})

formBtn.addEventListener('mouseout', () => {
  gsap.to('#formBtn', .8, { backgroundColor: 'rgba(0,0,0,.0)', border: 'solid 2px #212121', color: '#000000', ease: Expo.easeOut })
});

const date = new Date();

let year = date.getFullYear();

console.log(year)

let copyrightYear = document.querySelector('#copyright-year');

copyrightYear.textContent = `© ${year} Novu Atelier`

console.log(copyrightYear.textContent);

