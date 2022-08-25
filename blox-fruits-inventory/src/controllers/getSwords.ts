import { Request, Response } from "express";
import { Sword } from "../models/Sword";
import { getSwordsData } from "../services/scrapSwordsWiki";

const getSwordsFromWikiAndCreateDocument = async (req:Request,res:Response) => {
  const getSwords = await getSwordsData()

  getSwords.forEach( async sword => {
    const doc = await Sword.create({
      name: sword.name,
      imageURL: sword.imageUrl
    })
  })

  res.json(getSwords)
}

const allSwords = async (req:Request, res:Response) => {
  const swords = await Sword.find({})
  res.json(swords)
}
export {getSwordsFromWikiAndCreateDocument, allSwords}