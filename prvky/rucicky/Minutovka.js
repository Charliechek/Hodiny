import { Rucicka } from "./Rucicka.js";

export class Minutovka extends Rucicka
{
    vykresli(cas) {
        const uhel = cas.minuta * (360 / 60);
        const delka = this._rozmery.polomer * 4/5;
        const sirka = this._rozmery.sirkaCaryTluste;
        this._vykresliRucicku(uhel, delka, sirka);
    }
}