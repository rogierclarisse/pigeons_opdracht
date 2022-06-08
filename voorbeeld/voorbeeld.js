let pigeons = document.getElementById("pointer");

pigeons.addEventListener("mouseover", function (event) {
    if (event.target && event.target.nodeName == "A") {
        event.target.style.color = "red";
    }
});