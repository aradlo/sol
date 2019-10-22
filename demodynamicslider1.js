$(document).ready(function() {
    $("#slider1").BloggerDynamicSlider({
        imageWidth: 636, // Image width in px value
        imageHeight: 398, // Image height in px value
        maxItem: 6, // Max number of Slider Image to show
        animation: "slide", // Select your animation type, "fade" or "slide"
        showPostTitle: true, // Show post title as Caption ? (true/false)
        postTitleStyle: "overlayLight", // Caption style: "default, "overlayDark" or "overlayLight"
    });
});
