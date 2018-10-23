$(document).ready(function() {
    
/*$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
  
   });*/


/*$(".theButton").click(function(){
  $(this).hide();
   });*/
   
/*$(".theButton").mouseenter(function() {
  $(this).css("background-color", "#040507");
       	})

$(".theButton").mouseleave(function() {
  $(".theButton").css("background-color", "");
        });*/


$(".container").click(function() {
  $(".container").siblings().fadeTo("slow", .1);
        });

       		
$(".container").click(function() {
  $("#panel .container").siblings().fadeTo(1000, 1);
  });
});