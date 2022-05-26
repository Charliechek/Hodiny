import { Prvek } from "./Prvek.js";

export class Rucicka extends Prvek
{
    vykresliRucicku(uhel, delka, sirka = 1) {
        const bod = this.vypocitejBod(uhel, delka);
        this.vykresliCaru(this._rozmery.stred, bod, sirka);
    }
}