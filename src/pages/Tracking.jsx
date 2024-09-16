// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // // // // // import Swal from 'sweetalert2';

// // // // // // const containerStyle = {
// // // // // //     width: '100%',
// // // // // //     height: '400px'
// // // // // // };

// // // // // // const center = {
// // // // // //     lat: 0,
// // // // // //     lng: 0
// // // // // // };

// // // // // // const TrackingPage = ({ bookingId }) => {
// // // // // //     const [trackingInfo, setTrackingInfo] = useState(null);
// // // // // //     const [directionsResponse, setDirectionsResponse] = useState(null);

// // // // // //     useEffect(() => {
// // // // // //         const fetchTrackingInfo = async () => {
// // // // // //             try {
// // // // // //                 const response = await axios.get(`http://localhost:8029/booking/${bookingId}`);
// // // // // //                 setTrackingInfo(response.data);
// // // // // //                 calculateRoute(response.data.startLocation, response.data.endLocation);
// // // // // //             } catch (error) {
// // // // // //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// // // // // //             }
// // // // // //         };

// // // // // //         fetchTrackingInfo();
// // // // // //     }, [bookingId]);

// // // // // //     const calculateRoute = (start, end) => {
// // // // // //         const directionsService = new google.maps.DirectionsService();
// // // // // //         directionsService.route(
// // // // // //             {
// // // // // //                 origin: start,
// // // // // //                 destination: end,
// // // // // //                 travelMode: google.maps.TravelMode.DRIVING
// // // // // //             },
// // // // // //             (result, status) => {
// // // // // //                 if (status === google.maps.DirectionsStatus.OK) {
// // // // // //                     setDirectionsResponse(result);
// // // // // //                 } else {
// // // // // //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// // // // // //                 }
// // // // // //             }
// // // // // //         );
// // // // // //     };

// // // // // //     if (!trackingInfo) {
// // // // // //         return <div>Loading...</div>;
// // // // // //     }

// // // // // //     return (
// // // // // //         <div className="container mx-auto p-4">
// // // // // //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// // // // // //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// // // // // //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// // // // // //                 <img src={trackingInfo.vehicleImageUrl} alt="Vehicle" className="w-full h-auto mb-4" />
// // // // // //                 <p><strong>Start Location:</strong> {trackingInfo.startLocation}</p>
// // // // // //                 <p><strong>End Location:</strong> {trackingInfo.endLocation}</p>
// // // // // //             </div>

// // // // // //             <div className="bg-white shadow-lg rounded-lg p-6">
// // // // // //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// // // // // //                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
// // // // // //                     <GoogleMap
// // // // // //                         mapContainerStyle={containerStyle}
// // // // // //                         center={center}
// // // // // //                         zoom={10}
// // // // // //                     >
// // // // // //                         {directionsResponse && (
// // // // // //                             <DirectionsRenderer directions={directionsResponse} />
// // // // // //                         )}
// // // // // //                         <Marker position={trackingInfo.startLocation} />
// // // // // //                         <Marker position={trackingInfo.endLocation} />
// // // // // //                     </GoogleMap>
// // // // // //                 </LoadScript>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default TrackingPage;


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // // // // import Swal from 'sweetalert2';

// // // // // // Define map container style
// // // // // const containerStyle = {
// // // // //     width: '100%',
// // // // //     height: '400px'
// // // // // };

// // // // // const TrackingPage = ({ bookingId }) => {
// // // // //     const [trackingInfo, setTrackingInfo] = useState(null);
// // // // //     const [directionsResponse, setDirectionsResponse] = useState(null);
// // // // //     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
// // // // //     const [mapZoom, setMapZoom] = useState(10);

// // // // //     useEffect(() => {
// // // // //         const fetchTrackingInfo = async () => {
// // // // //             try {
// // // // //                 const response = await axios.get(`http://localhost:8029/booking/${bookingId}`);
// // // // //                 const data = response.data;

// // // // //                 setTrackingInfo(data);
// // // // //                 setMapCenter({ lat: parseFloat(data.startLocation.lat), lng: parseFloat(data.startLocation.lng) });
// // // // //                 calculateRoute(data.startLocation, data.endLocation);
// // // // //             } catch (error) {
// // // // //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// // // // //             }
// // // // //         };

