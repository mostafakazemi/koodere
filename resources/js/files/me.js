window.CancelToken = axios.CancelToken;
window.cancel;
window.cancelSource = CancelToken.source();

window.axios_time_out = 10000; // Waiting 10s

window.callNumber = 0;

window.sticker = document.createElement("img");
window.sticker.src = "/img/android-chrome-512x512.png";

$(document).ready(function () {
    $(window).scroll(function () {
        $(".opacity-0").each(function () {
            let id = "#" + $(this).attr('id');
            let hT = $(this).offset().top,
                hH = $(this).outerHeight(),
                wH = $(window).height(),
                wS = $(window).scrollTop();
            if (wS > (hT + 50 - wH)) {
                $(this).animate({
                    opacity: 1
                }, 500, function () {
                    $(id).removeClass("opacity-0");
                });
            }
        })
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    $(".top-selector-container > *").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

});

///////////////////////////////////////////////////////////////////////////
if ($('.top-selector').length) {
    const slider = document.querySelector('.top-selector-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    let timestamp = 0, speed;
    let mX = 0;
    let scrolling = false;

    slider.addEventListener('mousedown', (e) => {
        // console.clear();
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            if (Math.abs(speed) > 100) {
                scrolling = true;
                let scrollContinue = slider.scrollLeft - speed / 3;

                $('.top-selector-container').stop().animate({
                    'scrollLeft': scrollContinue
                }, 1000, "easeOutQuart", function () {
                    scrolling = false;

                    let parentRightEdge = $(this)[0].getBoundingClientRect().right;
                    let child = scrollChild(this);
                    if (child.length) {
                        let childToParent = parentRightEdge - child[0].getBoundingClientRect().left;
                        let childCenter = (child[0].getBoundingClientRect().left + child[0].getBoundingClientRect().right) / 2;

                        scrollContinue = slider.scrollLeft - childToParent;

                        if (childCenter < parentRightEdge)
                            scrollContinue += child[0].getBoundingClientRect().width;

                        $(this).stop().animate({
                            scrollLeft: scrollContinue
                        }, 250);
                    }
                });
                speed = 0;
            }
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDown) return; // stop fn from running
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;

        let now = Date.now();
        X = e.screenX;
        let dt = now - timestamp;
        // let distance = Math.abs(X - mX);
        let distance = X - mX;
        speed = Math.round(distance / dt * 1000);
        mX = X;
        timestamp = now;
    });


    $('.top-selector .scroll-left').click(function () {
        if (scrolling) return;
        scrolling = true;
        let parent = $(this).parent().children('.top-selector-container');
        let child = scrollChild(parent);
        $('.top-selector-container').animate({
            'scrollLeft': parent[0].scrollLeft - parent[0].getBoundingClientRect().right + child.next()[0].getBoundingClientRect().right
        }, 400, function () {
            scrolling = false;
        });
    });

    $('.top-selector .scroll-right').click(function () {
        if (scrolling) return;
        scrolling = true;
        let parent = $(this).parent().children('.top-selector-container');
        let child = scrollChild(parent);
        let toScroll;
        if (child.prev().length)
            toScroll = parent[0].scrollLeft - parent[0].getBoundingClientRect().right + child.prev()[0].getBoundingClientRect().right;
        else
            toScroll = parent[0].scrollLeft - parent[0].getBoundingClientRect().right + child[0].getBoundingClientRect().right;
        $('.top-selector-container').animate({
            'scrollLeft': toScroll
        }, 400, function () {
            scrolling = false;
        });
    });
}

function scrollChild(parent) {
    let childs = {'left': [], 'right': [], 'rDistance': []};
    $(parent).children().each(function () {
        childs['left'].push($(this)[0].getBoundingClientRect().left);
        childs['right'].push($(this)[0].getBoundingClientRect().right);
        childs['rDistance'].push(Math.abs($(parent)[0].getBoundingClientRect().right - $(this)[0].getBoundingClientRect().right));
    });

    for (let i = 0; i < childs['left'].length; i++)
        if (childs['left'][i] < $(parent)[0].getBoundingClientRect().right && childs['right'][i] >= $(parent)[0].getBoundingClientRect().right) {
            i++;
            return $(parent).children(":nth-child(" + i + ")");
        }
    let min_index = ++findMin(childs['rDistance']).index;
    return $(parent).children(":nth-child(" + min_index + ")");
}

function findMin(array) {
    let min = {'index': 0, 'value': array[0]};
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min.value) {
            min.index = i;
            min.value = array[i];
        }
    }
    return min;
}

///////////////////////////////////////////////////////////////////////////


