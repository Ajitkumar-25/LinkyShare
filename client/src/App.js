import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
