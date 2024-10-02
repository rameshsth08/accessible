// home main  box slider

var articlBoxSlider = new Swiper(".article-box-slider", {
  spaceBetween: 20,
  slidesPerView:1.5,
  freeMode: true,
  mousewheel: {
    forceToAxis: true
  },
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".box-slider-next",
    prevEl: ".box-slider-prev",
  },
  breakpoints: {
    // when window width is >= 668px
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView:  3,
    },
  
  },
});
//hero thumbs slider
var thumbSwiper = new Swiper(".hero-thumbs-slider", {
  spaceBetween: 4,
  slidesPerView: 3.5,
  freeMode: true,
  watchSlidesProgress: true,
});
//heroslider
var swiper = new Swiper(".hero-slider", {
    slidesPerView: 2.15,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: {
      forceToAxis: true
    },
    breakpoints: {
      // when window width is >= 668px
      668: {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 20,
      },
    
    },
   
  });
//highlight-modal-slider
var highlightModalSlider = new Swiper(".highlight-modal-slider", {
    spaceBetween: 80,
    slidesPerView: "auto",
    centeredSlides: true,
    //speed: 1000,
    mousewheel: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        slideShadows: false
      },
   
        
  });

  
  highlightModalSlider.on('slideChange', function() {
  // Get the index of the currently active slide
  var activeIndex = highlightModalSlider.activeIndex;
  
  // Get the class of the currently active slide
  var activeSlide = highlightModalSlider.slides[activeIndex];
  var activeSlideClass = activeSlide.classList[1];
   
  // Update the slider title based on the class of the currently active slide  
  var sliderTitle = document.getElementById('highlight-modal-title');
  var articleMeta = document.getElementById('highlight-article-meta');
  if (activeSlideClass == 'fashion') {
    sliderTitle.innerHTML = 'फेशन';
    articleMeta.classList.remove('opacity-0');
  } else if (activeSlideClass == 'food') {
    sliderTitle.innerHTML = 'परिकार';
    articleMeta.classList.remove('opacity-0');
  } else if (activeSlideClass == 'health') {
    sliderTitle.innerHTML = 'स्वास्थ्य';
    articleMeta.classList.remove('opacity-0');
  } 
  else {
    articleMeta.classList.add('opacity-0');
  }
});



// category slider
var swiper = new Swiper(".category-box-slider", {
    slidesPerView: 2.15,
    spaceBetween: 10,
    freeMode: true,
    mousewheel: {
      forceToAxis: true
    },
    navigation: {
        nextEl: ".category-box-slider-next",
        prevEl: ".category-box-slider-prev",
      },
    breakpoints: {
      1200: {
        slidesPerView:  'auto',
        spaceBetween: 20,
      },
    
    }
  });

//   Search bar
const navSearch = document.getElementById('navbar-search');
const search = document.getElementById('search-input');
search.addEventListener('click', ( ()=>{ return navSearch.classList.add('expand')}));
search.addEventListener('click', ( ()=>{ return megaBtn.classList.add('hide-mega-btn')}));
search.addEventListener('click', ( ()=>{ return megaBtn.classList.remove('show-mega-btn')}));
search.addEventListener('click', ( ()=>{ return search.placeholder='What are you looking for?'}));

const closeSearch = document.getElementById('expand-close');
closeSearch.addEventListener('click', (()=>{ return navSearch.classList.remove('expand')}));
closeSearch.addEventListener('click', ( ()=>{ return megaBtn.classList.remove('hide-mega-btn')}));
closeSearch.addEventListener('click', ( ()=>{ return megaBtn.classList.add('show-mega-btn')}));
closeSearch.addEventListener('click', ( ()=>{ return search.placeholder='Search'}));

// Like button
const likeBtn = document.getElementById('like-btn');
const disLikeBtn = document.getElementById('dislike-btn');
const bookmarkeBtn = document.getElementById('bookmarkeBtn');
function btnClick(){
  this.classList.toggle("svg-outline");
}
likeBtn.addEventListener('click', btnClick);
disLikeBtn.addEventListener('click', btnClick);
bookmarkeBtn.addEventListener('click', btnClick);

// mega menu megamenu-btn
const megaBtn = document.getElementById("megamenu-btn");
const megamenu = document.getElementById('megamenu');
const bodyTag = document.getElementsByTagName('body')[0];
function megatoggle(){
  this.classList.toggle("open");
  megamenu.classList.toggle("menu-show");
  closeSearch.classList.toggle("opacity-0");
  bodyTag.classList.toggle("open-mega-menu");
}

megaBtn.addEventListener('click',megatoggle);


