import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { SignIn, SignUp } from './components/Auth';

const clerkPubKey = "pk_test_bW92ZWQtb3Jpb2xlLTU4LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in/*" element={<SignIn />} />
            <Route path="/sign-up/*" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <>
                  <SignedIn>
                    <Dashboard />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/sign-in" replace />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;