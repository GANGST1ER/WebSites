$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/right.svg"></button>',
    });

        // Filter Isotope
    const elem = document.querySelector('.catalog__row');
    const iso = new Isotope( elem, {
      // options
      itemSelector: '.catalog__col',
      filter: '.fitness',
    });

    const controls = document.querySelectorAll('.list-catalog__item');

    controls.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const filterName = item.getAttribute("data-filter");

            controls.forEach(item => {
                item.classList.remove("list-catalog__item--active");
            });
            item.classList.add("list-catalog__item--active");

            iso.arrange({
                filter: `.${filterName}`
            });
        });
    });

    // Otherside
    const links = document.querySelectorAll('.item-catalog__link'),
          backs = document.querySelectorAll('.item-catalog__back'),
          contents = document.querySelectorAll('.item-catalog');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            contents.forEach(content => {
                content.classList.remove("item-catalog--active");
            });

            link.closest(".item-catalog").classList.add("item-catalog--active");
        });
    });

    backs.forEach(back => {
        back.addEventListener("click", (e) => {
            e.preventDefault();

            back.closest(".item-catalog").classList.remove("item-catalog--active");
        });
    });

    // Smooth Scroll
    document.querySelectorAll("[data-scroll]").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const itemId = item.getAttribute("data-scroll");
            const itemOffset = document.querySelector(itemId).offsetTop;

            window.scrollTo({
                top: itemOffset,
                behavior: "smooth"
            });
        });
    });

    // Modals
    $("[data-modal=consultation]").on("click", function(e) {
        e.preventDefault();
        $(".overlay, #consultation").fadeIn();
    });
    $(".modal__close").on("click", function(e) {
        e.preventDefault();
        $(".overlay, #consultation, #buy, #thanks").fadeOut();
    });
    $(".btn--small").on("click", function(e) {
        e.preventDefault();
        $(".overlay, #buy").fadeIn();
    });
    $(".form__btn").on("click", function(e) {
        e.preventDefault();
        $(".overlay, #consultation, #buy, #thanks").fadeOut();
        $(".overlay, #thanks").fadeIn();
    });
    // $(".btn--small").each(function(i) {
    //     $(this).on("click", function(e) {
    //         e.preventDefault();
    //         $("#buy, #modal__subtitle").text($(".item-catalog__title").eq(i).text());
    //         $(".overlay, #buy").fadeIn();
    //     });
    // });
    
    // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    //     $(this)
    //       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    // });

    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     });
    // };

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');

    // // Modal

    // $('[data-modal=consultation]').on('click', function() {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });
    // $('.modal__close').on('click', function() {
    //     $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    // });

    // $('.button_mini').each(function(i) {
    //     $(this).on('click', function() {
    //         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //         $('.overlay, #order').fadeIn('slow');
    //     })
    // });

    // function validateForms(form){
    //     $(form).validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             }
    //         },
    //         messages: {
    //             name: {
    //                 required: "Пожалуйста, введите свое имя",
    //                 minlength: jQuery.validator.format("Введите {0} символа!")
    //               },
    //             phone: "Пожалуйста, введите свой номер телефона",
    //             email: {
    //               required: "Пожалуйста, введите свою почту",
    //               email: "Неправильно введен адрес почты"
    //             }
    //         }
    //     });
    // };

    // validateForms('#consultation-form');
    // validateForms('#consultation form');
    // validateForms('#order form');

    // $('input[name=phone]').mask("+7 (999) 999-99-99");

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    // Smooth scroll and pageup

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });

    // $("a[href=#up]").click(function(){
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //     return false;
    // });

    // new WOW().init();
});

