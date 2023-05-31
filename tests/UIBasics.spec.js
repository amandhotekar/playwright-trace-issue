const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Browser context playwright test', async ({browser, page}) =>
{
    // chrome - plugins/ cookies
    // const context = await browser.newContext()
    // const page = await context.newPage()
    await page.goto("https://google.com");
});

test('Page playwright test', async ({page}) =>
{
    await page.goto("https://google.com");
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
});

test('Rahul Shetty Page, incorrect creds', async({browser}) =>
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())
    await page.locator('#username').type('rahulshettyacadem')
    await page.locator('#password').type('learning')
    await page.locator('#signInBtn').click()
    console.log(await page.locator('[style*="block"]').textContent())
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect')
})

test('Use of type/fill function and using const for elements', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#username')
    const password = page.locator('#password')
    const signIn = page.locator("#signInBtn")

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.type("rahulshetty")
    await password.type("learn")
    await signIn.click()
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await password.fill("")
    await password.fill("learning")
    await signIn.click()
})

test('Finding iphoneX ans samsung', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#username')
    const password = page.locator('#password')
    const signIn = page.locator('#signInBtn')

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.type('rahulshettyacademy')
    await password.type('learning')
    await signIn.click()
    console.log(await page.locator(".card-body a").first().textContent())
    console.log(await page.locator(".card-body a").nth(1).textContent())
}) 

test.only('Getting the titles of all mobile titles', async({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator('#username')
    const password = page.locator('#password')
    const signIn = page.locator('#signInBtn')
    const cardTitles = page.locator('.card-body a')

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await userName.type('rahulshettyacademy')
    await password.type('learning')
    await signIn.click()

    await Promise.all(
        [
            page.waitForNavigation(),
            signIn.click(),
        ]
    )
    // console.log(await page.locator(".card-body a").first().textContent())
    //*(not a service oriented website, so the below line won't work)*//
    // await page.waitForLoadState('networkidle')
    const allTitles = await cardTitles.allTextContents()
    console.log(allTitles)
})