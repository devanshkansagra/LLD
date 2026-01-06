import type { NotificationMethod } from "./NotificationMethod.ts";

export class EmailService implements NotificationMethod {
    public notify(message: string): void {
        console.log("Sending Email Message: ", message);
    }
}