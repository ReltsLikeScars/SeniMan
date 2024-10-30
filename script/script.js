//============= lenis smooth scrolling ======================
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/*======================= SHOW MENU ======================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-menu-icon"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*================ REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =================== SLIDER HOME PAGE ===================
const scrollers = document.querySelectorAll(".home_scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".home_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const infiniteItem = item.cloneNode(true);
      infiniteItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(infiniteItem);
    });
  });
}
// ===================== CONTACT =========================
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ====================== FILTERBAR ===========================
const filterMenu = document.getElementById("filter-menu"),
  filterToggle = document.getElementById("filter-menu-icon"),
  filterClose = document.getElementById("filter-close");

if (filterToggle) {
  filterToggle.addEventListener("click", () => {
    filterMenu.classList.add("show-menu");
  });
}

if (filterClose) {
  filterClose.addEventListener("click", () => {
    filterMenu.classList.remove("show-menu");
  });
}

//================ REMOVE FILTERBAR ====================
const filterLink = document.querySelectorAll(".filter_link");

const filterAction = () => {
  const navMenu = document.getElementById("filter-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", filterAction));

// ============================ FILTER =========================
const filterTitle = document.querySelectorAll(".filter_item");
const allCategory = document.querySelectorAll(".semuanya");

for (let i = 0; i < filterTitle.length; i++) {
  filterTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, filterTitle[i])
  );
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategory.length; i++) {
    if (allCategory[i].classList.contains(item.attribute.id.value)) {
      allCategory[i].style.display = "block";
    } else {
      allCategory[i].style.display = "none";
    }
  }
}

function changeActivePosition(activeItem) {
  for (let i = 0; i < filterTitle.length; i++) {
    filterTitle[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}

/*==================== BLEK MODE ==========================*/
const themeButton = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
