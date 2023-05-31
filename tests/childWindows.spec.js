const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Getting blinking text', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const blinkingText = page.locator('a[class="blinkingText"]')
    await expect(blinkingText).toHaveAttribute('class', 'blinkingText')
})

test('handling child window', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const link = page.locator('a[class="blinkingText"]')
    
   const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click(),
    ])

    const text = await newPage.locator('.red').textContent()
    console.log(text)
})

test.only('Typing domain in username of first page', async({browser}) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const newlink = page.locator('a[class="blinkingText"]')

    const [newPage] = await Promise.all([
       
        context.waitForEvent('page'),
        newlink.click(),
    ])
    
    const text = await newPage.locator('.red').textContent()
    const arrayText = text.split('@')

    const domain = arrayText[1].split(' ')[0]
    console.log(domain)
    await page.locator('#username').type(domain)
    // await page.pause()
    console.log(await page.locator('#username').textContent())
})