const nav = document.getElementById("navbar");
const box = nav.getElementsByClassName("box");

console.log(nav);
console.log(navToggle[0]);

// navbar source code
function toggleNav() {
	box[0].classList.toggle("active");
}
