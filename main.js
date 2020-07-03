//top box
$('#fadeOut').click(function () {
    $('#box').fadeOut(3000) //default 400
})
$('#fadeIn').click(function () {
    $('#box').fadeIn(3000)
})
$('#fadeTog').click(function () {
    $('#box').fadeToggle(5000);
})
$('#stop').click(function () {
    $('#box').stop()
})
$("#fadeto").click(function () {
    $('#box').fadeTo("fast", Math.random())
})

//spider
$("#btnhide").click(function () {
    $(".fa-spider").hide("fast")
})
$('#moveRight').click(function () {
    $('.fa-spider').animate({
        left: 500,
        fontSize: '300px',
        opacity: '0.5'
    })
})
$('#moveLeft').click(function () {
    $('.fa-spider').animate({
        left: 0,
        fontSize: '100px',
        opacity: '1'
    })
})
$('#finish').click(function () {
    $('.fa-spider').finish()
})

$('#moveAround').click(function () {
    const spider = $('.fa-spider')

    spider.animate({ left: 300 }, 900)
        .animate({ left: 600 })
        .animate({ left: 200 })
        .animate({ left: 300, fontSize: '300px' })
        .animate({ left: 400, top: 300, fontSize: '10px' })
        .animate({ left: 430, top: 0, fontSize: '50px' })
        .animate({ top: 300 })
        .animate({ top: 0 })
        .animate({ fontSize: '450px' })
        .animate({ top: 200, fontSize: '1px' })
        .animate({ fontSize: '200px' })
        .animate({ left: 0, top: 100, fontSize: '100px' })
        .animate({ top: 0 })
})
