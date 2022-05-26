import { Prvek } from "../Prvek.js";
import { Bod } from "./../../data/Bod.js";

export class Cifernik extends Prvek
{
    _vykresliCisliceVodorovne() {
        for (let i = 0; i < 12; i++) {
            const uhel = (i + 1) * (360 / 12);
            const bod = this._vypocitejBodNaKruznici(uhel, this._rozmery.polomer * 3/4);
            this._vykresliCislici(this.cislice[i], bod);
        }
    }

    _vykresliCislicePodUhlem() {
        const bod = new Bod(this._rozmery.polomer, this._rozmery.polomer * 1/4);
        const uhel = 360 / 12;
        this._platno.save();
        for (let i = 0; i < 12; i++) {
            this._otocObrazekOkoloStredu(uhel);
            this._vykresliCislici(this.cislice[i], bod);
        }
        this._platno.restore();
    }
    
    _vykresliCislici(cislice, bod) {
        this._platno.beginPath();
        this._platno.font = this._rozmery.velikostPisma + "pt Arial";
        this._platno.textAlign = "center";
        this._platno.textBaseline = "middle";
        this._platno.fillText(cislice, bod.x, bod.y);
    }

    _vykresliMinutoveCarky() {
        const polomer = this._rozmery.polomer * 9/10;
        const delkaCarky = this._rozmery.polomer / 30;
        for (let i = 0; i < 60; i++) {
            const uhel = i * (360 / 60);
            const sirkaCarky = (i % 5 === 0) 
                ? this._rozmery.sirkaCaryTluste 
                : this._rozmery.sirkaCaryTenke;
            const bod1 = this._vypocitejBodNaKruznici(uhel, polomer);
            const bod2 = this._vypocitejBodNaKruznici(uhel, polomer + delkaCarky);
            this._vykresliCaru(bod1, bod2, sirkaCarky);
        }
    }
}