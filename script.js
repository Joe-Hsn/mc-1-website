const toTop = document.querySelector("#totop");

// AOS
// AOS.init({
//   duration: 800,
//   easing: "ease-in-out",
//   once: true,
// });
// to top button
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
