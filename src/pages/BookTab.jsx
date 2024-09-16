// -----------------------------Not Used------------------------
// import React from 'react';

// const Bookings = ({ bookings, handlePayment, handleReview }) => {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
//             {bookings.length > 0 ? (
//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="bg-gray-200 border-b">
//                             <th className="px-4 py-2 text-left">Date</th>
//                             <th className="px-4 py-2 text-left">Pickup</th>
//                             <th className="px-4 py-2 text-left">Drop</th>
//                             <th className="px-4 py-2 text-left">Status</th>
//                             <th className="px-4 py-2 text-left">Amount</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map((booking) => (
//                             <tr key={booking.bookingId} className="border-b">
//                                 <td className="px-4 py-2">{booking.bookingDate}</td>
//                                 <td className="px-4 py-2">{booking.ride.startPoint}</td>
//                                 <td className="px-4 py-2">{booking.ride.endPoint}</td>
//                                 <td className="px-4 py-2">{booking.bookingStatus || 'N/A'}</td>
//                                 <td className="px-4 py-2">
//                                     {booking.payment ? booking.payment.amount : 'N/A'}
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     <div className="flex space-x-2">
//                                         <button
//                                             onClick={() => handlePayment(booking.bookingId)}
//                                             disabled={booking.payment.status === 'Paid' || booking.bookingStatus !== 'Approved'}
//                                             className={`px-5 py-1 rounded ${booking.payment.status === 'Paid' ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-green-600 text-white'}`}
//                                         >
//                                             {booking.payment.status === 'Paid' ? 'Paid' : 'Pay'}
//                                         </button>
//                                         <button
//                                             onClick={() => handleReview(booking.bookingId)}
//                                             disabled={booking.payment.status !== 'Paid'}
//                                             className={`px-5 py-1 rounded ${booking.payment.status === 'Paid' ? 'bg-yellow-600 text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
//                                         >
//                                             Review
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No bookings found.</p>
//             )}
//         </div>
//     );
// };

// export default Bookings;
