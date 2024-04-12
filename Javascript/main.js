// start count Of Stats
let stats = document.getElementById("stats");
let number = document.querySelectorAll(".static .box .number");
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 150) {
    if (!start) {
      number.forEach((num) => startCount(num));
    }
    start = true;
  }
});
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// End count Of Stats

// Start Our Skill
let skill = document.querySelector("#our-skills");
let spansWidth = document.querySelectorAll(".our-skills .data span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skill.offsetTop - 50) {
    spansWidth.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
// End Our Skill
