import puppeteer from "puppeteer";
type fruitData = {
  name: string,
  imageUrl: string,
  price: number
}
async function getFruitsData():Promise<fruitData[]> {
  const fruits: any = {};
  const url = "https://blox-fruits.fandom.com/wiki/Blox_Fruits_%22Stock%22";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const fruitsName = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll("table tbody tr td a"));
    return tds.map((td) => td.textContent);
  });

  const fruitsImageUrl = await page.evaluate(() => {
    const tds = Array.from(
      document.querySelectorAll("table tbody tr td div.floatleft a img")
    );
    return tds.map((td) => td.getAttribute("data-src"));
  });

  const fruitsPrices = await page.evaluate(()=> {
    const pricesText = Array.from(document.querySelectorAll('table tbody tr td:nth-child(3) b font'))

    return pricesText.map(price => price.textContent)
  })

  const filteredFruitsName = fruitsName.filter(
    (fruitName) => fruitName && fruitName.length > 1
  );

  filteredFruitsName.forEach((element: string | null, index: number) => {
    fruits[index] = {
      name: filteredFruitsName[index],
      imageUrl: fruitsImageUrl[index],
      price: fruitsPrices[index]
    };

    if (index >= 33) {
      delete fruits[index];
    }
  });

  await browser.close();
  
  return Object.values(fruits);
}



getFruitsData()

export { getFruitsData};
