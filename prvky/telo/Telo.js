import { Prvek } from "../Prvek.js";

export class Telo extends Prvek
{
    vykresli() {
        this.#vykresliKruh();
        this.#vykresliStred();
    }

    #vykresliKruh() {
        this._platno.beginPath();
        this._platno.arc(
            this._rozmery.stred.x, 
            this._rozmery.stred.y, 
            this._rozmery.polomer - this._rozmery.sirkaCaryTluste, 
            0, 
            2 * Math.PI
        );
        this._platno.lineWidth = this._rozmery.sirkaCaryTluste;
        this._platno.stroke();
    }

    #vykresliStred() {
        this._platno.beginPath();
        this._platno.arc(
            this._rozmery.stred.x, 
            this._rozmery.stred.y, 
            this._rozmery.sirkaCaryTluste, 
            0, 
            2 * Math.PI
        );
        this._platno.fill();
    }
}