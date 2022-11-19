var navMenu = document.getElementById("openMenu");
var openMenuIcon = document.getElementById("menu");

function openMenu(){
    navMenu.style.right = "0px";
    openMenuIcon.className = "fa-sharp fa-solid fa-xmark"
    openMenuIcon.setAttribute('onclick','closeMenu()');

}

function closeMenu(){
    navMenu.style.right = "20000px";
    openMenuIcon.className = "fa-solid fa-bars"
    openMenuIcon.setAttribute('onclick','openMenu()');
}