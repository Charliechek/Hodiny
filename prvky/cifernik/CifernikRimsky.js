import { Cifernik } from "./Cifernik.js";

export class CifernikRimsky extends Cifernik
{
    cislice = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

    vykresli() {
        this._vykresliCislicePodUhlem();
        this._vykresliMinutoveCarky();
    }
}