import { Card } from "./Card.ts";
import { PaymentMethod } from "./PaymentMethod.ts";
export class DebitCard extends Card implements PaymentMethod {
    constructor(cardNo: Number, cardName: string, cvv: Number) {
        super(cardNo, cardName, cvv);
    }

    public pay(): void {
        console.log("Making payment through Debit Card");
    }
}