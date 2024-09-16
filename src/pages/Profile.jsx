// import React, { useState, useEffect } from 'react';
// import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Profile = () => {
//     const [activeTab, setActiveTab] = useState('profile');
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const userId = sessionStorage.getItem('userId');
//                 if (!userId) {
//                     navigate('/');
//                     return;
//                 }
//                 const response = await axios.get(`http://localhost:8029/user/${userId}`);
//                 setUser(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data', error);
//             }
//         };
//         fetchUserData();
//     }, [navigate]);

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
//                 <img
//                     src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
//                     alt="Logo"
//                     className="w-12 h-12"
//                 />
//                 <div className="flex items-center space-x-4">
//                     <button
//                         onClick={() => navigate('/userdashboard')}
//                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                     >
//                         Home
//                     </button>
//                     <button
//                         onClick={() => navigate('/searchride')}
//                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                     >
//                         Search Ride
//                     </button>
//                     <button
//                         onClick={() => navigate('/tracking')}
//                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                     >
//                         Track Ride
//                     </button>
//                     <button
//                         onClick={() => navigate('/vehicle')}
//                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                     >
//                         Publish Ride
//                     </button>
//                     <button
//                         onClick={() => navigate('/selectvehicle')}
//                         className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//                     >
//                         Schedule Ride
//                     </button>
//                 </div>
//             </header>
//             <main className="container mx-auto p-6">
//                 <div className="flex space-x-4 mb-6">
//                     <button
//                         onClick={() => handleTabChange('profile')}
//                         className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                     >
//                         <FaUser className="inline-block mr-2" /> Profile
//                     </button>
//                     <button
//                         onClick={() => handleTabChange('bookings')}
//                         className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                     >
//                         <FaCalendarAlt className="inline-block mr-2" /> Bookings
//                     </button>
//                     <button
//                         onClick={() => handleTabChange('rides')}
//                         className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//                     >
//                         <FaMapMarkerAlt className="inline-block mr-2" /> Rides
//                     </button>
//                 </div>

//                 {activeTab === 'profile' && <div>Profile Content</div>}
//                 {activeTab === 'bookings' && <div>Bookings Content</div>}
//                 {activeTab === 'rides' && <div>Rides Content</div>}
//             </main>
//         </div>
//     );
// };

// export default Profile;


import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Profile = ({ user, profileImage, handleSave, handleEdit, editMode, formData, handleChange }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img
                src={profileImage || 'https://via.placeholder.com/100'}
                alt="User Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6"
            />
            <div className="flex-1">
                {editMode ? (
                    <div>
                        {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
                            <div className="mb-4" key={field}>
                                <label className="block text-gray-700 capitalize">{field}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field] || ''}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                />
                            </div>
                        ))}
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <div>
                        {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
                            <p key={field} className="mb-2">
                                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {user?.[field]}
                            </p>
                        ))}
                        <button
                            onClick={handleEdit}
                            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
