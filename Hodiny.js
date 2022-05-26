import { Telo } from "./prvky/Telo.js";
import { Cifernik } from "./prvky/Cifernik.js";
import { Hodinovka } from "./prvky/Hodinovka.js";
import { Minutovka } from "./prvky/Minutovka.js";
import { Sekundovka } from "./prvky/Sekundovka.js";
import { Rozmery } from "./data/Rozmery.js";
import { Cas } from "./data/Cas.js";

export class Hodiny {
    
    static cislice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    #hodinyElement;
    #platno2D;
    #prvky;
    #rozmery;

    constructor(hodinyElement) {
        this.#hodinyElement = hodinyElement;
        this.#platno2D = this.#hodinyElement.getContext("2d");
        this.#rozmery = new Rozmery(hodinyElement);
        this.#vytvorPrvky();
    }

    #vytvorPrvky() {
        this.#prvky = [
            new Telo(this.#platno2D, this.#rozmery),
            new Cifernik(this.#platno2D, this.#rozmery),
            new Hodinovka(this.#platno2D, this.#rozmery),
            new Minutovka(this.#platno2D, this.#rozmery),
            new Sekundovka(this.#platno2D, this.#rozmery)
        ];
    }
    
    nastavCas(objektDatumACas) {
        this.#vymazPlatno();
        const cas = new Cas(objektDatumACas);
        this.#vykresliPrvky(cas);
    }

    #vymazPlatno() {
        this.#platno2D.beginPath();
        this.#platno2D.clearRect(0, 0, this.#hodinyElement.offsetWidth, this.#hodinyElement.offsetHeight);
    }

    #vykresliPrvky(cas) {
        this.#prvky.forEach(
            (prvek) => prvek.vykresli(cas)
        );
    }
}