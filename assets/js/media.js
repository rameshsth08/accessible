
$(".gallery-section img").click(function() {
    $(".lightbox").fadeIn(300);
    $(".lightbox").append("<div class='gallery-full-img'><img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' /></div>");
    $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
    /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
    $("html").css("overflow", "hidden");
    if ($(this).parent('div.gallery-img').is(":last-child")) {
      $(".arrowr").css("display", "none");
      $(".arrowl").css("display", "block");
    } else if ($(this).parent('div.gallery-img').is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut(300);
    $("h1").remove();
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });
  
    $(".arrowr").click(function() {


      var imgSrc = $(".lightbox img").attr("src");
      
      // var search = $(".grid-wrapper").find("img[src$='" + imgSrc + "']");
      
      let currentImgSection = $('.grid-wrapper div.gallery-img').find("img[src$='" + imgSrc + "']");
     
      var newImage = currentImgSection.parent().next('div.gallery-img').find('img').attr('src');
      

      $(".lightbox img").attr("src", newImage);
      $(".filter").css("background-image", "url(" + newImage + ")");
  
      if (!currentImgSection.parent().next('div.gallery-img').is(":last-child")) {
        $(".arrowl").css("display", "block");
      } else {
        $(".arrowr").css("display", "none");
        $(".arrowl").css("display", "block");
      }

    });
  
    $(".arrowl").click(function() {
      var imgSrc = $(".lightbox img").attr("src");
      
      // var search = $(".grid-wrapper").find("img[src$='" + imgSrc + "']");
      
      let currentImgSection = $('.grid-wrapper div.gallery-img').find("img[src$='" + imgSrc + "']");
     
      let newImage = currentImgSection.parent().prev('div.gallery-img').find('img').attr('src');
      

      $(".lightbox img").attr("src", newImage);
      $(".filter").css("background-image", "url(" + newImage + ")");
  
      if (!currentImgSection.parent().prev('div.gallery-img').is(":first-child")) {
        $(".arrowr").css("display", "block");
      } else {
        $(".arrowl").css("display", "none");
        $(".arrowr").css("display", "block");
      }
    });