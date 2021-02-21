const signIn = require('../pageobjects/signIn');
const signOut = require('../pageobjects/signOut');
const saveScreenshot = require('../pageobjects/screenshot');
const email = require('../pageobjects/sendEmail');
const variables = require('../pageobjects/variables');
const deleteEmail = require('../pageobjects/deleteEmail')
const buttons = require('../pageobjects/buttons')




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
        browser.pause(3000)
        saveScreenshot('Succesfull_SignOut')
    });
});

describe('Email functions', () => {
    beforeEach(()=>{
         browser.url('https://www.seznam.cz/')
         signIn.signInprocess(variables.username, variables.passwordNumber)
     })
        
    it('Send email', () => {        
        
        buttons.writeEmailBtn.click()
        email.sendEmail(variables.adress, variables.subject, variables.text)
        buttons.sendingButton.click()

        buttons.sentButton.click()
        let confirmation = $('[class="message-list no-folder"]')
        expect(confirmation).toBeDisplayed()

        browser.pause(3000)

        saveScreenshot('Email_test')
        

    });
        
    it('Deleting of five emails', () => {

        for(let i = 0; i<=5;i++){
        deleteEmail.deletingProcess()
        browser.pause(1000)
        }
        
        browser.pause(3000)
        saveScreenshot('Delete')
        
        buttons.trashButton.click()

        let deleteConfirmation = $('//*[@id="list"]/div/div/ul/li[1]/a[1]')
        expect(deleteConfirmation).toBeVisible()
        browser.pause(2000)
        
    });
    afterEach(()=>{
        browser.url('')
        signOut.signOutprocess()
    })
     
});

