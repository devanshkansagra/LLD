export class Card {
    private cardNo: Number;
    private cardName: string;
    private cvv: Number;

    constructor(cardNo: Number, cardName: string, cvv: Number) {
        this.cardNo = cardNo;
        this.cardName = cardName
        this.cvv = cvv;
    }

    public getCardDetails(): string {
        return `
            Card Name: ${this.cardName}\n
            Card Number: ${this.cardNo}\n
            CVV: ${this.cvv}
        `
    }
}