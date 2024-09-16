

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera } from 'react-icons/fa'; 
// // // import { useNavigate } from 'react-router-dom';
// // // import Swal from 'sweetalert2';

// // // const UserDashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [bookings, setBookings] = useState([]);
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [formData, setFormData] = useState({});
// // //   const [showDetails, setShowDetails] = useState(false);
// // //   const [activeTab, setActiveTab] = useState('profile');
// // //   const [profileImage, setProfileImage] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const userId = sessionStorage.getItem('userId');
// // //         if (!userId) {
// // //           navigate('/login');
// // //           return;
// // //         }

// // //         // Fetch user data
// // //         const userResponse = await axios.get(`http://localhost:8029/user/${userId}`);
// // //         setUser(userResponse.data);
// // //         setFormData(userResponse.data);

// // //         // Fetch profile image if it exists
// // //         if (userResponse.data.profileImg) {
// // //           const imageResponse = await axios.get(`http://localhost:8029/user/${userId}/profile-image`, { responseType: 'arraybuffer' });
// // //           const base64Image = arrayBufferToBase64(imageResponse.data);
// // //           setProfileImage(`data:image/jpeg;base64,${base64Image}`);
// // //         } else {
// // //           setProfileImage('https://via.placeholder.com/100');
// // //         }

// // //         // Fetch user bookings
// // //         const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
// // //         console.log(bookingsResponse.data);
// // //         setBookings(bookingsResponse.data);

// // //       } catch (err) {
// // //         console.error('Error fetching data', err);
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, [navigate]);

// // //   // Utility function to convert array buffer to base64 string
// // //   const arrayBufferToBase64 = (buffer) => {
// // //     let binary = '';
// // //     const bytes = new Uint8Array(buffer);
// // //     const len = bytes.byteLength;
// // //     for (let i = 0; i < len; i++) {
// // //       binary += String.fromCharCode(bytes[i]);
// // //     }
// // //     return window.btoa(binary);
// // //   };

// // //   const handleLogout = () => {
// // //     sessionStorage.clear();
// // //     navigate('/userlogin');
// // //   };

// // //   const handleEdit = () => {
// // //     setEditMode(true);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prevData => ({ ...prevData, [name]: value }));
// // //   };


// // // const handleSave = async () => {
// // //     const userId = sessionStorage.getItem('userId');
// // //     console.log(userId);

// // //     if (!userId) {
// // //         Swal.fire('Error', 'User ID is missing.', 'error');
// // //         return;
// // //     }

// // //     try {
// // //         // Prepare form data with user ID and other form entries
// // //         const formDataWithUserId = new URLSearchParams();
// // //         formDataWithUserId.append('name', formData.name || '');
// // //         formDataWithUserId.append('email', formData.email || '');
// // //         formDataWithUserId.append('mobile', formData.mobile || '');
// // //         formDataWithUserId.append('dob', formData.dob || '');
// // //         formDataWithUserId.append('address', formData.address || '');
// // //         formDataWithUserId.append('city', formData.city || '');
// // //         formDataWithUserId.append('state', formData.state || '');
// // //         formDataWithUserId.append('gender', formData.gender || '');

// // //         // Make the PUT request to update user information
// // //         await axios.put(`http://localhost:8029/user/${userId}`, formDataWithUserId, {
// // //             headers: {
// // //                 'Content-Type': 'application/x-www-form-urlencoded'
// // //             }
// // //         });
// // //         setUser(formData);
// // //         setEditMode(false);
// // //         Swal.fire('Success', 'Profile updated successfully!', 'success');
// // //     } catch (err) {
// // //         console.error('Error saving data', err);
// // //         Swal.fire('Error', 'Failed to update profile.', 'error');
// // //     }
// // // };


