const menuBurger = document.querySelector("#header__burger");
const menu = document.querySelector(".header__menu");
const items = document.querySelectorAll(".click");

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    menu.classList.toggle("menu-active");
});

for (let index = 0; index < items.length; index++) {
    const el = items[index];
    
    el.addEventListener("click", () =>{
        menuBurger.classList.remove("active");
        menu.classList.remove("menu-active");
    });
}