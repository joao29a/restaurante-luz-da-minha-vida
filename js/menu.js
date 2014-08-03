var submenus = ['#sub-menu1'];

var Menu = {
    close_submenus: function(){
        for (var i = 0; i < submenus.length; i++){
            $(submenus[i]).hide();
        }
    }
}

$(document).ready(function(){
    $('#content').load('public/home.html');

    $('#home').click(function(){
        Menu.close_submenus();
        $('#content').load('public/home.html');
    });

    $('#opt1').click(function(){
        $('#sub-menu1').toggle();
    });

    $('#sub1-opt1').click(function(){
        $('#content').load('public/test.html');
    });

    $('#hide-top').click(function(){
        $('#login-menu').hide();
    });

    $('#show-top').click(function(){
        $('#login-menu').toggle();
    });
});
