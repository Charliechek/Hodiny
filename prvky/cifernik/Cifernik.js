import { Prvek } from "../Prvek.js";

export class Cifernik extends Prvek
{
    vykresli() {
        this.#vykresliCislice();
        this.#vykresliMinutoveCarky();
    }

    #vykresliCislice() {
        for (let i = 0; i < 12; i++) {
            const uhel = (i + 1) * (360 / 12);
            const bod = this.vypocitejBod(uhel, this._rozmery.polomer * 3/4);
            this.#vykresliCislici(this.cislice[i], bod);
        }
    }
    
    #vykresliCislici(cislice, bod) {
        this._platno.beginPath();
        this._platno.font = this._rozmery.velikostPisma + "pt Arial";
        this._platno.textAlign = "center";
        this._platno.textBaseline = "middle";
        this._platno.fillText(cislice, bod.x, bod.y);
    }

    #vykresliMinutoveCarky() {
        const polomer = this._rozmery.polomer * 9/10;
        const delkaCarky = this._rozmery.polomer / 30;
        for (let i = 0; i < 60; i++) {
            const uhel = i * (360 / 60);
            const sirkaCarky = (i % 5 === 0) 
                ? this._rozmery.sirkaCaryTluste 
                : this._rozmery.sirkaCaryTenke;
            const bod1 = this.vypocitejBod(uhel, polomer);
            const bod2 = this.vypocitejBod(uhel, polomer + delkaCarky);
            this.vykresliCaru(bod1, bod2, sirkaCarky);
        }
    }
}