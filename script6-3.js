let veiksmas;
veiksmas = prompt("Įveskite veiksmą");

let a;
a = + prompt("Įveskite pirmąjį skaičių");

let b;
b = + prompt("Įveskite antrąjį skaičių");

let atsakymas = skaiciavimas(veiksmas, a, b);
alert (atsakymas);


function skaiciavimas (veiksmas, skaicius1, skaicius2){
    switch (veiksmas){
        case "sudetis":
            return skaicius1 + skaicius2;
            break;
        case "atimtis":
            return skaicius1 - skaicius2;
            break;
        case "daugyba":
            return skaicius1 * skaicius2;
            break;
        case "dalyba":
            return skaicius1 / skaicius2;
            break;
        default:
            alert ("Tokio veiksmo nėra");
    }
    return skaiciavimas;
}