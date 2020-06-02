$(function () {
    const link = 'https://img.youtube.com/vi/';
    const images = {
        '0': '0.jpg',
        '1': '1.jpg',
        '2': '2.jpg',
        '3': '3.jpg',
        'default': 'default.jpg',
        'hqdefault': 'hqdefault.jpg',
        'mqdefault': 'mqdefault.jpg',
        'sddefault': 'sddefault.jpg',
        'maxresdefault': 'maxresdefault.jpg'
    };

    $('.js-submit').on('click', function () {
        let videoId = $('.js-input').val();
        console.log(videoId);

        $('.js-result').html('');
        $.each(images, function (key, value) {
            let resultLink = link + videoId + '/' + value;
            console.log(resultLink);

            $('.js-result').append('<div class="image"><img src="' + resultLink + '"><span>' + resultLink + '</span></div>')
        });
    })
});//