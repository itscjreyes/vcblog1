var blogApp = {};

blogApp.init = function(){
    blogApp.subscribe();
    blogApp.sliders();
    blogApp.resize();
    blogApp.fontChange();
    blogApp.topBar();
};

blogApp.subscribe = function(){
    $('#subscribeModalBtn').click(function(){
        $('.subscribeDropdown').addClass('open');
    });
    
    $('.subscribeDropdown button.closeDropdown').click(function(){
        $('.subscribeDropdown').removeClass('open');
    });
    
    $("body").mouseup(function (e) {
        var subject = $(".dropdownWrapper");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $('.subscribeDropdown').removeClass('open');
        }
    });
};

blogApp.sliders = function(){
    $('.topicsSlider').slick({
        slidesToShow: 2,
        prevArrow: '<a class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></a>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.ctaSlider .container').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
};

blogApp.resize = function(){
    $(window).on('resize', function(){
        var imgHeight = $('.blogSubscribeBanner img').height();
    
        $('.blogSubscribeBanner .container').css('min-height', imgHeight);

        if ($(window).width() < 753){
            $('.pop-content h2').prependTo('.popularPosts .container');
        } else {
            $('.popularPosts h2').prependTo('.pop-content');
        }
    }).resize();
};

blogApp.fontChange = function(){
    $('#increaseFont').click(function (e) {
        e.preventDefault();
        var currentBodySize = parseInt($('.section.post-body p').css('font-size')) + 2;
        if (currentBodySize <= 24) {
            $('.section.post-body p').css('font-size', currentBodySize);
            $('.section.post-body span').css('font-size', currentBodySize);
            $('.section.post-body li').css('font-size', currentBodySize);
            $('.section.post-body h4').css('font-size', currentBodySize);
        }
    
        var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) + 2;
        if (currentH2Size <= 28) {
            $('.section.post-body h2').css('font-size', currentH2Size);
        }
    
        var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) + 2;
        if (currentH3Size <= 26) {
            $('.section.post-body h3').css('font-size', currentH3Size);
        }
    });
    
    $('#decreaseFont').click(function (e) {
        e.preventDefault();
        var currentBodySize = parseInt($('.section.post-body p').css('font-size')) - 2;
        if (currentBodySize >= 12) {
            $('.section.post-body p').css('font-size', currentBodySize);
            $('.section.post-body span').css('font-size', currentBodySize);
            $('.section.post-body li').css('font-size', currentBodySize);
            $('.section.post-body h4').css('font-size', currentBodySize);
        }
    
        var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) - 2;
        if (currentH2Size >= 16) {
            $('.section.post-body h2').css('font-size', currentH2Size);
        }
    
        var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) - 2;
        if (currentH3Size >= 14) {
            $('.section.post-body h3').css('font-size', currentH3Size);
        }
    });
};

blogApp.topBar = function(){
    function progressBar() {
        var wintop = $(window).scrollTop(),
            docheight = $(document).height(),
            winheight = $(window).height();
        var totalScroll = wintop / (docheight - winheight) * 100;
        $(".progressBar").css("width", totalScroll + "%");
    }
    
    const bar = document.querySelector('.ppSticky');
    const barHeight = $(bar).height();
    const barTop = bar.offsetTop;
    const block = document.querySelector('.emptyBlock');
    
    function stickyBar() {
        if (window.scrollY >= barTop) {
            bar.classList.add('fixed');
            block.style.height = barHeight + 'px';
        } else {
            bar.classList.remove('fixed');
            block.style.height = 0;
        }
    }
    
    window.addEventListener('scroll', function(){
        progressBar();
        stickyBar();
    });
};

$(document).ready(function(){
    blogApp.init();
});