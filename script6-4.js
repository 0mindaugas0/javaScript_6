let simtas;
simtas = + prompt("Įveskite šimtabalės sistemos balą");

let rezultatas = baloSkaiciavimas(simtas);
console.log(rezultatas);

function baloSkaiciavimas(skaicius){
    let pavertimasIRaide;
    switch (skaicius){
        case 40 < 40:
        console.log("F");
        break;
        default:
        pavertimasIRaide = ("Tokio balo nėra!");
    }
   return pavertimasIRaide;
    
}