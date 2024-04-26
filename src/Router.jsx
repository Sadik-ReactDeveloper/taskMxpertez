import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Details = lazy(() => import("./Details"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route  path="/" element={<Home />} />;
      <Route  path="/details" element={<Details />} />;
      
      </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;