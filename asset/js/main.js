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

    // animation titre
        anime.timeline({loop: 1 })
        .add({
            targets: '.ml15 .word',
            scale: [14,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 800,
            delay: function(el, i) {
              return 800 * i;
            }
        }).add({
            targets: '.ml15',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
} 