// // //   const handleProfileImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         const base64Image = reader.result;
// // //         setProfileImage(base64Image);
// // //         setFormData(prevData => ({ ...prevData, profileImg: base64Image }));
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleImageUploadClick = () => {
// // //     document.getElementById('profile-image-input').click();
// // //   };

// // //   const handleViewDetails = (bookingId) => {
// // //     // Implement view details logic, e.g., navigate to a detailed booking page
// // //     console.log(`Viewing details for booking ID: ${bookingId}`);
// // //     // Example: navigate(`/booking-details/${bookingId}`);
// // //   };

// // //   const handlePayment = (bookingId) => {
// // //     // Implement payment logic
// // //     console.log(`Processing payment for booking ID: ${bookingId}`);
// // //   };

// // //   const handleReview = (bookingId) => {
// // //     // Implement review logic
// // //     console.log(`Reviewing booking ID: ${bookingId}`);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
// // //         <img 
// // //           src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
// // //           alt="Logo"
// // //           className="w-12 h-12"
// // //         />
// // //         <div className="flex items-center space-x-4">
// // //           <button
// // //             onClick={() => navigate('/searchride')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaSearch className="mr-2" /> Search Ride
// // //           </button>
// // //           <button
// // //             onClick={() => navigate('/track-ride')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaMapMarkerAlt className="mr-2" /> Track Ride
// // //           </button>
// // //           <button
// // //             onClick={() => navigate('/vehicle')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaPlus className="mr-2" /> Publish Ride
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaSignOutAlt className="mr-2" /> Logout
// // //           </button>
// // //           <div className="relative">
// // //             <img
// // //               src={profileImage || 'https://via.placeholder.com/100'}
// // //               alt="User Profile"
// // //               className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
// // //               onClick={() => setShowDetails(prev => !prev)}
// // //             />
// // //             {editMode && (
// // //               <FaCamera
// // //                 className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // //                 size={20}
// // //                 onClick={handleImageUploadClick}
// // //               />
// // //             )}
// // //             <input
// // //               type="file"
// // //               id="profile-image-input"
// // //               accept="image/*"
// // //               style={{ display: 'none' }}
// // //               onChange={handleProfileImageChange}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="container mx-auto p-6">
// // //         {showDetails && (
// // //           <>
// // //             <div className="flex space-x-4 mb-6">
// // //               <button
// // //                 onClick={() => setActiveTab('profile')}
// // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // //               >
// // //                 <FaUser className="inline-block mr-2" /> Profile
// // //               </button>
// // //               <button
// // //                 onClick={() => setActiveTab('bookings')}
// // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // //               >
// // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // //               </button>
// // //             </div>

// // //             {activeTab === 'profile' && (
// // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // //                     <img 
// // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // //                       alt="User Profile"
// // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // //                     />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     {!editMode ? (
// // //                       <>
// // //                         <h2 className="text-2xl font-semibold mb-2">{user?.name}</h2>
// // //                         <p className="text-gray-600 mb-2">Email: {user?.email}</p>
// // //                         <p className="text-gray-600 mb-2">Phone: {user?.mobile}</p>
// // //                         <p className="text-gray-600 mb-2">Date of Birth: {user?.dob}</p>
// // //                         <p className="text-gray-600 mb-2">Address: {user?.address}</p>
// // //                         <p className="text-gray-600 mb-2">City: {user?.city}</p>
// // //                         <p className="text-gray-600 mb-2">State: {user?.state}</p>
// // //                         <p className="text-gray-600 mb-2">Gender: {user?.gender}</p>
// // //                         <button
// // //                           onClick={handleEdit}
// // //                           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //                         >
// // //                           <FaEdit className="mr-2" /> Edit Profile
// // //                         </button>
// // //                       </>
// // //                     ) : (
// // //                       <div>
// // //                         <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Name</label>
// // //                           <input
// // //                             type="text"
// // //                             name="name"
// // //                             value={formData.name || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Email</label>
// // //                           <input
// // //                             type="email"
// // //                             name="email"
// // //                             value={formData.email || ''}
// // //                             readOnly
// // //                             className="w-full p-2 border rounded bg-gray-200"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Phone</label>
// // //                           <input
// // //                             type="text"
// // //                             name="mobile"
// // //                             value={formData.mobile || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Date of Birth</label>
// // //                           <input
// // //                             type="date"
// // //                             name="dob"
// // //                             value={formData.dob || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Address</label>
// // //                           <input
// // //                             type="text"
// // //                             name="address"
// // //                             value={formData.address || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">City</label>
// // //                           <input
// // //                             type="text"
// // //                             name="city"
// // //                             value={formData.city || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">State</label>
// // //                           <input
// // //                             type="text"
// // //                             name="state"
// // //                             value={formData.state || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <div className="mb-4">
// // //                           <label className="block mb-2 text-gray-700">Gender</label>
// // //                           <input
// // //                             type="text"
// // //                             name="gender"
// // //                             value={formData.gender || ''}
// // //                             onChange={handleChange}
// // //                             className="w-full p-2 border rounded"
// // //                           />
// // //                         </div>
// // //                         <button
// // //                           onClick={handleSave}
// // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //                         >
// // //                           Save
// // //                         </button>
// // //                         <button
// // //                           onClick={() => setEditMode(false)}
// // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // //                         >
// // //                           Cancel
// // //                         </button>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {activeTab === 'bookings' && (
// // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // //                 <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
// // //                 {bookings.length > 0 ? (
// // //                   <table className="w-full border-collapse">
// // //                     <thead>
// // //                       <tr className="bg-gray-200 border-b">
// // //                         <th className="px-4 py-2 text-left">Date</th>
// // //                         <th className="px-4 py-2 text-left">Pickup</th>
// // //                         <th className="px-4 py-2 text-left">Drop</th>
// // //                         <th className="px-4 py-2 text-left">Status</th>
// // //                         <th className="px-4 py-2 text-left">Amount</th>
// // //                         <th className="px-4 py-2 text-left">Actions</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {bookings.map((booking) => (
// // //                         <tr key={booking.id} className="border-b">
// // //                           <td className="px-4 py-2">{new Date(booking.bookingDate).toLocaleDateString()}</td>
// // //                           <td className="px-4 py-2">{booking.ride.startPoint}</td>
// // //                           <td className="px-4 py-2">{booking.ride.endPoint}</td>
// // //                           <td className="px-4 py-2">{booking.bookingStatus}</td>
// // //                           <td className="px-4 py-2">{booking.payment.amount}</td>
// // //                           <td className="px-4 py-2 flex space-x-2">
// // //                             {/* <button
// // //                               onClick={() => handleViewDetails(booking.id)}
// // //                               className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // //                             >
// // //                               View
// // //                             </button> */}
// // //                             {booking.bookingStatus === 'Approved' && (
// // //                               <button
// // //                                 onClick={() => handlePayment(booking.id)}
// // //                                 className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // //                               >
// // //                                 Payment
// // //                               </button>
// // //                             )}
// // //                             <button
// // //                               onClick={() => handleReview(booking.id)}
// // //                               className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700"
// // //                             >
// // //                               Review
// // //                             </button>
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 ) : (
// // //                   <p>No bookings found.</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserDashboard;




// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera } from 'react-icons/fa'; 
// // // import { useNavigate } from 'react-router-dom';
// // // import Swal from 'sweetalert2';

// // // const UserDashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [bookings, setBookings] = useState([]);
// // //   const [rides, setRides] = useState([]); // New state for rides
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [formData, setFormData] = useState({});
// // //   const [showDetails, setShowDetails] = useState(false);
// // //   const [activeTab, setActiveTab] = useState('profile');
// // //   const [profileImage, setProfileImage] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const userId = sessionStorage.getItem('userId');
// // //         if (!userId) {
// // //           navigate('/login');
// // //           return;
// // //         }

// // //         // Fetch user data
// // //         const userResponse = await axios.get(`http://localhost:8029/user/${userId}`);
// // //         setUser(userResponse.data);
// // //         setFormData(userResponse.data);

// // //         // Fetch profile image if it exists
// // //         if (userResponse.data.profileImg) {
// // //           const imageResponse = await axios.get(`http://localhost:8029/user/${userId}/profile-image`, { responseType: 'arraybuffer' });
// // //           const base64Image = arrayBufferToBase64(imageResponse.data);
// // //           setProfileImage(`data:image/jpeg;base64,${base64Image}`);
// // //         } else {
// // //           setProfileImage('https://via.placeholder.com/100');
// // //         }

// // //         // Fetch user bookings
// // //         const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
// // //         setBookings(bookingsResponse.data);

// // //         // Fetch user rides
// // //         const ridesResponse = await axios.get(`http://localhost:8029/ride/user/${userId}`); // Ensure the URL matches your API
// // //         setRides(ridesResponse.data);

// // //       } catch (err) {
// // //         console.error('Error fetching data', err);
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, [navigate]);

// // //   // Utility function to convert array buffer to base64 string
// // //   const arrayBufferToBase64 = (buffer) => {
// // //     let binary = '';
// // //     const bytes = new Uint8Array(buffer);
// // //     const len = bytes.byteLength;
// // //     for (let i = 0; i < len; i++) {
// // //       binary += String.fromCharCode(bytes[i]);
// // //     }
// // //     return window.btoa(binary);
// // //   };

// // //   const handleLogout = () => {
// // //     sessionStorage.clear();
// // //     navigate('/userlogin');
// // //   };

// // //   const handleEdit = () => {
// // //     setEditMode(true);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prevData => ({ ...prevData, [name]: value }));
// // //   };

// // //   const handleSave = async () => {
// // //     const userId = sessionStorage.getItem('userId');
// // //     if (!userId) {
// // //       Swal.fire('Error', 'User ID is missing.', 'error');
// // //       return;
// // //     }

