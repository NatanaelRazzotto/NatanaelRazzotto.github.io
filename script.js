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

    })
});