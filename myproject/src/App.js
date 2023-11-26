import Layout from "./Layout.js/Layout";
import Home from "./Pages/Homepage";
import Login from "./components/LoginForm";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { Nopage } from "./Pages/Nopage";
import Layout2 from "./Layout.js/Layout2";
import Register from "./components/Register";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout2 />} />
          <Route path="register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route  element={<Layout />}/>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
