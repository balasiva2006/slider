let slides = document.querySelectorAll(".image");
let next= document.querySelector("button.next");
let prev = document.querySelector("button.prev");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

next.addEventListener('click',()=>
{
    current=(current+1)%slides.length;
    showSlide(current);
}
);
prev.addEventListener('click',()=>
{
    current=(current-1+slides.length)%slides.length;
    showSlide(current);
}
);
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);