// // //     try {
// // //       // Prepare form data with user ID and other form entries
// // //       const formDataWithUserId = new URLSearchParams();
// // //       formDataWithUserId.append('name', formData.name || '');
// // //       formDataWithUserId.append('email', formData.email || '');
// // //       formDataWithUserId.append('mobile', formData.mobile || '');
// // //       formDataWithUserId.append('dob', formData.dob || '');
// // //       formDataWithUserId.append('address', formData.address || '');
// // //       formDataWithUserId.append('city', formData.city || '');
// // //       formDataWithUserId.append('state', formData.state || '');
// // //       formDataWithUserId.append('gender', formData.gender || '');

// // //       // Make the PUT request to update user information
// // //       await axios.put(`http://localhost:8029/user/${userId}`, formDataWithUserId, {
// // //         headers: {
// // //           'Content-Type': 'application/x-www-form-urlencoded'
// // //         }
// // //       });
// // //       setUser(formData);
// // //       setEditMode(false);
// // //       Swal.fire('Success', 'Profile updated successfully!', 'success');
// // //     } catch (err) {
// // //       console.error('Error saving data', err);
// // //       Swal.fire('Error', 'Failed to update profile.', 'error');
// // //     }
// // //   };

// // //   const handleProfileImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         const base64Image = reader.result;
// // //         setProfileImage(base64Image);
// // //         setFormData(prevData => ({ ...prevData, profileImg: base64Image }));
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleImageUploadClick = () => {
// // //     document.getElementById('profile-image-input').click();
// // //   };

// // //   const handleViewDetails = (bookingId) => {
// // //     console.log(`Viewing details for booking ID: ${bookingId}`);
// // //     // Example: navigate(`/booking-details/${bookingId}`);
// // //   };

// // //   const handlePayment = (bookingId) => {
// // //     console.log(`Processing payment for booking ID: ${bookingId}`);
// // //   };

// // //   const handleReview = (bookingId) => {
// // //     console.log(`Reviewing booking ID: ${bookingId}`);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
// // //         <img 
// // //           src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
// // //           alt="Logo"
// // //           className="w-12 h-12"
// // //         />
// // //         <div className="flex items-center space-x-4">
// // //           <button
// // //             onClick={() => navigate('/searchride')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaSearch className="mr-2" /> Search Ride
// // //           </button>
// // //           <button
// // //             onClick={() => navigate('/track-ride')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaMapMarkerAlt className="mr-2" /> Track Ride
// // //           </button>
// // //           <button
// // //             onClick={() => navigate('/vehicle')}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaPlus className="mr-2" /> Publish Ride
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// // //           >
// // //             <FaSignOutAlt className="mr-2" /> Logout
// // //           </button>
// // //           <div className="relative">
// // //             <img
// // //               src={profileImage || 'https://via.placeholder.com/100'}
// // //               alt="User Profile"
// // //               className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
// // //               onClick={() => setShowDetails(prev => !prev)}
// // //             />
// // //             {editMode && (
// // //               <FaCamera
// // //                 className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // //                 size={20}
// // //                 onClick={handleImageUploadClick}
// // //               />
// // //             )}
// // //             <input
// // //               type="file"
// // //               id="profile-image-input"
// // //               accept="image/*"
// // //               style={{ display: 'none' }}
// // //               onChange={handleProfileImageChange}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="container mx-auto p-6">
// // //         {showDetails && (
// // //           <>
// // //             <div className="flex space-x-4 mb-6">
// // //               <button
// // //                 onClick={() => setActiveTab('profile')}
// // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // //               >
// // //                 <FaUser className="inline-block mr-2" /> Profile
// // //               </button>
// // //               <button
// // //                 onClick={() => setActiveTab('bookings')}
// // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // //               >
// // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // //               </button>
// // //               <button
// // //                 onClick={() => setActiveTab('rides')} // New tab for rides
// // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // //               >
// // //                 <FaMapMarkerAlt className="inline-block mr-2" /> Rides
// // //               </button>
// // //             </div>

// // //             <div>
// // //               {activeTab === 'profile' && (
// // //                 <div className="bg-white p-6 rounded-lg shadow-md">
// // //                   <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
// // //                   {editMode ? (
// // //                     <div>
// // //                       <div className="mb-4">
// // //                         <label className="block text-gray-700">Name</label>
// // //                         <input
// // //                           type="text"
// // //                           name="name"
// // //                           value={formData.name || ''}
// // //                           onChange={handleChange}
// // //                           className="border p-2 w-full rounded"
// // //                         />
// // //                       </div>
// // //                       <div className="mb-4">
// // //                         <label className="block text-gray-700">Email</label>
// // //                         <input
// // //                           type="email"
// // //                           name="email"
// // //                           value={formData.email || ''}
// // //                           onChange={handleChange}
// // //                           className="border p-2 w-full rounded"
// // //                         />
// // //                       </div>
// // //                       {/* Add other fields similarly */}
// // //                       <button
// // //                         onClick={handleSave}
// // //                         className="bg-blue-600 text-white px-4 py-2 rounded"
// // //                       >
// // //                         Save
// // //                       </button>
// // //                     </div>
// // //                   ) : (
// // //                     <div>
// // //                       <p><strong>Name:</strong> {user?.name}</p>
// // //                       <p><strong>Email:</strong> {user?.email}</p>
// // //                       {/* Add other fields similarly */}
// // //                       <button
// // //                         onClick={handleEdit}
// // //                         className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
// // //                       >
// // //                         Edit
// // //                       </button>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )}

// // //               {activeTab === 'bookings' && (
// // //                 <div className="bg-white p-6 rounded-lg shadow-md">
// // //                   <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
// // //                   {bookings.length > 0 ? (
// // //                     <table className="w-full border-collapse">
// // //                       <thead>
// // //                         <tr className="bg-gray-200 border-b">
// // //                           <th className="px-4 py-2 text-left">Booking ID</th>
// // //                           <th className="px-4 py-2 text-left">Ride ID</th>
// // //                           <th className="px-4 py-2 text-left">User ID</th>
// // //                           <th className="px-4 py-2 text-left">Seats</th>
// // //                           <th className="px-4 py-2 text-left">Status</th>
// // //                           <th className="px-4 py-2 text-left">Date</th>
// // //                           <th className="px-4 py-2 text-left">Actions</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {bookings.map((booking) => (
// // //                           <tr key={booking.bookingId} className="border-b">
// // //                             <td className="px-4 py-2">{booking.bookingId}</td>
// // //                             <td className="px-4 py-2">{booking.rideId}</td>
// // //                             <td className="px-4 py-2">{booking.userId}</td>
// // //                             <td className="px-4 py-2">{booking.seats}</td>
// // //                             <td className="px-4 py-2">{booking.status}</td>
// // //                             <td className="px-4 py-2">{new Date(booking.date).toLocaleDateString()}</td>
// // //                             <td className="px-4 py-2">
// // //                               <button
// // //                                 onClick={() => handleViewDetails(booking.bookingId)}
// // //                                 className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
// // //                               >
// // //                                 View
// // //                               </button>
// // //                               <button
// // //                                 onClick={() => handlePayment(booking.bookingId)}
// // //                                 className="bg-green-600 text-white px-2 py-1 rounded mr-2"
// // //                               >
// // //                                 Pay
// // //                               </button>
// // //                               <button
// // //                                 onClick={() => handleReview(booking.bookingId)}
// // //                                 className="bg-yellow-600 text-white px-2 py-1 rounded"
// // //                               >
// // //                                 Review
// // //                               </button>
// // //                             </td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   ) : (
// // //                     <p>No bookings found.</p>
// // //                   )}
// // //                 </div>
// // //               )}

// // //               {activeTab === 'rides' && (
// // //                 <div className="bg-white p-6 rounded-lg shadow-md">
// // //                   <h2 className="text-2xl font-semibold mb-4">Your Rides</h2>
// // //                   {rides.length > 0 ? (
// // //                     <table className="w-full border-collapse">
// // //                       <thead>
// // //                         <tr className="bg-gray-200 border-b">
// // //                           <th className="px-4 py-2 text-left">Ride ID</th>
// // //                           <th className="px-4 py-2 text-left">Start Point</th>
// // //                           <th className="px-4 py-2 text-left">End Point</th>
// // //                           <th className="px-4 py-2 text-left">Date</th>
// // //                           <th className="px-4 py-2 text-left">Departure Time</th>
// // //                           <th className="px-4 py-2 text-left">Arrival Time</th>
// // //                           <th className="px-4 py-2 text-left">Distance</th>
// // //                           <th className="px-4 py-2 text-left">Price Per Person</th>
// // //                           <th className="px-4 py-2 text-left">Available Seats</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {rides.map((ride) => (
// // //                           <tr key={ride.rideId} className="border-b">
// // //                             <td className="px-4 py-2">{ride.rideId}</td>
// // //                             <td className="px-4 py-2">{ride.startPoint}</td>
// // //                             <td className="px-4 py-2">{ride.endPoint}</td>
// // //                             <td className="px-4 py-2">{new Date(ride.rideDate).toLocaleDateString()}</td>
// // //                             <td className="px-4 py-2">{ride.departureTime}</td>
// // //                             <td className="px-4 py-2">{ride.arrivalTime}</td>
// // //                             <td className="px-4 py-2">{ride.distance}</td>
// // //                             <td className="px-4 py-2">${ride.pricePerPerson.toFixed(2)}</td>
// // //                             <td className="px-4 py-2">{ride.availableSeats}</td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   ) : (
// // //                     <p>No rides found.</p>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserDashboard;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera } from 'react-icons/fa'; 
// // import { useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const UserDashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [bookings, setBookings] = useState([]);
// //   const [rides, setRides] = useState([]);
// //   const [editMode, setEditMode] = useState(false);
// //   const [formData, setFormData] = useState({});
// //   const [showDetails, setShowDetails] = useState(false);
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [profileImage, setProfileImage] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const userId = sessionStorage.getItem('userId');
// //         if (!userId) {
// //           navigate('/login');
// //           return;
// //         }

// //         // Fetch user data
// //         const userResponse = await axios.get(`http://localhost:8029/user/${userId}`);
// //         setUser(userResponse.data);
// //         setFormData(userResponse.data);

// //         // Fetch profile image if it exists
// //         if (userResponse.data.profileImg) {
// //           const imageResponse = await axios.get(`http://localhost:8029/user/${userId}/profile-image`, { responseType: 'arraybuffer' });
// //           const base64Image = arrayBufferToBase64(imageResponse.data);
// //           setProfileImage(`data:image/jpeg;base64,${base64Image}`);
// //         } else {
// //           setProfileImage('https://via.placeholder.com/100');
// //         }

// //         // Fetch user bookings
// //         const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
// //         setBookings(bookingsResponse.data);

// //         // Fetch user rides
// //         const ridesResponse = await axios.get(`http://localhost:8029/ride/user/${userId}`);
// //         setRides(ridesResponse.data);

// //       } catch (err) {
// //         Swal.fire('Error', 'Failed to fetch user data. Please try again later.', 'error');
// //         console.error('Error fetching data', err);
// //       }
// //     };

// //     fetchUserData();
// //   }, [navigate]);

// //   // Utility function to convert array buffer to base64 string
// //   const arrayBufferToBase64 = (buffer) => {
// //     let binary = '';
// //     const bytes = new Uint8Array(buffer);
// //     const len = bytes.byteLength;
// //     for (let i = 0; i < len; i++) {
// //       binary += String.fromCharCode(bytes[i]);
// //     }
// //     return window.btoa(binary);
// //   };

// //   const handleLogout = () => {
// //     sessionStorage.clear();
// //     navigate('/userlogin');
// //   };

// //   const handleEdit = () => {
// //     setEditMode(true);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevData => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSave = async () => {
// //     const userId = sessionStorage.getItem('userId');
// //     if (!userId) {
// //       Swal.fire('Error', 'User ID is missing.', 'error');
// //       return;
// //     }

// //     try {
// //       // Prepare form data with user ID and other form entries
// //       const formDataWithUserId = new URLSearchParams();
// //       formDataWithUserId.append('name', formData.name || '');
// //       formDataWithUserId.append('email', formData.email || '');
// //       formDataWithUserId.append('mobile', formData.mobile || '');
// //       formDataWithUserId.append('dob', formData.dob || '');
// //       formDataWithUserId.append('address', formData.address || '');
// //       formDataWithUserId.append('city', formData.city || '');
// //       formDataWithUserId.append('state', formData.state || '');
// //       formDataWithUserId.append('gender', formData.gender || '');

// //       // Make the PUT request to update user information
// //       await axios.put(`http://localhost:8029/user/${userId}`, formDataWithUserId, {
// //         headers: {
// //           'Content-Type': 'application/x-www-form-urlencoded'
// //         }
// //       });
// //       setUser(formData);
// //       setEditMode(false);
// //       Swal.fire('Success', 'Profile updated successfully!', 'success');
// //     } catch (err) {
// //       console.error('Error saving data', err);
// //       Swal.fire('Error', 'Failed to update profile.', 'error');
// //     }
// //   };

// //   const handleProfileImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const base64Image = reader.result;
// //         setProfileImage(base64Image);
// //         setFormData(prevData => ({ ...prevData, profileImg: base64Image }));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleImageUploadClick = () => {
// //     document.getElementById('profile-image-input').click();
// //   };

// //   const handleViewDetails = (bookingId) => {
// //     console.log(`Viewing details for booking ID: ${bookingId}`);
// //     // Example: navigate(`/booking-details/${bookingId}`);
// //   };

// //   const handlePayment = (bookingId) => {
// //     console.log(`Processing payment for booking ID: ${bookingId}`);
// //   };

// //   const handleReview = (bookingId) => {
// //     console.log(`Reviewing booking ID: ${bookingId}`);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
// //         <img 
// //           src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
// //           alt="Logo"
// //           className="w-12 h-12"
// //         />
// //         <div className="flex items-center space-x-4">
// //           <button
// //             onClick={() => navigate('/searchride')}
// //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //           >
// //             <FaSearch className="mr-2" /> Search Ride
// //           </button>
// //           <button
// //             onClick={() => navigate('/track-ride')}
// //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //           >
// //             <FaMapMarkerAlt className="mr-2" /> Track Ride
// //           </button>
// //           <button
// //             onClick={() => navigate('/vehicle')}
// //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //           >
// //             <FaPlus className="mr-2" /> Publish Ride
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
// //           >
// //             <FaSignOutAlt className="mr-2" /> Logout
// //           </button>
// //           <div className="relative">
// //             <img
// //               src={profileImage || 'https://via.placeholder.com/100'}
// //               alt="User Profile"
// //               className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
// //               onClick={() => setShowDetails(prev => !prev)}
// //             />
// //             {editMode && (
// //               <FaCamera
// //                 className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// //                 size={20}
// //                 onClick={handleImageUploadClick}
// //               />
// //             )}
// //             <input
// //               type="file"
// //               id="profile-image-input"
// //               accept="image/*"
// //               style={{ display: 'none' }}
// //               onChange={handleProfileImageChange}
// //             />
// //           </div>
// //         </div>
// //       </header>

// //       <main className="container mx-auto p-6">
// //         {showDetails && (
// //           <>
// //             <div className="flex space-x-4 mb-6">
// //               <button
// //                 onClick={() => setActiveTab('profile')}
// //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// //               >
// //                 <FaUser className="inline-block mr-2" /> Profile
// //               </button>
// //               <button
// //                 onClick={() => setActiveTab('bookings')}
// //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// //               >
// //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// //               </button>
// //               <button
// //                 onClick={() => setActiveTab('rides')}
// //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// //               >
// //                 <FaMapMarkerAlt className="inline-block mr-2" /> Rides
// //               </button>
// //             </div>

// //             <div>
// //               {activeTab === 'profile' && (
// //                 <div className="bg-white p-6 rounded-lg shadow-md">
// //                   <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
// //                   {editMode ? (
// //                     <div>
// //                       {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
// //                         <div className="mb-4" key={field}>
// //                           <label className="block text-gray-700 capitalize">{field}</label>
// //                           <input
// //                             type="text"
// //                             name={field}
// //                             value={formData[field] || ''}
// //                             onChange={handleChange}
// //                             className="border p-2 w-full rounded"
// //                           />
// //                         </div>
// //                       ))}
// //                       <button
// //                         onClick={handleSave}
// //                         className="bg-blue-600 text-white px-4 py-2 rounded"
// //                       >
// //                         Save
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <div>
// //                       {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
// //                         <p key={field}><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {user?.[field]}</p>
// //                       ))}
// //                       <button
// //                         onClick={handleEdit}
// //                         className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
// //                       >
// //                         Edit
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}

