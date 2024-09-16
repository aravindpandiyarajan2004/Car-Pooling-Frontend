
//----------------Not Used----------------
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import HomePage from './UserHomePage';

// // const UserDash = () => {
// //     const navigate = useNavigate();

// //     return (
// //         <div className="min-h-screen bg-gray-100">
// //             <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
// //                 <img
// //                     src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
// //                     alt="Logo"
// //                     className="w-12 h-12"
// //                 />
// //                 <div className="flex items-center space-x-4">
// //                     <button
// //                         onClick={() => navigate('/searchride')}
// //                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //                     >
// //                         Search Ride
// //                     </button>
// //                     <button
// //                         onClick={() => navigate('/tracking')}
// //                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //                     >
// //                         Track Ride
// //                     </button>
// //                     <button
// //                         onClick={() => navigate('/vehicle')}
// //                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //                     >
// //                         Publish Ride
// //                     </button>
// //                     <button
// //                         onClick={() => navigate('/selectvehicle')}
// //                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //                     >
// //                         Schedule Ride
// //                     </button>
// //                     <button
// //                         onClick={() => navigate('/')}
// //                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //                     >
// //                         Logout
// //                     </button>
// //                 </div>
// //             </header>
// //             <main className="container mx-auto p-6">
// //                 <HomePage />
// //             </main>
// //         </div>
// //     );
// // };

// // export default UserDash;

// import React, { useState } from 'react';
// import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import Rides from './RideTab';
// import Bookings from './BookTab';
// import Profile from './Profile';
// // import Profile from './Profile'; // Import Profile component
// // import Bookings from './Bookings'; // Import Bookings component
// // import Rides from './Rides'; // Import Rides component

// const UserDash = () => {
//     const [activeTab, setActiveTab] = useState('profile');
//     const [editMode, setEditMode] = useState(false);
//     const [formData, setFormData] = useState({});
//     const [profileImage, setProfileImage] = useState('');
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         mobile: '',
//         dob: '',
//         address: '',
//         city: '',
//         state: '',
//         gender: ''
//     });
//     const [bookings, setBookings] = useState([]);
//     const [rides, setRides] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//         // Save logic
//         setEditMode(false);
//         // Update user profile information
//         setUser({ ...user, ...formData });
//     };

//     const handleEdit = () => {
//         setEditMode(true);
//     };

//     const handlePayment = (bookingId) => {
//         // Payment logic
//     };

//     const handleReview = (bookingId) => {
//         // Review logic
//     };

//     return (
//         <div className="container mx-auto p-6">
//             <div className="flex space-x-4 mb-6">
//                 <button
//                     onClick={() => setActiveTab('profile')}
//                     className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                 >
//                     <FaUser className="inline-block mr-2" /> Profile
//                 </button>
//                 <button
//                     onClick={() => setActiveTab('bookings')}
//                     className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                 >
//                     <FaCalendarAlt className="inline-block mr-2" /> Bookings
//                 </button>
//                 <button
//                     onClick={() => setActiveTab('rides')}
//                     className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                 >
//                     <FaMapMarkerAlt className="inline-block mr-2" /> Rides
//                 </button>
//             </div>

//             <div>
//                 {activeTab === 'profile' && (
//                     <Profile 
//                         user={user} 
//                         profileImage={profileImage} 
//                         handleSave={handleSave} 
//                         handleEdit={handleEdit} 
//                         editMode={editMode} 
//                         formData={formData} 
//                         handleChange={handleChange} 
//                     />
//                 )}

//                 {activeTab === 'bookings' && (
//                     <Bookings 
//                         bookings={bookings} 
//                         handlePayment={handlePayment} 
//                         handleReview={handleReview} 
//                     />
//                 )}

//                 {activeTab === 'rides' && (
//                     <Rides
//                         rides={rides} 
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UserDash;
