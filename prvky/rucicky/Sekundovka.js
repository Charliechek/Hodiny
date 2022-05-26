import { Rucicka } from "./Rucicka.js";

export class Sekundovka extends Rucicka
{
    vykresli(cas) {
        const uhel = cas.sekunda * (360 / 60);
        const delka = this._rozmery.polomer * 4/5;
        const sirka = this._rozmery.sirkaCaryTenke;
        this.vykresliRucicku(uhel, delka, sirka);
    }
}