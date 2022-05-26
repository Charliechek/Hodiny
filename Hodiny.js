import { Telo } from "./prvky/telo/Telo.js";
import { CifernikArabsky } from "./prvky/cifernik/CifernikArabsky.js";
import { CifernikRimsky } from "./prvky/cifernik/CifernikRimsky.js";
import { Hodinovka } from "./prvky/rucicky/Hodinovka.js";
import { Minutovka } from "./prvky/rucicky/Minutovka.js";
import { Sekundovka } from "./prvky/rucicky/Sekundovka.js";
import { Rozmery } from "./data/Rozmery.js";
import { Cas } from "./data/Cas.js";

export class Hodiny {
  
    static CIFERNIK_ARABSKY = CifernikArabsky;
    static CIFERNIK_RIMSKY = CifernikRimsky;

    #hodinyElement;
    #platno2D;
    #prvky;
    #rozmery;
    #cifernik;

    constructor(hodinyElement, cifernik = Hodiny.CIFERNIK_ARABSKY) {
        this.#hodinyElement = hodinyElement;
        this.#platno2D = this.#hodinyElement.getContext("2d");
        this.#rozmery = new Rozmery(hodinyElement);
        this.#cifernik = cifernik;
        this.#vytvorPrvky();
    }

    #vytvorPrvky() {
        this.#prvky = [
            new Telo(this.#platno2D, this.#rozmery),
            new this.#cifernik(this.#platno2D, this.#rozmery),
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