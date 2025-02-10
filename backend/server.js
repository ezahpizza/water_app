const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/water_quality';
const ML_API_URL = process.env.ML_API_URL || 'http://localhost:8000';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define MongoDB Schema
const predictionSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  input_data: {
    ph: Number,
    hardness: Number,
    solids: Number,
    chloramines: Number,
    sulfate: Number,
    conductivity: Number,
    organic_carbon: Number,
    trihalomethanes: Number,
    turbidity: Number
  },
  prediction: Number,
  probability: Number
}, { timestamps: true });

const Prediction = mongoose.model('Prediction', predictionSchema);

// Routes
app.post('/api/predict', async (req, res) => {
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
});

// Get all predictions
app.get('/api/predictions', async (req, res) => {
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
});

// Get model info
app.get('/api/model-info', async (req, res) => {
  try {
    const modelInfo = await axios.get(`${ML_API_URL}/model-info`);
    res.json(modelInfo.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});