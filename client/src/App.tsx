import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const LandingPage = lazy(() => import("@pages/landing-page"));
const Home = lazy(() => import("@pages/product"));

const Fallback = () => <div>Loading...</div>;

function App() {
  const token = localStorage.getItem('googleToken');

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/home" replace /> : <LandingPage />}
          />
          <Route
            path="/home"
            element={token ? <Home /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
