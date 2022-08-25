import express from "express";

import { allAccessories, getAccessoriesFromWikiAndCreateDocument } from "./controllers/getAccessories";
import {  allFruits, getFruitsFromWikiAndCreateDocument } from "./controllers/getFruits";
import { allSwords, getSwordsFromWikiAndCreateDocument } from "./controllers/getSwords";

const routes = express.Router();

// //creating docs for the database
// routes.get("/fruits", getFruitsFromWikiAndCreateDocument);
// routes.get('/swords', getSwordsFromWikiAndCreateDocument)
// routes.get('/accessories', getAccessoriesFromWikiAndCreateDocument)


//getting the datas from the database
routes.get('/allFruits', allFruits)
routes.get('/allSwords',allSwords)
routes.get('/allAccessories', allAccessories)
export { routes };
