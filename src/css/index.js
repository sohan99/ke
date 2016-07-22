var quotes = new Array();

quotes[0] = "\" The secret of good teaching is to regard the child’s intelligence as a fertile field in which seeds may be sown, to grow under the heat of flaming imagination. Our aim therefore is not merely to make the child understand and still less force him to memorize, but so to touch his imagination to enthuse him to his innermost core. \" ";
quotes[1] = "\" No amount of higher education can cancel what has once been formed in infancy. \"";
quotes[2] = "\" The period under six is decisive. What ever abilities the child constructs  they will remain incarnate in him for life. \"";

console.log(quotes);
var counter = 0;

function loop() {
    if (counter > 2) counter = 0;
    document.getElementById('montessori_quotes_id').innerHTML = quotes[counter];
    counter++;
    console.log(counter);
    setTimeout(loop, 10000);
}
loop();
//smoothScroll(document.getElementById('second'))
var smoothScroll = function(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}
