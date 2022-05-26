import { Bod } from "../data/Bod.js";

export class Prvek
{
    _platno;
    _rozmery;

    constructor(platno, rozmery) {
        this._platno = platno;
        this._rozmery = rozmery;
        Object.freeze(this);
    }

    vypocitejBod(uhel, polomer) {
        const prevedStupneNaRadiany = (uhel) => uhel * (Math.PI / 180);
        const x = this._rozmery.stred.x + Math.sin(prevedStupneNaRadiany(uhel)) * polomer;
        const y = this._rozmery.stred.y - Math.cos(prevedStupneNaRadiany(uhel)) * polomer;
        return new Bod(x, y);
    }

    vykresliCaru(bod1, bod2, sirka = 1) {
        this._platno.beginPath();
        this._platno.lineWidth = sirka;
        this._platno.moveTo(bod1.x, bod1.y);
        this._platno.lineTo(bod2.x, bod2.y);
        this._platno.stroke();
    }
}