const auth = require('./auth'); 


export const send_email = (email: String, subject: String, message: String) => {
    const transporter = auth.transporter;
    var mailOptions = {
        from: 'er.raghuaryan@gmail.com',
        to: email,
        subject: subject,
        html: message,
    };
    transporter.sendMail(mailOptions, function (error: [], info: []) {
        if (error) {
            console.log(error);
            return false
        } else {
            console.log('Email sent: ');
            return true;
        }
    });
}