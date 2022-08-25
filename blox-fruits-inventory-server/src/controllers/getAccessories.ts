import { Request, Response } from "express";
import { Accessorie } from "../models/Accessorie";
import { getAccessoriesData } from "../services/scrapAccessoriesWiki";

const getAccessoriesFromWikiAndCreateDocument = async (req: Request, res:Response) => {
  const getAccessories = await getAccessoriesData()

  getAccessories.forEach(async accessorie => {
    const doc = await Accessorie.create({
      name: accessorie.name,
      imageURL: accessorie.imageUrl,
      price: accessorie.price
    })
  })

  res.json(getAccessories)
}
const allAccessories = async(req: Request, res: Response) => {
  const accessories = await Accessorie.find({})

  res.json(accessories)
}
export {getAccessoriesFromWikiAndCreateDocument,allAccessories}