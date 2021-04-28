const nodemailer = require('nodemailer');

// setup transporter
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    //port: 465,
    //secure: true,
    auth: {
        user: 'er.raghuaryan@gmail.com',
        pass: 'Raghu@123!'
    }
});
