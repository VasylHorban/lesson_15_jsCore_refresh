$(document).ready(function(){
    let str = [
        $('#s1').text(),
        $('.s2').text(),
        $('#second i').text(),
        $('[title="hello"]').text(),
        $('[target="_blank"]').text(),
        $('.extra:eq(1)').text()
    ]
    alert(str.join(''))
    
})