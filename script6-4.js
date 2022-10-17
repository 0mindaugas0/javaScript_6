let simtas;
simtas = + prompt("Įveskite šimtabalės sistemos balą");

let rezultatas = baloSkaiciavimas(simtas);
console.log(rezultatas);

function baloSkaiciavimas(skaicius){
    switch (true){
        case skaicius >= 90:
            return "A";
            break;
        case skaicius >= 80:
            return "B";
            break;
        case skaicius >= 70:
            return "C";
            break;
        case skaicius >= 60:
            return "D";
            break;
        case skaicius >= 40:
            return "E";
            break;
        case skaicius < 40:
            return "F";
            break;
        default:
        pavertimasIRaide = ("Tokio balo nėra!");
    }
   return pavertimasIRaide;
    
}