$(".popme").hide();
$("#pop").click(function(){
  $(".popme").slideDown("popme");
  event.stopPropagation();
});

  $(".body").click(function(){
    $(".popme").slideUp("popme");
  });

$("li").click(function(){
  $("#dropjupz").slideToggle("#dropjupz");
});
$(document).click(function(){
  $("#dropjupz").hide();
});
$(".rock-paper").hide();
$("#rock").click(function(){
  $(".rock-paper").fadeIn("slow");
});
$("#prosonnero").hide();
$("#domp").click(function(){
  $("#prosonnero").fadeIn("slow");
});

$("tr").on("click", ".yes", function(){
  $(".yes").addClass("yess");
  $(".texty").fadeIn("slow");
});
$("tr").on("click", ".hellno", function(){
  $(".hellno").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
$("tr").on("click", ".no", function(){
  $(".no").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
$("tr").on("click", ".noo", function(){
  $(".noo").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
$("#prosonnero").hide();
$("#domi").hide();
$("#prisonn").click(function(){
  $("#prosonnero").fadeIn("slow");
});
$(".imgg").hide();
$(".texty").hide();
$("tr").on("click", ".yes", function(){
  $(".yes").removeClass(".texty");
  $("#demi").fadeIn("slow");
});
$("tr").on("click", ".hellno", function(){
  $(".hellno").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
$("tr").on("click", ".no", function(){
  $(".no").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
$("tr").on("click", ".noo", function(){
  $(".noo").addClass("hellnoo");
  $(".imgg").fadeIn("slow");
  $(".jumbotron").addClass("border");
});
