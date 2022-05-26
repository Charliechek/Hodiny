import { Bod } from "./Bod.js";

export class Rozmery
{
    polomer;
    stred;
    sirkaCaryTluste;
    sirkaCaryTenke;
    velikostPisma;

    constructor(hodinyElement) {
        this.polomer = Math.min(hodinyElement.offsetHeight, hodinyElement.offsetWidth) / 2;
        this.stred = new Bod(this.polomer, this.polomer);
        this.sirkaCaryTluste = Math.round(this.polomer / 30);
        this.sirkaCaryTenke = Math.round(this.polomer / 100);
        this.velikostPisma = Math.round(this.polomer / 6);
        Object.freeze(this);
    }
}