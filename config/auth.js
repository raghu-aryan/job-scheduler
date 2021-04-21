const nodemailer = require('nodemailer');

// setup transporter
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raguveer.bhopaly@gmail.com',
        pass: 'RBharti@5683'
    }
});
