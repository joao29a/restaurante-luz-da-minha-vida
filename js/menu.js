$(document).ready(function(){
    $('#home').click(function(){
        $('#content').load('public/home.html');
    });

    $('#opt1').click(function(){
        $('#sub-menu1').toggle();
    });

    $('#sub1-opt1').click(function(){
        $('#content').load('public/test.html');
    });
});
