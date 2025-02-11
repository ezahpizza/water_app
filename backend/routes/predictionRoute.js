import express from "express"
import { modelInfo, predict, prediction } from "../controllers/predictionController.js";
const predictRouter=express.Router();

predictRouter.post("/predict",predict);
predictRouter.get("/predictions",prediction);
predictRouter.get("/model-info",modelInfo);
export default predictRouter;