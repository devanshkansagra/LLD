import { EmailAdapter } from "./EmailAdapter.js";
import { EmailService } from "./EmailService.js";
import { SMSAdapter } from "./SMSAdapter.js";
import { SMSService } from "./SMSService.js";

const es = new EmailAdapter(new EmailService());
es.send({
  from: "abc@xyz.com",
  to: "pqr@def.com",
  subject: "Profile Status",
  body: "Congratulations Your profile has be created successfully",
});

const sms = new SMSAdapter(new SMSService());
sms.send({phone: 9879879871, message:"Your bill is due tomorrow"})
