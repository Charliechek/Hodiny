import { Rucicka } from "./Rucicka.js";

export class Hodinovka extends Rucicka
{
    vykresli(cas) {
        const hodina = (cas.hodina > 11) ? cas.hodina - 12 : cas.hodina;
        const uhel = hodina * (360 / 12);
        const delka = this._rozmery.polomer * 1/2;
        const sirka = this._rozmery.sirkaCaryTluste;
        this.vykresliRucicku(uhel, delka, sirka);
    }
}