//jquery file 

var counter = 0;
var elements = $("#list").children("div").length;
//function that changes the background

//function that adds the border
function make_green(counter) {
    $("#list div:nth-child(" + counter + ")").css('border', '10px solid');
    $("#list div:nth-child(" + counter + ")").css('border-image-slice', '1');
    $("#list div:nth-child(" + counter + ")").css('border-image-source', 'linear-gradient(to left, #c2c4c2, #252625)');
}

//function that adds an invisible black border to make the previous disappear
function make_blue(counter) {
    $("#list div:nth-child(" + (counter - 1) + ")").css('background-color', 'black');
    $("#list div:nth-child(" + (counter - 1) + ") a").css('color', 'white');
    $("#list div:nth-child(" + (counter - 1) + ")").css('border', '10px solid');
    $("#list div:nth-child(" + (counter - 1) + ")").css('border-image-slice', '0');
    $("#list div:nth-child(" + (counter - 1) + ")").css('border-image-source', 'linear-gradient(to left, black, black)');
    //invoking of the visible border function
    make_green(counter);
}

//
function loop() {
    for (var i = 0; i < (elements + 1); i++) {

        (function (i) {
            setTimeout(function () {
                make_blue(i + 1);
            }, 1000 * (i + 1));
        })(i);
    }
}

//here's where the functions are being called: 
//once to start the process immediately:
loop();
//when the first one finishes, second will start after interval 
setInterval(function () {
    loop()
}, elements * 1000);




$("#list div:nth-child(2)").mouseover(function () {
    $("#artwork-container").addClass("container");
    $("artwork").addClass("artwork");
});