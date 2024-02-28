const nodemailer = require('nodemailer');

async function sendEmail (userEmail, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'mail.rabesoft.eu',
        // port: 587,
        auth: {
            user: process.env.AUTH_EMAIL_GMAIL,
            pass: process.env.AUTH_PASSWORD_GMAIL,
        }
        

    });


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Foodly - activation link - OTP for account verification',
        html: '<h1>OTP for account verification</h1><p>'+ otp +'</p>'
        
        
        
        
        
    };



    try {
        await transporter.sendMail(mailOptions);
        console.log('Veryfication Email sent successfully');


        
    } catch (error) {
        console.log('Error sending email: ', error.message);
        
    }



}


module.exports = sendEmail;