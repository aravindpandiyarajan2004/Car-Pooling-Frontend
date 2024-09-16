
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaPlus, FaSignOutAlt, FaEdit, FaCamera, FaCar, FaCalendarCheck} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomePage from './UserHomePage';
import { useAuth } from '../components/AuthContext'; 

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
    const { logout } = useAuth(); 

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
        // Polling interval (e.g., every 30 seconds)
        const intervalId = setInterval(fetchUserData, 30000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);

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
            logout(); 
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

