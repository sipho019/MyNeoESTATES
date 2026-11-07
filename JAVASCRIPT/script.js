// $(document).ready(...) waits until the whole HTML page has loaded,
// so our code never runs before the elements exist.
$(document).ready(function () {

    // $(".image-list") finds the element with class "image-list" and stores it
    // in a variable. Saving it means we don't search the page again on every click.
    var $imageList = $(".image-list");

    // A function that works out how far one click should scroll:
    // the width of one image plus its gap.
    function getScrollAmount() {
        var imageWidth = $(".image-item").first().outerWidth(); // width of the first image
        var gap = 15;                                           // must match "gap" in the CSS
        return imageWidth + gap;
    }

    // When the element with id "next-btn" is clicked, run this function.
    $("#next-btn").on("click", function () {
        // .animate() changes a property smoothly over time.
        // scrollLeft is how far the list is scrolled from the left.
        // "+=" means "add to the current value", so we scroll right by one image.
        // 400 is the duration in milliseconds.
        $imageList.animate({ scrollLeft: "+=" + getScrollAmount() }, 400);
    });

    // Same idea for the previous button, but "-=" scrolls left.
    $("#prev-btn").on("click", function () {
        $imageList.animate({ scrollLeft: "-=" + getScrollAmount() }, 400);
    });

});