import { CreditCard } from "./CreditCard.ts";
import { PaymentService } from "./PaymentService.ts";
import { UPI } from "./UPI.ts";

const p1 = new PaymentService();
p1.addPaymentMethod("creditCard", new CreditCard(123456, "Devansh", 123))

p1.makePayment("creditCard");
p1.addPaymentMethod("upi", new UPI("devansh@okhdbcbank"))
p1.makePayment("upi");
