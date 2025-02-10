import os
import json
import numpy as np
import xgboost as xgb

from typing import List, Optional
from pydantic import BaseModel, validator
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# FastAPI app
app = FastAPI(title="Water Potability Prediction API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'water_model.json')

# Load model
try:
    model = xgb.Booster()
    model.load_model(MODEL_PATH)
except Exception as e:
    print(f"Error loading model: {str(e)}")
    raise

class WaterQualityData(BaseModel):
    ph: float
    hardness: float
    solids: float
    chloramines: float
    sulfate: float
    conductivity: float
    organic_carbon: float
    trihalomethanes: float
    turbidity: float

    # validators 
    @validator('ph')
    def validate_ph(cls, v):
        if not 0 <= v <= 14:
            raise ValueError('pH must be between 0 and 14')
        return v

    @validator('*')
    def validate_non_negative(cls, v):
        if v < 0:
            raise ValueError('Values must be non-negative')
        return v

class PredictionResponse(BaseModel):
    prediction: int
    probability: float
    input_data: WaterQualityData

@app.get("/")
async def root():
    return {"message": "Water Potability Prediction API"}

@app.post("/predict", response_model=PredictionResponse)
async def predict(data: WaterQualityData):
    print(f"Received prediction request with data: {data.dict()}")
    try:
        # Convert input to DMatrix
        input_data = np.array([[
            data.ph,
            data.hardness,
            data.solids,
            data.chloramines,
            data.sulfate,
            data.conductivity,
            data.organic_carbon,
            data.trihalomethanes,
            data.turbidity
        ]])
        
        feature_names = [
            'ph', 'hardness', 'solids', 'chloramines', 'sulfate',
            'conductivity', 'organic_carbon', 'trihalomethanes', 'turbidity'
        ]
        dmat = xgb.DMatrix(input_data, feature_names=feature_names)
        
        # prediction
        prediction_prob = model.predict(dmat)[0]
        prediction = int(prediction_prob > 0.5)
        
        return PredictionResponse(
            prediction=prediction,
            probability=float(prediction_prob),
            input_data=data
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/model-info")
async def model_info():
    """Endpoint to get model metadata"""
    return {
        "model_type": "XGBoost",
        "features": [
            "ph", "hardness", "solids", "chloramines", "sulfate",
            "conductivity", "organic_carbon", "trihalomethanes", "turbidity"
        ],
        "target": "potability",
        "version": "1.0"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)