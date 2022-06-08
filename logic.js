// variabele aanmaken van de DOM
let strings = ["pigeonism", "information", "gallery", "exhibition", "open call", "network", "share"]
let pigeons = document.getElementById("pointer");
//const textbox = document.getElementsByClassName("textbox");
pigeons.addEventListener("mouseover", function (event) {
    // event.target.style.color = "red";

    // let child = pigeons.querySelector('#p');
    // let child = pigeons.querySelector("span");
    // let id = child.id;
    // console.log(id);
    // console.log("l gevonden");
    // let letter = event.target.getElementsByTagName("span").id;
    // console.log(pigeons.);

    if (event.target && event.target.nodeName == "H1") {
        event.target.style.color = "red";
        let letter = event.target.id
        switch (letter) {
            case "p":
                console.log(strings[0])
                document.getElementById("textbox").innerHTML = strings[0];
                break;
            case "i":
                console.log(strings[1])
                document.getElementById("textbox").innerHTML = strings[1];
                break;
            case "g":
                console.log(strings[2])
                document.getElementById("textbox").innerHTML = strings[2];
                break;
            case "e":
                console.log(strings[3])
                document.getElementById("textbox").innerHTML = strings[3];
                break;
            case "o":
                console.log(strings[4])
                document.getElementById("textbox").innerHTML = strings[4];
                break;
            case "n":
                console.log(strings[5])
                document.getElementById("textbox").innerHTML = strings[5];
                break;
            case "s":
                console.log(strings[6])
                document.getElementById("textbox").innerHTML = strings[6];
                break;
            default:
                break;
        }
        // console.log("id is = " + event.target.id);
    }
})

// let pigeons = document.getElementById("pointer");
pigeons.addEventListener("mouseout", function (event) {
    event.target.style.color = "#fbf6d9";

    // let letter = event.target.getElementById;
    // console.log(letter);

})



// console.log("begin vd code werkt");
// let test = document.getElementById("test");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// // if (test) {
// test.addEventListener("mouseenter", function (event) {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";

//     // reset the color after a short delay
//     setTimeout(function () {
//         event.target.style.color = "";
//     }, 500);
// }, false);
// // }
// // This handler will be executed every time the cursor
// // is moved over a different list item
// // if (test) {
// test.addEventListener("mouseover", function (event) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";

//     // reset the color after a short delay
//     setTimeout(function () {
//         event.target.style.color = "";
//     }, 500);
// }, false);
// // }