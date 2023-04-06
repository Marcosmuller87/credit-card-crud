export class CreditCard {
    id?: number;
    name: string;
    number: string;
    expiration: string;
    cvv: string;
    creation: Date;
    lastUpdate: Date;

    constructor(name: string, number: string, expiration: string, cvv: string) {
        this.name = name;
        this.number = number;
        this.expiration = expiration;
        this.cvv = cvv;
        this.creation = new Date();
        this.lastUpdate = new Date();
    }
}