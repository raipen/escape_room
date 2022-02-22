$(document).ready(function() {
  $(".switch").click(function(){
    console.log("asdf");
    $.ajax({
      url:'/API/room1_progress/',
      type:'GET',
      data:{id:user_id}
    }).done(function(data){
      console.log(JSON.parse(data));
    });
    console.log("asdf2");
  });
});
