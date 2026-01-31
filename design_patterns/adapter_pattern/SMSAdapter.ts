import type { NotificationAdapter } from "./NotificationAdapter.js";
import type { SMSService } from "./SMSService.js";

export class SMSAdapter implements NotificationAdapter {
  private smsService: SMSService;
  constructor(smsService: SMSService) {
    this.smsService = smsService;
  }
  send({ phone, message }: { phone: number; message: string }): void {
    this.smsService.sendSMS(phone, message);
  }
}
