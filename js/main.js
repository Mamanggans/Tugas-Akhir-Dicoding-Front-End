const menutri = document.querySelector(".main-menu input");
const navigasi = document.querySelector(".main-menu ul");

menutri.addEventListener("click", function(){
    navigasi.classList.toggle("slide")
});

const myslide = document.querySelectorAll('.comic-slide'),
	  dot = document.querySelectorAll('.angka-bot');
let counter = 1;
comic(counter);

let timer = setInterval(autocom, 5000);
function currentSlide(n) {
	counter = n;
	comic(counter);
	resetTimer();
}
function autocom() {
	counter += 1;
	comic(counter);
}
function currentSlide(n) {
	counter = n;
	comic(counter);
	resetTimer();
}
function plusSlides(n) {
	counter += n;
	comic(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autocom, 5000);
}

function comic(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}