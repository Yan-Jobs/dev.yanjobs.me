const text = document.querySelector("#typedText");
const logo = document.querySelector("#logo");
const btn = document.querySelector(".btn");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const btnContent = document.querySelector(".btn-Content");
let opts = {
  strings: ["404 | Page not found"],
  typeSpeed: 20,
  showCursor: false,
};
const typed = new Typed("#typedText", opts);
window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });
  TL.from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" })
    .from(l1, 1.5, { width: 0, ease: "power2.out" })
    .from(l2, 1.5, { width: 0, ease: "power2.out" }, "-=2");
  TL.play();
});
