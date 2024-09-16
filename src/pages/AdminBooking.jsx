


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { faEye, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'; // Import icons
// // // // // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // // // // import AdminNavbar from '../components/AdminNabar';


// // // // // const PendingBookings = () => {
// // // // //   const [bookings, setBookings] = useState([]);
// // // // //   const navigate = useNavigate(); // Initialize useNavigate

// // // // //   useEffect(() => {
// // // // //     axios.get('http://localhost:8029/admin/pendingBooking')
// // // // //       .then(response => {
// // // // //         setBookings(response.data);
// // // // //       })
// // // // //       .catch(error => {
// // // // //         console.error("Error fetching pending bookings:", error);
// // // // //         Swal.fire({
// // // // //           title: 'Error',
// // // // //           text: 'Failed to fetch pending bookings',
// // // // //           icon: 'error'
// // // // //         });
// // // // //       });
// // // // //   }, []);

// // // // //   const sendEmail = (emailDetails) => {
// // // // //     return axios.post('http://localhost:8029/user/sendEmail', null, {
// // // // //       params: emailDetails
// // // // //     });
// // // // //   };

// // // // //   const updateBookingStatus = (bookingId, newStatus) => {
// // // // //     axios.put(`http://localhost:8029/admin/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
// // // // //       .then(() => {
// // // // //         // Fetch the updated booking details to get the user's email
// // // // //         return axios.get(`http://localhost:8029/admin/booking/${bookingId}`);
// // // // //       })
// // // // //       .then(response => {
// // // // //         const booking = response.data;
// // // // //         const emailDetails = {
// // // // //           from: 'admin@example.com', // Replace with actual sender email
// // // // //           to: booking.user?.userEmail || 'N/A',
// // // // //           subject: `Booking ${newStatus}`,
// // // // //           body: `Your booking with ID ${bookingId} has been ${newStatus.toLowerCase()}.`
// // // // //         };

// // // // //         return sendEmail(emailDetails);
// // // // //       })
// // // // //       .then(() => {
// // // // //         Swal.fire({
// // // // //           title: 'Success',
// // // // //           text: `Booking ${newStatus} and email sent.`,
// // // // //           icon: 'success'
// // // // //         });
// // // // //         // Refresh the list after updating
// // // // //         setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
// // // // //       })
// // // // //       .catch(error => {
// // // // //         console.error("Error updating booking status or sending email:", error);
// // // // //         Swal.fire({
// // // // //           title: 'Error',
// // // // //           text: 'Failed to update booking status or send email',
// // // // //           icon: 'error'
// // // // //         });
// // // // //       });
// // // // //   };

// // // // //   const showDetails = (booking) => {
// // // // //     Swal.fire({
// // // // //       title: 'Booking Details',
// // // // //       html: `
// // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // //           <h3>Booking Information</h3>
// // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
// // // // //               <td style="padding: 8px;">${booking.bookingId}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
// // // // //               <td style="padding: 8px;">${booking.requestedSeats}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
// // // // //               <td style="padding: 8px;">${booking.bookingDate}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// // // // //               <td style="padding: 8px;">${booking.bookingStatus}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
// // // // //               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">User ID:</td>
// // // // //               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
// // // // //             </tr>
// // // // //           </table>
// // // // //         </div>
// // // // //       `,
// // // // //       showCloseButton: true,
// // // // //       showConfirmButton: false,
// // // // //       width: '600px',
// // // // //       customClass: {
// // // // //         container: 'swal2-container',
// // // // //         popup: 'swal2-popup',
// // // // //         title: 'swal2-title',
// // // // //         content: 'swal2-content'
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <AdminNavbar />
// // // // //       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
// // // // //       {bookings.length === 0 ? (
// // // // //         <p>No pending bookings found</p>
// // // // //       ) : (
// // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // //               <th className="px-6 py-3 text-left">Booking ID</th>
// // // // //               <th className="px-6 py-3 text-left">Requested Seats</th>
// // // // //               <th className="px-6 py-3 text-left">Booking Date</th>
// // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {bookings.map((booking, index) => (
// // // // //               <tr key={booking.bookingId} className="border-b border-gray-300">
// // // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // // //                 <td className="px-6 py-4">{booking.bookingId}</td>
// // // // //                 <td className="px-6 py-4">{booking.requestedSeats}</td>
// // // // //                 <td className="px-6 py-4">{booking.bookingDate}</td>
// // // // //                 <td className="px-6 py-4">{booking.bookingStatus}</td>
// // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // //                   <button
// // // // //                     onClick={() => showDetails(booking)}
// // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // //                     title="View Details"
// // // // //                   >
// // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
// // // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
// // // // //                     title="Approve"
// // // // //                     disabled={booking.bookingStatus !== 'Pending'}
// // // // //                   >
// // // // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // // // //                     <span className="ml-2">Approve</span>
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
// // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
// // // // //                     title="Reject"
// // // // //                     disabled={booking.bookingStatus !== 'Pending'}
// // // // //                   >
// // // // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // // // //                     <span className="ml-2">Reject</span>
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PendingBookings;

// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'; // Import icons
// // // // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // // // import Sidebar from './AdminDashboard';
// // // // import AdminNavbar from '../components/AdminNabar';

// // // // const PendingBookings = () => {
// // // //   const [bookings, setBookings] = useState([]);
// // // //   const navigate = useNavigate(); // Initialize useNavigate

// // // //   useEffect(() => {
// // // //     axios.get('http://localhost:8029/admin/pendingBooking')
// // // //       .then(response => {
// // // //         setBookings(response.data);
// // // //       })
// // // //       .catch(error => {
// // // //         console.error("Error fetching pending bookings:", error);
// // // //         Swal.fire({
// // // //           title: 'Error',
// // // //           text: 'Failed to fetch pending bookings',
// // // //           icon: 'error'
// // // //         });
// // // //       });
// // // //   }, []);

// // // //   const updateBookingStatus = (bookingId, newStatus) => {
// // // //     axios.put(`http://localhost:8029/admin/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
// // // //       .then(response => {
// // // //         if (response.status === 200) {
// // // //           Swal.fire({
// // // //             title: 'Success',
// // // //             text: `Booking ${newStatus}`,
// // // //             icon: 'success'
// // // //           });
// // // //           // Refresh the list after updating
// // // //           setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
// // // //         }
// // // //       })
// // // //       .catch(error => {
// // // //         console.error("Error updating booking status:", error);
// // // //         Swal.fire({
// // // //           title: 'Error',
// // // //           text: 'Failed to update booking status',
// // // //           icon: 'error'
// // // //         });
// // // //       });
// // // //   };

// // // //   const showDetails = (booking) => {
// // // //     Swal.fire({
// // // //       title: 'Booking Details',
// // // //       html: `
// // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // //           <h3>Booking Information</h3>
// // // //           <table style="width: 100%; border-collapse: collapse;">
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
// // // //               <td style="padding: 8px;">${booking.bookingId}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
// // // //               <td style="padding: 8px;">${booking.requestedSeats}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
// // // //               <td style="padding: 8px;">${booking.bookingDate}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// // // //               <td style="padding: 8px;">${booking.bookingStatus}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
// // // //               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">User ID:</td>
// // // //               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
// // // //             </tr>
// // // //           </table>
// // // //         </div>
// // // //       `,
// // // //       showCloseButton: true,
// // // //       showConfirmButton: false,
// // // //       width: '600px',
// // // //       customClass: {
// // // //         container: 'swal2-container',
// // // //         popup: 'swal2-popup',
// // // //         title: 'swal2-title',
// // // //         content: 'swal2-content'
// // // //       }
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <AdminNavbar />
// // // //       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
// // // //       {bookings.length === 0 ? (
// // // //         <p>No pending bookings found</p>
// // // //       ) : (
// // // //         <table className="w-full border-collapse border border-gray-200">
// // // //           <thead>
// // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // //               <th className="px-6 py-3 text-left">Booking ID</th>
// // // //               <th className="px-6 py-3 text-left">Requested Seats</th>
// // // //               <th className="px-6 py-3 text-left">Booking Date</th>
// // // //               <th className="px-6 py-3 text-left">Status</th>
// // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {bookings.map((booking, index) => (
// // // //               <tr key={booking.bookingId} className="border-b border-gray-300">
// // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // //                 <td className="px-6 py-4">{booking.bookingId}</td>
// // // //                 <td className="px-6 py-4">{booking.requestedSeats}</td>
// // // //                 <td className="px-6 py-4">{booking.bookingDate}</td>
// // // //                 <td className="px-6 py-4">{booking.bookingStatus}</td>
// // // //                 <td className="px-6 py-4 flex space-x-2">
// // // //                   <button
// // // //                     onClick={() => showDetails(booking)}
// // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // //                     title="View Details"
// // // //                   >
// // // //                     <FontAwesomeIcon icon={faEye} />
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
// // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
// // // //                     title="Approve"
// // // //                     disabled={booking.bookingStatus !== 'Pending'}
// // // //                   >
// // // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // // //                     <span className="ml-2">Approve</span>
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
// // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
// // // //                     title="Reject"
// // // //                     disabled={booking.bookingStatus !== 'Pending'}
// // // //                   >
// // // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // // //                     <span className="ml-2">Reject</span>
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PendingBookings;


// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEye, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
// // // import { useNavigate } from 'react-router-dom';
// // // import AdminNavbar from '../components/AdminNabar';

// // // const PendingBookings = () => {
// // //   const [bookings, setBookings] = useState([]);
// // //   const [loading, setLoading] = useState(false); // Loader state
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     axios.get('http://localhost:8029/admin/pendingBooking')
// // //       .then(response => {
// // //         setBookings(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error("Error fetching pending bookings:", error);
// // //         Swal.fire({
// // //           title: 'Error',
// // //           text: 'Failed to fetch pending bookings',
// // //           icon: 'error'
// // //         });
// // //       });
// // //   }, []);

// // //   const showLoadingPopup = () => {
// // //     Swal.fire({
// // //       title: 'Processing',
// // //       text: 'Please wait...',
// // //       allowOutsideClick: false,
// // //       didOpen: () => {
// // //         Swal.showLoading();
// // //       }
// // //     });
// // //   };

// // //   const updateBookingStatus = (bookingId, newStatus) => {
// // //     showLoadingPopup();
// // //     axios.put(`http://localhost:8029/admin/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
// // //       .then(response => {
// // //         if (response.status === 200) {
// // //           Swal.fire({
// // //             title: 'Success',
// // //             text: `Booking ${newStatus}`,
// // //             icon: 'success'
// // //           });
// // //           setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
// // //         }
// // //       })
// // //       .catch(error => {
// // //         console.error("Error updating booking status:", error);
// // //         Swal.fire({
// // //           title: 'Error',
// // //           text: 'Failed to update booking status',
// // //           icon: 'error'
// // //         });
// // //       })
// // //       .finally(() => {
// // //         Swal.close(); // Close the loading popup
// // //       });
// // //   };

// // //   const sendEmail = (booking) => {
// // //     showLoadingPopup();
// // //     axios.post('http://localhost:8029/sendEmail', {
// // //       from: 'admin@example.com', // Your email
// // //       to: booking.user.email, // Assuming booking has user email
// // //       subject: `Booking Update for ${booking.bookingId}`,
// // //       body: `Your booking with ID ${booking.bookingId} has been updated to ${booking.bookingStatus}.`
// // //     })
// // //       .then(response => {
// // //         Swal.fire({
// // //           title: 'Email Sent',
// // //           text: 'Email sent successfully',
// // //           icon: 'success'
// // //         });
// // //       })
// // //       .catch(error => {
// // //         console.error("Error sending email:", error);
// // //         Swal.fire({
// // //           title: 'Error',
// // //           text: 'Failed to send email',
// // //           icon: 'error'
// // //         });
// // //       })
// // //       .finally(() => {
// // //         Swal.close(); // Close the loading popup
// // //       });
// // //   };

// // //   const showDetails = (booking) => {
// // //     Swal.fire({
// // //       title: 'Booking Details',
// // //       html: `
// // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // //           <h3>Booking Information</h3>
// // //           <table style="width: 100%; border-collapse: collapse;">
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
// // //               <td style="padding: 8px;">${booking.bookingId}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
// // //               <td style="padding: 8px;">${booking.requestedSeats}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
// // //               <td style="padding: 8px;">${booking.bookingDate}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// // //               <td style="padding: 8px;">${booking.bookingStatus}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
// // //               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">User ID:</td>
// // //               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
// // //             </tr>
// // //           </table>
// // //         </div>
// // //       `,
// // //       showCloseButton: true,
// // //       showConfirmButton: false,
// // //       width: '600px',
// // //       customClass: {
// // //         container: 'swal2-container',
// // //         popup: 'swal2-popup',
// // //         title: 'swal2-title',
// // //         content: 'swal2-content'
// // //       }
// // //     });
// // //   };

// // //   const handleApprove = (booking) => {
// // //     updateBookingStatus(booking.bookingId, 'Approved');
// // //     sendEmail(booking); // Send email after approving
// // //   };

// // //   const handleReject = (booking) => {
// // //     updateBookingStatus(booking.bookingId, 'Rejected');
// // //     sendEmail(booking); // Send email after rejecting
// // //   };

// // //   return (
// // //     <div>
// // //       <AdminNavbar />
// // //       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
// // //       {bookings.length === 0 ? (
// // //         <p>No pending bookings found</p>
// // //       ) : (
// // //         <table className="w-full border-collapse border border-gray-200">
// // //           <thead>
// // //             <tr className="bg-gray-200 border-b border-gray-300">
// // //               <th className="px-6 py-3 text-left">S.No</th>
// // //               <th className="px-6 py-3 text-left">Booking ID</th>
// // //               <th className="px-6 py-3 text-left">Requested Seats</th>
// // //               <th className="px-6 py-3 text-left">Booking Date</th>
// // //               <th className="px-6 py-3 text-left">Status</th>
// // //               <th className="px-6 py-3 text-left">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {bookings.map((booking, index) => (
// // //               <tr key={booking.bookingId} className="border-b border-gray-300">
// // //                 <td className="px-6 py-4">{index + 1}</td>
// // //                 <td className="px-6 py-4">{booking.bookingId}</td>
// // //                 <td className="px-6 py-4">{booking.requestedSeats}</td>
// // //                 <td className="px-6 py-4">{booking.bookingDate}</td>
// // //                 <td className="px-6 py-4">{booking.bookingStatus}</td>
// // //                 <td className="px-6 py-4 flex space-x-2">
// // //                   <button
// // //                     onClick={() => showDetails(booking)}
// // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // //                     title="View Details"
// // //                   >
// // //                     <FontAwesomeIcon icon={faEye} />
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleApprove(booking)}
// // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
// // //                     title="Approve"
// // //                     disabled={booking.bookingStatus !== 'Pending'}
// // //                   >
// // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // //                     <span className="ml-2">Approve</span>
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleReject(booking)}
// // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
// // //                     title="Reject"
// // //                     disabled={booking.bookingStatus !== 'Pending'}
// // //                   >
// // //                     <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
// // //                     <span className="ml-2">Reject</span>
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PendingBookings;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
// // import { useNavigate } from 'react-router-dom';
// // import AdminNavbar from '../components/AdminNabar';


