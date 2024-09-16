// // // // // // // // // // // // // // // // // src/pages/RideList.js
// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // import Swal from 'sweetalert2';

// // // // // // // // // // // // // // // // const RideList = () => {
// // // // // // // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     fetchRides();
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   const handleViewMore = (ride) => {
// // // // // // // // // // // // // // // //     setSelectedRide(ride);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // // // // // // //     if (!userId) {
// // // // // // // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // // // // // // //         userId,
// // // // // // // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // // // //       <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // // // // // //         {rides.map(ride => (
// // // // // // // // // // // // // // // //           <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // // // // // // //             <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // // // // // // //             <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // // // //             <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // // // // // // //             <button 
// // // // // // // // // // // // // // // //               onClick={() => handleViewMore(ride)}
// // // // // // // // // // // // // // // //               className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               View More
// // // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // // //       {selectedRide && (
// // // // // // // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
// // // // // // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // // // // // // //             <p>Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // // // //             <p>Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // // // // // // //             <p>Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // // // // // // //             <p>Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>
// // // // // // // // // // // // // // // //             <p>Available Seats: {selectedRide.availableSeats}</p>
// // // // // // // // // // // // // // // //             <div className="mt-4">
// // // // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // // // //                 onClick={handleBookNow}
// // // // // // // // // // // // // // // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 Book Now
// // // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // // // //                 onClick={handleCloseModal}
// // // // // // // // // // // // // // // //                 className="bg-red-500 text-white py-2 px-4 rounded ml-4"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 Close
// // // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default RideList;

// // // // // // // // // // // // // // // // src/pages/RideList.js
// // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // import Swal from 'sweetalert2';

// // // // // // // // // // // // // // // const RideList = () => {
// // // // // // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     fetchRides();
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // // // // // //     if (!userId) {
// // // // // // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // // // // // //         userId,
// // // // // // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // // // // // //         handleCloseModal();
// // // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // // //       <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // // // // //         {rides.map(ride => (
// // // // // // // // // // // // // // //           <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // // // // // //             <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // // // // // //             <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // // //             <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // // // // // //             <button 
// // // // // // // // // // // // // // //               onClick={() => handleViewMore(ride)}
// // // // // // // // // // // // // // //               className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               View More
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {selectedRide && (
// // // // // // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // // // // // //             <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // // //             <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // // // // // //             <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // // // // // //             <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // // // // // // //             <div className="flex mb-4">
// // // // // // // // // // // // // // //               <img src={selectedRide.vehicle.imageUrl} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // // // // // // //               <div className="ml-4">
// // // // // // // // // // // // // // //                 <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // // // // // // //                 <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // // // // // // //                 <p>Name: {selectedRide.vehicle.name}</p>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // // // // // //               <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // // // // // // //               <div className="flex flex-wrap">
// // // // // // // // // // // // // // //                 {Array.from({ length: selectedRide.availableSeats }).map((_, index) => (
// // // // // // // // // // // // // // //                   <div
// // // // // // // // // // // // // // //                     key={index}
// // // // // // // // // // // // // // //                     className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // // // // // // //                     style={{ backgroundColor: 'green', color: 'white' }}
// // // // // // // // // // // // // // //                     onClick={() => console.log('Seat booked:', index + 1)}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     {index + 1}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // // //                 {Array.from({ length: 10 - selectedRide.availableSeats }).map((_, index) => (
// // // // // // // // // // // // // // //                   <div
// // // // // // // // // // // // // // //                     key={index + selectedRide.availableSeats}
// // // // // // // // // // // // // // //                     className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full bg-gray-300"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     X
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             <div className="mt-4 flex justify-between">
// // // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // // //                 onClick={handleBookNow}
// // // // // // // // // // // // // // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 Book Now
// // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // // //                 onClick={handleCloseModal}
// // // // // // // // // // // // // // //                 className="bg-red-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 Close
// // // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default RideList;

// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // import Swal from 'sweetalert2';

// // // // // // // // // // // // // // const RideList = () => {
// // // // // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     fetchRides();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // // // // //     if (!userId) {
// // // // // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // // // // //         userId,
// // // // // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // // // // //         handleCloseModal();
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // //       <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // // // //         {rides.map(ride => (
// // // // // // // // // // // // // //           <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // // // // //             <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // // // // //             <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // //             <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // // // // //             <button 
// // // // // // // // // // // // // //               onClick={() => handleViewMore(ride)}
// // // // // // // // // // // // // //               className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               View More
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {selectedRide && (
// // // // // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // // // // //             <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // // //             <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // // // // //             <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // // // // //             <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // // // // // //             <div className="flex mb-4">
// // // // // // // // // // // // // //               <img src={selectedRide.vehicle.imageUrl} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // // // // // //               <div className="ml-4">
// // // // // // // // // // // // // //                 <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // // // // // //                 <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // // // // // //                 <p>Name: {selectedRide.vehicle.name}</p>
// // // // // // // // // // // // // //                 <p>Color: {selectedRide.vehicle.color}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // // // // //               <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // // // // // //               <div className="flex flex-wrap">
// // // // // // // // // // // // // //                 {Array.from({ length: 10 }).map((_, index) => {
// // // // // // // // // // // // // //                   // Check if the seat is available or not
// // // // // // // // // // // // // //                   const isBooked = index >= selectedRide.availableSeats;
// // // // // // // // // // // // // //                   return (
// // // // // // // // // // // // // //                     <div
// // // // // // // // // // // // // //                       key={index}
// // // // // // // // // // // // // //                       className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // // // // // //                       style={{ 
// // // // // // // // // // // // // //                         backgroundColor: isBooked ? 'gray' : 'green', 
// // // // // // // // // // // // // //                         color: 'white' 
// // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // //                       onClick={() => !isBooked && Swal.fire('Info', `You selected seat ${index + 1}`, 'info')}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {isBooked ? 'X' : index + 1}
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                   );
// // // // // // // // // // // // // //                 })}
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <div className="mt-4 flex justify-between">
// // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // //                 onClick={handleBookNow}
// // // // // // // // // // // // // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Book Now
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // //                 onClick={handleCloseModal}
// // // // // // // // // // // // // //                 className="bg-red-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Close
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default RideList;

// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // import Swal from 'sweetalert2';

// // // // // // // // // // // // // const RideList = () => {
// // // // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchRides();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // // // //     if (!userId) {
// // // // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // // // //         userId,
// // // // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // // // //         handleCloseModal();
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // //       <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // // //         {rides.map(ride => (
// // // // // // // // // // // // //           <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // // // //             <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // // // //             <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // //             <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // // // //             <button 
// // // // // // // // // // // // //               onClick={() => handleViewMore(ride)}
// // // // // // // // // // // // //               className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               View More
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {selectedRide && (
// // // // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // // // //             <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // // //             <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // // // //             <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // // // //             <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // // // // //             {selectedRide.vehicle && (
// // // // // // // // // // // // //               <div className="flex mb-4">
// // // // // // // // // // // // //                 <img src={`data:image/jpeg;base64,${btoa(
// // // // // // // // // // // // //                   new Uint8Array(selectedRide.vehicle.carImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // // // // // // // // // // // //                 )}`} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // // // // //                 <div className="ml-4">
// // // // // // // // // // // // //                   <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // // // // //                   <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // // // // //                   <p>Name: {selectedRide.vehicle.vehicleName}</p>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             )}

// // // // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // // // //               <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // // // // //               <div className="flex flex-wrap">
// // // // // // // // // // // // //                 {Array.from({ length: selectedRide.availableSeats + 10 }).map((_, index) => {
// // // // // // // // // // // // //                   const isBooked = index >= selectedRide.availableSeats;
// // // // // // // // // // // // //                   return (
// // // // // // // // // // // // //                     <div
// // // // // // // // // // // // //                       key={index}
// // // // // // // // // // // // //                       className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // // // // //                       style={{ 
// // // // // // // // // // // // //                         backgroundColor: isBooked ? 'gray' : 'green', 
// // // // // // // // // // // // //                         color: 'white' 
// // // // // // // // // // // // //                       }}
// // // // // // // // // // // // //                       onClick={() => !isBooked && Swal.fire('Info', `You selected seat ${index + 1}`, 'info')}
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {isBooked ? 'X' : index + 1}
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                   );
// // // // // // // // // // // // //                 })}
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             <div className="mt-4 flex justify-between">
// // // // // // // // // // // // //               <button 
// // // // // // // // // // // // //                 onClick={handleBookNow}
// // // // // // // // // // // // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 Book Now
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //               <button 
// // // // // // // // // // // // //                 onClick={handleCloseModal}
// // // // // // // // // // // // //                 className="bg-red-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 Close
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default RideList;

// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // import Swal from 'sweetalert2';

// // // // // // // // // // // // const RideList = () => {
// // // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     fetchRides();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // // //     if (!userId) {
// // // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // // //         userId,
// // // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // // //       });
// // // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // // //         handleCloseModal();
// // // // // // // // // // // //       } else {
// // // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // // //       }
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // //       <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // // //         {rides.map(ride => (
// // // // // // // // // // // //           <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // // //             <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // // //             <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // //             <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // // //             <button 
// // // // // // // // // // // //               onClick={() => handleViewMore(ride)}
// // // // // // // // // // // //               className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               View More
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {selectedRide && (
// // // // // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // // // //             <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // // //             <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // // //             <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // // //             <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // // //             <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // // // //             {selectedRide.vehicle && (
// // // // // // // // // // // //               <div className="flex mb-4">
// // // // // // // // // // // //                 <img src={`data:image/jpeg;base64,${btoa(
// // // // // // // // // // // //                   new Uint8Array(selectedRide.vehicle.carImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // // // // // // // // // // //                 )}`} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // // // //                 <div className="ml-4">
// // // // // // // // // // // //                   <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // // // //                   <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // // // //                   <p>Name: {selectedRide.vehicle.vehicleName}</p>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             )}

// // // // // // // // // // // //             <div className="mb-4">
// // // // // // // // // // // //               <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // // // //               <div className="flex flex-wrap">
// // // // // // // // // // // //                 {Array.from({ length: selectedRide.availableSeats }).map((_, index) => (
// // // // // // // // // // // //                   <div
// // // // // // // // // // // //                     key={index}
// // // // // // // // // // // //                     className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // // // //                     style={{ backgroundColor: 'green', color: 'white' }}
// // // // // // // // // // // //                     onClick={() => Swal.fire('Info', `You selected seat ${index + 1}`, 'info')}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {index + 1}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 ))}
// // // // // // // // // // // //                 {selectedRide.availableSeats === 0 && (
// // // // // // // // // // // //                   <p className="text-red-500">No seats available</p>
// // // // // // // // // // // //                 )}
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="mt-4 flex justify-between">
// // // // // // // // // // // //               <button 
// // // // // // // // // // // //                 onClick={handleBookNow}
// // // // // // // // // // // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 Book Now
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //               <button 
// // // // // // // // // // // //                 onClick={handleCloseModal}
// // // // // // // // // // // //                 className="bg-red-500 text-white py-2 px-4 rounded"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 Close
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default RideList;

// // // // // // // // // // // // RideList.js
// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // // // import UserNavbar from './UserNavbar';

// // // // // // // // // // // const RideList = () => {
// // // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // // // // // // //   const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image
// // // // // // // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // // //     name: '',
// // // // // // // // // // //     email: '',
// // // // // // // // // // //     mobile: '',
// // // // // // // // // // //     dob: '',
// // // // // // // // // // //     address: '',
// // // // // // // // // // //     city: '',
// // // // // // // // // // //     state: '',
// // // // // // // // // // //     gender: '',
// // // // // // // // // // //     accountStatus: '',
// // // // // // // // // // //   });

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // // //         setRides(response.data);
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchRides();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // // //     if (!userId) {
// // // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // // //         userId,
// // // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // // //       });
// // // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // // //         handleCloseModal();
// // // // // // // // // // //       } else {
// // // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleImageUploadClick = () => {
// // // // // // // // // // //     document.getElementById('profile-image-input').click();
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleProfileImageChange = (e) => {
// // // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // // //     if (file) {
// // // // // // // // // // //       const reader = new FileReader();
// // // // // // // // // // //       reader.onloadend = () => {
// // // // // // // // // // //         setProfileImage(reader.result);
// // // // // // // // // // //       };
// // // // // // // // // // //       reader.readAsDataURL(file);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // // // // // //       <UserNavbar 
// // // // // // // // // // //         profileImage={profileImage}
// // // // // // // // // // //         setShowDetails={setShowDetails}
// // // // // // // // // // //         editMode={editMode}
// // // // // // // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // // // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // // // // // // //       />

// // // // // // // // // // //       <div className="container mx-auto p-6">
// // // // // // // // // // //         {showDetails && (
// // // // // // // // // // //           <>
// // // // // // // // // // //             <div className="flex space-x-4 mb-6">
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // // // // // // //               </button>
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {activeTab === 'profile' && (
// // // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // // // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // // // // // // //                     <img 
// // // // // // // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // // // // // // //                       alt="User Profile"
// // // // // // // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // // // // // // //                     />
// // // // // // // // // // //                     {editMode && (
// // // // // // // // // // //                       <FaCamera
// // // // // // // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // // // // // // //                         size={20}
// // // // // // // // // // //                         onClick={handleImageUploadClick}
// // // // // // // // // // //                       />
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <div className="flex-1">
// // // // // // // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // // // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // // // // // // //                     {editMode ? (
// // // // // // // // // // //                       <div className="mt-4">
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           Save
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           onClick={() => setEditMode(false)}
// // // // // // // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           Cancel
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     ) : (
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         onClick={() => setEditMode(true)}
// // // // // // // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}

// // // // // // // // // // //             {activeTab === 'bookings' && (
// // // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // // // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // // // // // // //                   <thead>
// // // // // // // // // // //                     <tr className="border-b">
// // // // // // // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // // // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // // // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // // // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // // // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   </thead>
// // // // // // // // // // //                   <tbody>
// // // // // // // // // // //                     {/* Replace with actual booking data */}
// // // // // // // // // // //                     <tr>
// // // // // // // // // // //                       <td className="p-2">1</td>
// // // // // // // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // // // // // // //                       <td className="p-2">Location A</td>
// // // // // // // // // // //                       <td className="p-2">Location B</td>
// // // // // // // // // // //                       <td className="p-2">Confirmed</td>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   </tbody>
// // // // // // // // // // //                 </table>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </>
// // // // // // // // // // //         )}

// // // // // // // // // // //         <div className="container mx-auto p-4">
// // // // // // // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // // //             {rides.map(ride => (
// // // // // // // // // // //               <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // // //                 <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // //                 <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   onClick={() => handleViewMore(ride)}
// // // // // // // // // // //                   className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   View More
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {selectedRide && (
// // // // // // // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // // //                 <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // // //                 <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // // //                 <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // // //                 <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // // //                 <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // // //                 {selectedRide.vehicle && (
// // // // // // // // // // //                   <div className="flex mb-4">
// // // // // // // // // // //                     <img src={`data:image/jpeg;base64,${btoa(
// // // // // // // // // // //                       new Uint8Array(selectedRide.vehicle.carImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // // // // // // // // // //                     )}`} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // // //                     <div className="ml-4">
// // // // // // // // // // //                       <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // // //                       <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // // //                       <p>Name: {selectedRide.vehicle.vehicleName}</p>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 )}

// // // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // // //                   <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // // //                   <div className="flex flex-wrap">
// // // // // // // // // // //                     {Array.from({ length: selectedRide.availableSeats }).map((_, index) => (
// // // // // // // // // // //                       <div
// // // // // // // // // // //                         key={index}
// // // // // // // // // // //                         className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // // //                         style={{ backgroundColor: 'green', color: 'white' }}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {index + 1}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <div className="flex justify-end">
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={handleBookNow}
// // // // // // // // // // //                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Book Now
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={handleCloseModal}
// // // // // // // // // // //                     className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Close
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default RideList;

// // // // // // // // // // // RideList.js
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // // import UserNavbar from '../components/UserNavbar';
// // // // // // // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // // // // // // const RideList = () => {
// // // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // // // // // //   const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image
// // // // // // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // //     name: '',
// // // // // // // // // //     email: '',
// // // // // // // // // //     mobile: '',
// // // // // // // // // //     dob: '',
// // // // // // // // // //     address: '',
// // // // // // // // // //     city: '',
// // // // // // // // // //     state: '',
// // // // // // // // // //     gender: '',
// // // // // // // // // //     accountStatus: '',
// // // // // // // // // //   });
// // // // // // // // // //   const [activeTab, setActiveTab] = useState('profile'); // Added state for active tab

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchRides = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // // //         setRides(response.data);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchRides();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await axios.get(`http://localhost:8029/ride/${ride.rideId}`);
// // // // // // // // // //       setSelectedRide(response.data);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       Swal.fire('Error', 'Failed to fetch ride details. Please try again later.', 'error');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // // //     setSelectedRide(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // // //     const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // // //     if (!userId) {
// // // // // // // // // //       Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // // //         userId,
// // // // // // // // // //         rideId: selectedRide.rideId,
// // // // // // // // // //       });
// // // // // // // // // //       if (response.data === 'Success') {
// // // // // // // // // //         Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // // //         handleCloseModal();
// // // // // // // // // //       } else {
// // // // // // // // // //         Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleImageUploadClick = () => {
// // // // // // // // // //     document.getElementById('profile-image-input').click();
// // // // // // // // // //   };

// // // // // // // // // //   const handleProfileImageChange = (e) => {
// // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // //     if (file) {
// // // // // // // // // //       const reader = new FileReader();
// // // // // // // // // //       reader.onloadend = () => {
// // // // // // // // // //         setProfileImage(reader.result);
// // // // // // // // // //       };
// // // // // // // // // //       reader.readAsDataURL(file);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // // // // //       <UserNavbar 
// // // // // // // // // //         profileImage={profileImage}
// // // // // // // // // //         setShowDetails={setShowDetails}
// // // // // // // // // //         editMode={editMode}
// // // // // // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // // // // // //       />

// // // // // // // // // //       <div className="container mx-auto p-6">
// // // // // // // // // //         {showDetails && (
// // // // // // // // // //           <>
// // // // // // // // // //             <div className="flex space-x-4 mb-6">
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // // //               >
// // // // // // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // // // // // //               </button>
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // // //               >
// // // // // // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {activeTab === 'profile' && (
// // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // // // // // //                     <img 
// // // // // // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // // // // // //                       alt="User Profile"
// // // // // // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // // // // // //                     />
// // // // // // // // // //                     {editMode && (
// // // // // // // // // //                       <FaCamera
// // // // // // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // // // // // //                         size={20}
// // // // // // // // // //                         onClick={handleImageUploadClick}
// // // // // // // // // //                       />
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="flex-1">
// // // // // // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // // // // // //                     {editMode ? (
// // // // // // // // // //                       <div className="mt-4">
// // // // // // // // // //                         <button
// // // // // // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // //                         >
// // // // // // // // // //                           Save
// // // // // // // // // //                         </button>
// // // // // // // // // //                         <button
// // // // // // // // // //                           onClick={() => setEditMode(false)}
// // // // // // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // // //                         >
// // // // // // // // // //                           Cancel
// // // // // // // // // //                         </button>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ) : (
// // // // // // // // // //                       <button
// // // // // // // // // //                         onClick={() => setEditMode(true)}
// // // // // // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // //                       >
// // // // // // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // // // // // //                       </button>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}

// // // // // // // // // //             {activeTab === 'bookings' && (
// // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // // // // // //                   <thead>
// // // // // // // // // //                     <tr className="border-b">
// // // // // // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </thead>
// // // // // // // // // //                   <tbody>
// // // // // // // // // //                     {/* Replace with actual booking data */}
// // // // // // // // // //                     <tr>
// // // // // // // // // //                       <td className="p-2">1</td>
// // // // // // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // // // // // //                       <td className="p-2">Location A</td>
// // // // // // // // // //                       <td className="p-2">Location B</td>
// // // // // // // // // //                       <td className="p-2">Confirmed</td>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </tbody>
// // // // // // // // // //                 </table>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </>
// // // // // // // // // //         )}

// // // // // // // // // //         <div className="container mx-auto p-4">
// // // // // // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // // //             {rides.map(ride => (
// // // // // // // // // //               <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // // //                 <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // // //                 <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // // //                 <button 
// // // // // // // // // //                   onClick={() => handleViewMore(ride)}
// // // // // // // // // //                   className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // // //                 >
// // // // // // // // // //                   View More
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {selectedRide && (
// // // // // // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // // //                 <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // // //                 <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // // //                 <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // // //                 <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // // //                 <p className="mb-2">Price Per Person: ${selectedRide.pricePerPerson.toFixed(2)}</p>

// // // // // // // // // //                 {selectedRide.vehicle && (
// // // // // // // // // //                   <div className="flex mb-4">
// // // // // // // // // //                     <img src={`data:image/jpeg;base64,${btoa(
// // // // // // // // // //                       new Uint8Array(selectedRide.vehicle.carImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // // // // // // // // //                     )}`} alt="Vehicle" className="w-1/2 rounded" />
// // // // // // // // // //                     <div className="ml-4">
// // // // // // // // // //                       <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
// // // // // // // // // //                       <p>Model: {selectedRide.vehicle.model}</p>
// // // // // // // // // //                       <p>Name: {selectedRide.vehicle.vehicleName}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 <div className="mb-4">
// // // // // // // // // //                   <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
// // // // // // // // // //                   <div className="flex flex-wrap">
// // // // // // // // // //                     {Array.from({ length: selectedRide.availableSeats }).map((_, index) => (
// // // // // // // // // //                       <div
// // // // // // // // // //                         key={index}
// // // // // // // // // //                         className="w-10 h-10 mx-1 flex items-center justify-center border rounded-full cursor-pointer"
// // // // // // // // // //                         style={{ backgroundColor: 'green', color: 'white' }}
// // // // // // // // // //                       >
// // // // // // // // // //                         {index + 1}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="flex justify-end">
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={handleBookNow}
// // // // // // // // // //                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // // //                   >
// // // // // // // // // //                     Book Now
// // // // // // // // // //                   </button>
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={handleCloseModal}
// // // // // // // // // //                     className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // // //                   >
// // // // // // // // // //                     Close
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default RideList;

// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import UserNavbar from '../components/UserNavbar';
// // // // // // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // // // // // const RideList = () => {
// // // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // // // // //   const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image
// // // // // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     name: '',
// // // // // // // // //     email: '',
// // // // // // // // //     mobile: '',
// // // // // // // // //     dob: '',
// // // // // // // // //     address: '',
// // // // // // // // //     city: '',
// // // // // // // // //     state: '',
// // // // // // // // //     gender: '',
// // // // // // // // //     accountStatus: '',
// // // // // // // // //   });
// // // // // // // // //   const [activeTab, setActiveTab] = useState('profile'); // Added state for active tab

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchRides = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // // //         setRides(response.data);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchRides();
// // // // // // // // //   }, []);

// // // // // // // // //   const handleViewMore = async (ride) => {
// // // // // // // // //     setSelectedRide({
// // // // // // // // //       ...ride,
// // // // // // // // //       showBasicInfo: true, // Flag to indicate basic info view
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleCloseModal = () => {
// // // // // // // // //     setSelectedRide(null);
// // // // // // // // //   };

// // // // // // // // //   const handleBookNow = async () => {
// // // // // // // // //     if (!selectedRide) return;

// // // // // // // // //     try {
// // // // // // // // //       // Fetch vehicle information
// // // // // // // // //       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${selectedRide.vehicleId}`);
// // // // // // // // //       const vehicleData = vehicleResponse.data;

// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Confirm Booking',
// // // // // // // // //         text: `Vehicle: ${vehicleData.vehicleName}\nModel: ${vehicleData.model}\nPrice: $${selectedRide.pricePerPerson.toFixed(2)}`,
// // // // // // // // //         icon: 'warning',
// // // // // // // // //         showCancelButton: true,
// // // // // // // // //         confirmButtonText: 'Confirm',
// // // // // // // // //         cancelButtonText: 'Cancel',
// // // // // // // // //       }).then(async (result) => {
// // // // // // // // //         if (result.isConfirmed) {
// // // // // // // // //           const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // // //           if (!userId) {
// // // // // // // // //             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // // //             return;
// // // // // // // // //           }

// // // // // // // // //           try {
// // // // // // // // //             const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // // //               userId,
// // // // // // // // //               rideId: selectedRide.rideId,
// // // // // // // // //             });
// // // // // // // // //             if (response.data === 'Success') {
// // // // // // // // //               Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // // //               handleCloseModal();
// // // // // // // // //             } else {
// // // // // // // // //               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // // //             }
// // // // // // // // //           } catch (error) {
// // // // // // // // //             Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     } catch (error) {
// // // // // // // // //       Swal.fire('Error', 'Failed to fetch vehicle details. Please try again later.', 'error');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleImageUploadClick = () => {
// // // // // // // // //     document.getElementById('profile-image-input').click();
// // // // // // // // //   };

// // // // // // // // //   const handleProfileImageChange = (e) => {
// // // // // // // // //     const file = e.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onloadend = () => {
// // // // // // // // //         setProfileImage(reader.result);
// // // // // // // // //       };
// // // // // // // // //       reader.readAsDataURL(file);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // // // //       <UserNavbar 
// // // // // // // // //         profileImage={profileImage}
// // // // // // // // //         setShowDetails={setShowDetails}
// // // // // // // // //         editMode={editMode}
// // // // // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // // // // //       />

// // // // // // // // //       <div className="container mx-auto p-6">
// // // // // // // // //         {showDetails && (
// // // // // // // // //           <>
// // // // // // // // //             <div className="flex space-x-4 mb-6">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // //               >
// // // // // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // // // // //               </button>
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // // //               >
// // // // // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // // // // //               </button>
// // // // // // // // //             </div>

// // // // // // // // //             {activeTab === 'profile' && (
// // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // // // // //                     <img 
// // // // // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // // // // //                       alt="User Profile"
// // // // // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // // // // //                     />
// // // // // // // // //                     {editMode && (
// // // // // // // // //                       <FaCamera
// // // // // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // // // // //                         size={20}
// // // // // // // // //                         onClick={handleImageUploadClick}
// // // // // // // // //                       />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="flex-1">
// // // // // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // // // // //                     {editMode ? (
// // // // // // // // //                       <div className="mt-4">
// // // // // // // // //                         <button
// // // // // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // //                         >
// // // // // // // // //                           Save
// // // // // // // // //                         </button>
// // // // // // // // //                         <button
// // // // // // // // //                           onClick={() => setEditMode(false)}
// // // // // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // //                         >
// // // // // // // // //                           Cancel
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     ) : (
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => setEditMode(true)}
// // // // // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // //                       >
// // // // // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // // // // //                       </button>
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             {activeTab === 'bookings' && (
// // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // // // // //                   <thead>
// // // // // // // // //                     <tr className="border-b">
// // // // // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // // // // //                     </tr>
// // // // // // // // //                   </thead>
// // // // // // // // //                   <tbody>
// // // // // // // // //                     {/* Replace with actual booking data */}
// // // // // // // // //                     <tr>
// // // // // // // // //                       <td className="p-2">1</td>
// // // // // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // // // // //                       <td className="p-2">Location A</td>
// // // // // // // // //                       <td className="p-2">Location B</td>
// // // // // // // // //                       <td className="p-2">Confirmed</td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   </tbody>
// // // // // // // // //                 </table>
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </>
// // // // // // // // //         )}

// // // // // // // // //         <div className="container mx-auto p-4">
// // // // // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // // //             {rides.map(ride => (
// // // // // // // // //               <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // // //                 <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // // //                 <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // // //                 <button 
// // // // // // // // //                   onClick={() => handleViewMore(ride)}
// // // // // // // // //                   className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // // //                 >
// // // // // // // // //                   View More
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {selectedRide && (
// // // // // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // // //                 {selectedRide.showBasicInfo && (
// // // // // // // // //                   <>
// // // // // // // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // // // // // // //                     <div className="flex justify-end">
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleBookNow}
// // // // // // // // //                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // // //                       >
// // // // // // // // //                         Book Now
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleCloseModal}
// // // // // // // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // // //                       >
// // // // // // // // //                         Close
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </>
// // // // // // // // //                 )}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default RideList;

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // import UserNavbar from '../components/UserNavbar';
// // // // // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // // // // const RideList = () => {
// // // // // // // //   const [rides, setRides] = useState([]);
// // // // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // // // //   const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image
// // // // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: '',
// // // // // // // //     email: '',
// // // // // // // //     mobile: '',
// // // // // // // //     dob: '',
// // // // // // // //     address: '',
// // // // // // // //     city: '',
// // // // // // // //     state: '',
// // // // // // // //     gender: '',
// // // // // // // //     accountStatus: '',
// // // // // // // //   });
// // // // // // // //   const [activeTab, setActiveTab] = useState('profile'); // Added state for active tab

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchRides = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // // //         setRides(response.data);
// // // // // // // //       } catch (error) {
// // // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchRides();
// // // // // // // //   }, []);

// // // // // // // //   const handleViewMore = (ride) => {
// // // // // // // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // // // // // // //     setSelectedRide(ride);
// // // // // // // //   };

// // // // // // // //   const handleCloseModal = () => {
// // // // // // // //     setSelectedRide(null);
// // // // // // // //   };

// // // // // // // //   const handleBookNow = async () => {
// // // // // // // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // // // // // // //     if (!ride) return;

// // // // // // // //     try {
// // // // // // // //       // Fetch vehicle information
// // // // // // // //       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${ride.vehicleId}`);
// // // // // // // //       const vehicleData = vehicleResponse.data;

// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Confirm Booking',
// // // // // // // //         text: `Vehicle: ${vehicleData.vehicleName}\nModel: ${vehicleData.model}\nPrice: $${ride.pricePerPerson.toFixed(2)}`,
// // // // // // // //         icon: 'warning',
// // // // // // // //         showCancelButton: true,
// // // // // // // //         confirmButtonText: 'Confirm',
// // // // // // // //         cancelButtonText: 'Cancel',
// // // // // // // //       }).then(async (result) => {
// // // // // // // //         if (result.isConfirmed) {
// // // // // // // //           const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // // //           if (!userId) {
// // // // // // // //             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // // //             return;
// // // // // // // //           }

// // // // // // // //           try {
// // // // // // // //             const response = await axios.post('http://localhost:8029/booking', {
// // // // // // // //               userId,
// // // // // // // //               rideId: ride.rideId,
// // // // // // // //             });
// // // // // // // //             if (response.data === 'Success') {
// // // // // // // //               Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // // //               handleCloseModal();
// // // // // // // //             } else {
// // // // // // // //               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // // //             }
// // // // // // // //           } catch (error) {
// // // // // // // //             Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     } catch (error) {
// // // // // // // //       Swal.fire('Error', 'Failed to fetch vehicle details. Please try again later.', 'error');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleImageUploadClick = () => {
// // // // // // // //     document.getElementById('profile-image-input').click();
// // // // // // // //   };

// // // // // // // //   const handleProfileImageChange = (e) => {
// // // // // // // //     const file = e.target.files[0];
// // // // // // // //     if (file) {
// // // // // // // //       const reader = new FileReader();
// // // // // // // //       reader.onloadend = () => {
// // // // // // // //         setProfileImage(reader.result);
// // // // // // // //       };
// // // // // // // //       reader.readAsDataURL(file);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // // //       <UserNavbar 
// // // // // // // //         profileImage={profileImage}
// // // // // // // //         setShowDetails={setShowDetails}
// // // // // // // //         editMode={editMode}
// // // // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // // // //       />

// // // // // // // //       <div className="container mx-auto p-6">
// // // // // // // //         {showDetails && (
// // // // // // // //           <>
// // // // // // // //             <div className="flex space-x-4 mb-6">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // //               >
// // // // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // // //               >
// // // // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             {activeTab === 'profile' && (
// // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // // // //                     <img 
// // // // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // // // //                       alt="User Profile"
// // // // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // // // //                     />
// // // // // // // //                     {editMode && (
// // // // // // // //                       <FaCamera
// // // // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // // // //                         size={20}
// // // // // // // //                         onClick={handleImageUploadClick}
// // // // // // // //                       />
// // // // // // // //                     )}
// // // // // // // //                   </div>
// // // // // // // //                   <div className="flex-1">
// // // // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // // // //                     {editMode ? (
// // // // // // // //                       <div className="mt-4">
// // // // // // // //                         <button
// // // // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // //                         >
// // // // // // // //                           Save
// // // // // // // //                         </button>
// // // // // // // //                         <button
// // // // // // // //                           onClick={() => setEditMode(false)}
// // // // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // //                         >
// // // // // // // //                           Cancel
// // // // // // // //                         </button>
// // // // // // // //                       </div>
// // // // // // // //                     ) : (
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => setEditMode(true)}
// // // // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // //                       >
// // // // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // // // //                       </button>
// // // // // // // //                     )}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {activeTab === 'bookings' && (
// // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // // // //                   <thead>
// // // // // // // //                     <tr className="border-b">
// // // // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // // // //                     </tr>
// // // // // // // //                   </thead>
// // // // // // // //                   <tbody>
// // // // // // // //                     {/* Replace with actual booking data */}
// // // // // // // //                     <tr>
// // // // // // // //                       <td className="p-2">1</td>
// // // // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // // // //                       <td className="p-2">Location A</td>
// // // // // // // //                       <td className="p-2">Location B</td>
// // // // // // // //                       <td className="p-2">Confirmed</td>
// // // // // // // //                     </tr>
// // // // // // // //                   </tbody>
// // // // // // // //                 </table>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </>
// // // // // // // //         )}

// // // // // // // //         <div className="container mx-auto p-4">
// // // // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // // //             {rides.map(ride => (
// // // // // // // //               <div key={ride.rideId} className="border p-4 rounded shadow-lg">
// // // // // // // //                 <h2 className="text-xl font-bold">{ride.startPoint} to {ride.endPoint}</h2>
// // // // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // // //                 <p>Available Seats: {ride.availableSeats}</p>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => handleViewMore(ride)}
// // // // // // // //                   className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // // //                 >
// // // // // // // //                   View More
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           {selectedRide && (
// // // // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // // //                 {selectedRide && (
// // // // // // // //                   <>
// // // // // // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // // // // // //                     <div className="flex justify-end">
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleBookNow}
// // // // // // // //                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // // //                       >
// // // // // // // //                         Book Now
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleCloseModal}
// // // // // // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // // //                       >
// // // // // // // //                         Close
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   </>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default RideList;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import UserNavbar from '../components/UserNavbar';
// // // // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // // // const RideList = () => {
// // // // // // //   const [rides, setRides] = useState([]);
// // // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // // //   const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image
// // // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: '',
// // // // // // //     email: '',
// // // // // // //     mobile: '',
// // // // // // //     dob: '',
// // // // // // //     address: '',
// // // // // // //     city: '',
// // // // // // //     state: '',
// // // // // // //     gender: '',
// // // // // // //     accountStatus: '',
// // // // // // //   });
// // // // // // //   const [activeTab, setActiveTab] = useState('profile'); // Added state for active tab

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchRides = async () => {
// // // // // // //       try {
// // // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // // //         setRides(response.data);
// // // // // // //       } catch (error) {
// // // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchRides();
// // // // // // //   }, []);

// // // // // // //   const handleViewMore = (ride) => {
// // // // // // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // // // // // //     setSelectedRide(ride);
// // // // // // //   };

// // // // // // //   const handleCloseModal = () => {
// // // // // // //     setSelectedRide(null);
// // // // // // //   };

// // // // // // //   const handleBookNow = async () => {
// // // // // // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // // // // // //     if (!ride) return;

// // // // // // //     try {
// // // // // // //       // Fetch vehicle information
// // // // // // //       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${ride.vehicleId}`);
// // // // // // //       const vehicleData = vehicleResponse.data;

// // // // // // //       Swal.fire({
// // // // // // //         title: 'Confirm Booking',
// // // // // // //         text: `Vehicle: ${vehicleData.vehicleName}\nModel: ${vehicleData.model}\nPrice: $${ride.pricePerPerson.toFixed(2)}`,
// // // // // // //         icon: 'warning',
// // // // // // //         showCancelButton: true,
// // // // // // //         confirmButtonText: 'Confirm',
// // // // // // //         cancelButtonText: 'Cancel',
// // // // // // //       }).then(async (result) => {
// // // // // // //         if (result.isConfirmed) {
// // // // // // //           const userId = sessionStorage.getItem('userId'); // Get user ID from session storage
// // // // // // //           if (!userId) {
// // // // // // //             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // // //             return;
// // // // // // //           }

// // // // // // //           try {
// // // // // // //             const response = await axios.post('http://localhost:8029/booking', {
// // // // // // //               userId,
// // // // // // //               rideId: ride.rideId,
// // // // // // //             });
// // // // // // //             if (response.data === 'Success') {
// // // // // // //               Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // // //               handleCloseModal();
// // // // // // //             } else {
// // // // // // //               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // // //             }
// // // // // // //           } catch (error) {
// // // // // // //             Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // // //           }
// // // // // // //         }
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       Swal.fire('Error', 'Failed to fetch vehicle details. Please try again later.', 'error');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleImageUploadClick = () => {
// // // // // // //     document.getElementById('profile-image-input').click();
// // // // // // //   };

// // // // // // //   const handleProfileImageChange = (e) => {
// // // // // // //     const file = e.target.files[0];
// // // // // // //     if (file) {
// // // // // // //       const reader = new FileReader();
// // // // // // //       reader.onloadend = () => {
// // // // // // //         setProfileImage(reader.result);
// // // // // // //       };
// // // // // // //       reader.readAsDataURL(file);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // // //       <UserNavbar 
// // // // // // //         profileImage={profileImage}
// // // // // // //         setShowDetails={setShowDetails}
// // // // // // //         editMode={editMode}
// // // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // // //       />

// // // // // // //       <div className="container mx-auto p-6">
// // // // // // //         {showDetails && (
// // // // // // //           <>
// // // // // // //             <div className="flex space-x-4 mb-6">
// // // // // // //               <button
// // // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // //               >
// // // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // // //               >
// // // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             {activeTab === 'profile' && (
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // // //                     <img 
// // // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // // //                       alt="User Profile"
// // // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // // //                     />
// // // // // // //                     {editMode && (
// // // // // // //                       <FaCamera
// // // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // // //                         size={20}
// // // // // // //                         onClick={handleImageUploadClick}
// // // // // // //                       />
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                   <div className="flex-1">
// // // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // // //                     {editMode ? (
// // // // // // //                       <div className="mt-4">
// // // // // // //                         <button
// // // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // //                         >
// // // // // // //                           Save
// // // // // // //                         </button>
// // // // // // //                         <button
// // // // // // //                           onClick={() => setEditMode(false)}
// // // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // //                         >
// // // // // // //                           Cancel
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     ) : (
// // // // // // //                       <button
// // // // // // //                         onClick={() => setEditMode(true)}
// // // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // //                       >
// // // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // // //                       </button>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {activeTab === 'bookings' && (
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // // //                   <thead>
// // // // // // //                     <tr className="border-b">
// // // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // // //                     </tr>
// // // // // // //                   </thead>
// // // // // // //                   <tbody>
// // // // // // //                     {/* Replace with actual booking data */}
// // // // // // //                     <tr>
// // // // // // //                       <td className="p-2">1</td>
// // // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // // //                       <td className="p-2">Location A</td>
// // // // // // //                       <td className="p-2">Location B</td>
// // // // // // //                       <td className="p-2">Confirmed</td>
// // // // // // //                     </tr>
// // // // // // //                   </tbody>
// // // // // // //                 </table>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         <div className="container mx-auto p-4">
// // // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // //             {rides.map(ride => (
// // // // // // //               <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// // // // // // //                 <h2 className="text-xl font-bold">
// // // // // // //                   {ride.startPoint} to {ride.endPoint}
// // // // // // //                 </h2>
// // // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // // //                 <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// // // // // // //                 {ride.availableSeats > 0 && (
// // // // // // //                   <button 
// // // // // // //                     onClick={() => handleViewMore(ride)}
// // // // // // //                     className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // // //                   >
// // // // // // //                     View More
// // // // // // //                   </button>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {selectedRide && (
// // // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // // //                 {selectedRide && (
// // // // // // //                   <>
// // // // // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // // // // //                     <div className="flex justify-end">
// // // // // // //                       {selectedRide.availableSeats > 0 ? (
// // // // // // //                         <button
// // // // // // //                           onClick={handleBookNow}
// // // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // // //                         >
// // // // // // //                           Book Now
// // // // // // //                         </button>
// // // // // // //                       ) : (
// // // // // // //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// // // // // // //                       )}
// // // // // // //                       <button
// // // // // // //                         onClick={handleCloseModal}
// // // // // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // // //                       >
// // // // // // //                         Close
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   </>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default RideList;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import UserNavbar from '../components/UserNavbar';
// // // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // // const RideList = () => {
// // // // // //   const [rides, setRides] = useState([]);
// // // // // //   const [filteredRides, setFilteredRides] = useState([]);
// // // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // // //   const [profileImage, setProfileImage] = useState(null);
// // // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // // //   const [editMode, setEditMode] = useState(false);
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: '',
// // // // // //     email: '',
// // // // // //     mobile: '',
// // // // // //     dob: '',
// // // // // //     address: '',
// // // // // //     city: '',
// // // // // //     state: '',
// // // // // //     gender: '',
// // // // // //     accountStatus: '',
// // // // // //   });
// // // // // //   const [activeTab, setActiveTab] = useState('profile');
// // // // // //   const [pickupFilter, setPickupFilter] = useState('');
// // // // // //   const [dropoffFilter, setDropoffFilter] = useState('');

// // // // // //   useEffect(() => {
// // // // // //     const fetchRides = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // // //         setRides(response.data);
// // // // // //         setFilteredRides(response.data);
// // // // // //       } catch (error) {
// // // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // // //       }
// // // // // //     };

// // // // // //     fetchRides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const filtered = rides.filter(ride =>
// // // // // //       ride.startPoint.toLowerCase().includes(pickupFilter.toLowerCase()) &&
// // // // // //       ride.endPoint.toLowerCase().includes(dropoffFilter.toLowerCase())
// // // // // //     );
// // // // // //     setFilteredRides(filtered);
// // // // // //   }, [pickupFilter, dropoffFilter, rides]);

// // // // // //   const handleViewMore = (ride) => {
// // // // // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // // // // //     setSelectedRide(ride);
// // // // // //   };

// // // // // //   const handleCloseModal = () => {
// // // // // //     setSelectedRide(null);
// // // // // //   };

// // // // // //   const handleBookNow = async () => {
// // // // // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // // // // //     if (!ride) return;

// // // // // //     try {
// // // // // //       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${ride.vehicleId}`);
// // // // // //       const vehicleData = vehicleResponse.data;

// // // // // //       Swal.fire({
// // // // // //         title: 'Confirm Booking',
// // // // // //         text: `Vehicle: ${vehicleData.vehicleName}\nModel: ${vehicleData.model}\nPrice: $${ride.pricePerPerson.toFixed(2)}`,
// // // // // //         icon: 'warning',
// // // // // //         showCancelButton: true,
// // // // // //         confirmButtonText: 'Confirm',
// // // // // //         cancelButtonText: 'Cancel',
// // // // // //       }).then(async (result) => {
// // // // // //         if (result.isConfirmed) {
// // // // // //           const userId = sessionStorage.getItem('userId');
// // // // // //           if (!userId) {
// // // // // //             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // // //             return;
// // // // // //           }

// // // // // //           try {
// // // // // //             const response = await axios.post('http://localhost:8029/booking', {
// // // // // //               userId,
// // // // // //               rideId: ride.rideId,
// // // // // //             });
// // // // // //             if (response.data === 'Success') {
// // // // // //               Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // // //               handleCloseModal();
// // // // // //             } else {
// // // // // //               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // // //             }
// // // // // //           } catch (error) {
// // // // // //             Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // // //           }
// // // // // //         }
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       Swal.fire('Error', 'Failed to fetch vehicle details. Please try again later.', 'error');
// // // // // //     }
// // // // // //   };

// // // // // //   const handleImageUploadClick = () => {
// // // // // //     document.getElementById('profile-image-input').click();
// // // // // //   };

// // // // // //   const handleProfileImageChange = (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (file) {
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onloadend = () => {
// // // // // //         setProfileImage(reader.result);
// // // // // //       };
// // // // // //       reader.readAsDataURL(file);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100">
// // // // // //       <UserNavbar 
// // // // // //         profileImage={profileImage}
// // // // // //         setShowDetails={setShowDetails}
// // // // // //         editMode={editMode}
// // // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // // //       />

// // // // // //       <div className="container mx-auto p-6">
// // // // // //         {showDetails && (
// // // // // //           <>
// // // // // //             <div className="flex space-x-4 mb-6">
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab('profile')}
// // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // //               >
// // // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab('bookings')}
// // // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // // //               >
// // // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             {activeTab === 'profile' && (
// // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // // //                     <img 
// // // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // // //                       alt="User Profile"
// // // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // // //                     />
// // // // // //                     {editMode && (
// // // // // //                       <FaCamera
// // // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // // //                         size={20}
// // // // // //                         onClick={handleImageUploadClick}
// // // // // //                       />
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                   <div className="flex-1">
// // // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // // //                     {editMode ? (
// // // // // //                       <div className="mt-4">
// // // // // //                         <button
// // // // // //                           onClick={() => {/* Handle save logic */}}
// // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // //                         >
// // // // // //                           Save
// // // // // //                         </button>
// // // // // //                         <button
// // // // // //                           onClick={() => setEditMode(false)}
// // // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // //                         >
// // // // // //                           Cancel
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     ) : (
// // // // // //                       <button
// // // // // //                         onClick={() => setEditMode(true)}
// // // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // //                       >
// // // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // // //                       </button>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {activeTab === 'bookings' && (
// // // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // // //                   <thead>
// // // // // //                     <tr className="border-b">
// // // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // // //                       <th className="p-2 text-left">Date</th>
// // // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // // //                       <th className="p-2 text-left">Status</th>
// // // // // //                     </tr>
// // // // // //                   </thead>
// // // // // //                   <tbody>
// // // // // //                     {/* Replace with actual booking data */}
// // // // // //                     <tr>
// // // // // //                       <td className="p-2">1</td>
// // // // // //                       <td className="p-2">2024-09-10</td>
// // // // // //                       <td className="p-2">Location A</td>
// // // // // //                       <td className="p-2">Location B</td>
// // // // // //                       <td className="p-2">Confirmed</td>
// // // // // //                     </tr>
// // // // // //                   </tbody>
// // // // // //                 </table>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </>
// // // // // //         )}

// // // // // //         <div className="container mx-auto p-4">
// // // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>
// // // // // //           <div className="bg-white p-4 rounded-lg shadow-md mb-6">
// // // // // //             <h2 className="text-xl font-semibold mb-4">Filter Rides</h2>
// // // // // //             <div className="flex flex-col md:flex-row md:space-x-4">
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Pickup Location"
// // // // // //                 value={pickupFilter}
// // // // // //                 onChange={(e) => setPickupFilter(e.target.value)}
// // // // // //                 className="mb-4 md:mb-0 md:w-1/2 p-2 border rounded"
// // // // // //               />
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Dropoff Location"
// // // // // //                 value={dropoffFilter}
// // // // // //                 onChange={(e) => setDropoffFilter(e.target.value)}
// // // // // //                 className="p-2 border rounded md:w-1/2"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // //             {filteredRides.map(ride => (
// // // // // //               <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// // // // // //                 <h2 className="text-xl font-bold">
// // // // // //                   {ride.startPoint} to {ride.endPoint}
// // // // // //                 </h2>
// // // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // // //                 <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// // // // // //                 {ride.availableSeats > 0 && (
// // // // // //                   <button 
// // // // // //                     onClick={() => handleViewMore(ride)}
// // // // // //                     className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // // //                   >
// // // // // //                     View More
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {selectedRide && (
// // // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // // //                 {selectedRide && (
// // // // // //                   <>
// // // // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // // // //                     <div className="flex justify-end">
// // // // // //                       {selectedRide.availableSeats > 0 ? (
// // // // // //                         <button
// // // // // //                           onClick={handleBookNow}
// // // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // // //                         >
// // // // // //                           Book Now
// // // // // //                         </button>
// // // // // //                       ) : (
// // // // // //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// // // // // //                       )}
// // // // // //                       <button
// // // // // //                         onClick={handleCloseModal}
// // // // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // // //                       >
// // // // // //                         Close
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default RideList;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import UserNavbar from '../components/UserNavbar';
// // // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // // const RideList = () => {
// // // // //   const [rides, setRides] = useState([]);
// // // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // // //   const [profileImage, setProfileImage] = useState(null);
// // // // //   const [showDetails, setShowDetails] = useState(false);
// // // // //   const [editMode, setEditMode] = useState(false);
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: '',
// // // // //     email: '',
// // // // //     mobile: '',
// // // // //     dob: '',
// // // // //     address: '',
// // // // //     city: '',
// // // // //     state: '',
// // // // //     gender: '',
// // // // //     accountStatus: '',
// // // // //   });
// // // // //   const [activeTab, setActiveTab] = useState('profile');
// // // // //   const [pickupFilter, setPickupFilter] = useState('');
// // // // //   const [dropoffFilter, setDropoffFilter] = useState('');

// // // // //   useEffect(() => {
// // // // //     const fetchRides = async () => {
// // // // //       try {
// // // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // // //         setRides(response.data);
// // // // //       } catch (error) {
// // // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // // //       }
// // // // //     };

// // // // //     fetchRides();
// // // // //   }, []);

// // // // //   const handleViewMore = (ride) => {
// // // // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // // // //     setSelectedRide(ride);
// // // // //   };

// // // // //   const handleCloseModal = () => {
// // // // //     setSelectedRide(null);
// // // // //   };

// // // // //   const handleBookNow = async () => {
// // // // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // // // //     if (!ride) return;

// // // // //     Swal.fire({
// // // // //       title: 'Confirm Booking',
// // // // //       text: `Price: $${ride.pricePerPerson.toFixed(2)}`,
// // // // //       icon: 'warning',
// // // // //       showCancelButton: true,
// // // // //       confirmButtonText: 'Confirm',
// // // // //       cancelButtonText: 'Cancel',
// // // // //     }).then(async (result) => {
// // // // //       if (result.isConfirmed) {
// // // // //         const userId = sessionStorage.getItem('userId');
// // // // //         if (!userId) {
// // // // //           Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // // //           return;
// // // // //         }

// // // // //         try {
// // // // //           const response = await axios.post('http://localhost:8029/booking', {
// // // // //             userId,
// // // // //             rideId: ride.rideId,
// // // // //           });
// // // // //           if (response.data === 'Success') {
// // // // //             Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // // //             handleCloseModal();
// // // // //           } else {
// // // // //             Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // // //           }
// // // // //         } catch (error) {
// // // // //           Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // // //         }
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const handleImageUploadClick = () => {
// // // // //     document.getElementById('profile-image-input').click();
// // // // //   };

// // // // //   const handleProfileImageChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setProfileImage(reader.result);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   // Filtering logic
// // // // //   const filteredRides = rides.filter(ride => {
// // // // //     const startPoint = ride.startPoint || '';
// // // // //     const endPoint = ride.endPoint || '';

// // // // //     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
// // // // //     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

// // // // //     return pickupMatch && dropoffMatch;
// // // // //   });

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100">
// // // // //       <UserNavbar 
// // // // //         profileImage={profileImage}
// // // // //         setShowDetails={setShowDetails}
// // // // //         editMode={editMode}
// // // // //         handleImageUploadClick={handleImageUploadClick}
// // // // //         handleProfileImageChange={handleProfileImageChange}
// // // // //       />

// // // // //       <div className="container mx-auto p-6">
// // // // //         {showDetails && (
// // // // //           <>
// // // // //             <div className="flex space-x-4 mb-6">
// // // // //               <button
// // // // //                 onClick={() => setActiveTab('profile')}
// // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // //               >
// // // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => setActiveTab('bookings')}
// // // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // // //               >
// // // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // // //               </button>
// // // // //             </div>

// // // // //             {activeTab === 'profile' && (
// // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // // //                     <img 
// // // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // // //                       alt="User Profile"
// // // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // // //                     />
// // // // //                     {editMode && (
// // // // //                       <FaCamera
// // // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // // //                         size={20}
// // // // //                         onClick={handleImageUploadClick}
// // // // //                       />
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div className="flex-1">
// // // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // // //                     {editMode ? (
// // // // //                       <div className="mt-4">
// // // // //                         <button
// // // // //                           onClick={() => {/* Handle save logic */}}
// // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // //                         >
// // // // //                           Save
// // // // //                         </button>
// // // // //                         <button
// // // // //                           onClick={() => setEditMode(false)}
// // // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // //                         >
// // // // //                           Cancel
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       <button
// // // // //                         onClick={() => setEditMode(true)}
// // // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // //                       >
// // // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // // //                       </button>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             {activeTab === 'bookings' && (
// // // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // // //                   <thead>
// // // // //                     <tr className="border-b">
// // // // //                       <th className="p-2 text-left">Booking ID</th>
// // // // //                       <th className="p-2 text-left">Date</th>
// // // // //                       <th className="p-2 text-left">Pickup</th>
// // // // //                       <th className="p-2 text-left">Dropoff</th>
// // // // //                       <th className="p-2 text-left">Status</th>
// // // // //                     </tr>
// // // // //                   </thead>
// // // // //                   <tbody>
// // // // //                     {/* Replace with actual booking data */}
// // // // //                     <tr>
// // // // //                       <td className="p-2">1</td>
// // // // //                       <td className="p-2">2024-09-10</td>
// // // // //                       <td className="p-2">Location A</td>
// // // // //                       <td className="p-2">Location B</td>
// // // // //                       <td className="p-2">Confirmed</td>
// // // // //                     </tr>
// // // // //                   </tbody>
// // // // //                 </table>
// // // // //               </div>
// // // // //             )}
// // // // //           </>
// // // // //         )}

// // // // //         <div className="container mx-auto p-4">
// // // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

// // // // //           {/* Filters */}
// // // // //           <div className="mb-4">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Filter by pickup location"
// // // // //               value={pickupFilter}
// // // // //               onChange={(e) => setPickupFilter(e.target.value)}
// // // // //               className="border p-2 rounded mr-2"
// // // // //             />
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Filter by dropoff location"
// // // // //               value={dropoffFilter}
// // // // //               onChange={(e) => setDropoffFilter(e.target.value)}
// // // // //               className="border p-2 rounded"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //             {filteredRides.map(ride => (
// // // // //               <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// // // // //                 <h2 className="text-xl font-bold">
// // // // //                   {ride.startPoint} to {ride.endPoint}
// // // // //                 </h2>
// // // // //                 <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // // //                 <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// // // // //                 {ride.availableSeats > 0 && (
// // // // //                   <button 
// // // // //                     onClick={() => handleViewMore(ride)}
// // // // //                     className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // // //                   >
// // // // //                     View More
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {selectedRide && (
// // // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // // //                 {selectedRide && (
// // // // //                   <>
// // // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // // //                     <div className="flex justify-end">
// // // // //                       {selectedRide.availableSeats > 0 ? (
// // // // //                         <button
// // // // //                           onClick={handleBookNow}
// // // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // // //                         >
// // // // //                           Book Now
// // // // //                         </button>
// // // // //                       ) : (
// // // // //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// // // // //                       )}
// // // // //                       <button
// // // // //                         onClick={handleCloseModal}
// // // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // // //                       >
// // // // //                         Close
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RideList;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import UserNavbar from '../components/UserNavbar';
// // // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit } from 'react-icons/fa';

// // // // const RideList = () => {
// // // //   const [rides, setRides] = useState([]);
// // // //   const [selectedRide, setSelectedRide] = useState(null);
// // // //   const [profileImage, setProfileImage] = useState(null);
// // // //   const [showDetails, setShowDetails] = useState(false);
// // // //   const [editMode, setEditMode] = useState(false);
// // // //   const [formData, setFormData] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     mobile: '',
// // // //     dob: '',
// // // //     address: '',
// // // //     city: '',
// // // //     state: '',
// // // //     gender: '',
// // // //     accountStatus: '',
// // // //   });
// // // //   const [activeTab, setActiveTab] = useState('profile');
// // // //   const [pickupFilter, setPickupFilter] = useState('');
// // // //   const [dropoffFilter, setDropoffFilter] = useState('');

// // // //   useEffect(() => {
// // // //     const fetchRides = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:8029/ride/all');
// // // //         setRides(response.data);
// // // //       } catch (error) {
// // // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // // //       }
// // // //     };

// // // //     fetchRides();
// // // //   }, []);

// // // //   const handleViewMore = (ride) => {
// // // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // // //     setSelectedRide(ride);
// // // //   };

// // // //   const handleCloseModal = () => {
// // // //     setSelectedRide(null);
// // // //   };

// // // //   const handleBookNow = async () => {
// // // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // // //     if (!ride) return;

// // // //     Swal.fire({
// // // //       title: 'Confirm Booking',
// // // //       text: `Price: $${ride.pricePerPerson.toFixed(2)}`,
// // // //       icon: 'warning',
// // // //       showCancelButton: true,
// // // //       confirmButtonText: 'Confirm',
// // // //       cancelButtonText: 'Cancel',
// // // //     }).then(async (result) => {
// // // //       if (result.isConfirmed) {
// // // //         const userId = sessionStorage.getItem('userId');
// // // //         if (!userId) {
// // // //           Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // // //           return;
// // // //         }

// // // //         try {
// // // //           const response = await axios.post('http://localhost:8029/booking', {
// // // //             userId,
// // // //             rideId: ride.rideId,
// // // //           });
// // // //           if (response.data === 'Success') {
// // // //             Swal.fire('Success', 'Ride booked successfully!', 'success');
// // // //             handleCloseModal();
// // // //           } else {
// // // //             Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // // //           }
// // // //         } catch (error) {
// // // //           Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // // //         }
// // // //       }
// // // //     });
// // // //   };

// // // //   const handleImageUploadClick = () => {
// // // //     document.getElementById('profile-image-input').click();
// // // //   };

// // // //   const handleProfileImageChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setProfileImage(reader.result);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   // Filtering logic
// // // //   const filteredRides = rides.filter(ride => {
// // // //     const startPoint = ride.startPoint || '';
// // // //     const endPoint = ride.endPoint || '';

// // // //     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
// // // //     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

// // // //     return pickupMatch && dropoffMatch;
// // // //   });

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100">
// // // //       <UserNavbar 
// // // //         profileImage={profileImage}
// // // //         setShowDetails={setShowDetails}
// // // //         editMode={editMode}
// // // //         handleImageUploadClick={handleImageUploadClick}
// // // //         handleProfileImageChange={handleProfileImageChange}
// // // //       />

// // // //       <div className="container mx-auto p-6">
// // // //         {showDetails && (
// // // //           <>
// // // //             <div className="flex space-x-4 mb-6">
// // // //               <button
// // // //                 onClick={() => setActiveTab('profile')}
// // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // //               >
// // // //                 <FaUser className="inline-block mr-2" /> Profile
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setActiveTab('bookings')}
// // // //                 className={`flex-1 text-center py-2 px-4 rounded-lg ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
// // // //               >
// // // //                 <FaCalendarAlt className="inline-block mr-2" /> Bookings
// // // //               </button>
// // // //             </div>

// // // //             {activeTab === 'profile' && (
// // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // //                 <div className="flex flex-col md:flex-row items-center mb-4">
// // // //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// // // //                     <img 
// // // //                       src={profileImage || 'https://via.placeholder.com/100'}
// // // //                       alt="User Profile"
// // // //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// // // //                     />
// // // //                     {editMode && (
// // // //                       <FaCamera
// // // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // // //                         size={20}
// // // //                         onClick={handleImageUploadClick}
// // // //                       />
// // // //                     )}
// // // //                   </div>
// // // //                   <div className="flex-1">
// // // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // // //                     {editMode ? (
// // // //                       <div className="mt-4">
// // // //                         <button
// // // //                           onClick={() => {/* Handle save logic */}}
// // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // //                         >
// // // //                           Save
// // // //                         </button>
// // // //                         <button
// // // //                           onClick={() => setEditMode(false)}
// // // //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // //                         >
// // // //                           Cancel
// // // //                         </button>
// // // //                       </div>
// // // //                     ) : (
// // // //                       <button
// // // //                         onClick={() => setEditMode(true)}
// // // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // //                       >
// // // //                         <FaEdit className="mr-2" /> Edit Profile
// // // //                       </button>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {activeTab === 'bookings' && (
// // // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // // //                 <table className="min-w-full bg-white border border-gray-200">
// // // //                   <thead>
// // // //                     <tr className="border-b">
// // // //                       <th className="p-2 text-left">Booking ID</th>
// // // //                       <th className="p-2 text-left">Date</th>
// // // //                       <th className="p-2 text-left">Pickup</th>
// // // //                       <th className="p-2 text-left">Dropoff</th>
// // // //                       <th className="p-2 text-left">Status</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {/* Replace with actual booking data */}
// // // //                     <tr>
// // // //                       <td className="p-2">1</td>
// // // //                       <td className="p-2">2024-09-10</td>
// // // //                       <td className="p-2">Location A</td>
// // // //                       <td className="p-2">Location B</td>
// // // //                       <td className="p-2">Confirmed</td>
// // // //                     </tr>
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             )}
// // // //           </>
// // // //         )}

// // // //         <div className="container mx-auto p-4">
// // // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

// // // //           {/* Filters */}
// // // //           <div className="mb-4">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Filter by pickup location"
// // // //               value={pickupFilter}
// // // //               onChange={(e) => setPickupFilter(e.target.value)}
// // // //               className="border p-2 rounded mr-2"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Filter by dropoff location"
// // // //               value={dropoffFilter}
// // // //               onChange={(e) => setDropoffFilter(e.target.value)}
// // // //               className="border p-2 rounded"
// // // //             />
// // // //           </div>

// // // //           {/* Display rides or no records message */}
// // // //           {filteredRides.length > 0 ? (
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //               {filteredRides.map(ride => (
// // // //                 <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// // // //                   <h2 className="text-xl font-bold">
// // // //                     {ride.startPoint} to {ride.endPoint}
// // // //                   </h2>
// // // //                   <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // // //                   <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// // // //                   {ride.availableSeats > 0 && (
// // // //                     <button 
// // // //                       onClick={() => handleViewMore(ride)}
// // // //                       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // // //                     >
// // // //                       View More
// // // //                     </button>
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ) : (
// // // //             <p className="text-center text-lg text-gray-500">No records found.</p>
// // // //           )}

// // // //           {selectedRide && (
// // // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // // //                 {selectedRide && (
// // // //                   <>
// // // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // // //                     <div className="flex justify-end">
// // // //                       {selectedRide.availableSeats > 0 ? (
// // // //                         <button
// // // //                           onClick={handleBookNow}
// // // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // //                         >
// // // //                           Book Now
// // // //                         </button>
// // // //                       ) : (
// // // //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// // // //                       )}
// // // //                       <button
// // // //                         onClick={handleCloseModal}
// // // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // // //                       >
// // // //                         Close
// // // //                       </button>
// // // //                     </div>
// // // //                   </>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RideList;


// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import { FaUser, FaCalendarAlt, FaCamera, FaEdit, FaArrowLeft } from 'react-icons/fa';

// // // const RideList = () => {
// // //   const [rides, setRides] = useState([]);
// // //   const [selectedRide, setSelectedRide] = useState(null);
// // //   const [profileImage, setProfileImage] = useState(null);
// // //   const [showDetails, setShowDetails] = useState(false);
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     mobile: '',
// // //     dob: '',
// // //     address: '',
// // //     city: '',
// // //     state: '',
// // //     gender: '',
// // //     accountStatus: '',
// // //   });
// // //   const [activeTab, setActiveTab] = useState('profile');
// // //   const [pickupFilter, setPickupFilter] = useState('');
// // //   const [dropoffFilter, setDropoffFilter] = useState('');

// // //   useEffect(() => {
// // //     const fetchRides = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:8029/ride/all');
// // //         setRides(response.data);
// // //       } catch (error) {
// // //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// // //       }
// // //     };

// // //     fetchRides();
// // //   }, []);

// // //   const handleViewMore = (ride) => {
// // //     sessionStorage.setItem('selectedRide', JSON.stringify(ride));
// // //     sessionStorage.setItem('selectedVehicleId', ride.vehicleId); // Store vehicle ID
// // //     setSelectedRide(ride);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setSelectedRide(null);
// // //   };

// // //   const handleBookNow = async () => {
// // //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// // //     if (!ride) return;

// // //     Swal.fire({
// // //       title: 'Confirm Booking',
// // //       text: `Price: $${ride.pricePerPerson.toFixed(2)}`,
// // //       icon: 'warning',
// // //       showCancelButton: true,
// // //       confirmButtonText: 'Confirm',
// // //       cancelButtonText: 'Cancel',
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         const userId = sessionStorage.getItem('userId');
// // //         if (!userId) {
// // //           Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// // //           return;
// // //         }

// // //         try {
// // //           const response = await axios.post('http://localhost:8029/booking', {
// // //             userId,
// // //             rideId: ride.rideId,
// // //           });
// // //           if (response.data === 'Success') {
// // //             Swal.fire('Success', 'Ride booked successfully!', 'success');
// // //             handleCloseModal();
// // //           } else {
// // //             Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// // //           }
// // //         } catch (error) {
// // //           Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// // //         }
// // //       }
// // //     });
// // //   };

// // //   const handleImageUploadClick = () => {
// // //     document.getElementById('profile-image-input').click();
// // //   };

// // //   const handleProfileImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         setProfileImage(reader.result);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   // Filtering logic
// // //   const filteredRides = rides.filter(ride => {
// // //     const startPoint = ride.startPoint || '';
// // //     const endPoint = ride.endPoint || '';

// // //     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
// // //     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

// // //     return pickupMatch && dropoffMatch;
// // //   });

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       <div className="container mx-auto p-6">
// // //         {/* Back Button */}
// // //         <div className="mb-6">
// // //           <button
// // //             onClick={() => window.location.href = '/user-dashboard'} // Navigate to user dashboard
// // //             className="flex items-center text-blue-600 hover:underline"
// // //           >
// // //             <FaArrowLeft className="mr-2" size={20} />
// // //             Back to Dashboard
// // //           </button>
// // //         </div>

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
// // //                     {editMode && (
// // //                       <FaCamera
// // //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// // //                         size={20}
// // //                         onClick={handleImageUploadClick}
// // //                       />
// // //                     )}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// // //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// // //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// // //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// // //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// // //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// // //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// // //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// // //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// // //                     {editMode ? (
// // //                       <div className="mt-4">
// // //                         <button
// // //                           onClick={() => {/* Handle save logic */}}
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
// // //                     ) : (
// // //                       <button
// // //                         onClick={() => setEditMode(true)}
// // //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //                       >
// // //                         <FaEdit className="mr-2" /> Edit Profile
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {activeTab === 'bookings' && (
// // //               <div className="bg-white p-6 rounded-lg shadow-md">
// // //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// // //                 <table className="min-w-full bg-white border border-gray-200">
// // //                   <thead>
// // //                     <tr className="border-b">
// // //                       <th className="p-2 text-left">Booking ID</th>
// // //                       <th className="p-2 text-left">Date</th>
// // //                       <th className="p-2 text-left">Pickup</th>
// // //                       <th className="p-2 text-left">Dropoff</th>
// // //                       <th className="p-2 text-left">Status</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {/* Replace with actual booking data */}
// // //                     <tr>
// // //                       <td className="p-2">1</td>
// // //                       <td className="p-2">2024-09-10</td>
// // //                       <td className="p-2">Location A</td>
// // //                       <td className="p-2">Location B</td>
// // //                       <td className="p-2">Confirmed</td>
// // //                     </tr>
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             )}
// // //           </>
// // //         )}

// // //         <div className="container mx-auto p-4">
// // //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

// // //           {/* Filters */}
// // //           <div className="mb-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Filter by pickup location"
// // //               value={pickupFilter}
// // //               onChange={(e) => setPickupFilter(e.target.value)}
// // //               className="border p-2 rounded mr-2"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="Filter by dropoff location"
// // //               value={dropoffFilter}
// // //               onChange={(e) => setDropoffFilter(e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //           </div>

// // //           {/* Display rides or no records message */}
// // //           {filteredRides.length > 0 ? (
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //               {filteredRides.map(ride => (
// // //                 <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// // //                   <h2 className="text-xl font-bold">
// // //                     {ride.startPoint} to {ride.endPoint}
// // //                   </h2>
// // //                   <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// // //                   <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// // //                   {ride.availableSeats > 0 && (
// // //                     <button 
// // //                       onClick={() => handleViewMore(ride)}
// // //                       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// // //                     >
// // //                       View More
// // //                     </button>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <p className="text-center text-lg text-gray-500">No records found.</p>
// // //           )}

// // //           {selectedRide && (
// // //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// // //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// // //                 {selectedRide && (
// // //                   <>
// // //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// // //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// // //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// // //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// // //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// // //                     <div className="flex justify-end">
// // //                       {selectedRide.availableSeats > 0 ? (
// // //                         <button
// // //                           onClick={handleBookNow}
// // //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //                         >
// // //                           Book Now
// // //                         </button>
// // //                       ) : (
// // //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// // //                       )}
// // //                       <button
// // //                         onClick={handleCloseModal}
// // //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// // //                       >
// // //                         Close
// // //                       </button>
// // //                     </div>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RideList;

// // //working ride list -> session

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { FaUser, FaCalendarAlt, FaCamera, FaEdit, FaArrowLeft } from 'react-icons/fa';
// // import { useNavigate } from 'react-router-dom';

// // const RideList = () => {
// //   const [rides, setRides] = useState([]);
// //   const [selectedRide, setSelectedRide] = useState(null);
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [showDetails, setShowDetails] = useState(false);
// //   const [editMode, setEditMode] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     mobile: '',
// //     dob: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     gender: '',
// //     accountStatus: '',
// //   });
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [pickupFilter, setPickupFilter] = useState('');
// //   const [dropoffFilter, setDropoffFilter] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchRides = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8029/ride/all');
// //         setRides(response.data);
// //       } catch (error) {
// //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// //       }
// //     };

// //     fetchRides();
// //   }, []);

// //   const handleViewMore = (ride) => {
// //     // Minimized data storage
// //     const rideData = {
// //       rideId: ride.rideId,
// //       startPoint: ride.startPoint,
// //       endPoint: ride.endPoint,
// //       rideDate: ride.rideDate,
// //       availableSeats: ride.availableSeats,
// //       vehicleId: ride.vehicle.vehicleId
// //     };

// //     sessionStorage.setItem('selectedRide', JSON.stringify(rideData));
// //     sessionStorage.setItem('selectedVehicleId', ride.vehicle.vehicleId);
// //     setSelectedRide(rideData);
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedRide(null);
// //   };

// //   const handleBookNow = async () => {
// //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// //     if (!ride) return;

// //     Swal.fire({
// //       title: 'Confirm Booking',
// //       text: `Price: $${ride.pricePerPerson.toFixed(2)}`,
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonText: 'Confirm',
// //       cancelButtonText: 'Cancel',
// //     }).then(async (result) => {
// //       if (result.isConfirmed) {
// //         const userId = sessionStorage.getItem('userId');
// //         if (!userId) {
// //           Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// //           return;
// //         }

// //         try {
// //           const response = await axios.post('http://localhost:8029/booking', {
// //             userId,
// //             rideId: ride.rideId,
// //           });
// //           if (response.data === 'Success') {
// //             Swal.fire('Success', 'Ride booked successfully!', 'success');
// //             handleCloseModal();
// //           } else {
// //             Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// //           }
// //         } catch (error) {
// //           Swal.fire('Error', 'An error occurred. Please try again.', 'error');
// //         }
// //       }
// //     });
// //   };

// //   const handleImageUploadClick = () => {
// //     document.getElementById('profile-image-input').click();
// //   };

// //   const handleProfileImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProfileImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // Filtering logic
// //   const filteredRides = rides.filter(ride => {
// //     const startPoint = ride.startPoint || '';
// //     const endPoint = ride.endPoint || '';

// //     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
// //     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

// //     return pickupMatch && dropoffMatch;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <div className="container mx-auto p-6">
// //         <button
// //           onClick={() => navigate('/userdashboard')}
// //           className="mb-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center"
// //         >
// //           <FaArrowLeft className="mr-2" /> Back to Dashboard
// //         </button>

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
// //             </div>

// //             {activeTab === 'profile' && (
// //               <div className="bg-white p-6 rounded-lg shadow-md">
// //                 <div className="flex flex-col md:flex-row items-center mb-4">
// //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// //                     <img 
// //                       src={profileImage || 'https://via.placeholder.com/100'}
// //                       alt="User Profile"
// //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// //                     />
// //                     {editMode && (
// //                       <FaCamera
// //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// //                         size={20}
// //                         onClick={handleImageUploadClick}
// //                       />
// //                     )}
// //                   </div>
// //                   <div className="flex-1">
// //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// //                     {editMode ? (
// //                       <div className="mt-4">
// //                         <button
// //                           onClick={() => {/* Handle save logic */}}
// //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                         >
// //                           Save
// //                         </button>
// //                         <button
// //                           onClick={() => setEditMode(false)}
// //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// //                         >
// //                           Cancel
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <button
// //                         onClick={() => setEditMode(true)}
// //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                       >
// //                         <FaEdit className="mr-2" /> Edit Profile
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {activeTab === 'bookings' && (
// //               <div className="bg-white p-6 rounded-lg shadow-md">
// //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// //                 <table className="min-w-full bg-white border border-gray-200">
// //                   <thead>
// //                     <tr className="border-b">
// //                       <th className="p-2 text-left">Booking ID</th>
// //                       <th className="p-2 text-left">Date</th>
// //                       <th className="p-2 text-left">Pickup</th>
// //                       <th className="p-2 text-left">Dropoff</th>
// //                       <th className="p-2 text-left">Status</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {/* Replace with actual booking data */}
// //                     <tr>
// //                       <td className="p-2">1</td>
// //                       <td className="p-2">2024-09-10</td>
// //                       <td className="p-2">Location A</td>
// //                       <td className="p-2">Location B</td>
// //                       <td className="p-2">Confirmed</td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </>
// //         )}

// //         <div className="container mx-auto p-4">
// //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

// //           {/* Filters */}
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="Filter by pickup location"
// //               value={pickupFilter}
// //               onChange={(e) => setPickupFilter(e.target.value)}
// //               className="border p-2 rounded mr-2"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Filter by dropoff location"
// //               value={dropoffFilter}
// //               onChange={(e) => setDropoffFilter(e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //           </div>

// //           {/* Display rides or no records message */}
// //           {filteredRides.length > 0 ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //               {filteredRides.map(ride => (
// //                 <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// //                   <h2 className="text-xl font-bold">
// //                     {ride.startPoint} to {ride.endPoint}
// //                   </h2>
// //                   <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// //                   <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// //                   {ride.availableSeats > 0 && (
// //                     <button 
// //                       onClick={() => handleViewMore(ride)}
// //                       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// //                     >
// //                       View More
// //                     </button>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <p className="text-center text-lg text-gray-500">No records found.</p>
// //           )}

// //           {selectedRide && (
// //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// //                 {selectedRide && (
// //                   <>
// //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// //                     <div className="flex justify-end">
// //                       {selectedRide.availableSeats > 0 ? (
// //                         <button
// //                           onClick={handleBookNow}
// //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                         >
// //                           Book Now
// //                         </button>
// //                       ) : (
// //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// //                       )}
// //                       <button
// //                         onClick={handleCloseModal}
// //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// //                       >
// //                         Close
// //                       </button>
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RideList;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { FaUser, FaCalendarAlt, FaCamera, FaEdit, FaArrowLeft } from 'react-icons/fa';
// // import { useNavigate } from 'react-router-dom';

// // const RideList = () => {
// //   const [rides, setRides] = useState([]);
// //   const [selectedRide, setSelectedRide] = useState(null);
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [showDetails, setShowDetails] = useState(false);
// //   const [editMode, setEditMode] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     mobile: '',
// //     dob: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     gender: '',
// //     accountStatus: '',
// //   });
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [pickupFilter, setPickupFilter] = useState('');
// //   const [dropoffFilter, setDropoffFilter] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchRides = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8029/ride/all');
// //         setRides(response.data);
// //       } catch (error) {
// //         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
// //       }
// //     };

// //     fetchRides();
// //   }, []);

// //   const handleViewMore = (ride) => {
// //     // Minimized data storage
// //     const rideData = {
// //       rideId: ride.rideId,
// //       startPoint: ride.startPoint,
// //       endPoint: ride.endPoint,
// //       rideDate: ride.rideDate,
// //       availableSeats: ride.availableSeats,
// //       vehicleId: ride.vehicle.vehicleId
// //     };

// //     sessionStorage.setItem('selectedRide', JSON.stringify(rideData));
// //     sessionStorage.setItem('selectedVehicleId', ride.vehicle.vehicleId);
// //     setSelectedRide(rideData);
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedRide(null);
// //   };

// //   const handleBookNow = async () => {
// //     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
// //     if (!ride) return;

// //     const vehicleId = sessionStorage.getItem('selectedVehicleId');
// //     if (!vehicleId) {
// //       Swal.fire('Error', 'Vehicle information not available. Please try again.', 'error');
// //       return;
// //     }

// //     try {
// //       // Fetch vehicle information
// //       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${vehicleId}`);
// //       const vehicle = vehicleResponse.data;

// //       // Fetch booking confirmation
// //       Swal.fire({
// //         title: 'Confirm Booking',
// //         html: `
// //           <div>
// //             <h3>Vehicle Information</h3>
// //             <p><strong>Make:</strong> ${vehicle.make}</p>
// //             <p><strong>Model:</strong> ${vehicle.model}</p>
// //             <p><strong>Year:</strong> ${vehicle.year}</p>
// //             <p><strong>Color:</strong> ${vehicle.color}</p>
// //             <p><strong>Price Per Person:</strong> $${ride.pricePerPerson.toFixed(2)}</p>
// //           </div>
// //         `,
// //         icon: 'warning',
// //         showCancelButton: true,
// //         confirmButtonText: 'Confirm',
// //         cancelButtonText: 'Cancel',
// //       }).then(async (result) => {
// //         if (result.isConfirmed) {
// //           const userId = sessionStorage.getItem('userId');
// //           if (!userId) {
// //             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
// //             return;
// //           }

// //           try {
// //             // Make booking request
// //             const bookingResponse = await axios.post('http://localhost:8029/booking', {
// //               userId,
// //               rideId: ride.rideId,
// //               requestedSeats: 1 // Assuming 1 seat for the example; you can adjust as needed
// //             });

// //             if (bookingResponse.data === 'Success') {
// //               Swal.fire('Success', 'Ride booked successfully!', 'success');
// //               handleCloseModal();
// //             } else {
// //               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
// //             }
// //           } catch (error) {
// //             Swal.fire('Error', 'An error occurred while booking. Please try again.', 'error');
// //           }
// //         }
// //       });
// //     } catch (error) {
// //       Swal.fire('Error', 'Failed to fetch vehicle information. Please try again later.', 'error');
// //     }
// //   };

// //   const handleImageUploadClick = () => {
// //     document.getElementById('profile-image-input').click();
// //   };

// //   const handleProfileImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProfileImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // Filtering logic
// //   const filteredRides = rides.filter(ride => {
// //     const startPoint = ride.startPoint || '';
// //     const endPoint = ride.endPoint || '';

// //     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
// //     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

// //     return pickupMatch && dropoffMatch;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <div className="container mx-auto p-6">
// //         <button
// //           onClick={() => navigate('/userdashboard')}
// //           className="mb-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center"
// //         >
// //           <FaArrowLeft className="mr-2" /> Back to Dashboard
// //         </button>

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
// //             </div>

// //             {activeTab === 'profile' && (
// //               <div className="bg-white p-6 rounded-lg shadow-md">
// //                 <div className="flex flex-col md:flex-row items-center mb-4">
// //                   <div className="flex-1 md:flex-none md:mr-4 relative">
// //                     <img 
// //                       src={profileImage || 'https://via.placeholder.com/100'}
// //                       alt="User Profile"
// //                       className="w-32 h-32 rounded-full border-2 border-blue-600"
// //                     />
// //                     {editMode && (
// //                       <FaCamera
// //                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
// //                         size={20}
// //                         onClick={handleImageUploadClick}
// //                       />
// //                     )}
// //                   </div>
// //                   <div className="flex-1">
// //                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
// //                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
// //                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
// //                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
// //                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
// //                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
// //                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
// //                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
// //                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

// //                     {editMode ? (
// //                       <div className="mt-4">
// //                         <button
// //                           onClick={() => {/* Handle save logic */}}
// //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                         >
// //                           Save
// //                         </button>
// //                         <button
// //                           onClick={() => setEditMode(false)}
// //                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// //                         >
// //                           Cancel
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <button
// //                         onClick={() => setEditMode(true)}
// //                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                       >
// //                         <FaEdit className="mr-2" /> Edit Profile
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {activeTab === 'bookings' && (
// //               <div className="bg-white p-6 rounded-lg shadow-md">
// //                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
// //                 <table className="min-w-full bg-white border border-gray-200">
// //                   <thead>
// //                     <tr className="border-b">
// //                       <th className="p-2 text-left">Booking ID</th>
// //                       <th className="p-2 text-left">Date</th>
// //                       <th className="p-2 text-left">Pickup</th>
// //                       <th className="p-2 text-left">Dropoff</th>
// //                       <th className="p-2 text-left">Status</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {/* Replace with actual booking data */}
// //                     <tr>
// //                       <td className="p-2">1</td>
// //                       <td className="p-2">2024-09-10</td>
// //                       <td className="p-2">Location A</td>
// //                       <td className="p-2">Location B</td>
// //                       <td className="p-2">Confirmed</td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </>
// //         )}

// //         <div className="container mx-auto p-4">
// //           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

// //           {/* Filters */}
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="Filter by pickup location"
// //               value={pickupFilter}
// //               onChange={(e) => setPickupFilter(e.target.value)}
// //               className="border p-2 rounded mr-2"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Filter by dropoff location"
// //               value={dropoffFilter}
// //               onChange={(e) => setDropoffFilter(e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //           </div>

// //           {/* Display rides or no records message */}
// //           {filteredRides.length > 0 ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //               {filteredRides.map(ride => (
// //                 <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
// //                   <h2 className="text-xl font-bold">
// //                     {ride.startPoint} to {ride.endPoint}
// //                   </h2>
// //                   <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
// //                   <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
// //                   {ride.availableSeats > 0 && (
// //                     <button 
// //                       onClick={() => handleViewMore(ride)}
// //                       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
// //                     >
// //                       View More
// //                     </button>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <p className="text-center text-lg text-gray-500">No records found.</p>
// //           )}

// //           {selectedRide && (
// //             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// //               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
// //                 {selectedRide && (
// //                   <>
// //                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
// //                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
// //                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
// //                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
// //                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

// //                     <div className="flex justify-end">
// //                       {selectedRide.availableSeats > 0 ? (
// //                         <button
// //                           onClick={handleBookNow}
// //                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                         >
// //                           Book Now
// //                         </button>
// //                       ) : (
// //                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
// //                       )}
// //                       <button
// //                         onClick={handleCloseModal}
// //                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// //                       >
// //                         Close
// //                       </button>
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <input
// //         id="profile-image-input"
// //         type="file"
// //         accept="image/*"
// //         onChange={handleProfileImageChange}
// //         className="hidden"
// //       />
// //     </div>
// //   );
// // };

// // export default RideList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FaUser, FaCalendarAlt, FaCamera, FaEdit, FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const RideList = () => {
//   const [rides, setRides] = useState([]);
//   const [selectedRide, setSelectedRide] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     dob: '',
//     address: '',
//     city: '',
//     state: '',
//     gender: '',
//     accountStatus: '',
//   });
//   const [activeTab, setActiveTab] = useState('profile');
//   const [pickupFilter, setPickupFilter] = useState('');
//   const [dropoffFilter, setDropoffFilter] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRides = async () => {
//       try {
//         const response = await axios.get('http://localhost:8029/ride/all');
//         setRides(response.data);
//       } catch (error) {
//         Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
//       }
//     };

//     fetchRides();
//   }, []);

//   const handleViewMore = (ride) => {
//     // Minimized data storage
//     const rideData = {
//       rideId: ride.rideId,
//       startPoint: ride.startPoint,
//       endPoint: ride.endPoint,
//       rideDate: ride.rideDate,
//       availableSeats: ride.availableSeats,
//       vehicleId: ride.vehicle.vehicleId
//     };

//     sessionStorage.setItem('selectedRide', JSON.stringify(rideData));
//     sessionStorage.setItem('selectedVehicleId', ride.vehicle.vehicleId);
//     setSelectedRide(rideData);
//   };

//   const handleCloseModal = () => {
//     setSelectedRide(null);
//   };

//   const handleBookNow = async () => {
//     const ride = JSON.parse(sessionStorage.getItem('selectedRide'));
//     if (!ride) return;

//     const vehicleId = sessionStorage.getItem('selectedVehicleId');
//     if (!vehicleId) {
//       Swal.fire('Error', 'Vehicle information not available. Please try again.', 'error');
//       return;
//     }

//     try {
//       // Fetch vehicle information
//       const vehicleResponse = await axios.get(`http://localhost:8029/vehicle/${vehicleId}`);
//       const vehicle = vehicleResponse.data;

//       // Fetch booking confirmation
//       Swal.fire({
//         title: 'Confirm Booking',
//         html: `
//           <div>
//             <h3>Vehicle Information</h3>
//             <p><strong>Make:</strong> ${vehicle.make}</p>
//             <p><strong>Model:</strong> ${vehicle.model}</p>
//             <p><strong>Year:</strong> ${vehicle.year}</p>
//             <p><strong>Color:</strong> ${vehicle.color}</p>
//             <p><strong>Price Per Person:</strong> $${ride.pricePerPerson.toFixed(2)}</p>
//           </div>
//         `,
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Confirm',
//         cancelButtonText: 'Cancel',
//       }).then(async (result) => {
//         if (result.isConfirmed) {
//           const userId = sessionStorage.getItem('userId');
//           if (!userId) {
//             Swal.fire('Error', 'User not logged in. Please log in to book a ride.', 'error');
//             return;
//           }

//           try {
//             // Make booking request
//             const bookingResponse = await axios.post('http://localhost:8029/booking', {
//               userId,
//               rideId: ride.rideId,
//               requestedSeats: 1 // Assuming 1 seat for the example; you can adjust as needed
//             });

//             if (bookingResponse.data === 'Success') {
//               Swal.fire('Success', 'Ride booked successfully!', 'success');
//               handleCloseModal();
//             } else {
//               Swal.fire('Error', 'Failed to book the ride. Please try again.', 'error');
//             }
//           } catch (error) {
//             Swal.fire('Error', 'An error occurred while booking. Please try again.', 'error');
//           }
//         }
//       });
//     } catch (error) {
//       Swal.fire('Error', 'Failed to fetch vehicle information. Please try again later.', 'error');
//     }
//   };

//   const handleImageUploadClick = () => {
//     document.getElementById('profile-image-input').click();
//   };

//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Filtering logic
//   const filteredRides = rides.filter(ride => {
//     const startPoint = ride.startPoint || '';
//     const endPoint = ride.endPoint || '';

//     const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
//     const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

//     return pickupMatch && dropoffMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto p-6">
//         <button
//           onClick={() => navigate('/userdashboard')}
//           className="mb-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center"
//         >
//           <FaArrowLeft className="mr-2" /> Back to Dashboard
//         </button>

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
//             </div>

//             {activeTab === 'profile' && (
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-col md:flex-row items-center mb-4">
//                   <div className="flex-1 md:flex-none md:mr-4 relative">
//                     <img 
//                       src={profileImage || 'https://via.placeholder.com/100'}
//                       alt="User Profile"
//                       className="w-32 h-32 rounded-full border-2 border-blue-600"
//                     />
//                     {editMode && (
//                       <FaCamera
//                         className="absolute bottom-0 right-0 text-blue-600 cursor-pointer bg-white rounded-full p-1"
//                         size={20}
//                         onClick={handleImageUploadClick}
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-semibold mb-2">{formData.name}</h2>
//                     <p className="text-gray-600 mb-2">Email: {formData.email}</p>
//                     <p className="text-gray-600 mb-2">Phone: {formData.mobile}</p>
//                     <p className="text-gray-600 mb-2">Date of Birth: {formData.dob}</p>
//                     <p className="text-gray-600 mb-2">Address: {formData.address}</p>
//                     <p className="text-gray-600 mb-2">City: {formData.city}</p>
//                     <p className="text-gray-600 mb-2">State: {formData.state}</p>
//                     <p className="text-gray-600 mb-2">Gender: {formData.gender}</p>
//                     <p className="text-gray-600 mb-2">Account Status: {formData.accountStatus}</p>

//                     {editMode ? (
//                       <div className="mt-4">
//                         <button
//                           onClick={() => {/* Handle save logic */}}
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setEditMode(false)}
//                           className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => setEditMode(true)}
//                         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                       >
//                         <FaEdit className="mr-2" /> Edit Profile
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'bookings' && (
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
//                 <table className="min-w-full bg-white border border-gray-200">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="p-2 text-left">Booking ID</th>
//                       <th className="p-2 text-left">Date</th>
//                       <th className="p-2 text-left">Pickup</th>
//                       <th className="p-2 text-left">Dropoff</th>
//                       <th className="p-2 text-left">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Replace with actual booking data */}
//                     <tr>
//                       <td className="p-2">1</td>
//                       <td className="p-2">2024-09-10</td>
//                       <td className="p-2">Location A</td>
//                       <td className="p-2">Location B</td>
//                       <td className="p-2">Confirmed</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}

//         <div className="container mx-auto p-4">
//           <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

//           {/* Filters */}
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Filter by pickup location"
//               value={pickupFilter}
//               onChange={(e) => setPickupFilter(e.target.value)}
//               className="border p-2 rounded mr-2"
//             />
//             <input
//               type="text"
//               placeholder="Filter by dropoff location"
//               value={dropoffFilter}
//               onChange={(e) => setDropoffFilter(e.target.value)}
//               className="border p-2 rounded"
//             />
//           </div>

//           {/* Display rides or no records message */}
//           {filteredRides.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredRides.map(ride => (
//                 <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
//                   <h2 className="text-xl font-bold">
//                     {ride.startPoint} to {ride.endPoint}
//                   </h2>
//                   <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
//                   <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
//                   {ride.availableSeats > 0 && (
//                     <button 
//                       onClick={() => handleViewMore(ride)}
//                       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
//                     >
//                       View More
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-lg text-gray-500">No records found.</p>
//           )}

//           {selectedRide && (
//             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
//                 {selectedRide && (
//                   <>
//                     <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
//                     <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
//                     <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
//                     <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
//                     <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

//                     <div className="flex justify-end">
//                       {selectedRide.availableSeats > 0 ? (
//                         <button
//                           onClick={handleBookNow}
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                         >
//                           Book Now
//                         </button>
//                       ) : (
//                         <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
//                       )}
//                       <button
//                         onClick={handleCloseModal}
//                         className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <input
//         id="profile-image-input"
//         type="file"
//         accept="image/*"
//         onChange={handleProfileImageChange}
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default RideList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RideList = () => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);
  const [pickupFilter, setPickupFilter] = useState('');
  const [dropoffFilter, setDropoffFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get('http://localhost:8029/ride/all');
        setRides(response.data);
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch rides. Please try again later.', 'error');
      }
    };

    fetchRides();
  }, []);

  const handleViewMore = (ride) => {
    const rideData = {
      rideId: ride.rideId,
      startPoint: ride.startPoint,
      endPoint: ride.endPoint,
      rideDate: ride.rideDate,
      departureTime: ride.departureTime,
      arrivalTime: ride.arrivalTime,
      availableSeats: ride.availableSeats,
      vehicleId: ride.vehicle.vehicleId,
    };
    sessionStorage.setItem("rideId",ride.rideId);
    sessionStorage.setItem('selectedRide', JSON.stringify(rideData));
    sessionStorage.setItem('selectedVehicleId', ride.vehicle.vehicleId);
    setSelectedRide(rideData);
  };

//   const handleBookNow = () => {
//     // Ensure the selected ride and vehicle data are stored in sessionStorage
//     if (selectedRide) {
//       sessionStorage.setItem('selectedRide', JSON.stringify(selectedRide));
//       sessionStorage.setItem('selectedVehicleId', selectedRide.vehicleId);
      
//       // Navigate to Ride Selection page
//       navigate('/rideselection');
//     } else {
//       Swal.fire('Error', 'No ride selected. Please select a ride to book.', 'error');
//     }
//   };

const handleBookNow = async () => {
    if (selectedRide) {
      sessionStorage.setItem('selectedRide', JSON.stringify(selectedRide));
      sessionStorage.setItem('selectedVehicleId', selectedRide.vehicleId);
  
      try {
        // Fetch vehicle information
        const response = await axios.get(`http://localhost:8029/vehicle/${selectedRide.vehicleId}`);
        const vehicleData = response.data;
        sessionStorage.setItem('selectedVehicle', JSON.stringify(vehicleData));
  
        // Navigate to Ride Selection page
        navigate('/rideselection');
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch vehicle information. Please try again later.', 'error');
      }
    } else {
      Swal.fire('Error', 'No ride selected. Please select a ride to book.', 'error');
    }
  };
  

  const handleCloseModal = () => {
    setSelectedRide(null);
  };

  // Filtering logic
  const filteredRides = rides.filter(ride => {
    const startPoint = ride.startPoint || '';
    const endPoint = ride.endPoint || '';

    const pickupMatch = startPoint.toLowerCase().includes(pickupFilter.toLowerCase());
    const dropoffMatch = endPoint.toLowerCase().includes(dropoffFilter.toLowerCase());

    return pickupMatch && dropoffMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <button
          onClick={() => navigate('/userdashboard')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </button>

        <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl font-bold mb-6">Available Rides</h1>

          {/* Filters */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter by pickup location"
              value={pickupFilter}
              onChange={(e) => setPickupFilter(e.target.value)}
              className="border p-2 rounded mr-2"
            />
            <input
              type="text"
              placeholder="Filter by dropoff location"
              value={dropoffFilter}
              onChange={(e) => setDropoffFilter(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* Display rides or no records message */}
          {filteredRides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRides.map(ride => (
                <div key={ride.rideId} className={`border p-4 rounded shadow-lg ${ride.availableSeats === 0 ? 'bg-gray-200' : ''}`}>
                  <h2 className="text-xl font-bold">
                    {ride.startPoint} to {ride.endPoint}
                  </h2>
                  <p className="mt-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
                  <p>Available Seats: {ride.availableSeats === 0 ? 'Occupied' : ride.availableSeats}</p>
                  {ride.availableSeats > 0 && (
                    <button 
                      onClick={() => handleViewMore(ride)}
                      className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                    >
                      View More
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500">No records found.</p>
          )}

          {selectedRide && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                {selectedRide && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">{selectedRide.startPoint} to {selectedRide.endPoint}</h2>
                    <p className="text-lg mb-2">Date: {new Date(selectedRide.rideDate).toLocaleDateString()}</p>
                    <p className="mb-2">Departure Time: {selectedRide.departureTime}</p>
                    <p className="mb-2">Arrival Time: {selectedRide.arrivalTime}</p>
                    <p className="mb-2">Available Seats: {selectedRide.availableSeats}</p>

                    <div className="flex justify-end">
                      {selectedRide.availableSeats > 0 ? (
                        <button
                          onClick={handleBookNow}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Book Now
                        </button>
                      ) : (
                        <span className="text-gray-500 px-4 py-2 rounded">Occupied</span>
                      )}
                      <button
                        onClick={handleCloseModal}
                        className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideList;

