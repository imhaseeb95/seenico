'use strict';

// ===============
// 	slider
// ===============

$('.sweets-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$('.testimonial-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

// ===============
// 	Fancy Box
// ===============

Fancybox.bind('[data-fancybox]');

// ===============
// 	Accordian
// ===============

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

// ===============
// 	Header
// ===============

// var navBar = document.querySelector("header");
// var headerScroll = document.querySelector("header.sec-header");
// var headerY = 100;

// window.addEventListener("scroll", function () {
//   var haederTop = window.scrollY;
//   if (haederTop > headerY) {
//     headerScroll.classList.add("nav-bar-active");
//   } else {
//     headerScroll.classList.remove("nav-bar-active");
//   }
// });

// ========================
// 	Home counter Scroll
// ========================

const counters = document.querySelectorAll('.count');
const speed = 5;



var counterHeight = document.querySelector('.products');
var heightCounter = 1940;
//counterHeight.offsetTop


 window.addEventListener('scroll', function(){
  var scrollTop = window.scrollY 
  
  if(scrollTop > heightCounter){
    counters.forEach(myCounter => {
      myCounter.innerText = '0';
    
      const updateCounter = ()=>{
    
      let myNum = +myCounter.getAttribute('data-target');
      let myTarget = +myCounter.innerText;
    
      let newSpeed = myNum / speed; 
    
      if(myTarget < myNum){
        myCounter.innerText = `${Math.ceil(myTarget + newSpeed)}`;
        setTimeout(updateCounter, 1)
      }else{
        myCounter.innerText = myNum
      }
    }
    updateCounter()
    });
  }

})


// ========================
// 	About counter Scroll
// ========================

const clientsCounter = document.querySelectorAll('.counter')
const speedTime = 20;

const scrollHeight = document.querySelector('.clients-sec');
const scrollTopHeight = 900 
console.log(scrollTopHeight);




window.addEventListener('scroll', function(){
  let topScroll = window.scrollY;

  if(topScroll > scrollTopHeight){
    clientsCounter.forEach((element)=>{
      element.innerText = '0';
    
      const updateNum = ()=> {
        let clietNum = +element.getAttribute('data-count');
      let clientTarget = +element.innerText
    
      const numTime =  clietNum / speedTime
    
      if(clietNum > clientTarget){
        element.innerText = `${Math.ceil(clientTarget + numTime)}`
        setTimeout(updateNum, 1)
      }
    }
    updateNum()
    
    })
  }


})