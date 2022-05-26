import { Cifernik } from "./Cifernik.js";

export class CifernikArabsky extends Cifernik
{
    cislice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    vykresli() {
        this._vykresliCisliceVodorovne();
        this._vykresliMinutoveCarky();
    }
}