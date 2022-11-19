var navMenu = document.getElementById("openMenu");
var openMenuIcon = document.getElementById("menu");
var openAdatvedelemText = document.getElementById("adat")


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

function openAdatvedelem(){
    openAdatvedelemText.style.display = "block";
}

function closeAdatvedelem(){
    openAdatvedelemText.style.display = "none";
}

