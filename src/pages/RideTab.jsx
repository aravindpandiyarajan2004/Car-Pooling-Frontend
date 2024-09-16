//------------------Not Used--------------------
// import React from 'react';

// const Rides = ({ rides }) => {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Your Rides</h2>
//             {rides.length > 0 ? (
//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="bg-gray-200 border-b">
//                             <th className="px-4 py-2 text-left">Ride ID</th>
//                             <th className="px-4 py-2 text-left">Start Point</th>
//                             <th className="px-4 py-2 text-left">End Point</th>
//                             <th className="px-4 py-2 text-left">Date</th>
//                             <th className="px-4 py-2 text-left">Departure Time</th>
//                             <th className="px-4 py-2 text-left">Arrival Time</th>
//                             <th className="px-4 py-2 text-left">Distance</th>
//                             <th className="px-4 py-2 text-left">Price Per Person</th>
//                             <th className="px-4 py-2 text-left">Available Seats</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {rides.map((ride) => (
//                             <tr key={ride.rideId} className="border-b">
//                                 <td className="px-4 py-2">{ride.rideId}</td>
//                                 <td className="px-4 py-2">{ride.startPoint}</td>
//                                 <td className="px-4 py-2">{ride.endPoint}</td>
//                                 <td className="px-4 py-2">{new Date(ride.rideDate).toLocaleDateString()}</td>
//                                 <td className="px-4 py-2">{ride.departureTime}</td>
//                                 <td className="px-4 py-2">{ride.arrivalTime}</td>
//                                 <td className="px-4 py-2">{ride.distance}</td>
//                                 <td className="px-4 py-2">₹{ride.pricePerPerson.toFixed(2)}</td>
//                                 <td className="px-4 py-2">{ride.availableSeats}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No rides found.</p>
//             )}
//         </div>
//     );
// };

// export default Rides;
