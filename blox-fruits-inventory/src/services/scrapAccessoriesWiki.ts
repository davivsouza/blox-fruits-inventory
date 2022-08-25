import puppeteer from "puppeteer";
type accessorieData = {
  name: string,
  imageUrl: string,
  price: number
}
async function getAccessoriesData(): Promise<accessorieData[]> {
  const accessories: any = {};
  const url = "https://blox-fruits.fandom.com/wiki/Accessories";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const accessoriesName = await page.evaluate(() => {
    const accessorieName = Array.from(
      document.querySelectorAll(
        "table.fandom-table tbody tr div .grid-item table tbody tr td div span a"
      )
    );

    return accessorieName.map((accessorie) => accessorie.textContent);
  });

  const accessoriesImg = await page.evaluate(() => {
    const accessorieImg = Array.from(
      document.querySelectorAll(
        "table.fandom-table tbody tr div .grid-item table tbody tr td div a img"
      )
    );

    return accessorieImg.map((accessorieImg) => {
      let indexOfPngExtension = accessorieImg
        .getAttribute("data-src")
        ?.includes("png")
        ? accessorieImg.getAttribute("data-src")?.indexOf("png")
        : accessorieImg.getAttribute("data-src")?.indexOf("PNG");

      if (indexOfPngExtension) {
        return (
          accessorieImg
            .getAttribute("data-src")
            ?.substring(0, indexOfPngExtension + 3) 
        );
      }
    });
  });

  const price = accessoriesName.map((accessorie) => {
    const indexOfPrice = accessorie?.indexOf("/");

    if (indexOfPrice)
      return accessorie?.substring(indexOfPrice + 1, accessoriesName.length);
  });

  accessoriesName.forEach((accessorie, index) => {
    const indexOfPrice = accessoriesName[index]?.indexOf("/");
    accessories[index] = {
      name: accessoriesName[index]?.substring(0, indexOfPrice),
      imageUrl: accessoriesImg[index],
      price: price[index],
    };
  });

  await browser.close();

  return Object.values(accessories);
}

export { getAccessoriesData };

