// variabele aanmaken van de DOM
let strings = ["Pigeonism", "information", "gallery", "exhibition", "open call", "network", "share"]
let bullets = ["P", "i", "g", "e", "o", "n", "s"];
let pigeons = document.getElementById("pointer");

function display_hor(word, nummer) {
    console.log("Dit is het woord:" + word + " en id:" + nummer)
    var tata = document.getElementById(para)

    if (tata) {
        tata.innerText = word;
    } else {
        console.log("Het lukt niet om het element op te halen");

    }

}

pigeons.addEventListener("mouseover", function (event) {


    //code voor de horizontale woorden
    var i = 0;
    var string = "";
    if (event.target && event.target.nodeName == "A") {
        event.target.style.color = "red";
        //bepalen op welke letter we staan a.d.h.v. id
        // event.target.innerText = "haha";
        let letter = event.target.id
        switch (letter) {
            case "p":
                string = strings[0];
                display_hor(string, "1");
                event.target.innerText = string;

                break;
            case "i":
                string = strings[1]
                display_hor(string, "2")
                event.target.innerText = string;

                break;
            case "g":
                string = strings[2];
                display_hor(string, "3")
                event.target.innerText = string;

                break;
            case "e":
                string = strings[3]
                display_hor(string, "4")
                event.target.innerText = string;

                break;
            case "o":
                string = strings[4]
                display_hor(string, "5")
                event.target.innerText = string;

                break;
            case "n":
                string = strings[5]
                display_hor(string, "6")
                event.target.innerText = string;

                break;
            case "s":
                string = strings[6]
                display_hor(string, "7")
                event.target.innerText = string;

                bullets
            default:
                break;
        }

    }
})

pigeons.addEventListener("mouseout", function (event) {


    //code voor de horizontale woorden
    var i = 0;
    var string = "";
    if (event.target && event.target.nodeName == "A") {
        event.target.style.color = "#fbf6d9";
        //bepalen op welke letter we staan a.d.h.v. id
        // event.target.innerText = "haha";
        let letter = event.target.id
        switch (letter) {
            case "p":
                string = bullets[0];
                display_hor(string, "1");
                event.target.innerText = string;

                break;
            case "i":
                string = bullets[1]
                display_hor(string, "2")
                event.target.innerText = string;

                break;
            case "g":
                string = bullets[2];
                display_hor(string, "3")
                event.target.innerText = string;

                break;
            case "e":
                string = bullets[3]
                display_hor(string, "4")
                event.target.innerText = string;

                break;
            case "o":
                string = bullets[4]
                display_hor(string, "5")
                event.target.innerText = string;

                break;
            case "n":
                string = bullets[5]
                display_hor(string, "6")
                event.target.innerText = string;

                break;
            case "s":
                string = bullets[6]
                display_hor(string, "7")
                event.target.innerText = string;

                break;
            default:
                break;
        }

    }
})