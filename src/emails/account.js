const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sayyedmaroof9@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with this app`
    })
}


const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sayyedmaroof9@gmail.com',
        subject: 'Felling so bad that you are getting back',
        text: `Hey dear customer!, ${name}. Please let us know why are you deleting your account`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
