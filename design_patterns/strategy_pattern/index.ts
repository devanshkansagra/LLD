interface PaymentMethod {
  pay(amount: number): void;
}

class PaymentService {
  public processPayment(amt: number, pm: PaymentMethod) {
    pm.pay(amt);    // Runtime polymorphism
  }
}

class DebitCard implements PaymentMethod {
    public pay(amount: number) {
        console.log(`Amount ${amount} is paid through Debit Card`);
    }
}
class CreditCard implements PaymentMethod {
    public pay(amount: number) {
        console.log(`Amount ${amount} is paid through Credit Card`);
    }
}
class UPI implements PaymentMethod {
    public pay(amount: number) {
        console.log(`Amount ${amount} is paid through UPI`);
    }
}

const d = new DebitCard();
const p = new PaymentService();
const c = new CreditCard();
const u = new UPI();
p.processPayment(100, d);
p.processPayment(200, c);
p.processPayment(300, u);
