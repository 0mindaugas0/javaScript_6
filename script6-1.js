let skaicius;
skaicius = + prompt("Iveskite menesio skaiciu");

let menuo = menesioPavadinimas(skaicius);
alert(menuo);

function menesioPavadinimas(menesioSkaicius){
    let menesis;
    switch (menesioSkaicius){
        case 1:
            menesis = "Sausis";
            break;
        case 2:
            menesis = "Vasaris";
            break;
        case 3:
            menesis = "Kovas";
            break;
        case 4:
            menesis = "Vasaris";
            break;
        case 5:
            menesis = "Geguze";
            break;
        case 6:
            menesis = "Birzelis";
            break;
        case 7:
            menesis = "Liepa";
            break;
        case 8:
            menesis = "Rugpjutis";
            break;
        case 9:
            menesis = "Rugsejis";
            break;
        case 10:
            menesis = "Spalis";
            break;
        case 11:
            menesis = "Lapkritis";
            break;
        case 12:
            menesis = "Gruodis";
            break;
        default:
            menesis = "Tokio menesio nera!";
            break;
    }
    return menesis;
}
