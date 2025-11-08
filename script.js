// script.js
const sections = document.querySelectorAll("section");

const reveal = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

document.querySelectorAll('.work-tile video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});
