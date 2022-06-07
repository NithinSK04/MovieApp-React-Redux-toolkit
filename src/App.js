import React from "react";
import "./App.scss";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:imdbID" element={<MovieDetails />} />
            <Route exact element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
