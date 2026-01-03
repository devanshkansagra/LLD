import { PaymentMethod } from "./PaymentMethod.ts";

export class UPI implements PaymentMethod {
    private upiId: string;
    constructor(upiId: string) {
        this.upiId = upiId
    } 

    public pay(): void {
        console.log("Making Payment through upi");
    }
}