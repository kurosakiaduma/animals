$(document).ready(function() {
    var num;
    var temp = 0;
    var speed = 5000; /* this is set for 5 seconds, edit value to suit requirements */
    var preloads = [];

    /* add any number of images here */

    preload(
        'https://images4.alphacoders.com/125/125088.jpg',
        'https://newevolutiondesigns.com/images/freebies/animals-background-15.jpg',
        'https://images7.alphacoders.com/503/503155.jpg',
        'https://newevolutiondesigns.com/images/freebies/animals-background-3.jpg',
        'http://livehdwallpaper.com/wp-content/uploads/2016/09/beautiful-Animal-Wallpapers-HD-Pictures.jpg',
        'http://www.modernhdwallpaper.com/image/9/Ladybugs%20Insect%20wallpaper%201680x1050.jpg',
        'http://eskipaper.com/images/snake-background-1.jpg',
        'https://images2.alphacoders.com/836/thumb-1920-83660.jpg'
    );

    function preload() {

        for (var c = 0; c < arguments.length; c++) {
            preloads[preloads.length] = new Image();
            preloads[preloads.length - 1].src = arguments[c];
        }
    }

    function rotateImages() {
        num = Math.floor(Math.random() * preloads.length);
        if (num == temp) {
            rotateImages();
        } else {
            document.body.style.backgroundImage = 'url(' + preloads[num].src + ')';
            temp = num;

            setTimeout(function() {
                rotateImages()
            }, speed);
        }
    }

    if (window.addEventListener) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                rotateImages()
            }, speed)
        }, false);
    } else {
        if (window.attachEvent) {
            window.attachEvent('onload', function() {
                setTimeout(function() {
                    rotateImages()
                }, speed)
            });
        }
    }

    $(function() {
        $('select').selectric();
    });

    $(function() {
        $('.customOptions').selectric({
            optionsItemBuilder: function(itemData) {
                return itemData.value.length ? '<span class="ico ico-' + itemData.value + '"></span>' + itemData.text : itemData.text;
            }
        });

        $('select').selectric({
            disableOnMobile: false
        });
    });

});
