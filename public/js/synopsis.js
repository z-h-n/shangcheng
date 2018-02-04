var now=0

$('.service img').each(function (i) {
    $(this).attr('index', i)
})
$('.service img').click(function () {
    now=$(this).attr('index')
    $('.service img').each(function (i) {
        $(this).attr('src', './img/contro' + (i + 1) + '.png')
    })
    $(this).attr('src', './img/contro' + (+$(this).attr('index') + 1)  + '-active.png')
    $('.service-text').hide()
    var index = $(this).attr('index')
    $('.service-text').eq(index).show()
})

$('.service img').mouseover(function () {
    $(this).attr('src', './img/contro' + (+$(this).attr('index') + 1)  + '-active.png')
})
$('.service img').mouseout(function () {
    var index = $(this).attr('index')
    console.log(index)
    if(index!=now){
        $(this).attr('src', './img/contro' + (+$(this).attr('index') + 1) + '.png')
    }
})