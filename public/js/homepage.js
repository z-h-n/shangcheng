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

var ImgLoaded = 0
function createImg(data, index) {
    var parentUL = document.querySelectorAll('.option-img-home')
    for(var i = 0; i < data.length; i++){
        var img = new Image()
        img.src = data[i]
        var li = document.createElement('li')
        li.appendChild(img)
        parentUL[index].appendChild(li)
        if (!index) {
            img.onload = function () {
                ImgLoaded += 1
                if (ImgLoaded == data.length) {
                    createImg(imgPath.b,1)
                    createImg(imgPath.c,2)
                }
            }
        }
    }
}

createImg(imgPath.a,0)

