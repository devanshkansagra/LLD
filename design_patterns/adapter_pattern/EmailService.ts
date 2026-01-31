export class EmailService {
    public sendEmail(from: string, to: string, subject: string, body: string) {
        console.log(`
            From: ${from}
            To: ${to}
            Subject: ${subject}
            Body: ${body}
        `)
    }
}