let pulsante = document.getElementById("spazz");
let spazzatura = document.getElementById("spazzatura");
let foto = document.getElementById("corgi-faccia");
let passeggiate = document.getElementById("passeggiate");

pulsante.addEventListener("click", event => {
    if (spazzatura.innerHTML === "Usciamo") {
        spazzatura.innerHTML = "Buttare la spazzatura"
    } else {spazzatura.innerHTML="Usciamo";
    }
});

passeggiate.addEventListener("click", event => {
    passeggiate.style.display="none";
    foto.style.display="block";
});

