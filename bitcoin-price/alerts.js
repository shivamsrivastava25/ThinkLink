const nodemailer = require("nodemailer");
const config = require("./config");

exports.Alert = (price, lower) => {
    try {
        const smtpEndpoint = "smtp.mailtrap.io"; 
        
        const port = 2525;

        const senderAddress = `${config.Name} <${config.Email}>`;

        var toAddress = "shivam.25061@gmail.com";

        const smtpUsername = config.SENDGRID_USERNAME;

        const smtpPassword = config.SENDGRID_PASSWORD;

        var subject = "Bitcoin Update";
        if (lower){
            var bodyText =  "Bitcoin price drops below the min limit set : " + price;
        }
        else{
            var bodyText =  "Bitcoin price jumps higher than max limit set : " + price;
        }
        

        let transporter = nodemailer.createTransport({
        host: smtpEndpoint,
        port: port,
        auth: {
            user: smtpUsername,
            pass: smtpPassword,
        },
        });

        let mailOptions = {
        from: senderAddress,
        to: toAddress,
        subject: subject,
        text: bodyText,
        };

        transporter.sendMail(mailOptions);  
        
        return { error: false };

    } 
    catch (error) {
        console.error("send-email-error", error);
        return {
        error: true,
        message: "Couldn't send email",
        };
    }
};