window.onload = function () {

    progressively.init()
    $(".header-btn-close").click(function() {
        console.log('close');
        $(".header-overlay").removeClass("overlay-opened");
    })
    $(".header-btn-dropdown").click(function() {
        $(".header-overlay").addClass("overlay-opened");
    })
    $(".header-btn-close a").click(function() {
        $(".header-overlay").removeClass("overlay-opened");
    })
    // ga
    $(".block-hero-2 a").click(function(e) {
        console.log('click', e.target.hostname);
        if(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())){
            gtag('event', 'MOB_'+e.target.hostname);
        }else{
            gtag('event', 'PC_'+e.target.hostname);
        }
    })
}