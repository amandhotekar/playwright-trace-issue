const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Product purchase flow', async({page}) => {
     
    const userName = page.locator('#userEmail')
    const password = page.locator('#userPassword')
    const login = page.locator('#login')
    const products = page.locator('.card-body')
    const productName = 'zara coat 3'
    const cartButton = page.locator("[routerlink*='cart']")
    const cartProduct = page.locator("h3:has-text('zara coat 3')")
    const list = page.locator('div li')

    await page.goto('https://rahulshettyacademy.com/client')
    await userName.type('aman1@gmail.com')
    await password.type('Playwright@1')
    await login.click()
    await page.waitForLoadState('networkidle')

    const count = await products.count()
    for(let i=0; i<count; ++i)
    {
        if(await products.nth(i).locator('b').textContent() === productName)
        {
            await products.nth(i).locator('text=Add To Cart').click()
            break;
        }
    }
    await cartButton.click()
    await list.first().waitFor()
    const bool = await cartProduct.isVisible()
    expect(bool).toBeTruthy()

    await page.pause()

})