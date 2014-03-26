
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});

$(document).ready(function() {

    var mouse_in_login = false;
    $("#menu-login .menu a").click(function() {
        var loginBox = $(".accountBox");
        if (loginBox.is(":visible")) {
            loginBox.fadeOut("fast");
            $( '#menu-login .menu' ).removeClass( 'active' );
        } else {
            loginBox.fadeIn("fast");
            $( '#menu-login .menu' ).addClass( 'active' );
        }
        return false;
    });
    $(".accountBox").hover(function(){
        mouse_in_login=true;
    }, function(){
        mouse_in_login=false;
    });
    $("body").click(function(){
        if(! mouse_in_login) {
            $(".accountBox").fadeOut("fast");
            $( '#menu-login .menu' ).removeClass( 'active' );
        }
    });
    
    var mouse_in_cart = false;
    $("#shoppingCartBtn").click(function() {
        var cartBox = $("#shoppingCartContent");
        if (cartBox.is(":visible")) {
            cartBox.fadeOut("fast");
            $( '#shoppingCartMenu' ).removeClass( 'active' );
        } else {
            cartBox.fadeIn("fast");
            $( '#shoppingCartMenu' ).addClass( 'active' );
        }
        return false;
    });
    $("#shoppingCartContent").hover(function(){
        mouse_in_cart=true;
    }, function(){
        mouse_in_cart=false;
    });
    $("body").click(function(){
        if(! mouse_in_cart) {
            $("#shoppingCartContent").fadeOut("fast");
            $( '#shoppingCartMenu' ).removeClass( 'active' );
        }
    });
    
    
    //Edit product label
    $( '.product-item .product-label h2 a' ).each( function(){
    
        var title = $(this).html();
        if ( title.length > 24 ) {
            title  = title.substr( 0, 24 );
            title += '...'
        }
        $(this).html( title );
    });
    
    //Product other tab
    $( '.tabs' ).each( function(){
    
        var tabs = $(this);
        
        $( '.tabmenu a', tabs ).removeClass( 'active' );
        $( '.tabcontent .tabitem', tabs ).hide();
        $( '.tabmenu li:first-child a', tabs ).addClass( 'active' );
        $( '.tabcontent .tabitem:first-child', tabs ).show();
        
        $( '.tabmenu a', tabs ).click( function(){
        
            $( '.tabmenu a', tabs ).removeClass( 'active' );
            $( '.tabcontent .tabitem', tabs ).hide();
            
            var href = $(this).attr( 'href' );
            $( href ).show();
            $(this).addClass( 'active' );
            return false;
        });
    });
});