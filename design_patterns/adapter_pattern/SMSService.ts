export class SMSService {
    sendSMS(phone: number, message: string) {
        console.log(`
            Sending SMS Vis Phone Number
            Phone: ${phone}
            Message: ${message}
        `)
    }
}