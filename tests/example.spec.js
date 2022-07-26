const { test } = require('@playwright/test');
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const url1 = 'https://youtu.be/mc8TvbuT9Gw'
// const url2 = 'https://www.youtube.com/watch?v=pI6G4F_tze0&t=1285s'

const n = 5;
for (let i = 0; i < n; i++) {
  test(`Youtube1- ${i} `, async ({ context }) => {
    await sleep(10*1000);
    for (let j = 0; j < 100; j++) {
      let page = await context.newPage();
      await page.goto(url1);
      console.log(`Youtube1- ${i} `, url1);

      await page.click('button.ytp-button.ytp-settings-button');
      await page.click("//div[contains(text(),'Quality')]");
      await page.click("//span[contains(string(),'144p')]");
      console.log("quality changed");

      for (let k = 0; k < 10; k++) {
            await sleep(60*1000);
            await page.click('//video[@class="video-stream html5-main-video"]');
            await page.click('//video[@class="video-stream html5-main-video"]');
            console.log(`Youtube1- ${i} `, "play/pause");
      }
      await page.close();
      console.log(`Youtube1- ${i} `, "closed");
    }
  });
};
