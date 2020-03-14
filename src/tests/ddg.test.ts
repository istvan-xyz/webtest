import { test, step, setLaunchOptions } from '..';

// eslint-disable-next-line no-undef
jest.setTimeout(360000);

setLaunchOptions({
    // headless: false,
    // devtools: true,
    // slowMo: 10,
});

test('ddg search', async context => {
    const { page } = context;
    await step('open DuckDuckGo', context, async () => {
        await page.goto('https://duckduckgo.com/');
    });
});