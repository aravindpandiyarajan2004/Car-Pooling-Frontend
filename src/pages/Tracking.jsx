
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import Swal from 'sweetalert2';
import Mymap from './map';
import { useNavigate } from 'react-router-dom';

// Define map container style
const containerStyle = {
    width: '100%',
    height: '400px'
};

const TrackingPage = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [directionsResponses, setDirectionsResponses] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const [mapZoom, setMapZoom] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllBookings = async () => {
            try {
                // Assuming user ID is stored in local storage
                const userId = sessionStorage.getItem('userId');

                if (!userId) {
                    Swal.fire('Error', 'User information is missing.', 'error');
                    return;
                }

                // Fetch all bookings for the user
                const bookingsResponse = await axios.get(`http://localhost:8029/booking/user/${userId}`);
                const bookingsData = bookingsResponse.data;

                if (bookingsData.length === 0) {
                    Swal.fire('No Data', 'No tracking information found.', 'info');
                    return;
                }

                setAllBookings(bookingsData);

                // Set map center to the first booking's start point
                setMapCenter({
                    lat: parseFloat(bookingsData[0].ride.startPoint.lat),
                    lng: parseFloat(bookingsData[0].ride.startPoint.lng)
                });

                // Calculate routes for all bookings
                // bookingsData.forEach(booking => {
                //     calculateRoute(
                //         { lat: parseFloat(booking.ride.startPoint.lat), lng: parseFloat(booking.ride.startPoint.lng) },
                //         { lat: parseFloat(booking.ride.endPoint.lat), lng: parseFloat(booking.ride.endPoint.lng) }
                //     );
                // });
            } catch (error) {
                Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
            }
        };

        fetchAllBookings();
    }, []);

    // const calculateRoute = (start, end) => {
    //     const directionsService = new window.google.maps.DirectionsService();
    //     directionsService.route(
    //         {
    //             origin: start,
    //             destination: end,
    //             travelMode: window.google.maps.TravelMode.DRIVING
    //         },
    //         (result, status) => {
    //             if (status === window.google.maps.DirectionsStatus.OK) {
    //                 setDirectionsResponses(prev => [...prev, result]);
    //             } else {
    //                 Swal.fire('Error', 'Failed to calculate route.', 'error');
    //             }
    //         }
    //     );
    // };

    const handleBackButtonClick = () => {
        navigate('/userDashboard');  // Navigate back to UserDashboard
    };

    if (allBookings.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <button onClick={handleBackButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold mb-4">Track Your Rides</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                {allBookings.map((booking, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
                        <div className="flex justify-center mb-4">
                            <img
                                src={`data:image/jpeg;base64,${booking.ride.vehicle.carImage}`}
                                alt="Vehicle"
                                className="w-52 h-32 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <p><strong>Driver Name:</strong> {booking.ride.vehicle.user.name}</p>
                        <p><strong>Vehicle Model:</strong> {booking.ride.vehicle.model}</p>
                        <p><strong>Start Location:</strong> {booking.ride.startPoint}</p>
                        <p><strong>End Location:</strong> {booking.ride.endPoint}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
                {/* <h2 className="text-xl font-semibold mb-2">Map</h2>
                <LoadScript googleMapsApiKey="AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={mapCenter}
                        zoom={mapZoom}
                    >
                        {directionsResponses.map((response, index) => (
                            <DirectionsRenderer key={index} directions={response} />
                        ))}
                        {allBookings.map((booking, index) => (
                            <React.Fragment key={index}>
                                <Marker position={{ lat: parseFloat(booking.ride.startPoint.lat), lng: parseFloat(booking.ride.startPoint.lng) }} />
                                <Marker position={{ lat: parseFloat(booking.ride.endPoint.lat), lng: parseFloat(booking.ride.endPoint.lng) }} />
                            </React.Fragment>
                        ))}
                    </GoogleMap>
                </LoadScript> */}
                <Mymap/>
            </div>
        </div>
    );
};

export default TrackingPage;
