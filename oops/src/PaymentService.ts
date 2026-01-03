import { PaymentMethod } from "./PaymentMethod.ts";

export class PaymentService {

    public paymentMethods: Map<string, PaymentMethod>;
    constructor() {
        this.paymentMethods = new Map<string, PaymentMethod>
    }

    public addPaymentMethod(name: string, pm: PaymentMethod) {
        this.paymentMethods.set(name, pm); 
    }

    public makePayment(name: string) {
        this.paymentMethods.get(name)?.pay();
    }
}