// navbar toggle 
const navToggle = document.getElementById('nav-toggle')
const nav = document.querySelector('.navs')

let isShow = false

navToggle.addEventListener('click', function(){
    if(isShow) {
        nav.style.visibility = 'hidden'
        nav.style.opacity = '0'
        isShow = false
        navToggle.innerHTML = '<i class="icofont-navigation-menu"></i>'
    }else{
        nav.style.opacity = '1'
        nav.style.visibility = 'visible'
        isShow = true
        navToggle.innerHTML = '<i class="icofont-close"></i>'
    }
})


// window scroll add new navigation background color
const header = document.querySelector('header')
window.addEventListener('scroll', function(){
    if(this.scrollY > 100) {
        header.classList.add('newNav')
    }else{
        header.classList.remove('newNav')
    }
})




  $(document).ready(function(){
    // navbar active item 
    $('ul li #nav-li').click(function(){
        $('li #nav-li').removeClass('active');
        $(this).addClass('active');
    })
    // owl carousel
    var owl = $('.course-carousel .owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            }
        }
    });
    // counter up 
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    // venobox video popup plugin
    $('.venobox').venobox({
        spinner: 'cube-grid',
    }); 
    // testimonial carousel
    var owl = $('.student-sat .owl-carousel');
    owl.owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2
            }
        }
    })
});