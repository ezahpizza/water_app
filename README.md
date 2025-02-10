# Water Potability Prediction Application

A full-stack machine learning application that predicts water potability using XGBoost classification. The application consists of a React frontend, Node.js backend with MongoDB integration, and a FastAPI service for ML model deployment.

## Maintainers

 - nakapun tumpateek

## Architecture

```
├── Frontend (React)
│   └── User Interface for data input and visualization
├── Backend (Node.js + MongoDB)
│   └── API handling and data persistence
└── ML Service (FastAPI + XGBoost)
    └── Model inference and prediction
```

## Features

- Real-time water potability prediction
- Input validation and error handling
- Prediction history storage
- Interactive UI for data input
- RESTful API endpoints
- MongoDB integration for data persistence
- Cross-Origin Resource Sharing (CORS) enabled

## Prerequisites

- Python 3.8+
- Node.js 14+
- MongoDB 4.4+
- npm or yarn package manager

## Installation

### 1. ML Service (FastAPI)

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn xgboost numpy pydantic

# Start the service
uvicorn analysis:app --reload --host 0.0.0.0 --port 8000
```

### 2. Backend (Node.js)

```bash
# Install dependencies
npm install

# Start the server
npm start
```

### 3. Frontend (React)

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/water_quality
ML_API_URL=http://localhost:8000
```

## API Endpoints

### FastAPI Service (ML Model)

- `GET /` - Service health check
- `POST /predict` - Make water potability prediction
- `GET /model-info` - Get model metadata

### Node.js Backend

- `POST /api/predict` - Forward prediction request to ML service and store results
- `GET /api/predictions` - Retrieve prediction history
- `GET /api/model-info` - Get model information

## Input Data Format

The model accepts the following water quality parameters:

```json
{
  "ph": float,
  "hardness": float,
  "solids": float,
  "chloramines": float,
  "sulfate": float,
  "conductivity": float,
  "organic_carbon": float,
  "trihalomethanes": float,
  "turbidity": float
}
```

## Model Details

The application uses an XGBoost classifier trained on water quality data with the following characteristics:

- Target Variable: Potability (0: Not Potable, 1: Potable)
- Features: 9 water quality parameters
- Model Format: XGBoost JSON format

## Error Handling

The application includes comprehensive error handling:

- Input validation using Pydantic models
- HTTP error responses with detailed messages
- MongoDB connection error handling
- Model loading and prediction error handling

## Development

```bash
# Start all services in development mode
# Terminal 1 - FastAPI
uvicorn analysis:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - Node.js Backend
npm run dev

# Terminal 3 - React Frontend
npm start
```

## Production Deployment

1. Build the React frontend:
```bash
npm run build
```

2. Set up production environment variables
3. Configure nginx or similar for serving the frontend
4. Set up PM2 or similar for Node.js process management
5. Configure SSL certificates
6. Set up MongoDB authentication

## Security Considerations

- Implement proper authentication and authorization
- Configure CORS settings for production
- Use environment variables for sensitive data
- Set up proper firewalls and network security
- Regularly update dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Apache License](LICENSE)

## Support

For support, please open an issue in the repository or contact the maintainers.