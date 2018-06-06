$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer.", "Android developer.", "Student.", "Anime lover."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    var skillTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function () {
        if (window.pageYOffset > (skillTopOffset - $(window).height()) + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        if (!countUpFinished && window.pageYOffset > (skillTopOffset - $(window).height()) + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            });
            countUpFinished = true;
        }
    });

    $(".items").isotope({
        filter: "*",
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOption: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});