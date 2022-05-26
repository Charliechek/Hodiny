export class Cas
{
    sekunda;
    minuta;
    hodina;

    constructor(objektDatumACas) {
        this.sekunda = objektDatumACas.getSeconds();
        this.minuta = objektDatumACas.getMinutes();
        this.hodina = objektDatumACas.getHours() + (objektDatumACas.getMinutes() / 60);
        Object.freeze(this);
    }
}