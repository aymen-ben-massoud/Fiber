let btn = document.getElementById("scrol");

let move2 = document.getElementById("move2");
let move = document.getElementById("move");
window.onload = function () {
  move.style.transform = "translateX(0)";
  move2.style.transform = "translateX(0)";
  btn.style.display = "none";
};
{
  window.onscroll = function () {
    if (window.scrollY >= 300) {
      btn.style.display = "block";
      btn.style.transition = "all 2s ease";
    } else {
      btn.style.display = "none";
    }
  };
  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
const one = document.getElementById("sec1");
const addd = () => {
  if (document.documentElement.scrollTop >= 700) {
    one.classList.toggle("opacitybefor");
    one.classList.add("opacityafter");
    one.style.transition = "all 2s ease";
  }
};

window.addEventListener("scroll", addd);

const two = document.getElementById("eas");
const addd2 = () => {
  if (document.documentElement.scrollTop >= 1100) {
    two.classList.toggle("changingbefor");
    two.classList.add("changingafter");
    two.style.transition = "all 2s ease";
  }
};

window.addEventListener("scroll", addd2);

{
  let fixednav = document.getElementById("fixednav");
  let navi = function () {
    if (window.scrollY >= 300) {
      fixednav.classList.add("changenav");
      fixednav.style.transition = "all 2s ease";
    }
    if (window.scrollY <= 300) {
      fixednav.classList.remove("changenav");
    }
  };
  window.addEventListener("scroll", navi);
}
