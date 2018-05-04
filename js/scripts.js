//business logic
var pingPongNumbers = [];

function pingPong (num){
    for (var index = 1; index <= num; index+=1){
        if(index % 3 === 0){
            pingPongNumbers.push("pingpong");
        }
      }
    }




//user interface logic

$(document).ready(function(){
   $("form#game").submit(function(){
      event.preventDefault();
      var num = parseInt($("input#number").val());

      pingPong(num);

            pingPongNumbers.forEach(function(num){
         $("#result").append('<li>' + num + "</li>");
         alert{result};
      });
   });
});
