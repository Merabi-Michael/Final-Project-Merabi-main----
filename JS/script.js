// function  mySlick(){
//   $(".wrapper").not('.slick-initiaized').slick({
//     centerMode: true,
//     autoplay: true,
//     dots: true,
//     slideToShow: 3,
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//         dots: false,
//         arrows: false,
//         Infinite:false,
//         slideToShow: 1,
//         slideToScroll: 1
//       }
//     }]
//   });
// }
// mySlick();

$('.wrapper').slick();



// burger
let navBarLinks = document.getElementById('navbarLinks');
let toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener("click", function()
navBarLinks.classList.toggle('active'); })
