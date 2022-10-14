let menesis;
menesis = + prompt("Iveskite menesio skaiciu");

let atsakymas = dienuSkaicius(menesis);
console.log (atsakymas);

function dienuSkaicius(menesioSkaicius){
    let menesioDienuSkaicius;
    switch (menesioSkaicius){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            menesioDienuSkaicius = 31;
            break;
        case 2:
            menesioDienuSkaicius = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            menesioDienuSkaicius = 30;
            break;
        default:
            menesioDienuSkaicius = "Tokio menesio nera";
    }
    return menesioDienuSkaicius;
}