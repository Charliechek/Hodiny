export class Hodiny {
    
    #cislice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    #bod = function (x, y) {
        this.x = Math.round(x);
        this.y = Math.round(y)
    };
    #hodinyElement;
    #platno2D;
    #polomer;
    #stred;
    #sirkaTlustychCar = 3;
    #sirkaTenkychCar = 1;
    #velikostPisma = 12;

    constructor(hodinyElement) {
        this.#hodinyElement = hodinyElement;
        this.#platno2D = this.#hodinyElement.getContext("2d");
        this.#polomer = Math.min(this.#hodinyElement.offsetHeight, this.#hodinyElement.offsetWidth) / 2;
        this.#stred = new this.#bod(this.#polomer, this.#polomer);
        this.#sirkaTenkychCar = Math.round(this.#polomer / 100);
        this.#sirkaTlustychCar = Math.round(this.#polomer / 30);
        this.#velikostPisma = Math.round(this.#polomer / 6);
    }
    
    nastavCas(objektDatumACas) {
        this.#vymazPlatno();
        this.#vykresliCifernik();
        const sekunda = objektDatumACas.getSeconds();
        const minuta = objektDatumACas.getMinutes();
        const hodina = objektDatumACas.getHours() + (minuta / 60);
        this.#vykresliHodinovku(hodina);
        this.#vykresliMinutovku(minuta);
        this.#vykresliSekundovku(sekunda); 
    }
    
    #vypocitejBod(uhel, polomer) {
        const prevedStupneNaRadiany = (uhel) => uhel * (Math.PI / 180);
        const x = this.#stred.x + Math.sin(prevedStupneNaRadiany(uhel)) * polomer;
        const y = this.#stred.y - Math.cos(prevedStupneNaRadiany(uhel)) * polomer;
        return new this.#bod(x, y);
    }

    #vymazPlatno() {
        this.#platno2D.beginPath();
        this.#platno2D.clearRect(0, 0, this.#hodinyElement.offsetWidth, this.#hodinyElement.offsetHeight);
    }
    
    #vykresliCifernik() {
        this.#vykresliKruh();
        this.#vykresliStred();
        this.#vykresliMinutoveCarky();
        this.#vykresliCislice();
    }

    #vykresliKruh() {
        this.#platno2D.beginPath();
        this.#platno2D.arc(this.#stred.x, this.#stred.y, this.#polomer - this.#sirkaTlustychCar, 0, 2 * Math.PI);
        this.#platno2D.lineWidth = this.#sirkaTlustychCar;
        this.#platno2D.stroke();
    }

    #vykresliStred() {
        this.#platno2D.beginPath();
        this.#platno2D.arc(this.#stred.x, this.#stred.y, this.#sirkaTlustychCar, 0, 2 * Math.PI);
        this.#platno2D.fill();
    }

    #vykresliMinutoveCarky() {
        const polomer = this.#polomer * 9/10;
        const delkaCarky = this.#polomer / 30;
        for (let uhel = 0; uhel < 360; uhel += 6) {
            const bod1 = this.#vypocitejBod(uhel, polomer);
            const bod2 = this.#vypocitejBod(uhel, polomer + delkaCarky);
            this.#vykresliMinutovouCarku(bod1, bod2);
        }
    }
    
    #vykresliMinutovouCarku(bod1, bod2) {
        this.#platno2D.beginPath();
        this.#platno2D.lineWidth = this.#sirkaTenkychCar;
        this.#platno2D.moveTo(bod1.x, bod1.y);
        this.#platno2D.lineTo(bod2.x, bod2.y);
        this.#platno2D.stroke();
    }

    #vykresliCislice() {
        this.#platno2D.beginPath();
        for (let i = 0; i < 12; i++) {
            const uhel = (i + 1) * (360 / 12);
            const bod = this.#vypocitejBod(uhel, this.#polomer * 3/4);
            this.#vykresliCislici(this.#cislice[i], bod);
        }
    }

    #vykresliCislici(cislice, bod) {
        this.#platno2D.font = this.#velikostPisma + "pt Arial";
        this.#platno2D.textAlign = "center";
        this.#platno2D.textBaseline = "middle";
        this.#platno2D.fillText(cislice, bod.x, bod.y);
    }

    #vykresliRucicku(uhel, delka, sirka = 1) {
        const bod = this.#vypocitejBod(uhel, delka);
        this.#platno2D.beginPath();
        this.#platno2D.moveTo(this.#stred.x, this.#stred.y);
        this.#platno2D.lineTo(bod.x, bod.y);
        this.#platno2D.lineWidth = sirka;
        this.#platno2D.stroke();
    }

    #vykresliHodinovku(hodina) {
        if (hodina < 0 || hodina > 23) {
            throw new Error("Hodina musí být číslo od 0 do 23.");
        }
        if (hodina > 11) {
            hodina -= 12;
        }
        const uhel = hodina * (360 / 12);
        const delka = this.#polomer * 1/2;
        const sirka = this.#sirkaTlustychCar;
        this.#vykresliRucicku(uhel, delka, sirka);
    }

    #vykresliMinutovku(minuta) {
        if (minuta < 0 || minuta > 59) {
            throw new Error("Minuta musí být číslo od 0 do 59.");
        }
        const uhel = minuta * (360 / 60);
        const delka = this.#polomer * 4/5;
        const sirka = this.#sirkaTlustychCar;
        this.#vykresliRucicku(uhel, delka, sirka);
    }

    #vykresliSekundovku(sekunda) {
        if (sekunda < 0 || sekunda > 59) {
            throw new Error("Sekunda musí být číslo od 0 do 59.");
        }
        const uhel = sekunda * (360 / 60);
        const delka = this.#polomer * 4/5;
        const sirka = this.#sirkaTenkychCar;
        this.#vykresliRucicku(uhel, delka, sirka);
    }
}