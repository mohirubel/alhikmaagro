import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DigitalHub from "./pages/DigitalHub";
import ScrollToTop from "./components/Common/ScrollToTop";
import ChatLauncher from "./components/Common/ChatLauncher";

function App() {
  return (
    <Router>
    <ScrollToTop />
    <ChatLauncher />
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/digital-hub" element={<DigitalHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
