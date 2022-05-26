import { Prvek } from "../Prvek.js";

export class Rucicka extends Prvek
{
    _vykresliRucicku(uhel, delka, sirka = 1) {
        const bod = this._vypocitejBodNaKruznici(uhel, delka);
        this._vykresliCaru(this._rozmery.stred, bod, sirka);
    }
}