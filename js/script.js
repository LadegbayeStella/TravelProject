

// second slider
var swiper = new Swiper(".mySwiper", {
  loop:true, 
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".mySlider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
      },
});

var swiper = new Swiper(".mySwiper", {
  loop:true, 
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".client-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
      },
});


var swiper = new Swiper(".clients-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
  },
});

let emmanuel = document.querySelector("#menu-btn");
let myBoss = document.querySelector(".navbar");

emmanuel.onclick = () => {
    emmanuel.classList.toggle("fa-times");
    myBoss.classList.toggle("active");
}

window.onscroll =()=> {
    emmanuel.classList.remove("fa-times");
    myBoss.classList.remove("active");
}