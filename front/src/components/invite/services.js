function templateEmail(emailOptions = {}, emailTemplate = {}, data = {}){
    const _ = require('lodash');
    const attributes = ['subject', 'text', 'html'];

    const missingAttributes = _.difference(attributes, Object.keys(emailTemplate));
    if (missingAttributes.length > 0) {
       throw new Error(`Following attributes are missing from your email template : ${missingAttributes.join(', ')}`);
    }

     const templatedAttributes = attributes.reduce((compiled, attribute) =>
        emailTemplate[attribute]
        ? Object.assign(compiled, { [attribute]: _.template(emailTemplate[attribute])(data) })
        : compiled, {});

    return { ...emailOptions, ...templatedAttributes };
}

async function emailSupport(invitee, campaign){
    if(invitee.user && invitee.role){
        //generic email template   
        var template = {
            subject: 'Welcome to campaign as the role <%= item.role%>',
            text: `Welcome to Then We Win!
            Your account can be linked with: <%= item.user %>.`,
            html: `<h1>Welcome to Then We Win!</h1>
            <p>Your account can be linked with: <%= item.user %>.<p>
            <p>check: <%= obj.campaign %></p>`,
        };

        //call to email templating function to substitute invite data into message
        var emailTemplate = templateEmail(
        {
            to: invitee.user,
            // from: is not specified, so it's the defaultFrom that will be used instead
        },
        template,
        {
            item: invitee,
            obj: campaign,
        }
        );
        //FOR TESTING PURPOSES - print the compiled template to the console
        console.log(emailTemplate);
        /*
        THIS CODE SENDS EMAIL WHEN BACK END SERVER IS UP AND SMTP ACTIVE

        var { data } = await axios.post('http://localhost:1337/email/', emailTemplate);
        */
    }
}

export default {
    emailSupport: emailSupport,
};