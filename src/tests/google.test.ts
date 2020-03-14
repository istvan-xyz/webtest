import { test, step, setLaunchOptions } from '..';

// eslint-disable-next-line no-undef
jest.setTimeout(360000);

setLaunchOptions({
    // headless: false,
    // devtools: true,
    // slowMo: 10,
});

test('google search', async context => {
    const { page } = context;
    await step('open google', context, async () => {
        await page.goto('https://google.com/');
    });
    await step('search for "playwright github"', context, async () => {
        const searchBox = await page.$('input[title="Search"]');
        if (!searchBox) {
            throw new Error('searchBox not found');
        }
        await searchBox.type('playwright github');
        await page.keyboard.press('Enter');
        await page.waitForSelector('a[href="https://github.com/microsoft/playwright"]');
    });
});

test('google search 2', async context => {
    const { page } = context;
    await step('open google', context, async () => {
        await page.goto('https://google.com/');
    });
    await step('search for "playwright github code"', context, async () => {
        const searchBox = await page.$('input[title="Search"]');
        if (!searchBox) {
            throw new Error('searchBox not found');
        }
        await searchBox.type('playwright github code');
        await page.keyboard.press('Enter');
        await page.waitForSelector('a[href="https://github.com/microsoft/playwright"]');
    });
});