// // const PendingBookings = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [loadingBookingId, setLoadingBookingId] = useState(null); // State for tracking loading
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     axios.get('http://localhost:8029/admin/pendingBooking')
// //       .then(response => {
// //         setBookings(response.data);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching pending bookings:", error);
// //         Swal.fire({
// //           title: 'Error',
// //           text: 'Failed to fetch pending bookings',
// //           icon: 'error'
// //         });
// //       });
// //   }, []);

// //   const updateBookingStatus = (bookingId, newStatus) => {
// //     setLoadingBookingId(bookingId); // Set loading state

// //     Swal.fire({
// //       title: 'Processing...',
// //       text: 'Updating booking status and sending email...',
// //       didOpen: () => {
// //         Swal.showLoading();
// //       }
// //     });

// //     // Update the booking status
// //     axios.put(`http://localhost:8029/booking/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
// //       .then(response => {
// //         const updatedBooking = bookings.find(b => b.bookingId === bookingId);

// //         if (updatedBooking) {
// //           // Prepare email details
// //           const emailData = {
// //              from: 'aravindpandiyarajan2004@gmail.com', 
// //             to: updatedBooking.user?.email, // Ensure user email is available
// //             subject: `Booking ${newStatus}`,
// //             body: `Dear ${updatedBooking.user?.name},\n\nYour booking with ID ${bookingId} has been ${newStatus}.`
// //           };

