// variabele aanmaken van de DOM
let strings = ["igeonism", "nformation", "allery", "xhibition", "pen call", "etwork", "hare"]
let pigeons = document.getElementById("pointer");

//functie voor het verticaal printen van de letters
function display_vert(word, nummer) {
    var temp = word.split("");
    var id = "dropdown" + nummer;
    console.log(id);
    for (var i = 0, len = temp.length; i < len; i++) {

        document.getElementById(id).insertAdjacentHTML(
            'beforeend',
            '<h1 class="letters">' + temp[i] + "<br />" + '</h1>',
        )
    }
}

pigeons.addEventListener("mouseover", function (event) {


    //code voor de verticale woorden
    var i = 0;
    var string = "";
    if (event.target && event.target.nodeName == "H1") {
        event.target.style.color = "red";
        //bepalen op welke letter we staan a.d.h.v. id

        let letter = event.target.id
        switch (letter) {
            case "p":
                string = strings[0];

                display_vert(string, "1");
                break;
            case "i":
                string = strings[1]
                display_vert(string, "2")
                break;
            case "g":
                string = strings[2]
                display_vert(string, "3")
                break;
            case "e":
                string = strings[3]
                display_vert(string, "4")
                break;
            case "o":
                string = strings[4]
                display_vert(string, "5")
                break;
            case "n":
                string = strings[5]
                display_vert(string, "6")
                break;
            case "s":
                string = strings[6]
                display_vert(string, "7")
                break;
            default:
                break;
        }

    }
})

function erase_dropdown(nummer) {

    var id = "dropdown" + nummer;
    document.getElementById(id).innerHTML = "";
}

pigeons.addEventListener("mouseout", function (event) {



    var i = 0;
    var string = "";

    if (event.target && event.target.nodeName == "H1") {
        event.target.style.color = "#fbf6d9";
        //bepalen op welke letter we staan a.d.h.v. id

        let letter = event.target.id
        switch (letter) {
            case "p":
                string = strings[0];

                erase_dropdown("1");
                break;
            case "i":
                string = strings[1]
                erase_dropdown("2")
                break;
            case "g":
                string = strings[2]
                erase_dropdown("3")
                break;
            case "e":
                string = strings[3]
                erase_dropdown("4")
                break;
            case "o":
                string = strings[4]
                erase_dropdown("5")
                break;
            case "n":
                string = strings[5]
                erase_dropdown("6")
                break;
            case "s":
                string = strings[6]
                erase_dropdown("7")
                break;
            default:
                break;
        }

    }
})