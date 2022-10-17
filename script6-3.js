let veiksmas;
veiksmas = prompt("Įveskite veiksmą");

let a;
a = + prompt("Įveskite pirmąjį skaičių");

let b;
b = + prompt("Įveskite antrąjį skaičių");

let atsakymas = skaiciavimas(a, veiksmas, b);
console.log(atsakymas);


function skaiciavimas (skaicius1, veiksmas, skaicius2){
    let veiksmoAtlikimas;
    switch (skaiciavimas){
        case "sudetis":
            return veiksmoAtlikimas = skaicius1 
            break;
        case "atimtis":
            veiksmoAtlikimas = skaicius1 - skaicius2;
            break;

        default:
            veiksmoAtlikimas = "Tokio veiksmo nėra";
    }
    return veiksmoAtlikimas;

}