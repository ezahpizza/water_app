import mongoose from "mongoose";
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
export default Prediction;