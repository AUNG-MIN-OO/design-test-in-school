const responsive  ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items: 2
    },
    960:{
        items:3
    },
}
$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

})

// owl carousel for blog
$('.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

//click to scroll up
$('.move-up span').click(function (){
    $('html,body').animate({
        scrollTop:0
    },1000)
})

//aos library
AOS.init();