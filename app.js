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

document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox and menu elements
  var checkbox = document.querySelector('#menuToggle input[type="checkbox"]');
  var menu = document.getElementById("menu");

  // Add change event listener to the checkbox
  checkbox.addEventListener("change", function () {
    // Toggle the display of the menu based on checkbox state
    if (this.checked) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});