// // // // //         fetchTrackingInfo();
// // // // //     }, [bookingId]);

// // // // //     const calculateRoute = (start, end) => {
// // // // //         const directionsService = new window.google.maps.DirectionsService();
// // // // //         directionsService.route(
// // // // //             {
// // // // //                 origin: start,
// // // // //                 destination: end,
// // // // //                 travelMode: window.google.maps.TravelMode.DRIVING
// // // // //             },
// // // // //             (result, status) => {
// // // // //                 if (status === window.google.maps.DirectionsStatus.OK) {
// // // // //                     setDirectionsResponse(result);
// // // // //                 } else {
// // // // //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// // // // //                 }
// // // // //             }
// // // // //         );
// // // // //     };

// // // // //     if (!trackingInfo) {
// // // // //         return <div>Loading...</div>;
// // // // //     }

// // // // //     return (
// // // // //         <div className="container mx-auto p-4">
// // // // //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// // // // //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// // // // //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// // // // //                 <img src={trackingInfo.vehicleImageUrl} alt="Vehicle" className="w-full h-auto mb-4" />
// // // // //                 <p><strong>Start Location:</strong> {trackingInfo.startLocation.address}</p>
// // // // //                 <p><strong>End Location:</strong> {trackingInfo.endLocation.address}</p>
// // // // //             </div>

// // // // //             <div className="bg-white shadow-lg rounded-lg p-6">
// // // // //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// // // // //                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
// // // // //                     <GoogleMap
// // // // //                         mapContainerStyle={containerStyle}
// // // // //                         center={mapCenter}
// // // // //                         zoom={mapZoom}
// // // // //                     >
// // // // //                         {directionsResponse && (
// // // // //                             <DirectionsRenderer directions={directionsResponse} />
// // // // //                         )}
// // // // //                         <Marker position={trackingInfo.startLocation} />
// // // // //                         <Marker position={trackingInfo.endLocation} />
// // // // //                     </GoogleMap>
// // // // //                 </LoadScript>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default TrackingPage;


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // // // // import Swal from 'sweetalert2';

// // // // // // Define map container style
// // // // // const containerStyle = {
// // // // //     width: '100%',
// // // // //     height: '400px'
// // // // // };

// // // // // const TrackingPage = ({ bookingId }) => {
// // // // //     const [trackingInfo, setTrackingInfo] = useState(null);
// // // // //     const [directionsResponse, setDirectionsResponse] = useState(null);
// // // // //     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
// // // // //     const [mapZoom, setMapZoom] = useState(10);
// // // // //     const[userId,setUserId]= useState(sessionStorage.getItem('userId'));

// // // // //     useEffect(() => {
// // // // //         // Ensure bookingId is a valid number
// // // // //         const validBookingId = Number.parseInt(bookingId, 10);
// // // // //         if (Number.isNaN(validBookingId)) {
// // // // //             Swal.fire('Error', 'Invalid booking ID.', 'error');
// // // // //             return;
// // // // //         }

// // // // //         const fetchTrackingInfo = async () => {
// // // // //             try {
// // // // //                 const response = await axios.get(`http://localhost:8029/booking/user/${userId}`);
// // // // //                 const data = response.data;

// // // // //                 setTrackingInfo(data);
// // // // //                 setMapCenter({ lat: parseFloat(data.startLocation.lat), lng: parseFloat(data.startLocation.lng) });
// // // // //                 calculateRoute(data.startLocation, data.endLocation);
// // // // //             } catch (error) {
// // // // //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// // // // //             }
// // // // //         };

// // // // //         fetchTrackingInfo();
// // // // //     }, [bookingId]);

// // // // //     const calculateRoute = (start, end) => {
// // // // //         const directionsService = new window.google.maps.DirectionsService();
// // // // //         directionsService.route(
// // // // //             {
// // // // //                 origin: start,
// // // // //                 destination: end,
// // // // //                 travelMode: window.google.maps.TravelMode.DRIVING
// // // // //             },
// // // // //             (result, status) => {
// // // // //                 if (status === window.google.maps.DirectionsStatus.OK) {
// // // // //                     setDirectionsResponse(result);
// // // // //                 } else {
// // // // //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// // // // //                 }
// // // // //             }
// // // // //         );
// // // // //     };

