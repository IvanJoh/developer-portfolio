const sgMail = require('@sendgrid/mail')

export default async function(req, res) {


    const {
        SENDER_EMAIL_ADDRESS,
        SENDGRID_API_KEY
    } = process.env;

    sgMail.setApiKey(SENDGRID_API_KEY)

    const { name = '', email = '', subject = '', message = '' } = req.body

    const content = {
    to: SENDER_EMAIL_ADDRESS,
    from: SENDER_EMAIL_ADDRESS,
    subject: `Web Developer Portfolio - ${subject} - ${name}`,
    text: message,
    html: `<p>${message}</p><br><br><p>The contact form user's email is ${email}</p>`
    }

    try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
    } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
}
}