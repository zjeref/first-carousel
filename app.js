const tracks = document.querySelectorAll(".carousel-track");
const track_1 = tracks[0];
const track_2 = tracks[1];

const next_button = document.querySelector(".button-2");
const previous_button = document.querySelector(".button-1");

const track_1_childs = Array.from(track_1.children);
const track_2_childs = Array.from(track_2.children);

const slideWidth = track_1_childs[0].getBoundingClientRect().width;


// arranging slides of carousel to left
track_1_childs[0].style.left = slideWidth * 0 + "px";
track_1_childs[1].style.left = slideWidth * 1 + "px";

track_2_childs[0].style.left = slideWidth * 0 + "px";
track_2_childs[1].style.left = slideWidth * 1 + "px";

next_button.addEventListener("click", () => {
    changeSlide(track_1);
    changeSlide(track_2);
})

function changeSlide(trackname) {
    const currentSlide = trackname.querySelector('.carousel-active');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    nextSlide.style.transform= 'translateX(-' +amountToMove +')';
    currentSlide.classList.remove('carousel-active');
    nextSlide.classList.add('carousel-active');
}

previous_button.addEventListener("click", () => {
    backSlide(track_1);
    backSlide(track_2);
})

function backSlide(trackname) {
    const currentSlide = trackname.querySelector('.carousel-active');
    const previousSlide = currentSlide.previousElementSibling;
    const amountToMove = previousSlide.style.left;
    previousSlide.style.transform= 'translateX(+' +amountToMove +')';
    currentSlide.classList.remove('carousel-active');
    previousSlide.classList.add('carousel-active');
}