// //           // Send the email
// //           axios.post('http://localhost:8029/user/sendEmail', emailData)
// //             .then(() => {
// //               Swal.fire({
// //                 title: 'Success',
// //                 text: `Booking ${newStatus} and email sent.`,
// //                 icon: 'success'
// //               });
// //               // Refresh the list after updating
// //               setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
// //               setLoadingBookingId(null); // Reset loading state
// //             })
// //             .catch(emailError => {
// //               console.error("Error sending email:", emailError);
// //               Swal.fire({
// //                 title: 'Success',
// //                 text: `Booking ${newStatus} but failed to send email.`,
// //                 icon: 'warning'
// //               });
// //               setLoadingBookingId(null); // Reset loading state
// //             });
// //         } else {
// //           Swal.fire({
// //             title: 'Error',
// //             text: 'Booking details not found',
// //             icon: 'error'
// //           });
// //           setLoadingBookingId(null); // Reset loading state
// //         }
// //       })
// //       .catch(error => {
// //         console.error("Error updating booking status:", error);
// //         Swal.fire({
// //           title: 'Error',
// //           text: 'Failed to update booking status',
// //           icon: 'error'
// //         });
// //         setLoadingBookingId(null); // Reset loading state
// //       });
// //   };

// //   const showDetails = (booking) => {
// //     Swal.fire({
// //       title: 'Booking Details',
// //       html: `
// //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// //           <h3>Booking Information</h3>
// //           <table style="width: 100%; border-collapse: collapse;">
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
// //               <td style="padding: 8px;">${booking.bookingId}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
// //               <td style="padding: 8px;">${booking.requestedSeats}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
// //               <td style="padding: 8px;">${booking.bookingDate}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// //               <td style="padding: 8px;">${booking.bookingStatus}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
// //               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">User ID:</td>
// //               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
// //             </tr>
// //           </table>
// //         </div>
// //       `,
// //       showCloseButton: true,
// //       showConfirmButton: false,
// //       width: '600px',
// //       customClass: {
// //         container: 'swal2-container',
// //         popup: 'swal2-popup',
// //         title: 'swal2-title',
// //         content: 'swal2-content'
// //       }
// //     });
// //   };

