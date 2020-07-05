//top box
$('#fadeOut').click(function () {
    $('#box').fadeOut(3000) //default 400
})
$('#fadeIn').click(function () {
    $('#box').fadeIn(3000)
})
$('#fadeToggle').click(function () {
    $('#box').fadeToggle(3000);
})
$('#stop').click(function () {
    $('#box').stop()
})
$("#fadeto").click(function () {
    $('#box').fadeTo("fast", Math.random()) //600 fast 200 slow
})

//spider relative
$('#moveLeft').click(function () {
    $('.fa-spider').animate({
        left: 0,
        fontSize: '100px',
        opacity: '1'
    }, function () {
        $('.fa-spider').css("color", "white")
    })
})

$('#moveRight').click(function () {
    $('.fa-spider').animate({
        left: 500,
        fontSize: '350px',
        opacity: '0.5'
    }, function () {
        $('.fa-spider').css("color", "#3498db")
    })
})

$('#finish').click(function () {
    $('.fa-spider').finish()
})

$('#moveAround').click(function () {
    $('.fa-spider')
        .animate({ left: 300 }, 5000)
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
        .delay(500)
        .animate({ left: 0, top: 100, fontSize: '100px' })
        .animate({ left: 600, top: 300})
        .animate({ left: 0, top: 0 })
})

$("#btnhide").click(function () {
    $(".fa-spider").hide(100).show()
})

// backgroundPositionX
// backgroundPositionY
// borderWidth
// borderBottomWidth
// borderLeftWidth
// borderRightWidth
// borderTopWidth
// borderSpacing
// margin
// marginBottom
// marginLeft
// marginRight
// marginTop
// opacity
// outlineWidth
// padding
// paddingBottom
// paddingLeft
// paddingRight
// paddingTop
// height
// width
// maxHeight
// maxWidth
// minHeight
// minWidth
// fontSize
// bottom
// left
// right
// top
// letterSpacing
// wordSpacing
// lineHeight
// textIndent
