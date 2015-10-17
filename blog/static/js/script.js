$(document).ready(function(){

  var selectors = ["welcome", "ICT", 'TQC', 'philosopher'];

  selectors.forEach(function(item, index, array){
    $("#"+item).mouseenter(function(){
      selectMenuItem(item);
      });
      $("#"+item).click(function(){
        selectMenuItem(item);
        });
  });




  function selectMenuItem(divId){
    selectors.forEach(function(item, index, array){
      //console.log(item);
      //console.log("DivID: "+divId);
      if (item === divId){
        //console.log("ok");
        if (item != "welcome"){
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


  });