// // // // //     if (!trackingInfo) {
// // // // //         return <div>Loading...</div>;
// // // // //     }

// // // // //     return (
// // // // //         <div className="container mx-auto p-4">
// // // // //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// // // // //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// // // // //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// // // // //                 <img src={trackingInfo.vehicleImageUrl} alt="Vehicle" className="w-full h-auto mb-4" />
// // // // //                 <p><strong>Start Location:</strong> {trackingInfo.startLocation.address}</p>
// // // // //                 <p><strong>End Location:</strong> {trackingInfo.endLocation.address}</p>
// // // // //             </div>

// // // // //             <div className="bg-white shadow-lg rounded-lg p-6">
// // // // //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// // // // //                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
// // // // //                     <GoogleMap
// // // // //                         mapContainerStyle={containerStyle}
// // // // //                         center={mapCenter}
// // // // //                         zoom={mapZoom}
// // // // //                     >
// // // // //                         {directionsResponse && (
// // // // //                             <DirectionsRenderer directions={directionsResponse} />
// // // // //                         )}
// // // // //                         <Marker position={trackingInfo.startLocation} />
// // // // //                         <Marker position={trackingInfo.endLocation} />
// // // // //                     </GoogleMap>
// // // // //                 </LoadScript>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default TrackingPage;


// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // // // import Swal from 'sweetalert2';

// // // // // Define map container style
// // // // const containerStyle = {
// // // //     width: '100%',
// // // //     height: '400px'
// // // // };

// // // // const TrackingPage = ({ bookingId }) => {
// // // //     const [trackingInfo, setTrackingInfo] = useState(null);
// // // //     const [directionsResponse, setDirectionsResponse] = useState(null);
// // // //     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
// // // //     const [mapZoom, setMapZoom] = useState(10);

// // // //     useEffect(() => {
// // // //         const fetchTrackingInfo = async () => {
// // // //             try {
// // // //                 const response = await axios.get("http://localhost:8029/booking/4");
// // // //                 const data = response.data;

// // // //                 setTrackingInfo(data);
// // // //                 setMapCenter({ lat: parseFloat(data.ride.startLocation.lat), lng: parseFloat(data.ride.startLocation.lng) });
// // // //                 calculateRoute(data.ride.startLocation, data.ride.endLocation);
// // // //             } catch (error) {
// // // //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// // // //             }
// // // //         };

// // // //         fetchTrackingInfo();
// // // //     }, [bookingId]);

// // // //     const calculateRoute = (start, end) => {
// // // //         const directionsService = new window.google.maps.DirectionsService();
// // // //         directionsService.route(
// // // //             {
// // // //                 origin: start,
// // // //                 destination: end,
// // // //                 travelMode: window.google.maps.TravelMode.DRIVING
// // // //             },
// // // //             (result, status) => {
// // // //                 if (status === window.google.maps.DirectionsStatus.OK) {
// // // //                     setDirectionsResponse(result);
// // // //                 } else {
// // // //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// // // //                 }
// // // //             }
// // // //         );
// // // //     };

// // // //     if (!trackingInfo) {
// // // //         return <div>Loading...</div>;
// // // //     }

// // // //     return (
// // // //         <div className="container mx-auto p-4">
// // // //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// // // //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// // // //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// // // //                 <img src={trackingInfo.ride.vehicleImageUrl} alt="Vehicle" className="w-full h-auto mb-4" />
// // // //                 <p><strong>Vehicle Model:</strong> {trackingInfo.ride.vehicleModel}</p>
// // // //                 <p><strong>Start Location:</strong> {trackingInfo.ride.startPoint}</p>
// // // //                 <p><strong>End Location:</strong> {trackingInfo.ride.endPoint}</p>
// // // //             </div>

