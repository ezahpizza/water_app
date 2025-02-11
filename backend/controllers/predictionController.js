import Prediction from "../models/predictionSchema.js";
import axios from "axios";
const ML_API_URL = process.env.ML_API_URL || 'http://localhost:8000';
const predict=async (req, res) => {
    try {
      // Call FastAPI endpoint
      const mlResponse = await axios.post(`${ML_API_URL}/predict`, req.body);
      
      // Save prediction to MongoDB
      const prediction = new Prediction({
        input_data: req.body,
        prediction: mlResponse.data.prediction,
        probability: mlResponse.data.probability
      });
      
      await prediction.save();
      
      res.json({
        success: true,
        data: mlResponse.data,
        message: 'Prediction saved successfully'
      });
    } catch (error) {
      console.error('Prediction error:', error);
      res.status(500).json({
        success: false,
        error: error.response?.data?.detail || error.message
      });
    }
}

const prediction=async (req,res) => {
        try {
          const predictions = await Prediction.find()
            .sort({ timestamp: -1 })
            .limit(100);
          res.json({ success: true, data: predictions });
        } catch (error) {
          res.status(500).json({
            success: false,
            error: error.message
          });
        }
}
const modelInfo=async (req, res) => {
    try {
      const modelInfo = await axios.get(`${ML_API_URL}/model-info`);
      res.json(modelInfo.data);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
}

export{predict,prediction,modelInfo};