class Invoice {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public getInvoiceData() {
        return this.amount;
    }
    
}

class InvoiceService {

    constructor(public db: DatabaseService, public n: NotificationService) {}
    public generateInvoice(i:Invoice) {
        console.log("Generating the invoice");
        this.db.saveToDatabase(i.getInvoiceData());
        this.n.sendNotificationEmail("New invoice created")
    }
}

class NotificationService {
    constructor() {}

    public sendNotificationEmail(message: string) {
        console.log(message);
    }
}

class DatabaseService {
    constructor() {}

    public saveToDatabase(amount: number) {
        console.log("Amount: " , amount, " saved to the databse");
    }
}