// //   return (
// //     <div>
// //       <AdminNavbar />
// //       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
// //       {bookings.length === 0 ? (
// //         <p>No pending bookings found</p>
// //       ) : (
// //         <table className="w-full border-collapse border border-gray-200">
// //           <thead>
// //             <tr className="bg-gray-200 border-b border-gray-300">
// //               <th className="px-6 py-3 text-left">S.No</th>
// //               <th className="px-6 py-3 text-left">Booking ID</th>
// //               <th className="px-6 py-3 text-left">Requested Seats</th>
// //               <th className="px-6 py-3 text-left">Booking Date</th>
// //               <th className="px-6 py-3 text-left">Status</th>
// //               <th className="px-6 py-3 text-left">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {bookings.map((booking, index) => (
// //               <tr key={booking.bookingId} className="border-b border-gray-300">
// //                 <td className="px-6 py-4">{index + 1}</td>
// //                 <td className="px-6 py-4">{booking.bookingId}</td>
// //                 <td className="px-6 py-4">{booking.requestedSeats}</td>
// //                 <td className="px-6 py-4">{booking.bookingDate}</td>
// //                 <td className="px-6 py-4">{booking.bookingStatus}</td>
// //                 <td className="px-6 py-4 flex space-x-2">
// //                   <button
// //                     onClick={() => showDetails(booking)}
// //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// //                     title="View Details"
// //                   >
// //                     <FontAwesomeIcon icon={faEye} />
// //                   </button>
// //                   <button
// //                     onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
// //                     className={`bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                     title="Approve"
// //                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
// //                   >
// //                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
// //                     <FontAwesomeIcon icon={faUnlock} />
// //                     <span className="ml-2">Approve</span>
// //                   </button>
// //                   <button
// //                     onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
// //                     className={`bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                     title="Reject"
// //                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
// //                   >
// //                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
// //                     <FontAwesomeIcon icon={faLock} />
// //                     <span className="ml-2">Reject</span>
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default PendingBookings;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from '../components/AdminNabar';

