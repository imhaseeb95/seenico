// ========================
// 	 About Slider
// ========================

$(".aboutSlider").slick({
  autoplay: true,
  infinite: true,
  arrows: false,
  dots: false,
  speed: 300,
  fade: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
});

// ========================
// 	 About2 Slider
// ========================

$(".about2-slider").slick({
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: "350px",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// ========================
// 	 Header scroll
// ========================

// var navBar = document.querySelector("header");
var headerScroll = document.querySelector("header.sec-header");
var headerY = 100;

window.addEventListener("scroll", function () {
  var haederTop = window.scrollY;
  if (haederTop > headerY) {
    headerScroll.classList.add("nav-bar-active");
  } else {
    headerScroll.classList.remove("nav-bar-active");
  }
});

// ========================
// 	 Scroll Top
// ========================

var one = document.querySelector(".scroll");
var arrowY = 100;

window.addEventListener("scroll", function () {
  // console.log(window.scrollY)
  var scrollTop = window.scrollY;
  if (scrollTop > arrowY) {
    one.classList.remove("actvie-arrow");
  } else {
    one.classList.add("actvie-arrow");
  }
});

// =====================
// 	Slick slider
// =====================

$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
});

// =====================
// 	accordian
// =====================

var acc = document.getElementsByClassName("btn-acc");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ========================
// 	counter Scroll
// ========================

const counters = document.querySelectorAll(".counter-run");

const speed = 200;

var testDiv = document.querySelector("#counter-sec");
var b = 3000;

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  if (scrollY > b) {
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateNum = () => {
        const value = +counter.getAttribute("animate");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = `${Math.ceil(data + time)}`;
          setTimeout(updateNum, 100);
        } else {
          counter.innerText = value;
        }
      };
      updateNum();
    });
  }
});

// ===========================
// 	About One counter Scroll
// ===========================

const counterOne = document.querySelectorAll(".counter2");
const speed2 = 200;

const countDiv = document.querySelector(".counter2-container");
const lengthDiv = 500;

window.addEventListener("scroll", function () {
  var checkLength = window.scrollY;
  if (checkLength > lengthDiv) {
    counterOne.forEach((count) => {
      count.innerText = "0";

      var counterFunc = () => {
        var val = +count.getAttribute("data");
        var data2 = +count.innerText;
        var countDown = val / speed2;

        if (data2 < val) {
          count.innerText = `${Math.ceil(data2 + countDown)}`;
          setTimeout(counterFunc, 100);
        } else {
          count.innerText = val;
        }
      };
      counterFunc();
    });
  }
});
