import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    
  const handleSearchClick = () => {
    navigate('/searchride');
  };

    const handleBookNowClick = () => {
    navigate('/searchride');
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between bg-gray-100 p-8 md:p-16">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Find Your Perfect Ride</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">Seamless booking, trusted drivers, and rides that fit your needs.</p>
          <div className="flex">
          <button style={{marginLeft:150,width:200}}
            onClick={handleSearchClick}
            className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            Search Ride
          </button>
          </div>
        </div>
        <img src="https://www.bing.com/th/id/OGC.388c8189c1e4a45479df31ddea3cd4e2?pid=1.7&rurl=https%3a%2f%2fwww.cartakeback.com%2fwp-content%2fthemes%2fcartakeback%2fimages%2fCar-Animation-V2.gif&ehk=Aa%2bpoUuer8HOEjTndch8pTNmujZBFD4Xbv%2bItoq%2fFfA%3d" alt="Hero" className="hidden md:block w-1/2 rounded-lg" /> {/* Replace with your image */}
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row justify-around items-center p-8 md:p-16 bg-gray-200">
        <div className="text-center max-w-xs mb-8 md:mb-0">
          <img src="https://cdn.dribbble.com/users/260312/screenshots/2444745/car-animation.gif" alt="Feature 1" className="w-50 h-50 mx-auto mb-4" /> {/* Replace with your icon */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Booking</h3>
          <p className="text-gray-600">Book a ride in just a few taps, wherever you are.</p>
        </div>
        <div className="text-center max-w-xs mb-8 md:mb-0">
          <img src="https://icon-library.com/images/drivers-icon/drivers-icon-28.jpg" alt="Feature 2" className="w-50 h-50 mx-auto mb-4" /> {/* Replace with your icon */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Drivers</h3>
          <p className="text-gray-600">Our drivers are vetted and trusted to ensure your safety.</p>
        </div>
        <div className="text-center max-w-xs">
          <img src="https://static.vecteezy.com/system/resources/previews/015/441/579/original/saving-money-save-box-and-jar-collection-set-png.png" alt="Feature 3" className="w-40 h-40 mx-auto mb-4" /> {/* Replace with your icon */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Affordable Prices</h3>
          <p className="text-gray-600">Enjoy competitive rates with no hidden fees.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-500 text-white py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ride?</h2>
        <p className="text-lg md:text-xl mb-6">Book your ride now and experience convenience at its best.</p>
        <button  onClick={handleBookNowClick} className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleSearchClick = () => {
//     navigate('/search');
//   };

//   const handleBookNowClick = () => {
//     navigate('/book');
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center bg-gray-100 p-8 md:p-16 text-center">
//         <div className="max-w-lg">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Find Your Perfect Ride</h1>
//           <p className="text-lg md:text-xl mb-6 text-gray-600">Seamless booking, trusted drivers, and rides that fit your needs.</p>
//           <button
//             onClick={handleSearchClick}
//             className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
//           >
//             Search Ride
//           </button>
//         </div>
//         <img
//           src="https://www.bing.com/th/id/OGC.388c8189c1e4a45479df31ddea3cd4e2?pid=1.7&rurl=https%3a%2f%2fwww.cartakeback.com%2fwp-content%2fthemes%2fcartakeback%2fimages%2fCar-Animation-V2.gif&ehk=Aa%2bpoUuer8HOEjTndch8pTNmujZBFD4Xbv%2bItoq%2fFfA%3d"
//           alt="Hero"
//           className="hidden md:block w-1/2 rounded-lg mt-8" // Added margin-top for spacing
//         />
//       </section>

//       {/* Features Section */}
//       <section className="flex flex-col md:flex-row justify-around items-center p-8 md:p-16 bg-gray-200">
//         <div className="text-center max-w-xs mb-8 md:mb-0">
//           <img
//             src="https://cdn.dribbble.com/users/260312/screenshots/2444745/car-animation.gif"
//             alt="Feature 1"
//             className="w-24 h-24 mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Booking</h3>
//           <p className="text-gray-600">Book a ride in just a few taps, wherever you are.</p>
//         </div>
//         <div className="text-center max-w-xs mb-8 md:mb-0">
//           <img
//             src="https://icon-library.com/images/drivers-icon/drivers-icon-28.jpg"
//             alt="Feature 2"
//             className="w-24 h-24 mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Drivers</h3>
//           <p className="text-gray-600">Our drivers are vetted and trusted to ensure your safety.</p>
//         </div>
//         <div className="text-center max-w-xs">
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/015/441/579/original/saving-money-save-box-and-jar-collection-set-png.png"
//             alt="Feature 3"
//             className="w-24 h-24 mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold mb-2 text-gray-800">Affordable Prices</h3>
//           <p className="text-gray-600">Enjoy competitive rates with no hidden fees.</p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="text-center bg-blue-500 text-white py-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ride?</h2>
//         <p className="text-lg md:text-xl mb-6">Book your ride now and experience convenience at its best.</p>
//         <button
//           onClick={handleBookNowClick}
//           className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
//         >
//           Book Now
//         </button>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

