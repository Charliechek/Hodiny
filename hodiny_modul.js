import { Hodiny } from "./Hodiny.js";

const hodinyElement = document.querySelector("#hodiny");

const hodiny = new Hodiny(hodinyElement, Hodiny.CIFERNIK_RIMSKY);

setInterval(aktualizujCas, 1000);

function aktualizujCas() {
    hodiny.nastavCas(new Date());
}
