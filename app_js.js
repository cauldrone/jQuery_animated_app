$(document).ready(function() {
    $("#button").click(
    function loop() {
        $("#redball")
            .animate({right: "249"}, 1000)
            .animate({left: "249"},2000)
    }
    );
    $('body').keyup(function(e){
   if(e.keyCode == 32){
       $("#redball").stop();
   }
});
});
