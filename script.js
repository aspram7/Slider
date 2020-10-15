var x = 0;
function next(n) {
    var slide = document.getElementsByClassName('slider-images')[0];
    var box = document.getElementsByClassName('slider-box')[0];
    var items = document.getElementsByClassName('slider-item');
    
    Array.from(items).forEach((el, index) => {
        if(box.getBoundingClientRect().left - el.getBoundingClientRect().left === 0) {
            if(Array.from(items).length === x + n) {
                x = 0;
            } else if(x + n < 0) {
                x = Array.from(items).length - 1;
            } else {
                x = index + n;
            }
        }
    });
    
    slide.style.transform = "translateX(" + (-600 * x) + "px)";
}