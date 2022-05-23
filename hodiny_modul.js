import { Hodiny } from "./Hodiny.js";

const hodinyElement = document.querySelector("#hodiny");

const hodiny = new Hodiny(hodinyElement);

setInterval(aktualizujCas, 1000);

function aktualizujCas() {
    const datum = (new Date());
    hodiny.nastavCas(datum);
}
