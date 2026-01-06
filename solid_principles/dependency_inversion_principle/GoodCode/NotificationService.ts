import { EmailService } from "./EmailService.ts";
import type { NotificationMethod } from "./NotificationMethod.ts";
import { SMSService } from "./SMSService.ts";

class NotificationService {
  constructor(private method: NotificationMethod) {}

  public notify(message: string) {
    this.method.notify(message);
  }
}

const ns = new NotificationService(new SMSService())
ns.notify("Hello world")
