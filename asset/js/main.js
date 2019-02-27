window.onload = () => {

    //PopUp index.html
    var txt;
    var person = prompt("Allo, quel est ton nom?:");
    if (person == null || person == "") {
        txt = "Domage, tu n'as pas entré ton nom.";
    } else {
        txt = "Bonjour " + person + "! Comment ca va?";
    }
    document.getElementById("popUp").innerText = txt;
}