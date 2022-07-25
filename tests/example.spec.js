const { test } = require('@playwright/test');
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const url1 = 'https://youtu.be/PtWg-f52VfU'
const url2 = 'https://www.youtube.com/watch?v=pI6G4F_tze0&t=1285s'

const n = 10;

for (let i = 0; i < n; i++) {
  test(`Youtube1- ${i} `, async ({ page }) => {
    await page.goto(url1);
    console.log(`Youtube1- ${i} `, url1);
    await sleep(150*1000);
    for (let j = 0; j < 100; j++) {
      console.log(`Youtube1- ${i} `, "reload");
      page.reload();
//       await page.click('//video[@class="video-stream html5-main-video"]');
      await sleep(150*1000);
    }
  });
};
// for (let i = 0; i < n; i++) {
//   test(`Youtube2- ${i} `, async ({ page }) => {
//     await page.goto(url2);
//     console.log(url2);
//     await sleep(600*1000);
//     for (let i = 0; i < 10; i++) {
//       await page.click('//video[@class="video-stream html5-main-video"]');
//       await sleep(1000);
//     }
//   });
// };
