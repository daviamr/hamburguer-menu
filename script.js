const menuH = document.getElementById("menu");
const navMenu = document.getElementById("navMenuItems");
const menuAparecer = document.getElementById("navMenuItems");

function aparecerMenu() {
  function sumirMenu() {
    if (menuAparecer.style.display == "block") {
      menuAparecer.style.display = "none";
    }
  }
  if (menuAparecer.style.display == "none") {
    menuAparecer.style.display = "block";
    navMenu.classList.add("animationMenuBottom");
    navMenu.classList.remove("animationMenuTop");
  } else {
    navMenu.classList.remove("animationMenuBottom");
    navMenu.classList.add("animationMenuTop");
    setTimeout(sumirMenu, 500);
  }
}

menuH.addEventListener("click", aparecerMenu);
