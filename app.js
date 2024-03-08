document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".parap span");

  spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
  });
  setTimeout(() => {
    spans.forEach((span, index) => {
      span.classList.add("typing-animation");
    });
  }, 100);
});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
