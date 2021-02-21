let signIn = {
    get firstName(){return $('//*[@id="boxik-184"]/div/div/div[3]/div/form/div[1]/label/input')},
    get password() { return $('//*[@id="boxik-184"]/div/div/div[3]/div/form/div[2]/div/label/input')},
    get btnConfirm(){return $('//*[@id="boxik-184"]/div/div/div[3]/div/form/div[2]/div/button')},
    get success(){return $('button.popup.users.plain')},
    
    signInprocess(username, passwordNumber){
        this.firstName.setValue(username)
        this.password.setValue(passwordNumber)
        this.btnConfirm.click()

    }
  }
 
  
  module.exports = signIn