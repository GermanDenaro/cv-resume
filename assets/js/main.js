jQuery(window).on('load', function() {
    "use strict";


    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function() {

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function() {

                e.addClass("run-animation");

            }, e.data("animation-delay"));

        });

    }, 700);


});


jQuery(document).ready(function($) {
    "use strict";


    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);

    });


    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", {
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });


    // AJAX CONTACT FORM SUBMIT
    $("#contact-form").submit(function(e) {

        e.preventDefault();
        var postdata = $(this).serialize();

        $.ajax({

            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function(json) {

                $("#contact-form input, #contact-form textarea").removeClass("error");

                setTimeout(function() {

                    if (json.nameMessage !== "") {

                        $("#contact-form-name").addClass("error");

                    }

                    if (json.emailMessage !== "") {

                        $("#contact-form-email").addClass("error");

                    }

                    if (json.messageMessage !== "") {

                        $("#contact-form-message").addClass("error");

                    }

                }, 10);

                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

                    $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
                    $('#contact-form').addClass("success");
                    $('#contact-form textarea, #contact-form input').attr("placeholder", "");
                    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);

                }

            }

        });

    });


});

/* SKILLS */

jQuery(document).ready(function($) {

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    // JavaScript Chart
    var doughnutData = [{
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

    // Bootstrap Chart
    var doughnutData = [{
            value: 90,
            color: "#1abc9c"
        },
        {
            value: 10,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

    // WordPress Chart
    var doughnutData = [{
            value: 65,
            color: "#1abc9c"
        },
        {
            value: 35,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

    // HTML Chart
    var doughnutData = [{
            value: 80,
            color: "#1abc9c"
        },
        {
            value: 20,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

    // Photoshop Chart
    var doughnutData = [{
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

    // Illustrator Chart
    var doughnutData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
});