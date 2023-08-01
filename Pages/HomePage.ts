import { Page } from "@playwright/test"

export default class HomePage{

    constructor(public page:Page){

    }

    async AddtoCart(){
        await this.page.waitForTimeout(2000);
        // await this.page.click("//button[@name='add-to-cart-sauce-labs-backpack']");
        await this.page.click("button#add-to-cart-sauce-labs-backpack");

    }

    async AddtoCartBtn(){

        await this.page.click("//div[@id='shopping_cart_container']//a[1]");
    }

}    