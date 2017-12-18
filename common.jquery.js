// $(function(){
//     var count=0
//     function play(){
//         msg=typeMsg.innerText
//         comp=msg.length
//         type()
// }
//     function type(){
//         if(count<=comp){
//             typeMsg.innerText=msg.substring(0,cont)
//             count++
//             setTimeout("type()",200)
//         }
//         else{
//             count=0
//             play()
//         }
//     }
// })
   
$(function(){
    $(document).on("mousemove",function(event){
        var x = event.pageX;
        var y = event.pageY;
        x *= -1;
        y *= -1;
        $('.btn_bg').stop().css({
            'background-position-x':0,
            'background-position-y':x
        });
    }) 

    var ulWidth = $('.btn_bg ul').width();
    $('.btn_bg').css('width',ulWidth)

    $('.btn_bg li>div').hover(function(){
        $(this).css('background-image','none');
        $(this).siblings('.overlay').css('opacity',1);
        $('.bg_sprite').css('animation-name','runningSprite')
    },function(){
        $(this).css('background-image','');
        $(this).siblings('.overlay').css('opacity','');
    })

    $('.gnb li').click(function(e){
      e.preventDefault();
      var idx = $(this).index();
      var con = $('.section section').eq(idx).offset().top

      $('html, body').animate({
          'scrollTop':con
      })
    })


})