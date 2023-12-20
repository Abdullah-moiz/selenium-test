import { Builder, By, Key, until } from 'selenium-webdriver'

(async function loginTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get('https://os-collab.vercel.app/auth/login');
        await driver.sleep(1000)
        await driver.findElement(By.id('email')).sendKeys('test@ok.com');
        await driver.sleep(1000)
        await driver.findElement(By.id('password')).sendKeys('testPassword');
        await driver.sleep(1000)
        let loginButton = await driver.findElement(By.xpath("/html/body/div/div[2]/div/form/div/div[3]/button"));
        await loginButton.click();
        await driver.sleep(2000)

        // Find the toast alert and get its text
        let toast = await driver.findElement(By.xpath("/html/body/section/ol/li"));
        let toastText = await toast.getText();

        await driver.sleep(2000)
        // Verify the toast's text
        if (toastText === 'Please create an Account first !') {
            console.log('===>>>> Test passed');
        } else {
            console.log('===>>> Test failed');
        }

    } finally {
        await driver.sleep(1000)
        await driver.quit();
        await driver.sleep(4000)
    }

})();



