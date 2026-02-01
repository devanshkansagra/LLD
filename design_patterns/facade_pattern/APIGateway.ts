import { OrderService } from "./OrderService.js";
import { PaymentService } from "./PaymentService.js";
import { UserService } from "./UserService.js";

export class APIGateway {
    private us: UserService;
    private ps: PaymentService;
    private os: OrderService;

    constructor() {
        this.us = new UserService();
        this.ps = new PaymentService();
        this.os = new OrderService();
    }

    public processPayment() {
        this.us.login();
        this.os.createOrder();
        this.ps.makePayment();
    }
}