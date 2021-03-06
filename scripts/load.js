const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const medias = document.querySelectorAll(".bubble");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const btnDiscord = document.querySelector("#btnDiscord");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    titreSpans,
    0.3,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(l1, 1.5, { width: 0, ease: "power2.out" }, "-=2")
    .from(l2, 1.5, { width: 0, ease: "power2.out" }, "-=2")
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.3, "-=1");

  TL.play().then((play) => {
    let opts = {
      strings: ["is a Js dev...", "is a discord bot dev..."],
      typeSpeed: 20,
      showCursor: false,
    };
    const typed = new Typed("#typedText", opts);
  });
});

btnDiscord.addEventListener("click", () => {
  alert("The Discord is not yet ready... Sorry.");
});
