const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendWelcomeEmail (email, name) {
    console.log('a intrat in functie')
    sgMail.send({
        to: email,
        from: 'dragos.tode@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

function sendCancelationEmail(email, name) {
    sgMail.send({
        to: email,
        from: 'dragos.tode@gmail.com',
        subject: 'Sorry to see you go!',
        text: ` Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
