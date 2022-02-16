function zoom(param){
   var currentSlide =  document.getElementsByClassName("swiper-slide swiper-slide-active")[0]
   var slideScale =  window.getComputedStyle(currentSlide).transform
    var currentScale;
    var newScale;
    if(slideScale === "none"){
        currentScale = 1;
    }
    else {
        currentScale = parseFloat(slideScale.replace("matrix(", "").split(",")[0]);
    }

        if(param === "out"){
            newScale = currentScale-0.2;
            currentSlide.style.transform = "scale("+ newScale +")";
        }
        else {
            newScale = currentScale+0.2;
            currentSlide.style.transform = "scale("+ newScale +")";
        }


}

