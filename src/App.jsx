import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Post from "./pages/Post";
import Details from "./pages/Details";
import Register from "./login/Register";
import Login from "./login/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  // Simulated authentication state (replace with your auth logic)
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );
  
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      {/* Private Routes */}
      <Route
        path="/home"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            {
            console.log(isAuthenticated)
            }
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/find"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            {
            console.log(isAuthenticated)
            }
            <Find />
          </PrivateRoute>
        }
      />
      <Route
        path="/post"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Post />
          </PrivateRoute>
        }
      />
      <Route
        path="/find/details/:id"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Details />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
