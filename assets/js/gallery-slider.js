new Swiper(".gallery-parent-slider", {
    loop: true,
    slidesPerView: 1.15,
    centeredSlides: true,
    autoplay: false,
    effect: "slide",
    speed: 1000,
    navigation: {
        nextEl: '.gallery-slider-nav-next',
        prevEl: '.gallery-slider-nav-prev',
    },
    breakpoints: {
      
      // when window width is >= 1024px
      1024: {
        slidesPerView: 1.5,
      },
    
    }
});


//autoplay only active slider element

var swiper = [];

var elements = document.querySelectorAll('.gallery-child-slider');
for (var i = 0; i < elements.length; i++) {
    swiper.push(new Swiper(elements[i], {
        loop: true,
        slidesPerView: 1,
        noSwiping: false,
        effect: "fade",
        pagination: {
            el: '.gallery-child-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.s-next',
            prevEl: '.s-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    }));
}
var fullscreen_btn;
 var current_active_slide;
function childrnswiper() {
    for (i = 0; i < swiper.length; i++) {
        if (swiper[i].slidesEl.offsetParent.classList.contains('swiper-slide-active')) {
            swiper[i].autoplay.start();
        } else {
            swiper[i].autoplay.stop();
        }
    }
     current_active_slide = document.querySelector('.gallery-parent-swiper-slide.swiper-slide-active');
     fullscreen_btn = current_active_slide.querySelector('.gallery-parent-swiper-slide.swiper-slide-active .fullscreenBtn');
}
childrnswiper()
nextBtn = document.querySelector('.swiper-button-next');
nextBtn.onclick = childrnswiper;
prevBtn = document.querySelector('.swiper-button-prev');
prevBtn.onclick = childrnswiper;


//full screen specific slider

console.log(fullscreen_btn)
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}

function zoom_in_out() {
    var active_sliders = document.querySelector('.gallery-parent-swiper-slide.swiper-slide-active')
   var h2elemnt = active_sliders.getElementsByTagName('h2')[0];
   h2elemnt.classList.toggle('d-none')
    if (active_sliders.classList.contains('fullscreened')) {
        closeFullscreen();
        active_sliders.classList.remove('fullscreened')
    } else {
        openFullscreen(active_sliders);
        active_sliders.classList.add('fullscreened')
    }
    console.log('hello');

}
fullscreen_btn.onclick = zoom_in_out;

//Pause unpause active slider element
var slidepauseresume = document.getElementsByClassName('pause-slider');

function pauseUnpause() {

    for (i = 0; i < swiper.length; i++) {
        if (swiper[i].slidesEl.offsetParent.classList.contains('swiper-slide-active')) {
            swiper[i].pagination.bullets.forEach(function (bullets) {
                if (bullets.className == 'swiper-pagination-bullet swiper-pagination-bullet-active') {

                    bullets.classList.add('pausedAnimated')
                } else {
                    bullets.classList.remove('pausedAnimated')
                }
            })
            if (swiper[i].slidesEl.offsetParent.classList.contains('paused-slider')) {
                swiper[i].slidesEl.offsetParent.classList.remove('paused-slider')
                this.innerHTML = '<svg class="n-icon"> <use xlink:href="#pause"></use></svg> ';

                swiper[i].autoplay.resume();
            } else {
                swiper[i].autoplay.pause();
                this.innerHTML = '<svg class="n-icon"> <use xlink:href="#play-slider"></use></svg>';
                swiper[i].slidesEl.offsetParent.classList.add('paused-slider')
            }
        }
    }
}

for (var i = 0; i < slidepauseresume.length; i++) {
    slidepauseresume[i].addEventListener('click', pauseUnpause, false);
}

var prev_next = document.querySelector('.s-next svg');
prev_next.addEventListener('click', function () {
    slidepauseresume[0].innerHTML =
        '<svg class="n-icon"> <use xlink:href="#pause"></use></svg>';
});

var prev = document.querySelector('.s-prev svg');
prev.addEventListener('click', function () {
    slidepauseresume[0].innerHTML =
        '<svg class="n-icon"> <use xlink:href="#pause"></use></svg>';
});