$(document).ready(function(){
  
    $(".message-hover").hover(function(){
      $(".hover-address-box").css({"opacity": "1", "z-index": "20"});
 
    }, function(){
        $(".hover-address-box").css({"opacity": "0", "z-index": "-1"});
      
    });
   
  });


