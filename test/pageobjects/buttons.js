let buttons = {
    get trashButton() { return $('//*[@id="content"]/nav/div/div/div/ul[1]/li[7]/a/span')},
    get sendingButton() {return $('/html/body/section/div[3]/button[1]')},
    get sentButton(){return $('//*[@id="content"]/nav/div/div/div/ul[1]/li[2]/a/span')},
    get writeEmailBtn(){return $('//*[@id="content"]/nav/div/div/a[2]')},
}

module.exports = buttons