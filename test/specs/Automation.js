const signIn = require('../pageobjects/signIn');
const signOut = require('../pageobjects/signOut');
const saveScreenshot = require('../pageobjects/screenshot');
const email = require('../pageobjects/sendEmail');
const variables = require('../pageobjects/variables');



describe('Log in to webmail seznam.cz', () => {
    before(()=>{
        browser.url('https://www.seznam.cz/')
    })
    
    it('sign in and sign out from main page', () => {
        
        signIn.signInprocess(variables.username, variables.passwordNumber)

        expect(signIn.success).toBeVisible()
        browser.pause()
        saveScreenshot('Succesfull_SignIn')
        
        browser.url('')

        signOut.signOutprocess()
        
        expect(signOut.btnName).toBeVisible()
        browser.pause(5000)
        saveScreenshot('Succesfull_SignOut')
    });
});

describe('send email from webmail seznam.cz', () => {
    before(()=>{
         browser.url('https://www.seznam.cz/')
     })
        
    it('send email', () => {

        signIn.signInprocess(variables.username, variables.passwordNumber)

        expect(signIn.success).toBeVisible()
        browser.pause()
        
        
        browser.url('https://email.seznam.cz/#compose')
        email.sendEmail(variables.adress, variables.subject, variables.text)
        $('/html/body/section/div[3]/button[1]').click()

        $('//*[@id="content"]/nav/div/div/div/ul[1]/li[2]/a/span').click
        let confirmation = $('[class="message-list no-folder"]')
        expect(confirmation).toBeDisplayed()

        browser.pause(3000)

        saveScreenshot('Email_test')

    });
     
});

