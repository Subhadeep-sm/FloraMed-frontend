import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import Loader from "./components/Loader"; // Import the loader
import Navbar from "./components/Navbar";
import AuthCallback from "./components/AuthCallback";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gardening from "./components/Gardening";
import Footer from "./components/Footer";
import CardsSection from "./components/CardsSection";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import HealthWellness from "./components/HealthWellness";
import CartPage from "./components/CartPage";
import BlogPage from "./components/BlogPage";
import MyHerbs from "./components/MyHerbs";
import AddPlant from "./components/AddPlant";
import HerbalistsMyPlants from "./components/HerbalistsMyPlants";
import Subscription from "./components/Subscription";
import DoctorsPage from "./components/DoctorsPage";
import Orders from "./components/Orders";
import Success from "./components/Success";
import Testimonials from "./components/Testimonials";
import MarketPlace from "./components/MarketPlace";
import HerbIdentifier from "./components/HerbIdentifier";

function App() {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // <== Loading state

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const handleDotClick = (index) => {
    setCurrentVideoIndex(index);
  };

  if (loading) {
    return <Loader />; // 👈 Show loader while loading
  }

  return (
    <Router>
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative min-h-screen overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <motion.video
                      src="/videos/video2.mp4"
                      autoPlay
                      muted
                      loop
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Navbar and Hero Section */}
                  <div className="relative z-10">
                    <Navbar className="text-white" />
                    <Hero />
                  </div>
                  
                  {/* Overlay for better readability */}
                  <div className="absolute inset-0 bg-opacity-30"></div>
                </div>

                {/* Cards Section */}
                <div className="px-4 sm:px-6 lg:px-8">
                  <CardsSection
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                </div>

                {/* Features Section */}
                <div className="px-4 sm:px-6 lg:px-8">
                  <Features />
                </div>
                
                <HerbIdentifier/>

                <Subscription />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/marketplace" element={<MarketPlace/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/gardening-tips" element={<Gardening />} />
          <Route path="/oauth/callback" element={<AuthCallback />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/add-plants" element={<AddPlant />} />
          <Route path="/my-plants" element={<HerbalistsMyPlants />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-success" element={<Success />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/myherbs" element={<MyHerbs />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/health"
            element={
              <div className="min-h-screen rounded-b-2xl bg-gradient-to-r from-green-100 to-white">
                <HealthWellness />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
