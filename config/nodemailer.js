import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'hassanjarko55@gmail.com',
        pass:'afklwzqhacyewjyr'
    }
});

export const mailOptions = {
    from:'hassanjarko55@gmail.com',
    to:'hassan.jarko@yahoo.com'
}