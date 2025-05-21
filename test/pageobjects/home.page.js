import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
        //await element.waitForClickable({ timeout: 10000 });//
        await element.click();//
    }

}

export default new HomePage();
