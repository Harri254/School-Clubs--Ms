import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ClubPage from "./pages/ClubPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club/:clubName" element={<ClubPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </Router>

  );
};

export default App;
