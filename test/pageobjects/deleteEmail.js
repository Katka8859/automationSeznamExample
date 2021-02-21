let deleteEmail = {
    get markEmail(){return $('//*[@id="list"]/div/div/ul/li[1]/label/span')},
    get deleteButton() { return $('//*[@id="content"]/header/div[3]/span[2]/button[5]')},


deletingProcess(){
    this.markEmail.click()
    this.deleteButton.click()
    }
}


module.exports = deleteEmail