// // // //             <div className="bg-white shadow-lg rounded-lg p-6">
// // // //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// // // //                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
// // // //                     <GoogleMap
// // // //                         mapContainerStyle={containerStyle}
// // // //                         center={mapCenter}
// // // //                         zoom={mapZoom}
// // // //                     >
// // // //                         {directionsResponse && (
// // // //                             <DirectionsRenderer directions={directionsResponse} />
// // // //                         )}
// // // //                         <Marker position={trackingInfo.ride.startLocation} />
// // // //                         <Marker position={trackingInfo.ride.endLocation} />
// // // //                     </GoogleMap>
// // // //                 </LoadScript>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default TrackingPage;

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // // import Swal from 'sweetalert2';
// // // import { useNavigate } from 'react-router-dom';  // Import useNavigate
// // // import Mymap from './map';

// // // // Define map container style
// // // const containerStyle = {
// // //     width: '100%',
// // //     height: '400px'
// // // };

// // // const TrackingPage = ({ bookingId }) => {
// // //     const [trackingInfo, setTrackingInfo] = useState(null);
// // //     const [directionsResponse, setDirectionsResponse] = useState(null);
// // //     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
// // //     const [mapZoom, setMapZoom] = useState(10);
// // //     const navigate = useNavigate();  // Initialize useNavigate

// // //     useEffect(() => {
// // //         const fetchTrackingInfo = async () => {
// // //             try {
// // //                 const response = await axios.get("http://localhost:8029/booking/1");
// // //                 const data = response.data;

// // //                 setTrackingInfo(data);
// // //                 setMapCenter({ lat: parseFloat(data.ride.startPoint.lat), lng: parseFloat(data.ride.startPoint.lng) });
// // //                 calculateRoute(data.ride.startPoint, data.ride.endPoint);
// // //             } catch (error) {
// // //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// // //             }
// // //         };

// // //         fetchTrackingInfo();
// // //     }, [bookingId]);

// // //     const calculateRoute = (start, end) => {
// // //         const directionsService = new window.google.maps.DirectionsService();
// // //         directionsService.route(
// // //             {
// // //                 origin: start,
// // //                 destination: end,
// // //                 travelMode: window.google.maps.TravelMode.DRIVING
// // //             },
// // //             (result, status) => {
// // //                 if (status === window.google.maps.DirectionsStatus.OK) {
// // //                     setDirectionsResponse(result);
// // //                 } else {
// // //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// // //                 }
// // //             }
// // //         );
// // //     };

// // //     const handleBackButtonClick = () => {
// // //         navigate('/userDashboard');  // Navigate back to UserDashboard
// // //     };

// // //     if (!trackingInfo) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     return (
// // //         <div className="container mx-auto p-4">
// // //             <button onClick={handleBackButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
// // //                 Back to Dashboard
// // //             </button>
// // //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// // //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// // //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// // //                 <img src={`data:image/jpeg;base64,${trackingInfo.ride.vehicle.carImage}`} alt="Vehicle" className="w-full h-50 w-40 mb-4" />
// // //                 <p><strong>Driver Name:</strong> {trackingInfo.ride.vehicle.user.name}</p>
// // //                 <p><strong>Vehicle Model:</strong> {trackingInfo.ride.vehicle.model}</p>
// // //                 <p><strong>Start Location:</strong> {trackingInfo.ride.startPoint}</p>
// // //                 <p><strong>End Location:</strong> {trackingInfo.ride.endPoint}</p>
// // //             </div>

// // //             <div className="bg-white shadow-lg rounded-lg p-6">
// // //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// // //                 {/* <LoadScript googleMapsApiKey="AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g">
// // //                     <GoogleMap
// // //                         mapContainerStyle={containerStyle}
// // //                         center={mapCenter}
// // //                         zoom={mapZoom}
// // //                     >
// // //                         {directionsResponse && (
// // //                             <DirectionsRenderer directions={directionsResponse} />
// // //                         )}
// // //                         <Marker position={trackingInfo.ride.startPoint}/>
// // //                         <Marker position={trackingInfo.ride.endPoint} />
// // //                     </GoogleMap>
// // //                 </LoadScript> */}
// // //                 <Mymap/>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default TrackingPage;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// // import Swal from 'sweetalert2';
// // import { useNavigate, useParams } from 'react-router-dom';  // Import useParams

// // // Define map container style
// // const containerStyle = {
// //     width: '100%',
// //     height: '400px'
// // };

