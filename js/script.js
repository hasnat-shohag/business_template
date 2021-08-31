const button = document.querySelector(".button");

button.addEventListener('click',function(e){
    e.preventDefault();
    // document.getElementsByClassName('nav_item').show('active');
})



$(function () {
    $('.team_slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        animateOut: 'rotateIn',
        animateIn: 'rotateInDownRight',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });
})