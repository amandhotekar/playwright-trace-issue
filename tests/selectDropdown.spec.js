const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

    test('Select static dropdown', async({page}) => {
        
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        const dropdown = page.locator('select.form-control')
        console.log(await dropdown.selectOption('consult'))
        // await page.pause()
    })