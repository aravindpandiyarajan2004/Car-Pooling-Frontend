// // src/components/Navbar.js
// import React from 'react';
// import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaCamera } from 'react-icons/fa';
// import {useNavigate} from 'react-router-dom';
// const Navbar = ({ activeTab, setActiveTab, handleLogout, profileImage, setShowDetails, handleImageUploadClick }) => {
//   const navigate = useNavigate();
//     return (
//         <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
//             <img
//                 src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
//                 alt="Logo"
//                 className="w-12 h-12"
//             />
//             <div className="flex items-center space-x-4">
//                 <button
//                     onClick={() => setActiveTab('profile')}
//                     className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'profile' ? 'bg-blue-800' : ''}`}
//                 >
//                     <FaUser className="mr-2" /> Profile
//                 </button>
//                 <button
//                     onClick={() => setActiveTab('bookings')}
//                     className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'bookings' ? 'bg-blue-800' : ''}`}
//                 >
//                     <FaCalendarAlt className="mr-2" /> Bookings
//                 </button>
//                 <button
//                     onClick={() => setActiveTab('rides')}
//                     className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'rides' ? 'bg-blue-800' : ''}`}
//                 >
//                     <FaMapMarkerAlt className="mr-2" /> Rides
//                 </button>
//                 <button
//                     onClick={() => navigate('/searchride')}
//                     className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                 >
//                     <FaSearch className="mr-2" /> Search Ride
//                 </button>
//                 <button
//                     onClick={() => navigate('/tracking')}
//                     className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                 >
//                     <FaMapMarkerAlt className="mr-2" /> Track Ride
//                 </button>
//                 <button
//                     onClick={() => navigate('/vehicle')}
//                     className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                 >
//                     <FaPlus className="mr-2" /> Publish Ride
//                 </button>
//                 <button
//                     onClick={handleLogout}
//                     className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                 >
//                     <FaSignOutAlt className="mr-2" /> Logout
//                 </button>
//                 <div className="relative">
//                     <img
//                         src={profileImage || 'https://via.placeholder.com/100'}
//                         alt="User Profile"
//                         className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
//                         onClick={() => setShowDetails(prev => !prev)}
//                     />
//                     <FaCamera
//                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
//                         size={20}
//                         onClick={handleImageUploadClick}
//                     />
//                     <input
//                         type="file"
//                         id="profile-image-input"
//                         accept="image/*"
//                         style={{ display: 'none' }}
//                         onChange={handleProfileImageChange}
//                     />
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaCamera, FaSearch } from 'react-icons/fa';

const Navbar = ({ activeTab, setActiveTab, handleLogout, profileImage, setShowDetails, handleImageUploadClick, handleProfileImageChange }) => {
  const navigate = useNavigate();
    return (
        <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <img
                src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
                alt="Logo"
                className="w-12 h-12"
            />
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'profile' ? 'bg-blue-800' : ''}`}
                >
                    <FaUser className="mr-2" /> Profile
                </button>
                <button
                    onClick={() => setActiveTab('bookings')}
                    className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'bookings' ? 'bg-blue-800' : ''}`}
                >
                    <FaCalendarAlt className="mr-2" /> Bookings
                </button>
                <button
                    onClick={() => setActiveTab('rides')}
                    className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center ${activeTab === 'rides' ? 'bg-blue-800' : ''}`}
                >
                    <FaMapMarkerAlt className="mr-2" /> Rides
                </button>
                <button
                    onClick={() => navigate('/searchride')}
                    className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                >
                    <FaSearch className="mr-2" /> Search Ride
                </button>
                <button
                    onClick={() => navigate('/tracking')}
                    className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                >
                    <FaMapMarkerAlt className="mr-2" /> Track Ride
                </button>
                <button
                    onClick={() => navigate('/vehicle')}
                    className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                >
                    <FaPlus className="mr-2" /> Publish Ride
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                >
                    <FaSignOutAlt className="mr-2" /> Logout
                </button>
                <div className="relative">
                    <img
                        src={profileImage || 'https://via.placeholder.com/100'}
                        alt="User Profile"
                        className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                        onClick={() => setShowDetails(prev => !prev)}
                    />
                    <FaCamera
                        className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
                        size={20}
                        onClick={handleImageUploadClick}
                    />
                    <input
                        type="file"
                        id="profile-image-input"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleProfileImageChange}
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

