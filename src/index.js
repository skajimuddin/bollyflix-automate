import puppeteer from 'puppeteer';

const URL = 'https://links.ozolinks.art/?id=Sm5ESlFnaGI3R1RSM1gyUDVyMkwyZklzbGphdGRyMEFvR0dYbDZ5VTIwdGNGL01LUTVXMGpaMHpCMEw0c3l5WU1JN2FTZnRMamxlZ3VNanZqOUpQdWJGMnRqTHh4ZGdSYjhLRzkrOUtrcmdyZWdTK2tEL0kyVEpVTnEzZzdWNjVXYndWT0c5YjJqeDhxeWJkUk5EYUZEMkhIWFAwKzJiK1ZXcDNtaGw3UWl4VlN3aGl5UzRsY1M1VmRoUGNSdVduME9sc1NDWkJJZngybEZaN3k2WTNPSGJVMUlPOThaVTNpYnNSekE3a3IyTT0=';

// Create a delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    // args: ['--start-maximized']
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(URL, { waitUntil: 'load' });

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });


  
  // 1ST BUTTON //
  console.log("page is loaded..."); // CLG
  console.log("waiting for the 1st button..."); // CLG
  await page.waitForSelector('#lite-human-verif-button');

  console.log("waiting for 17 seconds..."); // CLG
  await delay(17000); // Wait for 17 seconds

  await page.evaluate(() => {
    document.getElementById('lite-human-verif-button').click();
  });
  console.log("clicked the button..."); // CLG

  // 2ND BUTTON //
  console.log("Clicking the 2nd button..."); // CLG
  console.log("waiting for the button..."); // CLG
  await page.waitForSelector('#lite-start-sora-button');
  console.log("waiting for 17 seconds..."); // CLG
  await delay(17000); // Wait for 17 seconds
  await page.evaluate(() => {
    document.getElementById('lite-start-sora-button').click();
  });
  console.log("clicked the button..."); // CLG


  // await page.screenshot({
  //   path: 'screenshot.png',
  //   fullPage: true
  // });

  // // Optionally, close the browser
  // await browser.close();
})();