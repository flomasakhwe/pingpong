//business logic
var pingPongNumbers = [];
  function pingPongNumber(num){
    for (var index = 1; index <= num; index ++){
        if(index % 3 === 0){
            pingPongNumbers.push("ping");
        } else if(index % 5 === 0){
           pingPongNumbers.push("pong")
        } else if (index % 15 === 0){
           pingPongNumbers.push("pingpong")
        } else{
            pingPongNumbers.push( index)
        }
          return pingPongNumbers;
      }
    }



//user interface logic

$(document).ready(function(){
   $("form#game").submit(function(event){
     $("#result").empty();
      var num = parseInt($("input#number").val());
      var pingPongNumbers = pingPongNumber(num);
      pingPongNumbers.forEach(function(pingPongNumber){
         $("ul#result").append('<li>' + num + "</li>");
         event.preventDefault();
      });
   });
});
