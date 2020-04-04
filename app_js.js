<<<<<<< HEAD
$(document).ready(function() {
   $("#button").click(function() {
    $("#redball")
       .animate({ left: '400'},2000)
       .animate({ bottom: '50'},2000)
       .animate({ right: '800'},2000)
       .animate({ top: '50'},2000)
       .animate({ left: '400'},2000)
})
})
=======
$(document).ready(() => {
    $('body').keyup(function(e){
   if(e.keyCode == 32){
       $("#redball").stop();
   }
});
    $("#button").click(()=> {

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
});
>>>>>>> origin/master
