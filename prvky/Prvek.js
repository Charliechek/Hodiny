import { Bod } from "../data/Bod.js";

export class Prvek
{
    _platno;
    _rozmery;

    constructor(platno, rozmery) {
        this._platno = platno;
        this._rozmery = rozmery;
    }

    _prevedStupneNaRadiany(uhel) {
        return uhel * (Math.PI / 180);
    }

    _vypocitejBodNaKruznici(uhel, polomer) {
        const x = this._rozmery.stred.x + Math.sin(this._prevedStupneNaRadiany(uhel)) * polomer;
        const y = this._rozmery.stred.y - Math.cos(this._prevedStupneNaRadiany(uhel)) * polomer;
        return new Bod(x, y);
    }

    _vykresliCaru(bod1, bod2, sirka = 1) {
        this._platno.beginPath();
        this._platno.lineWidth = sirka;
        this._platno.moveTo(bod1.x, bod1.y);
        this._platno.lineTo(bod2.x, bod2.y);
        this._platno.stroke();
    }

    _otocObrazekOkoloStredu(uhel) {
        this._platno.translate(this._rozmery.stred.x, this._rozmery.stred.y);
        this._platno.rotate(this._prevedStupneNaRadiany(uhel));
        this._platno.translate(-this._rozmery.stred.x, -this._rozmery.stred.y);
    }
}