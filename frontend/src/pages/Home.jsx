import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Shield, Users, Activity } from 'lucide-react';
import './home.css';

const Home = () => {
  return (
    <div className="max-h-screen">
      {/* Hero Section */}
      <div className="animate-background-color text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Water Quality Monitoring System
            </h1>
            <p className="text-xl mb-8">
              Ensure safe drinking water through advanced monitoring and analysis
            </p>
            <Link
              to="/sign-up"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Track water quality parameters in real-time with advanced analytics
              </p>
            </div>
            <div className="text-center p-6">
              <Activity className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-600">
                Get detailed insights and predictions about water quality trends
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Join a community dedicated to improving water quality
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 rounded">
      <div className="animate-background-color rounded text-white py-20 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center text-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why is water testing so important ?</h2>
              <br /><br /><br />
              <p>Water testing helps you understand the quality of the water you drink, clean with and bathe in. It is important because:</p>
              <br />
              <ul className="list ml-8 ">
                <li>It can reveal contaminants you can't see, taste or smell.</li>
                <br />
                <li>It identifies the cause of aesthetic issues.</li>
                <br />
                <li>It informs what water treatment solutions you may need</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://t4.ftcdn.net/jpg/12/07/30/81/360_F_1207308143_T5SX50doo78NxOcdlcYszPgrep0ozD89.jpg"
                alt="Water Analysis"
                className="rounded-lg "
              />
              
            </div>
          </div>
        </div>
        </main>
    </div>
  );
};

export default Home;