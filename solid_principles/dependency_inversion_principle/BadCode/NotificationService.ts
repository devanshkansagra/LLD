import  { EmailService } from "./EmailService.ts";
import { SMSService } from "./SMSService.ts";
class NotificationService {

    private es: EmailService;
    private sms: SMSService;
    constructor() {
        this.es = new EmailService();
        this.sms = new SMSService();
    }
    public sendEmail(message: string) {
        this.es.sendEmail(message);
    }

    public sendSMS(message: string) {
        this.sms.sendSMS(message);
    }
}