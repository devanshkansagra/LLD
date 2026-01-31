import type { EmailService } from "./EmailService.js";
import type { NotificationAdapter } from "./NotificationAdapter.js";

export class EmailAdapter implements NotificationAdapter {
  private emailService: EmailService;
  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }
  send({
    from,
    to,
    subject,
    body,
  }: {
    from: string;
    to: string;
    subject: string;
    body: string;
  }): void {
    this.emailService.sendEmail(from, to, subject, body);
  }
}
