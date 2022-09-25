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
      tl.from(".view-container", {
        delay: 0.6,
        opacity: 0,
        x: "-100%",
        ease: "expo.out",
      });
      tl.from(".desc", { opacity: 0, x: "-100%", ease: "expo.out" }, "<");
    } else {
      tl.fromTo(
        ".reveal-left",
        0.6,
        { delay: 0.6, opacity: 0, ease: "expo.out", x: "-100" },
        { delay: 0.6, opacity: 1, ease: "expo.out", x: "0" }
      );
      tl.fromTo(
        ".reveal-right",
        0.6,
        { opacity: 0, ease: "expo.out", x: "100" },
        { opacity: 1, ease: "expo.out", x: "0" },
        "<"
      );
      tl.fromTo(
        ".behance-circle",
        0.6,
        { opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 },
        { opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 },
        "<"
      );
      tl.fromTo(
        ".desc",
        0.6,
        { opacity: 0, y: "100", ease: "expo.out" },
        { opacity: 1, y: "0", ease: "expo.out" },
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
  projOne: {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  projTwo: {
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  projThree: {
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  projFour: {
    image:
      "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
};

let page = document.getElementById("fullpage");


if (window.innerHeight > window.innerWidth) {
  page.children[0].children[0].style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)),url(${images.projOne.image};)`;
  page.children[1].children[0].style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)),url(${images.projTwo.image};)`;
  page.children[2].children[0].style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)),url(${images.projThree.image};)`;
  page.children[3].children[0].style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)),url(${images.projFour.image};)`;

  const portraitTimeline = gsap.timeline({ duration: 1 });

  portraitTimeline.from(".img-container", { x: "-100%", ease: "expo.out" });
  portraitTimeline.from(
    ".behance-circle",
    { opacity: 0, x: "-100%", ease: "expo.out" },
    "< .15"
  );
  portraitTimeline.from(
    ".img-logo",
    { opacity: 0, x: "-100%", ease: "expo.out" },
    "<"
  );
  portraitTimeline.from(
    ".desc",
    { opacity: 0, x: "-100%", ease: "expo.out" },
    "<"
  );
  portraitTimeline.from("footer", { x: "100%", ease: "expo.out" }, "<.2");
  portraitTimeline.from(
    ".stag",
    { opacity: 0, x: "100%", ease: "expo.out", stagger: 0.1 },
    "<"
  );
} else {
  page.children[0].children[0].style.backgroundImage = `url(${images.projOne.image};)`;
  page.children[1].children[0].style.backgroundImage = `url(${images.projTwo.image};)`;
  page.children[2].children[0].style.backgroundImage = `url(${images.projThree.image};)`;
  page.children[3].children[0].style.backgroundImage = `url(${images.projFour.image};)`;

  gsap.from("nav", 0.6, {
    delay: 0.3,
    opacity: 0,
    y: "-100",
    ease: "expo.out",
  });
  gsap.fromTo(
    ".stag",
    0.6,
    { delay: 0.35, opacity: 0, y: "100", ease: "expo.out" },
    { delay: 0.35, opacity: 1, y: "0", ease: "expo.out" }
  );
  gsap.fromTo(
    ".img-container",
    0.6,
    { delay: 0.5, opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 },
    { delay: 0.55, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 }
  );
  gsap.fromTo(
    ".left",
    0.6,
    { delay: 0.7, opacity: 0, ease: "expo.out", x: "-100" },
    { delay: 0.7, opacity: 1, ease: "expo.out", x: "0" }
  );
  gsap.fromTo(
    ".right",
    0.6,
    { delay: 0.7, opacity: 0, ease: "expo.out", x: "100" },
    { delay: 0.7, opacity: 1, ease: "expo.out", x: "0" }
  );
  gsap.fromTo(
    ".behance-circle",
    0.6,
    { delay: 0.75, opacity: 0, ease: "expo.out", scaleX: 0, scaleY: 0 },
    { delay: 0.75, opacity: 1, ease: "expo.out", scaleX: 1, scaleY: 1 }
  );
  gsap.fromTo(
    ".desc",
    0.6,
    { delay: 0.8, opacity: 0, y: "100", ease: "expo.out" },
    { delay: 0.8, opacity: 1, y: "0", ease: "expo.out" }
  );
}

// ui
var i = "OFF";

const menu = gsap.timeline({ duration: 1, delay: -1 });

menu.to("#burger-box", {
  display: "grid",
  backdropFilter: "blur(20px)",
  ease: Expo.easeOut,
});
menu.to(".burg-link-box", { display: "grid", ease: Expo.easeOut }, "<");
menu.to(
  ".burger-links",
  { opacity: 0.7, ease: Expo.easeOut, stagger: 0.1 },
  "<.5"
);

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
