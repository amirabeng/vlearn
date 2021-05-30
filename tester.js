(function (i, s, o, g, r, a, m) {  // i = r ba ham barabar
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o), // a = s[o]  // m = s = a;
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-88444908-1', 'auto');
ga('send', 'pageview');

$(function () {
    var num = 180; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.mainNavbar').addClass('navbar-fixed-top');
        } else {
            $('.mainNavbar').removeClass('navbar-fixed-top');
        }
    });
})
