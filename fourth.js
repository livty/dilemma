$(".popme").hide();
$(".nash.animated.lightSpeedIn").hide();
$(".no.animated.lightSpeedIn").hide();
$(".rockp.animated.lightSpeedIn").hide();
$(".img.animated.lightSpeedIn").hide();
$(".dilemma.expl").hide();
$(".png").hide();
$(".rock.expl").hide();

$("#dropjupz").click(function() {
    $(".dropdown-menu").fadeIn();
    event.stopPropagation();
});

$("#pop").click(function() {
    $(".popme").slideToggle("popme");
      $("#dropp").fadeOut();
      $(".rock-paper").hide();
      $(".prosonnero").hide();
      $(".rockp.animated.lightSpeedIn").hide();
      $(".nash.animated.lightSpeedIn").hide();
      $(".no.animated.lightSpeedIn").hide();
      $(".img.animated.lightSpeedIn").hide();
        $(".dilemma.expl").hide();

        $(".rock.expl").hide();


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
    $(".rockp.animated.lightSpeedIn").fadeOut("slow");
      $(".img.animated.lightSpeedIn").fadeOut("slow");
      $("h1").fadeIn("slow");
      $(".dilemma.expl").fadeOut("slow");
        $(".png").hide();
          $(".rock.expl").hide();
});


//rock-paper game
$(".rock-paper").hide();
$("#rock").click(function() {
    $("#rock").fadeToggle();
    $(".rock-paper").fadeIn("slow");
    $(".prosonnero").hide();
    $(".nash.animated.lightSpeedIn").hide();
    $(".no.animated.lightSpeedIn").hide();
    $(".rockp.animated.lightSpeedIn").fadeIn("slow");
    $(".img.animated.lightSpeedIn").fadeIn("slow");
        $("h1").fadeOut();
        $(".rock.expl").fadeIn("slow");
        $(".dilemma.expl").hide();
    $(".rock-paper").animate({

    }, 10000);
    event.stopPropagation();
});
$("tr").click(function(){
  $(".rockp.animated.lightSpeedIn").fadeOut("slow");
});
//prisonner's game
$(".prosonnero").hide();
$("#butt").click(function() {
    $("#butt").fadeToggle();
    $(".prosonnero").fadeIn("slow");
    $(".dilemma.expl").fadeIn("slow");
    $(".rock-paper").hide();
    $(".rockp.animated.lightSpeedIn").hide();

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



$(document).ready(function() {
    $('.bxslider').bxSlider();
});
