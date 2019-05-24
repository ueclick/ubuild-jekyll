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
}