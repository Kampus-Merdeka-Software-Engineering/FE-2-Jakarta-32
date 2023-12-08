const nav = document.getElementById("navbar");
const box = nav.getElementsByClassName("box");

console.log(nav);

// navbar source code
function toggleNav() {
	box[0].classList.toggle("active");
}
