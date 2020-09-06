$(document).ready(function(){
    let timmer = 2;
    $('#time').text(timmer)
    $('#battery').animate({
        height: '0px'
    },60000,'easeOutSine',function(){
        timmer -=1
        $('#time').text(timmer)
    }).animate({
        height: '394px'
    },60000,'easeOutSine', function(){
        timmer -=1
        $('#time').text(timmer)
    })


})