$(document).ready(() => {
    $('body').keyup(function(e){
   if(e.keyCode == 32){
       $("#redball").stop();
   }
});

  function loop() {
    $("#redball").css({ left: 0 });
    $("#redball").animate(
      {left: "+=250"},1000,"linear"
    );
    $("#redball").animate(
      {left: "-=500"},2000,"linear"
    );
    $("#redball").animate(
      {left: "+=250"},1000,"linear",function () {
        loop();
      }
    );
  }
  loop();
});
