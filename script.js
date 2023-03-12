$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            console.log('sdf')
        }
        else{
            $('.navbar').removeClass("sticky");
           console.log('dsad')
        }
        if(this.scrollY > 500)
        {
            $('.scrool-up-btn').addClass("show")
        }else{
            
            $('.scrool-up-btn').removeClass("show")
        }
    });
    $('.scrool-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHouverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

});