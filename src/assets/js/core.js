"use strict";

var Services = function (a) {
    return {
        is: function (e) {
            return 0 != a(e).length
        }
    }
}(jQuery);

function setClamp() {
    [1, 2, 3, 4, 5, 6].forEach(function (t, e) {
        var a = document.getElementsByClassName("clamp" + t);
		$.each(a, function (e, a) {
			if(!$(a).hasClass('news-item__content--description')){
				$clamp(a, { clamp: t })
			}
		})
    })
}

jQuery(document).ready(function (i) {
     jQuery('body').on('keypress','.contact__form input[name=number]',function(e){
        if(e.keyCode < 48 || e.keyCode > 57) return false;
        var num = jQuery(this).val();
        if(num.length > 10) return false;
    });
    jQuery('.header__menu>ul>li.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');
    jQuery('.mobile-menu__content2>ul>li.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');
    if (Services.is('#shop')) {
        $('.parent-menu>a').click(function (e) {
            e.preventDefault();
            var parent = $(this).parent();
            if (parent.hasClass('active')) {
                parent.removeClass('active').find('.submenu').slideUp();
            } else {
                parent.addClass('active').find('.submenu').slideToggle();
                parent.siblings('.active').removeClass('active').find('.submenu').slideUp();
            }
        });
        $('.shop-item2').click(function (e) {

            var target = $(event.target);
            if (target.is("input")) {
            } else {
                e.preventDefault();
                if (!$(this).find('.shop-item__check').prop('checked')) {
                    $(this).find('.shop-item__check').prop('checked', true);
                } else {
                    $(this).find('.shop-item__check').prop('checked', false);
                }
            }

        });
    };
    if (Services.is('#product-detail')) {
        $('.change-number').click(function () {
            var operator = $(this).data('calc');
            var input = $(this).siblings('input');
            var min = Number(input.attr('min'));
            var curNum = Number(input.val());
            var result = 0;
            if (operator == "minus") {
                result = curNum - 1;
                if (result < min) {
                    result = curNum;
                }
            } else {
                result = curNum + 1;
            }

            input.val(result);
        })
    };
	
	$('.faq-item2__tab').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('active')) {
		  $(this).closest('.about-us__faq').find('.faq-item2__tab.active').find('i').removeClass('fa-minus').addClass('fa-plus');
		  $(this).closest('.about-us__faq').find('.faq-item2__tab.active').removeClass('active').siblings('.faq-item2__content').slideUp();
		  $(this).addClass('active').siblings('.faq-item2__content').slideToggle().find('i').removeClass('fa-plus').addClass('fa-minus');
		  $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
		}else{
		  $(this).removeClass('active').siblings('.faq-item2__content').slideUp();
		  $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
		}
	 });
	
	//fix bug menu mobile UX
	$(".mobile-menu__content2 a").click(function (e) {
		var target = $( event.target );
		if(!target.is('i')){
			$(".mobile-menu").removeClass("active");
			$("#wrapper").removeClass("active");
		}
        
    }),
	
    $(".header__menu a")
    .click(function (e) {
      var link = $(this);

      var item = link.parent("li");

      if (item.hasClass("active")) {
        item.removeClass("active").children("a").removeClass("active");
      } else {
        item.addClass("active").children("a").addClass("active");
      }
    })
    .each(function () {
      var link = $(this);
      if (link.get(0).href === location.href) {
        link.addClass("active").parents("li").addClass("active");
        return false;
      }
    });
    Services.is("#banner") && i(".slider__main").owlCarousel({
        loop: !0,
        nav: !1,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0
    }), i(window).scroll(function () {
        0 < window.pageYOffset ? i("#header").addClass("scroll") : i("#header").removeClass("scroll")
    }), i(".progress-bar").each(function () {
        i(this).find(".progress-content").animate({ width: i(this).attr("data-percentage") }, 2e3), i(this).find(".progress-number-mark").animate({ left: i(this).attr("data-percentage") }, {
            duration: 2e3,
            step: function (e, a) {
                var t = Math.round(e);
                i(this).find(".percent").html(t + "%")
            }
        })
    }), i(".faq-item__tab").click(function (e) {
        e.preventDefault(), i(this).hasClass("active") || (i(this).addClass("active").siblings(".faq-item__content").slideToggle(), i(this).parent().siblings().find(".faq-item__tab").removeClass("active").siblings(".faq-item__content").slideUp())
    }), i(".mobile-menu i").click(function (e) {
        e.preventDefault(), i(this).closest("a").toggleClass('active').siblings(".sub-menu").slideToggle()
    }), i(".header-mobile__button").click(function (e) {
        i("#wrapper").addClass("active"), i(".mobile-menu").addClass("active"), e || (e = window.event), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }), i(".mobile-close").click(function (e) {
        e.preventDefault(), i(".mobile-menu").removeClass("active"), i("#wrapper").removeClass("active")
    }), i(".mobile-menu__bg").click(function () {
        i(".mobile-menu").removeClass("active"), i("#wrapper").removeClass("active")
    }), i(window).resize(function () {
        768 < i(window).width() && (i(".mobile-menu").removeClass("active"), i("#wrapper").removeClass("active"))
    }), setClamp()
});

// $(document).ready(function () {
//     $('.message').click(function (even) {

//         even.preventDefault();

//         FB.CustomerChat.showDialog();
//     });

// });
