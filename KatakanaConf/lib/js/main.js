$(document).bind("mobileinit", function() {
    $.mobile.touchOverflowEnabled = true;
});
$(document).ready(function() {
    document.documentElement.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
});
$(document).ready(function() {
    var sel = Cookies.get("save-piracy-policy");
    sel = sel == "true";
    $('.mini-menu-btn-agree').toggleClass("activate-accept", sel).on('click', function(e) {
        $(".mini-menu-con-dimmer").toggleClass("object-hidden");
        $(".mini-menu-con-dimmer").removeClass("object-show");
    });
    $(".mini-menu-btn-agree").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-accept", sel);
        Cookies.set("save-piracy-policy", sel, {
            expires: 365,
            path: '/'
        });
    });
    if ($('.mini-menu-btn-agree').hasClass('activate-accept')) {
        $(".mini-menu-con-dimmer").addClass("object-hidden");
        $(".mini-menu-con-dimmer").removeClass("object-show");
    } else {
        $(".mini-menu-con-dimmer").removeClass("object-hidden");
        $(".mini-menu-con-dimmer").addClass("object-show");
    }
});
$(window).on('load', function() {
    $('.fade-in-onload').delay(100).fadeIn(300);
    $('.fade-out-onload').delay(8000).fadeOut(300);
});
$(document).ready(function() {
    $('.fade-up-onstart').delay(100).fadeIn(300);
});
$(window).on("load resize", function(e) {
    $('.scale-content-txt-1').css({
        'position': 'absolute',
        'top': '50%',
        'margin-top': -$('.scale-content-txt-1').height() / 2
    });
    $('.scale-content-txt-2').css({
        'position': 'absolute',
        'top': '50%',
        'margin-top': -$('.scale-content-txt-2').height() / 2
    });
    $('.scale-content-txt-3').css({
        'position': 'absolute',
        'top': '50%',
        'margin-top': -$('.scale-content-txt-3').height() / 2
    });
});
setInterval(function() {
    $(document).ready(function() {
        $('.scale-content-txt-4').css({
            'position': 'absolute',
            'top': '50%',
            'margin-top': -$('.scale-content-txt-4').height() / 2
        });
        $('.scale-content-txt-5').css({
            'position': 'absolute',
            'top': '50%',
            'margin-top': -$('.scale-content-txt-5').height() / 2
        });
        $('.scale-content-txt-6').css({
            'position': 'absolute',
            'top': '50%',
            'margin-top': -$('.scale-content-txt-6').height() / 2
        });
    });
}, 50);
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".menu-con-backdrop").fadeIn(400);
    } else {
        $(".menu-con-backdrop").fadeOut(400);
    }
    if ($(this).scrollTop() > 10) {
        $('.landing-ico-scrolldown').fadeOut(400);
    } else {
        $('.landing-ico-scrolldown').fadeIn(400);
    }
});
$(document).ready(function() {
    var glow = $('.pulsate');
    setInterval(function() {
        glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
    }, 1000);
});
$(document).ready(function() {
    $('.build-ico-os img:gt(0)').hide();
    setInterval(function() {
        $('.build-ico-os :first-child').fadeOut(200).next().fadeIn(200).end().appendTo('.build-ico-os');
    }, 5000);
});
$(document).ready(function() {
    var sel = Cookies.get("save-pulsate");
    sel = sel == "true";
    $('.toggle-pulsate').toggleClass("activate-pulsate", sel).on('click', function(e) {
        location.reload();
    });
    $(".toggle-pulsate").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-pulsate", sel);
        Cookies.set("save-pulsate", sel, {
            expires: 365,
            path: '/'
        });
    });
    if ($('.toggle-pulsate').hasClass('activate-pulsate')) {
        $('.pulsate').addClass("disable-pulsate");
        $('.btn-pulsate').text("Pulsate - Off");
    } else {
        $('.pulsate').removeClass("disable-pulsate");
    }
});
$(document).ready(function() {
    var sel = Cookies.get("save-transparency");
    sel = sel == "true";
    $('.toggle-transparency').toggleClass("activate-transparency", sel).on('click', function(e) {
        $('.menu-con-container').toggleClass("disable-transparency");
        $('.video-btn-play').toggleClass("disable-transparency");
        $('.menu-tx1-message').toggleClass("disable-transparency");
        $('.mobile-menu-con-container').toggleClass("disable-transparency");
        location.reload();
    });
    $(".toggle-transparency").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-transparency", sel);
        Cookies.set("save-transparency", sel, {
            expires: 365,
            path: '/'
        });
    });
    if ($('.toggle-transparency').hasClass('activate-transparency')) {
        $('.menu-con-container').addClass("disable-transparency");
        $('.video-btn-play').addClass("disable-transparency");
        $('.menu-tx1-message').addClass("disable-transparency");
        $('.mobile-menu-con-container').addClass("disable-transparency");
        $('.btn-transparency').text("Transparency - Off");
    } else {
        $('.menu-con-container').removeClass("disable-transparency");
        $('.video-btn-play').removeClass("disable-transparency");
        $('.menu-tx1-message').removeClass("disable-transparency");
        $('.mobile-menu-con-container').removeClass("disable-transparency");
    }
});
$(document).ready(function() {
    var sel = Cookies.get("save-particles");
    sel = sel == "true";
    $('.toggle-particles').toggleClass("activate-particles", sel).on('click', function(e) {
        $('#object-particles').toggleClass("object-hidden");
        location.reload();
    });
    $(".toggle-particles").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-particles", sel);
        Cookies.set("save-particles", sel, {
            expires: 365,
            path: '/'
        });
    });
    if ($('.toggle-particles').hasClass('activate-particles')) {
        $('#object-particles').addClass("object-hidden");
        $('.btn-particles').text("Particles - Off");
    } else {
        $('#object-particles').removeClass("object-hidden");
    }
});
$(document).ready(function() {
    var sel = Cookies.get("save-waves");
    sel = sel == "true";
    $('.toggle-waves').toggleClass("activate-waves", sel).on('click', function(e) {
        $('.wavebar-con-wrap').toggleClass("object-hidden");
        location.reload();
    });
    $(".toggle-waves").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-waves", sel);
        Cookies.set("save-waves", sel, {
            expires: 365,
            path: '/'
        });
    });
    if ($('.toggle-waves').hasClass('activate-waves')) {
        $('.wavebar-con-wrap').addClass("object-hidden");
        $('.btn-waves').text("Waves - Off");
    } else {
        $('.wavebar-con-wrap').removeClass("object-hidden");
    }
});
$(document).ready(function() {
    $(".toggle-theme").click(function() {
        $(".theme-btn-close").fadeIn(200);
        $(".theme-con-spinner").fadeIn(200).fadeOut(200);
        $(".window-con-theme").fadeIn(200);
        $(".window-bg-theme").delay(1000).fadeIn(2000);
        $(".wavebar-con-container-theme").delay(200).fadeIn(2000);
        $(".theme-tx1-description").delay(2000).fadeIn(200);
        $(".menu-con-container").fadeOut(200);
        $(".landing-con-left").fadeOut(200);
        $(".landing-con-right").fadeOut(200);
        $(".landing-ico-scrolldown").fadeOut(200);
        $(".banner-con-title").fadeOut(200);
        $(".alipay-con-alipay").fadeOut(200);
        $(".alipay-con-footer").fadeOut(200);
        $(".error-con-content").fadeOut(200);
        $('body').css({
            'position': 'fixed',
        });
    });
    $(".theme-btn-close").click(function() {
        $(".theme-btn-close").fadeOut(200);
        $(".theme-con-spinner").fadeOut(200);
        $(".window-con-theme").fadeOut(200);
        $(".window-bg-theme").fadeOut(200);
        $(".wavebar-con-container-theme").fadeOut(10);
        $(".theme-tx1-description").fadeOut(10);
        $(".menu-con-container").delay(500).fadeIn(200);
        $(".landing-con-left").delay(500).fadeIn(200);
        $(".landing-con-right").delay(500).fadeIn(200);
        $(".landing-ico-scrolldown").delay(500).fadeIn(200);
        $(".banner-con-title").delay(500).fadeIn(200);
        $(".alipay-con-alipay").delay(500).fadeIn(200);
        $(".alipay-con-footer").delay(500).fadeIn(200);
        $(".error-con-content").delay(500).fadeIn(200);
        $('body').css({
            'position': 'unset',
        });
    });
});
$(document).ready(function() {
    $(".settings-submenu").fadeOut();
    $(".toggle-settings").click(function() {
        $(".settings-submenu").fadeToggle(100);
        $(".patreon-submenu").fadeOut();
    });
    $(".settings-submenu").fadeOut();
    $(".settings-submenu").click(function() {
        $(".settings-submenu").fadeOut(100);
    });
});
$(document).ready(function() {
    $(".popup-mobilemenu").hide();
    $(".toggle-mobilemenu").click(function() {
        $(".popup-mobilemenu").fadeToggle(100);
        $(".mobile-menu-btn-darkmode").fadeToggle(100);
    });
    $(".popup-mobilemenu").hide();
    $(".popup-mobilemenu").click(function() {
        $(".popup-mobilemenu").fadeOut(100);
    });
    $(".toggle-navsidebar").hide();
    $(".nav-standard").click(function() {
        $(".toggle-navsidebar").fadeToggle(100);
    });
    $(".toggle-navsidebar").hide();
    $(".toggle-navsidebar").click(function() {
        $(".toggle-navsidebar").fadeOut(100);
    });
    $(".toggle-blogbar").hide();
    $(".nav-blog").click(function() {
        $(".toggle-blogbar").fadeToggle(100);
    });
    $(".toggle-blogbar").hide();
    $(".toggle-blogbar").click(function() {
        $(".toggle-blogbar").fadeOut(100);
    });
});
$(document).ready(function() {
    $('.database-search').on('focus', function() {
        $('.search-inp-search').addClass('object-focused');
        $('#compat-con-searchbox').addClass('object-focused');
    });
    $('.database-search').on('blur', function() {
        $('.search-inp-search').removeClass('object-focused');
        $('#compat-con-searchbox').removeClass('object-focused');
    });
});
$(document).ready(function() {
    $('.video-img-thumbnail').on('mouseenter mouseleave', function(e) {
        $('.video-con-animate').trigger(e.type);
    });
});
$(document).ready(function() {
    $('.content-btn-left').click(function() {
        $('.item').addClass('carousel-left');
        $('.video-tx1-description').addClass('carousel-left');
        $('.video-btn-play').addClass('carousel-left');
    });
    $('.content-btn-left').click(function() {
        $('.item').removeClass('carousel-right');
        $('.video-tx1-description').removeClass('carousel-right');
        $('.video-btn-play').removeClass('carousel-right');
    });
    $('.content-btn-right').click(function() {
        $('.item').addClass('carousel-right');
        $('.video-tx1-description').addClass('carousel-right');
        $('.video-btn-play').addClass('carousel-right');
    });
    $('.content-btn-right').click(function() {
        $('.item').removeClass('carousel-left');
        $('.video-tx1-description').removeClass('carousel-left');
        $('.video-btn-play').removeClass('carousel-left');
    });
});
$(document).ready(function() {
    $(".page-video-1").click(function() {
        $('.video-img-viewport').show().delay(500).fadeOut();
    });
    $(".page-video-2").click(function() {
        $('.video-img-viewport').show().delay(500).fadeOut();
    });
    $(".page-video-3").click(function() {
        $('.video-img-viewport').show().delay(500).fadeOut();
    });
    $(".toggle-video-1").fadeOut();
    $(".page-video-1").click(function() {
        $(".toggle-video-1").fadeIn('fast');
    });
    $(".toggle-video-1").fadeOut();
    $(".close-video").click(function() {
        $(".toggle-video-1").fadeOut('fast');
    });
    $(".toggle-video-2").fadeOut();
    $(".page-video-2").click(function() {
        $(".toggle-video-2").fadeIn('fast');
    });
    $(".toggle-video-2").fadeOut();
    $(".close-video").click(function() {
        $(".toggle-video-2").fadeOut('fast');
    });
    $(".toggle-video-3").fadeOut();
    $(".page-video-3").click(function() {
        $(".toggle-video-3").fadeIn('fast');
    });
    $(".toggle-video-3").fadeOut();
    $(".close-video").click(function() {
        $(".toggle-video-3").fadeOut('fast');
    });
    $(".page-video-1").click(function() {
        var iframe = $("#video-1");
        iframe.attr("src", iframe.data("src"));
    });
    $(".page-video-2").click(function() {
        var iframe = $("#video-2");
        iframe.attr("src", iframe.data("src"));
    });
    $(".page-video-3").click(function() {
        var iframe = $("#video-3");
        iframe.attr("src", iframe.data("src"));
    });
    $(function() {
        $(".stop-video").on("click", function() {
            videoControl("stopVideo");
        });
        function videoControl(action) {
            var $playerWindow = $('#video-1')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
    $(function() {
        $(".stop-video").on("click", function() {
            videoControl("stopVideo");
        });
        function videoControl(action) {
            var $playerWindow = $('#video-2')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
    $(function() {
        $(".stop-video").on("click", function() {
            videoControl("stopVideo");
        });
        function videoControl(action) {
            var $playerWindow = $('#video-3')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});
$(document).ready(function() {
    $('a[rel="anchor-select"]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('.menu-btn-backtotop').show();
        } else {
            $('.menu-btn-backtotop').hide();
        }
    });
    $('.menu-btn-backtotop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
