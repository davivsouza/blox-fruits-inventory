import { Request, Response } from "express";
import { Fruit } from "../models/Fruit";
import { getFruitsData} from "../services/scrapBloxFruitsWiki";

const getFruitsFromWikiAndCreateDocument = async (req: Request,res: Response) => {
  const getFruits = await getFruitsData();
  
  getFruits.forEach(async (fruit) => {
    const doc = await Fruit.create({
      name: fruit.name,
      imageURL: fruit.imageUrl,
      price: fruit.price
    })
  })

  res.json(getFruits)

};


const allFruits = async (req: Request,res: Response) => {

  const fruits = await Fruit.find({})

  res.json(fruits)
}

export { getFruitsFromWikiAndCreateDocument, allFruits };
