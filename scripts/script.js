let carousel = 1;
showC();

function cContinue(n) {
    showC(carousel += n);
};

function showC(n) {
    let i;
    let slides = document.getElementsByClassName('cImg');
    if ( n > slides.legnth) {
        slideIndex = 1
    };
    if (n < 1) {
        carousel = slides.length
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display= 'none'
    };
    
};