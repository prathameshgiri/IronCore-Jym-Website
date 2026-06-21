import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  page.on('requestfailed', request => console.log('BROWSER NETWORK ERROR:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:5173/classes', { waitUntil: 'networkidle2' });
  
  setTimeout(async () => {
    await browser.close();
  }, 2000);
})();
