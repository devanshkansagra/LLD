class Invoice {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount
    }

    public generateInvoice() {
        console.log("Generating the invoice");
    }

    // Unnecessary functions of this class
    public saveToDatabase() {
        console.log("Saving invoice to database");
    }

    public sendEmailNotification() {
        console.log("Sending email through Invoice");
    }
}