// // const TrackingPage = () => {
// //     const { bookingId, userId } = useParams();  // Extract bookingId and userId from URL params
// //     const [trackingInfo, setTrackingInfo] = useState(null);
// //     const [directionsResponse, setDirectionsResponse] = useState(null);
// //     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
// //     const [mapZoom, setMapZoom] = useState(10);
// //     const navigate = useNavigate();  // Initialize useNavigate

// //     useEffect(() => {
// //         const fetchTrackingInfo = async () => {
// //             try {
// //                 const response = await axios.get("http://localhost:8029/booking/search", {
// //                     params: {
// //                         bookingId: bookingId || 0,
// //                         userId: userId || 0
// //                     }
// //                 });

// //                 const data = response.data;

// //                 if (data.length === 0) {
// //                     Swal.fire('No Data', 'No tracking information found.', 'info');
// //                     return;
// //                 }

// //                 const bookingData = data[0]; 

// //                 setTrackingInfo(bookingData);
// //                 setMapCenter({ lat: parseFloat(bookingData.ride.startPoint.lat), lng: parseFloat(bookingData.ride.startPoint.lng) });
// //                 calculateRoute(bookingData.ride.startPoint, bookingData.ride.endPoint);
// //             } catch (error) {
// //                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
// //             }
// //         };

// //         fetchTrackingInfo();
// //     }, [bookingId, userId]);

// //     const calculateRoute = (start, end) => {
// //         const directionsService = new window.google.maps.DirectionsService();
// //         directionsService.route(
// //             {
// //                 origin: start,
// //                 destination: end,
// //                 travelMode: window.google.maps.TravelMode.DRIVING
// //             },
// //             (result, status) => {
// //                 if (status === window.google.maps.DirectionsStatus.OK) {
// //                     setDirectionsResponse(result);
// //                 } else {
// //                     Swal.fire('Error', 'Failed to calculate route.', 'error');
// //                 }
// //             }
// //         );
// //     };

// //     const handleBackButtonClick = () => {
// //         navigate('/userDashboard');  // Navigate back to UserDashboard
// //     };

// //     if (!trackingInfo) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div className="container mx-auto p-4">
// //             <button onClick={handleBackButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
// //                 Back to Dashboard
// //             </button>
// //             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
// //             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
// //                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
// //                 <img src={`data:image/jpeg;base64,${trackingInfo.ride.vehicle.carImage}`} alt="Vehicle" className="w-full h-50 w-40 mb-4" />
// //                 <p><strong>Driver Name:</strong> {trackingInfo.ride.vehicle.user.name}</p>
// //                 <p><strong>Vehicle Model:</strong> {trackingInfo.ride.vehicle.model}</p>
// //                 <p><strong>Start Location:</strong> {trackingInfo.ride.startPoint}</p>
// //                 <p><strong>End Location:</strong> {trackingInfo.ride.endPoint}</p>
// //             </div>

// //             <div className="bg-white shadow-lg rounded-lg p-6">
// //                 <h2 className="text-xl font-semibold mb-2">Map</h2>
// //                 <LoadScript googleMapsApiKey="AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g">
// //                     <GoogleMap
// //                         mapContainerStyle={containerStyle}
// //                         center={mapCenter}
// //                         zoom={mapZoom}
// //                     >
// //                         {directionsResponse && (
// //                             <DirectionsRenderer directions={directionsResponse} />
// //                         )}
// //                         <Marker position={trackingInfo.ride.startPoint}/>
// //                         <Marker position={trackingInfo.ride.endPoint} />
// //                     </GoogleMap>
// //                 </LoadScript>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TrackingPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// // Define map container style
// const containerStyle = {
//     width: '100%',
//     height: '400px'
// };

// const TrackingPage = () => {
//     const [trackingInfo, setTrackingInfo] = useState(null);
//     const [directionsResponse, setDirectionsResponse] = useState(null);
//     const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
//     const [mapZoom, setMapZoom] = useState(10);
//     const navigate = useNavigate();  // Initialize useNavigate

//     useEffect(() => {
//         const fetchTrackingInfo = async () => {
//             try {
//                 // Retrieve bookingId and userId from sessionStorage
//                 const bookingId = sessionStorage.getItem('bookingId');
//                 const userId = sessionStorage.getItem('userId');

