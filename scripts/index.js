$(document).ready(function(){
    let sliderChooseIsLive = false;
    let sliderAcceptIsLive = false;

    if (!sliderChooseIsLive && window.innerWidth < 1000) {
        $('.choose__wrap').slick({
            slidesToShow: 2,
            infinite: false,
            responsive:[
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        sliderChooseIsLive = true;
    }
    if (!sliderAcceptIsLive && window.innerWidth < 795) {
        $('.accept__wrap').removeClass('flex');
        $('.accept__wrap').slick({
            slidesToShow: 1,
            infinite: false,
        });
        sliderAcceptIsLive = true;
    }
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 1000 && sliderChooseIsLive) {
            $('.choose__wrap').slick('unslick');
            sliderChooseIsLive = false;
        } else {
            if (!sliderChooseIsLive && window.innerWidth < 1000) {
                $('.choose__wrap').slick({
                    slidesToShow: 2,
                    infinite: false,
                    responsive:[
                        {
                            breakpoint: 480,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                        }
                    ]
                });
                sliderChooseIsLive = true;
            }
        }

        if (window.innerWidth >= 795 && sliderAcceptIsLive) {
            $('.accept__wrap').addClass('flex');
            $('.accept__wrap').slick('unslick');
            sliderAcceptIsLive = false;
        } else {
            if (!sliderAcceptIsLive && window.innerWidth < 795) {
                $('.accept__wrap').removeClass('flex');
                $('.accept__wrap').slick({
                    slidesToShow: 1,
                    infinite: false,
                });
                sliderAcceptIsLive = true;
            }
        }
    });
    $('.btn').click(function() {
        $('.modal').addClass('visible')
    });
    $('.modal__btn').click(function() {
        $('.modal').removeClass('visible')
    });
});
