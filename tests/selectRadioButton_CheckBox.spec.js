const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Select Radio button', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const userRadioButton = page.locator('input[value="user"]')
    await userRadioButton.click()
    const okayButton = page.locator('#okayBtn')
    await okayButton.click()
    console.log((userRadioButton).isChecked())
    await expect(userRadioButton).toBeChecked()
    // await page.pause()
})

test.only('Checkbox', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const checkbox = page.locator('#terms')
    await checkbox.click()
    await expect(checkbox).toBeChecked()
    await checkbox.uncheck()
    expect(await checkbox.isChecked()).toBeFalsy() /* await is after expect and action is performed inside the brackets*/
})