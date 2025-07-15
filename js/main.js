/*swiper*/
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

/*swiper*/

/*cost*/

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

/*cost*/

/*plus mines paragraph*/

let plus = document.getElementsByClassName("arrow");
let paragraph = document.getElementsByClassName("paragraph");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    if (
      paragraph[i].style.display === "none" ||
      paragraph[i].style.display === ""
    ) {
      paragraph[i].style.display = "block";
      plus[i].classList.remove("fa-plus");
      plus[i].classList.add("fa-minus");
    } else {
      paragraph[i].style.display = "none";
      plus[i].classList.remove("fa-minus");
      plus[i].classList.add("fa-plus");
    }
  });
}
/*plus mines paragraph*/

/*scroll*/
$(document).scroll(() => {
  let st = $(this).scrollTop();
  if (st > 1800) {
    $(`div.scroll`).fadeIn(500);
  } else {
    $(`div.scroll`).fadeOut(500);
  }
});
$(`div.scroll`).click(() => {
  $(`html,body`).animate(
    {
      scrollTop: 0,
    },
    500,
    `linear`
  );
});
/*scroll*/

/*id*/
$(`a`).click(function () {
  let attr = $(this).attr(`data-address`);
  let attrScroll = $(attr).offset().top;
  $(`html,body`).animate(
    {
      scrollTop: attrScroll,
    },
    500,
    `linear`
  );
});
/*id*/
/*clock*/
let clock = document.getElementById(`root`);
setInterval(function () {
  let date = new Date();
  clock.innerHTML = `<h3 style="color: whitesmoke">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h3>`;
});
/*clock*/
