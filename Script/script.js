// Slider
$('.image-wrapper').hover(
    function() {
        $(this).find('.slider-image').css('opacity', '0');
        $(this).find('.hover-block').css('display', 'flex').stop().animate({
            opacity: 1
        }, 200);
    },
    function() {
        $(this).find('.hover-block').stop().animate({
            opacity: 0
        }, 200, function() {
            $(this).css('display', 'none'); 
            $(this).closest('.image-wrapper').find('.slider-image').css('opacity', '1');
        });
    }
);

$('.image-wrapper').on('mouseenter', function() {
    var currentIndex = $(this).index();
    
    $('.dots .dot').removeClass('dot_active');
    
    var dotIndex = currentIndex % $('.dots .dot').length;
    
    $('.dots .dot').eq(dotIndex).addClass('dot_active');

    var activeImgSrc = "color dot.svg"; 
    var inactiveImgSrc = "dot.svg"; 
    
    $('.dots .dot').each(function(index) {
        if ($(this).hasClass('dot_active')) {
            $(this).attr('src', activeImgSrc);
        } else {
            $(this).attr('src', inactiveImgSrc);
        }
    });
});



// Our Project
$(".project-txt div").click(function(){
    var newSrc;

    if ($(this).hasClass("text1")) {
        newSrc = "image1.webp";
    } else if ($(this).hasClass("text2")) {
        newSrc = "image@2x.png";
    } else if ($(this).hasClass("text3")) {
        newSrc = "japan.avif";
    }

    $("#default").attr("src", newSrc);

    $(".project-txt div").css({
        "background-color": "",
        "color": ""
    });
    $(this).css({
        "background-color": "#FF3147",
        "color": "#FFFFFF"                 
    });

});

// Contact-us Form 
$('#myForm').submit(function(event) {
    event.preventDefault();

    var formData = {
        email: $('#email').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        consent: $('#consent').is(':checked')
    };

    $.ajax({
        url: 'https://getform.io/f/apjmnjea',
        method: 'POST',
        data: formData,
        success: function(response) {
            alert('Form submitted successfully!');
            window.location.href = 'index.html';
        },
        error: function(error) {
            alert('An error occurred: ' + error.statusText);
        }
    });
});

$('input[type="text"], input[type="email"]').on('focus', function() {
    $(this).siblings('label').addClass('active');
});

$('input[type="text"], input[type="email"]').on('blur', function() {
    if ($(this).val() === '') {
        $(this).siblings('label').removeClass('active');
    }
});


