$('.option-dra').each(function(i){
    $(this).attr('index', i)
})
$('.option-dra').click(function(){
    $('.option-dra').attr('class', 'option-dra')
    $(this).addClass('option-active')
    $('.option-img').hide()
    var index = $(this).attr('index')
    $('.option-img').eq(index).fadeIn()
})

$(window).bind('scroll', function(){
    ($(window).height() + $(document).scrollTop()) > $('.cond-img').offset().top && animateImg()
})

function animateImg(){
    $(window).unbind('scroll')
    $('.img-1').animate({left: 0, opacity: 1, filter: 'alpha(opacity:100)'}, 1500, 'swing')
    $('.img-2').animate({right: 0, opacity: 1, filter: 'alpha(opacity:100)'}, 1500, 'swing', function(){
        $('.col-text-o, .col-text-t').animate({opacity: 1, filter: 'alpha(opacity:100)'}, 1000, 'linear')
    })
}



