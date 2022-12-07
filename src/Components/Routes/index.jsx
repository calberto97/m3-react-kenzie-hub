import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import LoginPage from "../../Pages/Login";
import RegisterPage from "../../Pages/Register";
import HomePage from "../../Pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default RoutesComponent