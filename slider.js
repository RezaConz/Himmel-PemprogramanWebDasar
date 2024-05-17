document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  var slides = document.querySelector(".carousel");
  var dotsContainer = document.getElementById("dotContainer");

  // Create dots for each slide
  for (var i = 0; i < slides.children.length/2; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    dotsContainer.appendChild(dot);
  }

  var dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    // Update slide position
    slides.style.transform = "translateX(-" + index * 50 + "%)";

    // Update active dot
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
  }

  // Show initial slide
  showSlide(slideIndex);

  // Automatic slide transition
  setInterval(function () {
    slideIndex = ((slideIndex + 1) % slides.children.length) ;
    showSlide(slideIndex);
  }, 2000);
});
