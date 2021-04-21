const auth = require('./auth');

module.exports.send_email = (email, subject, message) => {
    const transporter = auth.transporter;
    var mailOptions = {
        from: 'raguveer.bhopaly@gmail.com',
        to: email,
        subject: subject,
        html: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return false
        } else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });
}