//                 if (!bookingId || !userId) {
//                     Swal.fire('Error', 'Missing bookingId or userId in sessionStorage.', 'error');
//                     return;
//                 }

//                 // Make a GET request to the endpoint with path variables
//                 const response = await axios.get(`http://localhost:8029/booking/track/${bookingId}/${userId}`);
//                 const data = response.data;

//                 if (data.length === 0) {
//                     Swal.fire('No Data', 'No tracking information found.', 'info');
//                     return;
//                 }

//                 const bookingData = data[0]; 

//                 // Update state with the fetched data
//                 setTrackingInfo(bookingData);
//                 setMapCenter({ lat: parseFloat(bookingData.ride.startPoint.lat), lng: parseFloat(bookingData.ride.startPoint.lng) });
//                 calculateRoute(
//                     { lat: parseFloat(bookingData.ride.startPoint.lat), lng: parseFloat(bookingData.ride.startPoint.lng) },
//                     { lat: parseFloat(bookingData.ride.endPoint.lat), lng: parseFloat(bookingData.ride.endPoint.lng) }
//                 );
//             } catch (error) {
//                 Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
//             }
//         };

//         fetchTrackingInfo();
//     }, []);

//     const calculateRoute = (start, end) => {
//         const directionsService = new window.google.maps.DirectionsService();
//         directionsService.route(
//             {
//                 origin: start,
//                 destination: end,
//                 travelMode: window.google.maps.TravelMode.DRIVING
//             },
//             (result, status) => {
//                 if (status === window.google.maps.DirectionsStatus.OK) {
//                     setDirectionsResponse(result);
//                 } else {
//                     Swal.fire('Error', 'Failed to calculate route.', 'error');
//                 }
//             }
//         );
//     };

//     const handleBackButtonClick = () => {
//         navigate('/userDashboard');  // Navigate back to UserDashboard
//     };

//     if (!trackingInfo) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <button onClick={handleBackButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
//                 Back to Dashboard
//             </button>
//             <h1 className="text-2xl font-bold mb-4">Track Your Ride</h1>
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
//                 <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
//                 <img src={`data:image/jpeg;base64,${trackingInfo.ride.vehicle.carImage}`} alt="Vehicle" className="w-full h-50 w-40 mb-4" />
//                 <p><strong>Driver Name:</strong> {trackingInfo.ride.vehicle.user.name}</p>
//                 <p><strong>Vehicle Model:</strong> {trackingInfo.ride.vehicle.model}</p>
//                 <p><strong>Start Location:</strong> {trackingInfo.ride.startPoint.address}</p>
//                 <p><strong>End Location:</strong> {trackingInfo.ride.endPoint.address}</p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-xl font-semibold mb-2">Map</h2>
//                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//                     <GoogleMap
//                         mapContainerStyle={containerStyle}
//                         center={mapCenter}
//                         zoom={mapZoom}
//                     >
//                         {directionsResponse && (
//                             <DirectionsRenderer directions={directionsResponse} />
//                         )}
//                         <Marker position={mapCenter} />
//                         <Marker position={{ lat: parseFloat(trackingInfo.ride.endPoint.lat), lng: parseFloat(trackingInfo.ride.endPoint.lng) }} />
//                     </GoogleMap>
//                 </LoadScript>
//             </div>
//         </div>
//     );
// };

// export default TrackingPage;

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
                bookingsData.forEach(booking => {
                    calculateRoute(
                        { lat: parseFloat(booking.ride.startPoint.lat), lng: parseFloat(booking.ride.startPoint.lng) },
                        { lat: parseFloat(booking.ride.endPoint.lat), lng: parseFloat(booking.ride.endPoint.lng) }
                    );
                });
            } catch (error) {
                Swal.fire('Error', 'Failed to fetch tracking information.', 'error');
            }
        };

        fetchAllBookings();
    }, []);

    const calculateRoute = (start, end) => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: start,
                destination: end,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirectionsResponses(prev => [...prev, result]);
                } else {
                    Swal.fire('Error', 'Failed to calculate route.', 'error');
                }
            }
        );
    };

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
