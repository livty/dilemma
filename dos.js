$(".popme").hide();
$(".nash.animated.lightSpeedIn").hide();
$(".no.animated.lightSpeedIn").hide();

$(".img.animated.lightSpeedIn").hide();
$(".dilemma.expl").hide();
$(".png").hide();
$(".rock.expl").hide();
$(".tie.animated.lightSpeedIn").hide();
$(".win1.animated.lightSpeedIn").hide();
$(".win2.animated.lightSpeedIn").hide();


$("#dropjupz").click(function() {
    $(".dropdown-menu").fadeIn();
    event.stopPropagation();
});

$("#pop").click(function() {
    $(".popme").slideToggle("popme");
      $("#dropp").fadeOut();
      $(".rock-paper").hide();
      $(".prosonnero").hide();

      $(".nash.animated.lightSpeedIn").hide();
      $(".no.animated.lightSpeedIn").hide();
      $(".img.animated.lightSpeedIn").hide();
        $(".dilemma.expl").hide();

        $(".rock.expl").hide();
        $(".tie.animated.lightSpeedIn").hide();
        $(".win1.animated.lightSpeedIn").hide();
        $(".win2.animated.lightSpeedIn").hide();


    event.stopPropagation();
});
//whenever you click on body things disappear
$(".body").click(function() {
    $(".popme").fadeOut("slow");
    $(".rock-paper").fadeOut("slow");
    $(".prosonnero").fadeOut("slow");
    $("#rock").fadeIn("slow");
    $("#butt").fadeIn("slow");
    $("#dropjupz").fadeIn("slow");
    $("#dropp").fadeOut("slow");
    $(".nash.animated.lightSpeedIn").fadeOut("slow");
    $(".no.animated.lightSpeedIn").fadeOut("slow");
    $(".yes").removeClass("yess");
    $(".hellno").removeClass("hellnoo");
    $(".no").removeClass("hellnoo");
    $(".noo").removeClass("hellnoo");

      $(".img.animated.lightSpeedIn").fadeOut("slow");
      $("h1").fadeIn("slow");
      $(".dilemma.expl").fadeOut("slow");
        $(".png").hide();
          $(".rock.expl").hide();
          $(".tie.animated.lightSpeedIn").hide();
          $(".win1.animated.lightSpeedIn").hide();
            $(".win2.animated.lightSpeedIn").hide();
});


//rock-paper game
$(".rock-paper").hide();
$("#rock").click(function() {
    $("#rock").fadeToggle();
    $(".rock-paper").fadeIn("slow");
    $(".prosonnero").hide();
    $(".nash.animated.lightSpeedIn").hide();
    $(".no.animated.lightSpeedIn").hide();


    $(".img.animated.lightSpeedIn").fadeIn("slow");
        $("h1").fadeOut();
        $(".rock.expl").fadeIn();

        $(".dilemma.expl").hide();
    $(".rock-paper").animate({

    }, 10000);
    event.stopPropagation();
});

//prisonner's game
$(".prosonnero").hide();
$("#butt").click(function() {
    $("#butt").fadeToggle();
    $(".prosonnero").fadeIn("slow");
    $(".dilemma.expl").fadeIn("slow");
    $(".rock-paper").hide();
    $(".tie.animated.lightSpeedIn").hide();
    $(".win1.animated.lightSpeedIn").hide();


            $(".rock.expl").hide();
    $(".prosonnero").animate({

    }, 10000);
    event.stopPropagation();

});
$("tr").on("click",function(){
  $(".prosonnero").animate({

  }, 10000);
  event.stopPropagation();

});
//correct answer
$("tr").on("click", ".yes", function() {
    $(".yes").toggleClass("yess");
    $(".nash.animated.lightSpeedIn").fadeToggle();
    $(".no.animated.lightSpeedIn").hide();
    $(".yes").addClass(".nash.animated.lightSpeedIn");


    $(".prosonnero").fadeIn("slow");

});


//all the wrong answers
$("tr").on("click", ".hellno", function() {
    $(".hellno").toggleClass("hellnoo");
    $(".no.animated.lightSpeedIn").fadeToggle();
    $(".nash.animated.lightSpeedIn").hide();
    $(".hellno").addClass(".no.animated.lightSpeedIn");


});
$("tr").on("click", ".no", function() {
    $(".no").toggleClass("hellnoo");
    $(".no.animated.lightSpeedIn").fadeToggle();
    $(".nash.animated.lightSpeedIn").hide();
    $(".no").addClass(".no.animated.lightSpeedIn");


});

$("tr").on("click", ".noo", function() {
    $(".noo").toggleClass("hellnoo");
    $(".no.animated.lightSpeedIn").fadeToggle();
    $(".nash.animated.lightSpeedIn").hide();
    $(".noo").toggleClass(".no.animated.lightSpeedIn");


});
$("tr").on("click",".tie",function(){
  $(".tie").toggleClass("tiee");
  $(".tie.animated.lightSpeedIn").fadeToggle();
  $(".win2.animated.lightSpeedIn").hide();
    $(".win1.animated.lightSpeedIn").hide();
});
$("tr").on("click",".tie1",function(){
  $(".tie1").toggleClass("tiee");
  $(".tie.animated.lightSpeedIn").fadeToggle();
    $(".win2.animated.lightSpeedIn").hide();
      $(".win1.animated.lightSpeedIn").hide();
});
$("tr").on("click",".tie2",function(){
  $(".tie2").toggleClass("tiee");
  $(".tie.animated.lightSpeedIn").fadeToggle();
    $(".win2.animated.lightSpeedIn").hide();
      $(".win1.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player1",function(){
  $(".player1").toggleClass("playerr1");
  $(".win1.animated.lightSpeedIn").fadeToggle();
    $(".win2.animated.lightSpeedIn").hide();
    $(".tie.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player11",function(){
  $(".player11").toggleClass("playerr1");
  $(".win1.animated.lightSpeedIn").fadeToggle();
      $(".win2.animated.lightSpeedIn").hide();
      $(".tie.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player111",function(){
  $(".player111").toggleClass("playerr1");
  $(".win1.animated.lightSpeedIn").fadeToggle();
      $(".win2.animated.lightSpeedIn").hide();
      $(".tie.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player2",function(){
  $(".player2").toggleClass("playerr2");
  $(".win2.animated.lightSpeedIn").fadeToggle();
    $(".win1.animated.lightSpeedIn").hide();
    $(".tie.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player22",function(){
  $(".player22").toggleClass("playerr2");
  $(".win2.animated.lightSpeedIn").fadeToggle();
    $(".win1.animated.lightSpeedIn").hide();
    $(".tie.animated.lightSpeedIn").hide();
});
$("tr").on("click",".player222",function(){
  $(".player222").toggleClass("playerr2");
  $(".win2.animated.lightSpeedIn").fadeToggle();
    $(".win1.animated.lightSpeedIn").hide();
    $(".tie.animated.lightSpeedIn").hide();
});




$(document).ready(function() {
    $('.bxslider').bxSlider();
});
