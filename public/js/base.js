$('#header').mouseover(function () {
    $('.head-back').css({height: '100%', background: 'rgba(48,48,48,1)'})
})

$('#header').mouseout(function () {
    $('.head-back').css({height: '0'})
})

$('.nav .nav-item').mouseover(function () {
    $('.nav .nav-item').removeClass('active')
    $(this).addClass('active')
})

$('.nav .nav-item').mouseout(function () {
    $('.nav .nav-item').removeClass('active')
})

var testinData = testinSDK.testinData
testinData.init('testin_1517489117985')
testinData.track('pv')