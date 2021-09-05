const home = document.getElementById('header');
const services = document.getElementById('offer');
const about = document.getElementById('about');
const portfolio = document.getElementById('gallery');
const testimonial = document.getElementById('testimonial');
const contact = document.getElementById('footer');

function title_changer(text){
    document.title = text;
};

// home.addEventListener('click',function(){
//     title_changer("Home || Business Name Templete");
// });
// services.addEventListener('click',function(){
//     title_changer("Services || Business Name Templete");
// });
// portfolio.addEventListener('click',function(){
//     title_changer("Portfolio || Business Name Templete");
// });
// testimonial.addEventListener('click',function(){
//     title_changer("Testimonial || Business Name Templete");
// });
// contact.addEventListener('click',function(){
//     title_changer("Contact || Business Name Templete");
// });


let bg_img = [
    "url('https://thumbs.dreamstime.com/b/moscow-cathedral-jesus-christ-saviour-22119024.jpg')",
    "url('https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
    "url('https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
    "url('https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
    "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"
];

let ImgSelect = document.querySelector("#header");

let count = 0;

document.getElementById("next").addEventListener("click", function(){
    count++;
    if(count >= bg_img.length){
        
        count = 0;
        ImgSelect.style.backgroundImage = bg_img[count];
    }
    else{
        ImgSelect.style.backgroundImage = bg_img[count];
    }
})

document.getElementById("prev").addEventListener("click", function(){
    count--;
    if(count < 0){
        count = bg_img.length - 1;
        ImgSelect.style.backgroundImage = bg_img[count];
    }
    else{
        ImgSelect.style.backgroundImage = bg_img[count];
    }
})


$(function () {
    $('.team_slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        // animateOut: 'rotateIn',
        // animateIn: 'rotateInDownRight',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            
            992: {
                items: 2
            }
        }
    });

    $(".nav_item .button").on('click', function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".nav_item .button").on('click', function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.gallery_img_ctrl').show(1000);
        }
        else{
            $('.gallery_img_ctrl').not('.'+value).hide(1000);
            $('.gallery_img_ctrl').filter('.'+value).show(1000);
        }
    })

});


