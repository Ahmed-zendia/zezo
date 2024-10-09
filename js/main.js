/// <reference types="../@types/jquery" />



// $('ul li').on('click', function (e) {
//     $(e.target).addClass('active')
//     $(e.target).siblings().removeClass('active')
// })


$('.side_sympol').on('click', function () {
$('.test').animate({ width: '250px' },1000)
$('nav').removeClass('d-none')
})
$('.fa-circle-xmark ').on('click', function () {

    $('.test').animate({ width: '0px' }, 1000, function () {
        $('nav').addClass('d-none')  
    })
})

$('ul li ').on('click', function (e) {
    $('.active').removeClass('active')
    $(e.target).addClass('active')
})



$('.heading1').on('click',function(){
   
    $('.paraghraph1').removeClass('d-none')
        $('.paraghraph1').siblings('.paraghraph').addClass('d-none')
    })


$('.heading2').on('click',function(){
   
    $('.paraghraph2').removeClass('d-none')
    $('.paraghraph2').siblings('.paraghraph').addClass('d-none')

})

$('.heading3').on('click',function(){
   
    $('.paraghraph3').removeClass('d-none')
    $('.paraghraph3').siblings('.paraghraph').addClass('d-none')

})
$('.heading4').on('click',function(){
   
    $('.paraghraph4').removeClass('d-none')
    $('.paraghraph4').siblings('.paraghraph').addClass('d-none')

})




var countDownDate = new Date("Jan 1, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + "d" ;
  document.getElementById("hours").innerHTML =  hours + "h";
  document.getElementById("minuites").innerHTML =  minutes + "m " ;
  document.getElementById("seconds").innerHTML =  seconds + "s " ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




let elementcount=document.querySelector('.lastdiv span')

let startCount= 100;

elementcount.innerHTML=startCount;
$('textarea').on('keydown', function (e) {
       
        if(e.key=='Backspace'&& startCount<100  ){
        startCount++;
        elementcount.innerHTML=startCount;
    }
    else if(startCount>0) {
        startCount--;
         elementcount.innerHTML=startCount;
      }else if (startCount=0){

      }

    }
   
)


    
    


















// هستخدمهم فى الاسايمنت 
