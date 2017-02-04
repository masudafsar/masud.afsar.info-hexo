var $PrimaryNav = $("#primary-nav");
var $MainHeader = $("#header");
var $PrimaryNavSearchBtn = $PrimaryNav.find(".navbar-search-btn");
var $PrimaryNavSearchFrom = $($PrimaryNavSearchBtn.data('target'));
var $PrimaryNavSearchInput = $PrimaryNavSearchFrom.find('input[name="s"]');
var $ToTopButton = $("#to-top");

var $ArticlesContainer = $("#wraper .section-articles");

$(function () {
    //-- navbar smalling by scrolling
    $(window).scroll(function () {
        var triggerOffset = $MainHeader.offset().top + $MainHeader.height();
        if ($(window).scrollTop() >= triggerOffset) {
            $PrimaryNav.addClass("navbar-small");
            $ToTopButton.css('opacity', '1');
        } else if ($(window).scrollTop() <= triggerOffset - 50) {
            $PrimaryNav.removeClass("navbar-small");
            $ToTopButton.css('opacity', '0');
        }
    });

    //-- go to top of page by clicking on #to-top
    $ToTopButton.click(function () {
        $("html, body").animate({scrollTop: "0px"}, 400);
    });

    //-- show search form in header
    $PrimaryNavSearchBtn.click(function () {
        $PrimaryNavSearchFrom.addClass("show");
        $PrimaryNavSearchInput.focus();
    });

    //-- hide search form in header
    $PrimaryNavSearchFrom.find(".close").click(function () {
        $PrimaryNavSearchFrom.removeClass("show");
        $PrimaryNavSearchInput.val("");
        $PrimaryNavSearchInput.focusout();
    });

    //--
    $ArticlesContainer.masonry({
        itemSelector: '.post-card',
        //gutter: 20,
    });
});

(function ($) {
    $(document).ready(function () {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);
