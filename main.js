let menuBtn = document.getElementById("menubtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px"

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
}

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});