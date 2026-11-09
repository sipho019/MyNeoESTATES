$(document).ready(function () {

    // ===== 1. NAVBAR SHRINKS WHEN YOU SCROLL =====
    $(window).on("scroll", function () {
        // toggleClass(name, condition): adds the class if the condition is true, removes it if false
        $("#navbar").toggleClass("scrolled", $(window).scrollTop() > 50);
    });

    // ===== 2. MOBILE MENU =====
    $("#menu-toggle").on("click", function () {
        // toggleClass adds "open" if missing, removes it if present; hasClass then tells us which happened
        var isOpen = $("#nav-links").toggleClass("open").hasClass("open");
        $(this).attr("aria-expanded", isOpen);   // keeps screen readers informed
    });

    // Close the menu after a link is tapped
    $("#nav-links a").on("click", function () {
        $("#nav-links").removeClass("open");
        $("#menu-toggle").attr("aria-expanded", false);
    });

    // ===== 3. IMAGE SLIDER =====
    function slide(direction) {
        // width of one image plus the 15px gap from the CSS
        var step = $(".image-item").first().outerWidth() + 15;

        // [0] turns the jQuery object into the plain DOM element, so we can use scrollBy
        $(".image-list")[0].scrollBy({
            left: step * direction,   // +1 scrolls right, -1 scrolls left
            behavior: "smooth"
        });
    }

    $(".slider-btn.next").on("click", function () { slide(1); });
    $(".slider-btn.prev").on("click", function () { slide(-1); });

    // ===== 4. SCROLL REVEAL =====
    // IntersectionObserver watches elements and tells us when they enter the screen
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {                // is the element visible now?
                $(entry.target).addClass("visible");   // triggers the CSS fade-in
                observer.unobserve(entry.target);      // stop watching: it only animates once
            }
        });
    }, { threshold: 0.15 });                           // fires when 15% of the element is visible

    $(".reveal").each(function () {
        observer.observe(this);                        // "this" is the current .reveal element
    });

});