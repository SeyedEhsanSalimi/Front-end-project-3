var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let show1 = document.getElementById("show1");
let show2 = document.getElementById("show2");
select1.addEventListener("click", function () {
  this.style.backgroundColor = "#2500f9";
  select2.style.backgroundColor = "white";
  show2.style.bottom = "0";
  show1.style.bottom = "-100%";
});
select2.addEventListener("click", function () {
  this.style.backgroundColor = "#2500f9";
  select1.style.backgroundColor = "white";
  show1.style.bottom = "0";
  show2.style.bottom = "-100%";
});

let plus=document.getElementsByClassName('arrow')
let paragraph=document.getElementsByClassName('paragraph')
for(let i=0;i<plus.length;i++){
  plus[i].addEventListener('click',function(){
    if(paragraph[i].style.display==='none' || paragraph[i].style.display===''){
      paragraph[i].style.display='block'
      plus[i].classList.remove('fa-plus')
      plus[i].classList.add('fa-minus')
    }else{
      paragraph[i].style.display='none'
      plus[i].classList.remove('fa-minus')
      plus[i].classList.add('fa-plus')
    }
  })
}