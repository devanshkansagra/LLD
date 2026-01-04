class PaymentService {
    public makePayment(paymentMethod: string, amount: string) {
        if(paymentMethod === "upi") {
            console.log("Making payment through upi")
        }
        else if(paymentMethod === "credit_card") {
            console.log("Making payment through Credit Card");
        }
        else if(paymentMethod === "debit_card") {
            console.log("Making payment through Debit card")
        }
    }
}