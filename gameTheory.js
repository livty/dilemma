$("#gameP").hide();
$("#dilemma").click(function(){
  $("#gameP").fadeIn("slow");
    //completed;
});
$("#gameR").hide();
$("#rock").click(function(){
  $("#gameR").fadeIn("slow");
    //completed;
});
$("#gameP").click(function(){
  $("#gameP").animate({
    width: "25%",
    marginLeft: "20%",
    fontSize:"2em",
    borderWidth: "10px"

  },1000);
});
$("#gameR").click(function(){
  $("#gameR").animate({
    width: "5%",
    marginLeft: "5%",
    fontSize:"2em",
    borderWidth: "10%"

  },1500);
});
$("#box").hide();
$("tr").on("click","#nash",function(){
  $(this).toggleClass("nash");
  $("#box").slideToggle("slow");
});
