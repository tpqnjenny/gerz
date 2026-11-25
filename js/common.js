const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

primaryNav.addEventListener("click", (event) => {
  const submenuToggle = event.target.closest(".submenu-toggle");
  if (submenuToggle) {
    const navItem = submenuToggle.closest(".nav-item");
    const isExpanded = submenuToggle.getAttribute("aria-expanded") === "true";

    primaryNav.querySelectorAll(".submenu-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.closest(".nav-item").classList.remove("is-open");
    });

    submenuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navItem.classList.toggle("is-open", !isExpanded);
    return;
  }

  if (event.target.closest(".submenu a")) {
    primaryNav.querySelectorAll(".submenu-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.closest(".nav-item").classList.remove("is-open");
    });
  }
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.querySelector(".sr-only").textContent = isExpanded ? "메뉴 열기" : "메뉴 닫기";
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "메뉴 열기";
    primaryNav.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
