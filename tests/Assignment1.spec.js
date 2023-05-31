const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Title of first product', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#userEmail')
    const password = page.locator('#userPassword')
    const login = page.locator('#login')
    const product = page.locator('.card-body b')

    await page.goto('https://rahulshettyacademy.com/client')
    await userName.type('aman1@gmail.com')
    await password.type('Playwright@1')
    await login.click()
    console.log(await product.first().textContent())
})

test.only('Title of all products', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#userEmail')
    const password = page.locator('#userPassword')
    const login = page.locator('#login')
    const product = page.locator('.card-body b')

    await page.goto('https://rahulshettyacademy.com/client')
    await userName.type('aman1@gmail.com')
    await password.type('Playwright@1')
    await login.click()
    await page.waitForLoadState('networkidle')
    const titles = await product.allTextContents()
    console.log(titles)

})