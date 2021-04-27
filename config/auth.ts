var nodemailer = require('nodemailer');

// setup transporter
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'er.raghuaryan@gmail.com',
        pass: 'Raghu@123!'
    }
});