// const PendingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loadingBookingId, setLoadingBookingId] = useState(null); // State for tracking loading
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8029/admin/pendingBooking')
//       .then(response => {
//         setBookings(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching pending bookings:", error);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to fetch pending bookings',
//           icon: 'error'
//         });
//       });
//   }, []);

//   const updateBookingStatus = (bookingId, newStatus) => {
//     setLoadingBookingId(bookingId); // Set loading state

//     Swal.fire({
//       title: 'Processing...',
//       text: 'Updating booking status and sending email...',
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     // Update the booking status
//     axios.put(`http://localhost:8029/booking/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
//       .then(response => {
//         const updatedBooking = bookings.find(b => b.bookingId === bookingId);

//         if (updatedBooking) {
//           // Prepare email details
//           const emailData = {
//             to: updatedBooking.user?.email, // Ensure user email is available
//             subject: `Booking ${newStatus}`,
//             body: `Dear ${updatedBooking.user?.name},\n\nYour booking with ID ${bookingId} has been ${newStatus}.`
//           };

//           // Send the email
//           axios.post('http://localhost:8029/user/sendEmail', emailData, {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           })
//             .then(() => {
//               Swal.fire({
//                 title: 'Success',
//                 text: `Booking ${newStatus} and email sent.`,
//                 icon: 'success'
//               });
//               // Refresh the list after updating
//               setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
//               setLoadingBookingId(null); // Reset loading state
//             })
//             .catch(emailError => {
//                 console.log(emailError +"error catch");
//               console.error("Error sending email:", emailError.response ? emailError.response.data : emailError.message);
//               Swal.fire({
//                 title: 'Error',
//                 text: `Booking ${newStatus} but failed to send email. ${emailError.response ? emailError.response.data : emailError.message}`,
//                 icon: 'error'
//               });
//               setLoadingBookingId(null); // Reset loading state
//             });
//         } else {
//           Swal.fire({
//             title: 'Error',
//             text: 'Booking details not found',
//             icon: 'error'
//           });
//           setLoadingBookingId(null); // Reset loading state
//         }
//       })
//       .catch(error => {
//         console.error("Error updating booking status:", error.response ? error.response.data : error.message);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to update booking status. ' + (error.response ? error.response.data : error.message),
//           icon: 'error'
//         });
//         setLoadingBookingId(null); // Reset loading state
//       });
//   };

