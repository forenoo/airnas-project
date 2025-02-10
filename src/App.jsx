import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  ApplicationHomePage,
  ApplicationResultPage,
  ContactPage,
} from "./pages";

const App = () => {
  const [dataWeather, setDataWeather] = useState();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${apiKey}`)
      .then((res) => res.json())
      .then((weatherData) => setDataWeather(weatherData.data));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Router sign in */}
        <Route path="/" element={<LoginPage />} />
        {/* Router sign up */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Router Landing Page */}
        <Route
          path="/landing"
          element={<LandingPage dataWeather={dataWeather} />}
        />
        {/* Router About Page */}
        <Route
          path="/about"
          element={<AboutPage dataWeather={dataWeather} />}
        />
        {/* Router About Page */}
        <Route
          path="/contact"
          element={<ContactPage dataWeather={dataWeather} />}
        />
        {/* Router halaman awal dari aplikasi */}
        <Route
          path="/weather"
          element={<ApplicationHomePage dataWeather={dataWeather} />}
        />
        {/* Router halaman hasil data dari aplikasi */}
        <Route
          path="/weather-result"
          element={<ApplicationResultPage dataWeather={dataWeather} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
