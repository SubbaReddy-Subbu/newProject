import Layout from "./Layout.js/Layout";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { Nopage } from "./Pages/Nopage";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="/" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
