import React from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { Nopage } from "./Pages/Nopage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* The 'Layout' component wraps all the routes */}
          <Route
            path="/"
            element={
              <Layout>
                {/* The 'Outlet' is used within the 'Layout' to render child components */}
                <Outlet />
              </Layout>
            }
          >
            {/* Child routes are defined inside the 'Route' element */}
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;