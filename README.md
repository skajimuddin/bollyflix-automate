i'm triying to automate bollyflix movie download process

  // Wait for the button with ID 'lite-human-verif-button' to be available and click it
  await page.waitForSelector('#lite-human-verif-button');
  await page.evaluate(() => {
    document.getElementById('lite-human-verif-button').click();
  });