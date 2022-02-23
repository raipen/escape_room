$(document).ready(function() {
  $(".switch").click(function(){
    console.log("asdf");
    $.ajax({
      url:'/API/room1_progress/',
      type:'GET',
      data:{id:user_id}
    }).done(function(data){
      data = JSON.parse(data);
      if(data.light=='on'){
        $(".dark").css({opacity:0.8});
        $.ajax({
          url:'/API/room1_update/',
          type:'GET',
          data:{id:user_id,light:"off"}
        }).done(function(data){
          console.log(JSON.parse(data));
        });
      }else{
        $(".dark").css({opacity:0.5});
        $.ajax({
          url:'/API/room1_update/',
          type:'GET',
          data:{id:user_id,light:"on"}
        }).done(function(data){
          console.log(JSON.parse(data));
        });
      }
    });
    console.log("asdf2");
  });

  $("#id").click(function(){


  });

});
