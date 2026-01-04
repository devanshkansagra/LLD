interface PaymentMethod {
    pay(amount: number): void;
}

class PaymentService {
    public makePayment(p: PaymentMethod, amount: number) {
        p.pay(amount)
    }
}

class CreditCard implements PaymentMethod {
    constructor() {}

    public pay(amount: number): void {
        console.log(`You paid ${amount} through Credit Card`);
    }
}
class DebitCard implements PaymentMethod {
    constructor() {}

    public pay(amount: number): void {
        console.log(`You paid ${amount} through Debit Card`);
    }
}

// I just need to add new classes which implements PaymentMethod interface

const c = new CreditCard();
const d = new DebitCard();
const ps = new PaymentService();
ps.makePayment(c, 1000);
ps.makePayment(d, 2000);