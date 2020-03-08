import { test, step } from '..';

// eslint-disable-next-line no-undef
jest.setTimeout(20000);

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

test('ddg search', async context => {
    const { page } = context;
    await step('open DuckDuckGo', context, async () => {
        await page.goto('https://duckduckgo.com/');
    });
});