//   const showDetails = (booking) => {
//     Swal.fire({
//       title: 'Booking Details',
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//           <h3>Booking Information</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
//               <td style="padding: 8px;">${booking.bookingId}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
//               <td style="padding: 8px;">${booking.requestedSeats}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
//               <td style="padding: 8px;">${booking.bookingDate}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Status:</td>
//               <td style="padding: 8px;">${booking.bookingStatus}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
//               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">User ID:</td>
//               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
//             </tr>
//           </table>
//         </div>
//       `,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '600px',
//       customClass: {
//         container: 'swal2-container',
//         popup: 'swal2-popup',
//         title: 'swal2-title',
//         content: 'swal2-content'
//       }
//     });
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No pending bookings found</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-200 border-b border-gray-300">
//               <th className="px-6 py-3 text-left">S.No</th>
//               <th className="px-6 py-3 text-left">Booking ID</th>
//               <th className="px-6 py-3 text-left">Requested Seats</th>
//               <th className="px-6 py-3 text-left">Booking Date</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={booking.bookingId} className="border-b border-gray-300">
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4">{booking.bookingId}</td>
//                 <td className="px-6 py-4">{booking.requestedSeats}</td>
//                 <td className="px-6 py-4">{booking.bookingDate}</td>
//                 <td className="px-6 py-4">{booking.bookingStatus}</td>
//                 <td className="px-6 py-4 flex space-x-2">
//                   <button
//                     onClick={() => showDetails(booking)}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     title="View Details"
//                   >
//                     <FontAwesomeIcon icon={faEye} />
//                   </button>
//                   <button
//                     onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
//                     className={`bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     title="Approve"
//                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
//                   >
//                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
//                     <FontAwesomeIcon icon={faUnlock} />
//                     <span className="ml-2">Approve</span>
//                   </button>
//                   <button
//                     onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
//                     className={`bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     title="Reject"
//                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
//                   >
//                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
//                     <FontAwesomeIcon icon={faLock} />
//                     <span className="ml-2">Reject</span>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default PendingBookings;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
// import AdminNavbar from '../components/AdminNabar';


