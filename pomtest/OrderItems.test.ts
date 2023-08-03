import {expect, test} from "@playwright/test"


import LoginPage from "../Pages/Login"
import HomePage  from "../Pages/HomePage"
import YourCart from "../Pages/Yourcart"
import YourInformation from "../Pages/YourInformation"
import CheckoutOverview from "../Pages/CheckoutOverview"
import Logout from "../Pages/Logout"

const username = "standard_user";
const password = "secret_sauce";
const firstname ="Vigneswaran";
const lastname = "Rajababu";
const postalcode = "6600755";

test.describe.serial("Page Object model - Saucedemo website",async() => {

    
    test("Login to saucedemo website",async ({page, baseURL}) => {

        const login = new LoginPage(page);
        
         await page.goto(`${baseURL}`)
        //  its used in constructor class page
         await login.enterUsername(username);
         await login.enterPassword(password);
         await login.loginButton();
        //  expect(await page.title).toBe("Swag Labs");
     
     })
     
     test("Add to cart",async ({page, baseURL}) => {
        const login = new LoginPage(page);
         const homepage = new HomePage(page);
         const addToCart = new YourCart(page);
        //  await page.goto("https://www.saucedemo.com/inventory.html");
         await page.goto(`${baseURL}`)
        //  await login.enterUsername(username);
        //  await login.enterPassword(password);
        //  await login.loginButton();
        await login.login(username,password);
         await page.waitForTimeout(3000);
         await homepage.AddtoCart();
         await homepage.AddtoCartBtn();
         await addToCart.yourCart();
         
     })
     
     test("user information",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const userinformation = new YourInformation(page)
     
         await page.goto(`${baseURL}`)
         await login.login(username,password);
         await page.goto('https://www.saucedemo.com/checkout-step-one.html')
         await userinformation.enterFirstName(firstname);
         await userinformation.enterLastName(lastname);
         await userinformation.postalCode(postalcode);
     
     })
     
     test("Checkout Overview",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const Checkoutoverview = new CheckoutOverview(page)
     
         await page.goto(`${baseURL}`)
         await login.login(username,password);
         await page.goto('https://www.saucedemo.com/checkout-step-two.html')
         await Checkoutoverview.ClickFininsh();
         await Checkoutoverview.BackToHome();
     })
     /**
     * This test case will be the used for 
     * logout from website.
     */
     
     test("Logout",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const weblogout = new Logout(page)
     
         await page.goto(`${baseURL}`)
         await login.login(username,password);
         await page.goto('https://www.saucedemo.com/checkout-step-two.html')
         await weblogout.ClickOption();
         await weblogout.logoutBtn();
     
     })

})





