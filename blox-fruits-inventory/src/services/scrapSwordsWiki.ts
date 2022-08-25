import puppeteer from "puppeteer";
type SwordData = {
  name:string,
  imageUrl: string
}
async function getSwordsData(): Promise<SwordData[]> {
  const swords: any = {};
  const url = "https://blox-fruits.fandom.com/wiki/Swords";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const swordsName = await page.evaluate(() => {
    const swordNameHtmlQuery = Array.from(
      document.querySelectorAll(
        "table.fandom-table tbody tr div .grid-item table tbody tr td div span a"
      )
    );
    return swordNameHtmlQuery.map((name) => name.textContent);
  });
  const swordsImg = await page.evaluate(() => {
    const swordImgHtmlQuery = Array.from(
      document.querySelectorAll(
        "table.fandom-table tbody tr div .grid-item table tbody tr td div a img"
      )
    );
    return swordImgHtmlQuery.map((swordImg) => {
      let indexOfPngExtension = swordImg.getAttribute("data-src")?.indexOf(".png");
      if(indexOfPngExtension){
        return swordImg.getAttribute("data-src")?.substring(0, indexOfPngExtension) + '.png'
      }
    });
  });

  swordsName.forEach((sword, index) => {
    swords[index] = {
      name: swordsName[index],
      imageUrl: swordsImg[index],
    };
  });
  await browser.close();
 

  return Object.values(swords);
}

export {getSwordsData}

//teste

// function getWordIndex(){
//   let string =  'blablabla.png'
//   console.log(string.indexOf('.png'));

// }

// getWordIndex()