// //               {activeTab === 'bookings' && (
// //                 <div className="bg-white p-6 rounded-lg shadow-md">
// //                   <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
// //                   {bookings.length > 0 ? (
// //                     <table className="w-full border-collapse">
// //                       <thead>
// //                         <tr className="bg-gray-200 border-b">
// //                           <th className="px-4 py-2 text-left">Booking ID</th>
// //                           <th className="px-4 py-2 text-left">Ride ID</th>
// //                           <th className="px-4 py-2 text-left">User ID</th>
// //                           <th className="px-4 py-2 text-left">Seats</th>
// //                           <th className="px-4 py-2 text-left">Status</th>
// //                           <th className="px-4 py-2 text-left">Date</th>
// //                           <th className="px-4 py-2 text-left">Actions</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {bookings.map((booking) => (
// //                           <tr key={booking.bookingId} className="border-b">
// //                             <td className="px-4 py-2">{booking.bookingId}</td>
// //                             <td className="px-4 py-2">{booking.rideId}</td>
// //                             <td className="px-4 py-2">{booking.userId}</td>
// //                             <td className="px-4 py-2">{booking.seats}</td>
// //                             <td className="px-4 py-2">{booking.status}</td>
// //                             <td className="px-4 py-2">{new Date(booking.date).toLocaleDateString()}</td>
// //                             <td className="px-4 py-2">
// //                               <button
// //                                 onClick={() => handleViewDetails(booking.bookingId)}
// //                                 className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
// //                               >
// //                                 View
// //                               </button>
// //                               <button
// //                                 onClick={() => handlePayment(booking.bookingId)}
// //                                 className="bg-green-600 text-white px-2 py-1 rounded mr-2"
// //                               >
// //                                 Pay
// //                               </button>
// //                               <button
// //                                 onClick={() => handleReview(booking.bookingId)}
// //                                 className="bg-yellow-600 text-white px-2 py-1 rounded"
// //                               >
// //                                 Review
// //                               </button>
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   ) : (
// //                     <p>No bookings found.</p>
// //                   )}
// //                 </div>
// //               )}

// //               {activeTab === 'rides' && (
// //                 <div className="bg-white p-6 rounded-lg shadow-md">
// //                   <h2 className="text-2xl font-semibold mb-4">Your Rides</h2>
// //                   {rides.length > 0 ? (
// //                     <table className="w-full border-collapse">
// //                       <thead>
// //                         <tr className="bg-gray-200 border-b">
// //                           <th className="px-4 py-2 text-left">Ride ID</th>
// //                           <th className="px-4 py-2 text-left">Start Point</th>
// //                           <th className="px-4 py-2 text-left">End Point</th>
// //                           <th className="px-4 py-2 text-left">Date</th>
// //                           <th className="px-4 py-2 text-left">Departure Time</th>
// //                           <th className="px-4 py-2 text-left">Arrival Time</th>
// //                           <th className="px-4 py-2 text-left">Distance</th>
// //                           <th className="px-4 py-2 text-left">Price Per Person</th>
// //                           <th className="px-4 py-2 text-left">Available Seats</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {rides.map((ride) => (
// //                           <tr key={ride.rideId} className="border-b">
// //                             <td className="px-4 py-2">{ride.rideId}</td>
// //                             <td className="px-4 py-2">{ride.startPoint}</td>
// //                             <td className="px-4 py-2">{ride.endPoint}</td>
// //                             <td className="px-4 py-2">{new Date(ride.rideDate).toLocaleDateString()}</td>
// //                             <td className="px-4 py-2">{ride.departureTime}</td>
// //                             <td className="px-4 py-2">{ride.arrivalTime}</td>
// //                             <td className="px-4 py-2">{ride.distance}</td>
// //                             <td className="px-4 py-2">${ride.pricePerPerson.toFixed(2)}</td>
// //                             <td className="px-4 py-2">{ride.availableSeats}</td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   ) : (
// //                     <p>No rides found.</p>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </>
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default UserDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera } from 'react-icons/fa'; 
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UserDashboard = () => {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [rides, setRides] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [showDetails, setShowDetails] = useState(false);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [profileImage, setProfileImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = sessionStorage.getItem('userId');
//         if (!userId) {
//           navigate('/login');
//           return;
//         }

//         // Fetch user data
//         const userResponse = await axios.get(`http://localhost:8029/user/${userId}`);
//         setUser(userResponse.data);
//         setFormData(userResponse.data);

//         // Fetch profile image if it exists
//         if (userResponse.data.profileImg) {
//           const imageResponse = await axios.get(`http://localhost:8029/user/${userId}/profile-image`, { responseType: 'arraybuffer' });
//           const base64Image = arrayBufferToBase64(imageResponse.data);
//           setProfileImage(`data:image/jpeg;base64,${base64Image}`);
//         } else {
//           setProfileImage('https://via.placeholder.com/100');
//         }

//         // Fetch user bookings
//         const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
//         setBookings(bookingsResponse.data);

//         // Fetch user rides
//         const ridesResponse = await axios.get(`http://localhost:8029/ride/user/${userId}`);
//         setRides(ridesResponse.data);

//       } catch (err) {
//         Swal.fire('Error', 'Failed to fetch user data. Please try again later.', 'error');
//         console.error('Error fetching data', err);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   // Utility function to convert array buffer to base64 string
//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return window.btoa(binary);
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate('/userlogin');
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async () => {
//     const userId = sessionStorage.getItem('userId');
//     if (!userId) {
//       Swal.fire('Error', 'User ID is missing.', 'error');
//       return;
//     }

//     try {
//       // Prepare form data with user ID and other form entries
//       const formDataWithUserId = new URLSearchParams();
//       formDataWithUserId.append('name', formData.name || '');
//       formDataWithUserId.append('email', formData.email || '');
//       formDataWithUserId.append('mobile', formData.mobile || '');
//       formDataWithUserId.append('dob', formData.dob || '');
//       formDataWithUserId.append('address', formData.address || '');
//       formDataWithUserId.append('city', formData.city || '');
//       formDataWithUserId.append('state', formData.state || '');
//       formDataWithUserId.append('gender', formData.gender || '');

//       // Make the PUT request to update user information
//       await axios.put(`http://localhost:8029/user/${userId}`, formDataWithUserId, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       });
//       setUser(formData);
//       setEditMode(false);
//       Swal.fire('Success', 'Profile updated successfully!', 'success');
//     } catch (err) {
//       console.error('Error saving data', err);
//       Swal.fire('Error', 'Failed to update profile.', 'error');
//     }
//   };

//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64Image = reader.result;
//         setProfileImage(base64Image);
//         setFormData(prevData => ({ ...prevData, profileImg: base64Image }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImageUploadClick = () => {
//     document.getElementById('profile-image-input').click();
//   };

//   const handleViewDetails = (bookingId) => {
//     console.log(`Viewing details for booking ID: ${bookingId}`);
//     // Example: navigate(`/booking-details/${bookingId}`);
//   };

//   const handlePayment = (bookingId) => {
//     console.log(`Processing payment for booking ID: ${bookingId}`);
//   };

//   const handleReview = (bookingId) => {
//     console.log(`Reviewing booking ID: ${bookingId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
//         <img 
//           src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
//           alt="Logo"
//           className="w-12 h-12"
//         />
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => navigate('/searchride')}
//             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//           >
//             <FaSearch className="mr-2" /> Search Ride
//           </button>
//           <button
//             onClick={() => navigate('/track-ride')}
//             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//           >
//             <FaMapMarkerAlt className="mr-2" /> Track Ride
//           </button>
//           <button
//             onClick={() => navigate('/vehicle')}
//             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//           >
//             <FaPlus className="mr-2" /> Publish Ride
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
//           >
//             <FaSignOutAlt className="mr-2" /> Logout
//           </button>
//           <div className="relative">
//             <img
//               src={profileImage || 'https://via.placeholder.com/100'}
//               alt="User Profile"
//               className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => setShowDetails(prev => !prev)}
//             />
//             {editMode && (
//               <FaCamera
//                 className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
//                 size={20}
//                 onClick={handleImageUploadClick}
//               />
//             )}
//             <input
//               type="file"
//               id="profile-image-input"
//               accept="image/*"
//               style={{ display: 'none' }}
//               onChange={handleProfileImageChange}
//             />
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto p-6">
//         {showDetails && (
//           <>
//             <div className="flex space-x-4 mb-6">
//               <button
//                 onClick={() => setActiveTab('profile')}
//                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//               >
//                 <FaUser className="inline-block mr-2" /> Profile
//               </button>
//               <button
//                 onClick={() => setActiveTab('bookings')}
//                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//               >
//                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
//               </button>
//               <button
//                 onClick={() => setActiveTab('rides')}
//                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//               >
//                 <FaMapMarkerAlt className="inline-block mr-2" /> Rides
//               </button>
//             </div>

//             <div>
//               {activeTab === 'profile' && (
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//                   <img
//                     src={profileImage || 'https://via.placeholder.com/100'}
//                     alt="User Profile"
//                     className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6"
//                   />
//                   <div className="flex-1">
//                     {editMode ? (
//                       <div>
//                         {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
//                           <div className="mb-4" key={field}>
//                             <label className="block text-gray-700 capitalize">{field}</label>
//                             <input
//                               type="text"
//                               name={field}
//                               value={formData[field] || ''}
//                               onChange={handleChange}
//                               className="border p-2 w-full rounded"
//                             />
//                           </div>
//                         ))}
//                         <button
//                           onClick={handleSave}
//                           className="bg-blue-600 text-white px-4 py-2 rounded"
//                         >
//                           Save
//                         </button>
//                       </div>
//                     ) : (
//                       <div>
//                         {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
//                           <p key={field} className="mb-2"><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {user?.[field]}</p>
//                         ))}
//                         <button
//                           onClick={handleEdit}
//                           className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
//                         >
//                           Edit
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'bookings' && (
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
//                   {bookings.length > 0 ? (
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-200 border-b">
//                         <th className="px-4 py-2 text-left">Date</th>
//                         <th className="px-4 py-2 text-left">Pickup</th>
//                     <th className="px-4 py-2 text-left">Drop</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                     <th className="px-4 py-2 text-left">Amount</th>
//                      <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {bookings.map((booking) => (
//                           <tr key={booking.bookingId} className="border-b">
//                             <td className="px-4 py-2">{booking.bookingDate}</td>
//                             <td className="px-4 py-2">{booking.ride.startPoint}</td>
//                             <td className="px-4 py-2">{booking.ride.endPoint}</td>
//                             <td className="px-4 py-2">{booking.bookingStatus}</td>
//                             <td className="px-4 py-2">{booking.payment && booking.payment.amount}</td>
//                             {/* <td className="px-4 py-2">{new Date(booking.date).toLocaleDateString()}</td> */}
//                             <td className="px-4 py-2">
//                               <div className="flex space-x-2">
//                                 <button
//                                   onClick={() => handleViewDetails(booking.bookingId)}
//                                   className="bg-blue-600 text-white px-2 py-1 rounded"
//                                 >
//                                   View
//                                 </button>
//                                 <button
//                                   onClick={() => handlePayment(booking.bookingId)}
//                                   className="bg-green-600 text-white px-2 py-1 rounded"
//                                 >
//                                   Pay
//                                 </button>
//                                 <button
//                                   onClick={() => handleReview(booking.bookingId)}
//                                   className="bg-yellow-600 text-white px-2 py-1 rounded"
//                                 >
//                                   Review
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <p>No bookings found.</p>
//                   )}
//                 </div>
//               )}

//               {activeTab === 'rides' && (
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h2 className="text-2xl font-semibold mb-4">Your Rides</h2>
//                   {rides.length > 0 ? (
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-200 border-b">
//                           <th className="px-4 py-2 text-left">Ride ID</th>
//                           <th className="px-4 py-2 text-left">Start Point</th>
//                           <th className="px-4 py-2 text-left">End Point</th>
//                           <th className="px-4 py-2 text-left">Date</th>
//                           <th className="px-4 py-2 text-left">Departure Time</th>
//                           <th className="px-4 py-2 text-left">Arrival Time</th>
//                           <th className="px-4 py-2 text-left">Distance</th>
//                           <th className="px-4 py-2 text-left">Price Per Person</th>
//                           <th className="px-4 py-2 text-left">Available Seats</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {rides.map((ride) => (
//                           <tr key={ride.rideId} className="border-b">
//                             <td className="px-4 py-2">{ride.rideId}</td>
//                             <td className="px-4 py-2">{ride.startPoint}</td>
//                             <td className="px-4 py-2">{ride.endPoint}</td>
//                             <td className="px-4 py-2">{new Date(ride.rideDate).toLocaleDateString()}</td>
//                             <td className="px-4 py-2">{ride.departureTime}</td>
//                             <td className="px-4 py-2">{ride.arrivalTime}</td>
//                             <td className="px-4 py-2">{ride.distance}</td>
//                             <td className="px-4 py-2">${ride.pricePerPerson.toFixed(2)}</td>
//                             <td className="px-4 py-2">{ride.availableSeats}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <p>No rides found.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;
//----this is main code---


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera, FaCar, FaCalendarCheck} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomePage from './UserHomePage';

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [rides, setRides] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                if (!userId) {
                    navigate('/userlogin');
                    return;
                }

                // Fetch user data
                const userResponse = await axios.get(`http://localhost:8029/user/${userId}`);
                setUser(userResponse.data);
                setFormData(userResponse.data);

                // Fetch profile image if it exists
                if (userResponse.data.profileImg) {
                    const imageResponse = await axios.get(`http://localhost:8029/user/${userId}/profile-image`, { responseType: 'arraybuffer' });
                    const base64Image = arrayBufferToBase64(imageResponse.data);
                    setProfileImage(`data:image/jpeg;base64,${base64Image}`);
                } else {
                    setProfileImage('https://via.placeholder.com/100');
                }

                // Fetch user bookings
                const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
                console.log(bookingsResponse.data);
        
               // sessionStorage.setItem("bookingId",bookingsResponse.data.booking.bookingId);
                // sessionStorage.setItem("amount",bookingsResponse.data[0]);
                setBookings(bookingsResponse.data);
                // sessionStorage.setItem("amount",bookingsResponse.data.payment.amount);

                // Fetch user rides
                const ridesResponse = await axios.get(`http://localhost:8029/ride/user/${userId}`);
                setRides(ridesResponse.data);

            } catch (err) {
                Swal.fire('Error', 'Failed to fetch user data. Please try again later.', 'error');
                console.error('Error fetching data', err);
            }
        };

        fetchUserData();
    }, [navigate]);



    // Utility function to convert array buffer to base64 string
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

  
    const handleLogout = () => {
        Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            sessionStorage.clear();
            navigate('/userlogin');
        });
    };


    const handleEdit = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            Swal.fire('Error', 'User ID is missing.', 'error');
            return;
        }

        try {
            // Prepare form data with user ID and other form entries
            const formDataWithUserId = new URLSearchParams();
            formDataWithUserId.append('name', formData.name || '');
            formDataWithUserId.append('email', formData.email || '');
            formDataWithUserId.append('mobile', formData.mobile || '');
            formDataWithUserId.append('dob', formData.dob || '');
            formDataWithUserId.append('address', formData.address || '');
            formDataWithUserId.append('city', formData.city || '');
            formDataWithUserId.append('state', formData.state || '');
            formDataWithUserId.append('gender', formData.gender || '');

            // Make the PUT request to update user information
            await axios.put(`http://localhost:8029/user/${userId}`, formDataWithUserId, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setUser(formData);
            setEditMode(false);
            Swal.fire('Success', 'Profile updated successfully!', 'success');
        } catch (err) {
            console.error('Error saving data', err);
            Swal.fire('Error', 'Failed to update profile.', 'error');
        }
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setProfileImage(base64Image);
                setFormData(prevData => ({ ...prevData, profileImg: base64Image }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUploadClick = () => {
        document.getElementById('profile-image-input').click();
    };

    const handleViewDetails = (bookingId) => {
        console.log(`Viewing details for booking ID: ${bookingId}`);
        // Example: navigate(`/booking-details/${bookingId}`);
    };

    const handlePayment = (bookingId,payId) => {
        console.log(`Processing payment for booking ID: ${payId}`);
        
        // navigate(`/payment/${bookingId}`);
        navigate(`/payment/${payId}`)
    };
  
    // const userId = sessionStorage.getItem("userId");
    // const bookingId = sessionStorage.getItem("bookingId");

    // const handleTrackButtonClick = () => {
    //     if (userId && bookingId) {
    //         navigate(`/tracking/${userId}/${bookingId}`);
    //     } else {
    //         // Handle the case where userId or bookingId is not set
    //         console.log('User ID or Booking ID not available');
    //     }
    // };

   

    // const handlePayment = async (bookingId) => {
    //     try {
    //       const response = await axios.post(`http://localhost:8029/booking/${bookingId}/pay`);
    //       const updatedPaymentStatus = response.data.paymentStatus; // Ensure this field is updated correctly in the response

    //       Swal.fire('Success', 'Payment completed successfully!', 'success');
    //       setBookings(bookings.map(booking => 
    //         booking.bookingId === bookingId ? { ...booking, paymentStatus: updatedPaymentStatus } : booking
    //       ));
    //     } catch (err) {
    //       console.error('Error processing payment', err);
    //       Swal.fire('Error', 'Failed to process payment.', 'error');
    //     }
    //   };




    const handleReview = (bookingId) => {
        console.log(`Reviewing booking ID: ${bookingId}`);
        navigate('/rating');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
                <img
                    src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
                    alt="Logo"
                    className="w-12 h-12"
                />
                <div className="flex items-center space-x-4">
             
                    <button
                        onClick={() => navigate('/searchride')}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                    >
                        <FaSearch className="mr-2" /> Search Ride
                    </button>
                    
                    <button
                        onClick={() => navigate('/tracking')}
                    //    onClick={handleTrackButtonClick}
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
                        onClick={() => navigate('/selectvehicle')}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                    >
                        <FaCar className="mr-2" /> Schedule Ride
                    </button>

                    <button
                        onClick={() => navigate('/bookingrequest')}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded flex items-center"
                    >
                        < FaCalendarCheck className="mr-2" /> Booking Request 
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
                        {editMode && (
                            <FaCamera
                                className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
                                size={20}
                                onClick={handleImageUploadClick}
                            />
                        )}
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

            <main className="container mx-auto p-6">
                {showDetails && (
                    <>
                        <div className="flex space-x-4 mb-6">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                            >
                                <FaUser className="inline-block mr-2" /> Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('bookings')}
                                className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                            >
                                <FaCalendarAlt className="inline-block mr-2" /> Bookings
                            </button>
                            <button
                                onClick={() => setActiveTab('rides')}
                                className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'rides' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                            >
                                <FaMapMarkerAlt className="inline-block mr-2" /> Rides
                            </button>
                        </div>

                        <div>
                            {activeTab === 'profile' && (
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
                                                    <p key={field} className="mb-2"><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {user?.[field]}</p>
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
                            )}

                            {activeTab === 'bookings' && (
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
                                    {bookings.length > 0 ? (
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-200 border-b">
                                                <th className="px-4 py-2 text-left">Booking Id</th>
                                                    <th className="px-4 py-2 text-left">Date</th>
                                                    <th className="px-4 py-2 text-left">Pickup</th>
                                                    <th className="px-4 py-2 text-left">Drop</th>
                                                    <th className="px-4 py-2 text-left">Status</th>
                                                    <th className="px-4 py-2 text-left">Amount</th>
                                                    <th className="px-4 py-2 text-left">Actions</th>
                                                </tr>
                                            </thead>
                                            {/* <tbody>
                        {bookings.map((booking) => (
                          <tr key={booking.bookingId} className="border-b">
                            <td className="px-4 py-2">{booking.bookingDate}</td>
                            <td className="px-4 py-2">{booking.ride.startPoint}</td>
                            <td className="px-4 py-2">{booking.ride.endPoint}</td>
                            <td className="px-4 py-2">{booking.bookingStatus}</td>
                            <td className="px-4 py-2">{booking.payment && booking.payment.amount}</td>
                            <td className="px-4 py-2">
                              <div className="flex space-x-2">
                                
                                <button
                                  onClick={() => handlePayment(booking.bookingId)}
                                  disabled={booking.bookingStatus !== 'Approved'}
                                  className={`px-5 py-1 rounded ${booking.bookingStatus === 'Approved' ? 'bg-green-600 text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                                >
                                  Pay
                                </button>
                                <button
                                  onClick={() => handleReview(booking.bookingId)}
                                  disabled={booking.bookingStatus !== 'Approved'}
                                  className={`px-5 py-1 rounded ${booking.bookingStatus === 'Approved' ? 'bg-yellow-600 text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                                >
                                  Review
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>  */}
                                            <tbody>
                                                {bookings.map((booking) => (
                                                    <tr key={booking.bookingId} className="border-b">
                                                        <td className="px-4 py-2">{booking.bookingId}</td>
                                                        <td className="px-4 py-2">{booking.bookingDate}</td>
                                                        <td className="px-4 py-2">{booking.ride.startPoint}</td>
                                                        <td className="px-4 py-2">{booking.ride.endPoint}</td>
                                                        <td className="px-4 py-2">{booking.bookingStatus || 'N/A'}</td>
                                                        <td className="px-4 py-2">
                                                            {booking.payment ? booking.payment.amount : 'N/A'}
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex space-x-2">
                                                                <button
                                                                
                                                                    onClick={() => handlePayment(booking.bookingId, booking.payment.payId)}
                                                                    disabled={booking.payment.status === 'Paid' || booking.bookingStatus !== 'Approved'}
                                                                    className={`px-5 py-1 rounded ${booking.payment.status === 'Paid' ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-green-600 text-white'}`}
                                                                >
                                                                    {booking.payment.status === 'Paid' ? 'Paid' : 'Pay'}

                                                                </button>
                                                                <button
                                                                    onClick={() => handleReview(booking.bookingId)}
                                                                    disabled={booking.payment.status !== 'Paid'}
                                                                    className={`px-5 py-1 rounded ${booking.payment.status === 'Paid' ? 'bg-yellow-600 text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                                                                >
                                                                    Review
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    ) : (
                                        <p>No bookings found.</p>
                                    )}
                                </div>
                            )}
                            
                            {activeTab === 'rides' && (
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-semibold mb-4">Your Rides</h2>
                                    {rides.length > 0 ? (
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-200 border-b">
                                                    <th className="px-4 py-2 text-left">Ride ID</th>
                                                    <th className="px-4 py-2 text-left">Start Point</th>
                                                    <th className="px-4 py-2 text-left">End Point</th>
                                                    <th className="px-4 py-2 text-left">Date</th>
                                                    <th className="px-4 py-2 text-left">Departure Time</th>
                                                    <th className="px-4 py-2 text-left">Arrival Time</th>
                                                    <th className="px-4 py-2 text-left">Distance</th>
                                                    <th className="px-4 py-2 text-left">Price Per Person</th>
                                                    <th className="px-4 py-2 text-left">Available Seats</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rides.map((ride) => (
                                                    <tr key={ride.rideId} className="border-b">
                                                        <td className="px-4 py-2">{ride.rideId}</td>
                                                        <td className="px-4 py-2">{ride.startPoint}</td>
                                                        <td className="px-4 py-2">{ride.endPoint}</td>
                                                        <td className="px-4 py-2">{new Date(ride.rideDate).toLocaleDateString()}</td>
                                                        <td className="px-4 py-2">{ride.departureTime}</td>
                                                        <td className="px-4 py-2">{ride.arrivalTime}</td>
                                                        <td className="px-4 py-2">{ride.distance}</td>
                                                        <td className="px-4 py-2">₹{ride.pricePerPerson.toFixed(2)}</td>
                                                        <td className="px-4 py-2">{ride.availableSeats}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No rides found.</p>
                                    )}
                                </div>
                            )}

                        </div>
                    </>
                )}
            </main>
            <HomePage />
        </div>
    );
};

export default UserDashboard;

