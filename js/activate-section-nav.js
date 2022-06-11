const body = document.getElementsByTagName("body")[0];
const heroSection = document.getElementsByClassName("hero-section")[0];
const projectSection = document.getElementsByClassName("proj-section")[0];
const contactNav = document.getElementById("contact-nav");
const about = document.getElementById("about-nav");
const projectNav = document.getElementById("projects-nav");
console.log("top is", window.scrollY);
window.scrollTo({ top: 4, behavior: "smooth" });
let ref;

const setActiveNav = () => {
  let dim = projectSection.getBoundingClientRect();
  console.log("top is", window.scrollY, projectSection.getBoundingClientRect());
  if (dim.top < 100 && dim.bottom > dim.height / 2) {
    projectNav.classList.add("active-nav");
  } else {
    projectNav.classList.remove("active-nav");
  }
  if (dim.bottom <= dim.height / 2) {
    contactNav.classList.add("active-nav");
  } else {
    contactNav.classList.remove("active-nav");
  }
};
document.body.onscroll = (e) => {
  setActiveNav();
  // console.log("client bounding topis", projectSection.getBoundingClientRect());
};
// document.body.onscroll = (e) => {
//   if (ref) return;
//   ref = setTimeout(() => {
//     console.log("Throttle event...");
//     // console.log("HTML height is", document.getElementsByTagName("body")[0].clientHeight);
//     // console.log("Body is scrolling! Scroll TOp is", window.scrollY);
//     // console.log("e.target is...:", e.target);
//     // console.log("Bwindow.innerHeights", innerHeight);
//     setActiveNav();
//     ref = null;
//   }, 2000);
// };
