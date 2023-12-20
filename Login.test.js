import { Builder, By, Key, until } from 'selenium-webdriver'

(async function loginTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get('https://os-collab.vercel.app/auth/login');
        await driver.sleep(1000)
        await driver.findElement(By.id('email')).sendKeys('moiz.dev80@gmail.com');
        await driver.sleep(1000)
        await driver.findElement(By.id('password')).sendKeys('Helloworld1!');
        await driver.sleep(1000)
        let loginButton = await driver.findElement(By.xpath("/html/body/div/div[2]/div/form/div/div[3]/button"));
        await loginButton.click();
        await driver.sleep(2000)

        let expectedUrl = 'https://os-collab.vercel.app/dashboard';
        await driver.sleep(2000)
        const result = driver.wait(until.urlContains(expectedUrl), 10000);
        if (result) {
            console.log('===>>>> Test passed');
        } else {
            console.log("===>>>> Test failed")
        }
        await driver.sleep(2000)



    } finally {
        await driver.sleep(1000)
        await driver.quit();
        await driver.sleep(4000)
    }

})();



