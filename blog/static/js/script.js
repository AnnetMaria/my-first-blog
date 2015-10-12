$(document).ready(function(){

  var selectors = ["welcome", "ICT", 'TQC', 'philosopher'];

  selectors.forEach(function(item, index, array){
    $("#"+item).mouseover(function(){
      selectMenuItem(item);
    });
  });

  /*
  $("#welcome").mouseover(function(){
    console.log("This is: "+ this);
    selectMenuItem($(this).attr('id'));
  });
  $("#ICT").mouseover(function(){
    console.log("This2 is: "+ this);
    selectMenuItem($(this).attr('id'));
  });
  $("#TQC").mouseover(function(){
    selectMenuItem($(this).attr('id'));
  });
  $('#philosopher').mouseover(function(){
    selectMenuItem($(this).attr('id'));
  });
  */

  function selectMenuItem(divId){
    selectors.forEach(function(item, index, array){
      //console.log(item);
      //console.log("DivID: "+divId);
      if (item === divId){
        //console.log("ok");
        if (item === "welcome"){
          $("."+ item + " " + "#vlak1a").css("background-color", "#D90118");
          $("."+ item + " " + "#vlak2a").css("background-color", "#36939B");
          $("."+ item + " " + "#vlak2b").css("background-color", "#98D8C8");
        } else if (item === "ICT") {
          $("."+ item + " " + "#vlak1a").css("background-color", "#D90118");
          $("."+ item + " " + "#vlak2a").css("background-color", "#F6E497");
          $("."+ item + " " + "#vlak2b").css("background-color", "#FF5A2A");
          $("#" + item).css("font-size", "1.7em");
        }else if (item === "TQC") {
          $("."+ item + " " + "#vlak1a").css("background-color", "#ff4019");
          $("."+ item + " " + "#vlak2a").css("background-color", "#474030");
          $("."+ item + " " + "#vlak2b").css("background-color", "#ff4019");
          $("#" + item).css("font-size", "1.7em");
        }else if (item === "philosopher") {
          $("."+ item + " " + "#vlak1a").css("background-color", "#36939B");
          $("."+ item + " " + "#vlak2a").css("background-color", "#B3E0C1");
          $("."+ item + " " + "#vlak2b").css("background-color", "#98D8C8");
          $("#" + item).css("font-size", "1.7em");
        }
        $("." + item).css("display", "inherit");
      }else{
        if (item != "welcome") {
          $("#" + item).css("font-size", "1.5em");
        }
        $("." + item).css("display", "none");
      }
    });
  }

  $('#vlak1b').mouseover(function(){
    $('#vlak1a>h1').append(" <p>This the video (in Dutch) that I created for my Young Sogetist of the Year Nomination</p> ")})
      .mouseout(function(){
        $('#vlak1a p').remove();
      });
  });
