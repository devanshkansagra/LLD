import type { NotificationMethod } from "./NotificationMethod.ts";

export class SMSService implements NotificationMethod {
    public notify(message: string): void {
        console.log("Sending SMS Message: ", message);
    }
}