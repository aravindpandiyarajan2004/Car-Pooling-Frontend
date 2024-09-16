
import React, { useState, useEffect } from 'react';
import { FaCar, FaMoneyBillAlt, FaLeaf, FaUser, FaQuestionCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('features'); // Default active link
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['features', 'about', 'contact', 'help'];
    const offset = 150;
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      return element && element.getBoundingClientRect().top + offset > 0;
    });
    if (currentSection) {
      setActiveLink(currentSection);
    }
  }, [scrollPosition]);

  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <header className="bg-gray-900 text-white fixed top-0 inset-x-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain" 
              alt="CarPool Logo" 
              className="h-12 w-12" // Updated height and width
            />
          </div>

          {/* Navigation Links and User Dropdown */}
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6">
              <li>
                <a 
                  href="#features" 
                  onClick={() => handleLinkClick('features')} 
                  className={`hover:text-gray-400 ${activeLink === 'features' ? 'bg-gray-700 text-white px-3 py-2 rounded' : ''}`}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => handleLinkClick('about')} 
                  className={`hover:text-gray-400 ${activeLink === 'about' ? 'bg-gray-700 text-white px-3 py-2 rounded' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => handleLinkClick('contact')} 
                  className={`hover:text-gray-400 ${activeLink === 'contact' ? 'bg-gray-700 text-white px-3 py-2 rounded' : ''}`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#help" 
                  onClick={() => handleLinkClick('help')} 
                  className={`hover:text-gray-400 ${activeLink === 'help' ? 'bg-gray-700 text-white px-3 py-2 rounded' : ''}`}
                >
                  Help Center
                </a>
              </li>
            </ul>

            {/* User Dropdown */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <FaUser className="text-2xl" />
                <span>Account</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-lg">
                  <a 
                    href="/userlogin" 
                    // onClick={() => handleLinkClick('login')} 
                    className={`block px-4 py-2 ${activeLink === 'login' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  >
                    Login
                  </a>
                  <a 
                    href="/adminlogin" 
                    className={`block px-4 py-2 ${activeLink === 'admin' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  >
                    Admin Login
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20"> {/* Add padding top to offset the fixed navbar */}
        <div 
          className="bg-cover bg-center h-screen flex items-center justify-center text-center" 
          style={{ backgroundImage: "url('https://www.newcastle.edu.au/__data/assets/image/0008/869849/Transport-Website-Rideshare-Wide-Feature-800x765px.jpg')" }}
        >
          <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Embark on Your Carpool Journey</h2>
            <p className="text-lg mb-6">Save money, reduce traffic, and help the environment by sharing your ride with others.</p>
            <a href="/register" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
          </div>
        </div>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaCar className="text-4xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p>Plan your carpooling trips with just a few clicks. Our intuitive interface makes scheduling a breeze.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaMoneyBillAlt className="text-4xl text-green-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                <p>Save money on fuel and parking by sharing rides with others. Split costs fairly and easily.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaLeaf className="text-4xl text-green-700 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p>Reduce your carbon footprint by carpooling. Help contribute to a cleaner, greener planet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg max-w-2xl mx-auto">We are passionate about making transportation smarter and more sustainable. Our app connects people who want to share their rides, making daily commutes easier and more enjoyable.</p>
          </div>
        </section>

        {/* Contact Section */}
        
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-left text-lg font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md shadow-sm" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md shadow-sm" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-left text-lg font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-md shadow-sm" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </section>

        {/* Help Center Section */}
        <section id="help" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help Center</h2>
            <p className="text-lg mb-8">Got questions or need assistance? We're here to help! Reach out to us through any of the following ways:</p>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaQuestionCircle className="text-4xl text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">FAQs</h3>
                  <p>Find answers to the most frequently asked questions in our comprehensive FAQ section.</p>
                  <a href="#faqs" className="text-blue-500 hover:underline">Read FAQs</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaPhone className="text-4xl text-green-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p>Need immediate assistance? Give us a call at our support number.</p>
                  <a href="tel:+1234567890" className="text-blue-500 hover:underline">Call Now</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaEnvelope className="text-4xl text-yellow-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p>Send us an email, and we'll get back to you as soon as possible.</p>
                  <a href="mailto:support@example.com" className="text-blue-500 hover:underline">Email Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CarPool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