// const PendingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loadingBookingId, setLoadingBookingId] = useState(null); // State for tracking loading

//   useEffect(() => {
//     axios.get('http://localhost:8029/admin/pendingBooking')
//       .then(response => {
//         setBookings(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching pending bookings:", error);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to fetch pending bookings',
//           icon: 'error'
//         });
//       });
//   }, []);

//   const updateBookingStatus = (bookingId, newStatus) => {
//     setLoadingBookingId(bookingId); // Set loading state

//     Swal.fire({
//       title: 'Processing...',
//       text: 'Updating booking status...',
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     // Update the booking status
//     axios.put(`http://localhost:8029/booking/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
//       .then(response => {
//         Swal.fire({
//           title: 'Success',
//           text: `Booking ${newStatus} and email sent`,
//           icon: 'success'
//         });
//         // Refresh the list after updating
//         setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
//         setLoadingBookingId(null); // Reset loading state
//       })
//       .catch(error => {
//         console.error("Error updating booking status:", error.response ? error.response.data : error.message);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to update booking status. ' + (error.response ? error.response.data : error.message),
//           icon: 'error'
//         });
//         setLoadingBookingId(null); // Reset loading state
//       });
//   };

//   const showDetails = (booking) => {
//     Swal.fire({
//       title: 'Booking Details',
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//           <h3>Booking Information</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
//               <td style="padding: 8px;">${booking.bookingId}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
//               <td style="padding: 8px;">${booking.requestedSeats}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
//               <td style="padding: 8px;">${booking.bookingDate}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Status:</td>
//               <td style="padding: 8px;">${booking.bookingStatus}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
//               <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">User ID:</td>
//               <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
//             </tr>
//           </table>
//         </div>
//       `,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '600px',
//       customClass: {
//         container: 'swal2-container',
//         popup: 'swal2-popup',
//         title: 'swal2-title',
//         content: 'swal2-content'
//       }
//     });
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No pending bookings found</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-200 border-b border-gray-300">
//               <th className="px-6 py-3 text-left">S.No</th>
//               <th className="px-6 py-3 text-left">Booking ID</th>
//               <th className="px-6 py-3 text-left">Requested Seats</th>
//               <th className="px-6 py-3 text-left">Booking Date</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={booking.bookingId} className="border-b border-gray-300">
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4">{booking.bookingId}</td>
//                 <td className="px-6 py-4">{booking.requestedSeats}</td>
//                 <td className="px-6 py-4">{booking.bookingDate}</td>
//                 <td className="px-6 py-4">{booking.bookingStatus}</td>
//                 <td className="px-6 py-4 flex space-x-2">
//                   <button
//                     onClick={() => showDetails(booking)}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     title="View Details"
//                   >
//                     <FontAwesomeIcon icon={faEye} />
//                   </button>
//                   <button
//                     onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
//                     className={`bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     title="Approve"
//                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
//                   >
//                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
//                     <FontAwesomeIcon icon={faUnlock} />
//                     <span className="ml-2">Approve</span>
//                   </button>
//                   <button
//                     onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
//                     className={`bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     title="Reject"
//                     disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
//                   >
//                     {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
//                     <FontAwesomeIcon icon={faLock} />
//                     <span className="ml-2">Reject</span>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default PendingBookings;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from '../components/AdminNabar';


const PendingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingBookingId, setLoadingBookingId] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:8029/admin/pendingBooking')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error("Error fetching pending bookings:", error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to fetch pending bookings',
          icon: 'error'
        });
      });
  }, []);

  const updateBookingStatus = (bookingId, newStatus) => {
    setLoadingBookingId(bookingId); // Set loading state

    Swal.fire({
      title: 'Processing...',
      text: 'Updating booking status...',
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Update the booking status
    axios.put(`http://localhost:8029/booking/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
      .then(response => {
        Swal.fire({
          title: 'Success',
          text: `Booking ${newStatus} and email sent`,
          icon: 'success'
        });
        // Refresh the list after updating
        setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
        setLoadingBookingId(null); // Reset loading state
      })
      .catch(error => {
        console.error("Error updating booking status:", error.response ? error.response.data : error.message);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update booking status. ' + (error.response ? error.response.data : error.message),
          icon: 'error'
        });
        setLoadingBookingId(null); // Reset loading state
      });
  };

  const showDetails = (booking) => {
    Swal.fire({
      title: 'Booking Details',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>Booking Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Booking ID:</td>
              <td style="padding: 8px;">${booking.bookingId}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Requested Seats:</td>
              <td style="padding: 8px;">${booking.requestedSeats}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Booking Date:</td>
              <td style="padding: 8px;">${booking.bookingDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Status:</td>
              <td style="padding: 8px;">${booking.bookingStatus}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Ride ID:</td>
              <td style="padding: 8px;">${booking.ride?.rideId || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">User ID:</td>
              <td style="padding: 8px;">${booking.user?.userId || 'N/A'}</td>
            </tr>
          </table>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px',
      customClass: {
        container: 'swal2-container',
        popup: 'swal2-popup',
        title: 'swal2-title',
        content: 'swal2-content'
      }
    });
  };

  return (
    <div>
      <AdminNavbar />
      <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>
      {bookings.length === 0 ? (
        <p>No pending bookings found</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="px-6 py-3 text-left">S.No</th>
              <th className="px-6 py-3 text-left">Booking ID</th>
              <th className="px-6 py-3 text-left">Requested Seats</th>
              <th className="px-6 py-3 text-left">Booking Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.bookingId} className="border-b border-gray-300">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{booking.bookingId}</td>
                <td className="px-6 py-4">{booking.requestedSeats}</td>
                <td className="px-6 py-4">{booking.bookingDate}</td>
                <td className="px-6 py-4">{booking.bookingStatus}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => showDetails(booking)}
                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    title="View Details"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.bookingId, 'Approved')}
                    className={`bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Approve"
                    disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
                  >
                    {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
                    <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
                    <span className="ml-2">Approve</span>
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
                    className={`bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center ${loadingBookingId === booking.bookingId ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Reject"
                    disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
                  >
                    {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
                    <FontAwesomeIcon icon={booking.bookingStatus === 'Pending' ? faUnlock : faLock} />
                    <span className="ml-2">Reject</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingBookings;
