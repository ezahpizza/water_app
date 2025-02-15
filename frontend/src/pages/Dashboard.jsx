import React, { useContext, useState } from 'react';
import './dashboard.css';
import axios from "axios"
import { AppContext } from '../Context/AppContext';
const Dashboard = () => {
  const {backendUrl}=useContext(AppContext);
  const [formData, setFormData] = useState({
    ph: '',
    hardness: '',
    solids: '',
    chloramines: '',
    sulfate: '',
    conductivity: '',
    organicCarbon: '',
    trihalomethanes: '',
    turbidity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response= await axios.post(`${backendUrl}/precict`,formData);
     data=response.data;
     console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold animate-color-change mb-8">Water Quality Analysis</h1>
      
      <form onSubmit={handleSubmit} className="bg-blue-200 shadow-md shadow-blue-500/50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              pH Level
            </label>
            <input
              type="number"
              name="ph"
              step="0.1"
              value={formData.ph}
              onChange={handleChange}
              placeholder="Enter pH level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hardness
            </label>
            <input
              type="number"
              name="hardness"
              value={formData.hardness}
              onChange={handleChange}
              placeholder="Enter water hardness"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Dissolved Solids
            </label>
            <input
              type="number"
              name="solids"
              value={formData.solids}
              onChange={handleChange}
              placeholder="Enter TDS"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chloramines
            </label>
            <input
              type="number"
              name="chloramines"
              value={formData.chloramines}
              onChange={handleChange}
              placeholder="Enter chloramines level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             Sulfate
            </label>
            <input
              type="number"
              name="sulfate"
              value={formData.sulfate}
              onChange={handleChange}
              placeholder="Enter sulfate level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conductivity
            </label>
            <input
              type="number"
              name="conductivity"
              value={formData.conductivity}
              onChange={handleChange}
              placeholder="Enter conductivity level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organic Carbon
            </label>
            <input
              type="number"
              name="organicCarbon"
              value={formData.organicCarbon}
              onChange={handleChange}
              placeholder="Enter organicCarbon level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trihalomethanes
            </label>
            <input
              type="number"
              name="trihalomethanes"
              value={formData.trihalomethanes}
              onChange={handleChange}
              placeholder="Enter trihalomethanes level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Turbidity
            </label>
            <input
              type="number"
              name="Turbidity"
              value={formData.turbidity}
              onChange={handleChange}
              placeholder="Enter Turbidity level"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Add more input fields as needed */}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Analyze Water Quality
        </button>
      </form>
    </div>
  );
};

export default Dashboard;