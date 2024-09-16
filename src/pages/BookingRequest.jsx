
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BookingRequest = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingBookingId, setLoadingBookingId] = useState(null); // State for tracking loading
  const navigate = useNavigate();

  // Function to retrieve ride ID from session storage
  const getRideIdFromSession = () => {
    return sessionStorage.getItem('rideId');
  };

  useEffect(() => {
    const rideId = getRideIdFromSession();
    
    if (rideId) {
      // Fetch bookings for the specific ride
      axios.get(`http://localhost:8029/booking/forRide/${rideId}`)
        .then(response => {
          setBookings(response.data);
        })
        .catch(error => {
          console.error("Error fetching booking requests:", error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to fetch booking requests',
            icon: 'error'
          });
        });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No ride ID found in session',
        icon: 'error'
      });
    }
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

    // Update booking status with the correct payload
    axios.put(`http://localhost:8029/booking/bookingStatus/${bookingId}`, { bookingStatus: newStatus })
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: `Booking ${newStatus} successfully and mail sent`,
          icon: 'success'
        });
        // Refresh the list after updating
        setBookings(bookings.map(booking => booking.bookingId === bookingId ? { ...booking, bookingStatus: newStatus } : booking));
        setLoadingBookingId(null); // Reset loading state
      })
      .catch(error => {
        console.error("Error updating booking status:", error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update booking status',
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

  // Function to navigate back to UserDashboard
  const navigateBack = () => {
    navigate('/userdashboard');
  };

  return (
    <div>
      <button 
        onClick={navigateBack}
        className="mb-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Back to User Dashboard
      </button>
      <h2 className="text-2xl font-semibold mb-4">Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No booking requests found</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="px-6 py-3 text-left">S.No</th>
              <th className="px-6 py-3 text-left">Username</th>
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
                <td className="px-6 py-4">{booking.user.name}</td>
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
                    className={`bg-green-600 text-white px-2 py-1 rounded flex items-center ${booking.bookingStatus === 'Pending' ? 'hover:bg-green-700' : 'opacity-50 cursor-not-allowed'}`}
                    title="Approve"
                    disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
                  >
                    {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
                    <span className="ml-2">Approve</span>
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.bookingId, 'Rejected')}
                    className={`bg-red-600 text-white px-2 py-1 rounded flex items-center ${booking.bookingStatus === 'Pending' ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'}`}
                    title="Reject"
                    disabled={booking.bookingStatus !== 'Pending' || loadingBookingId === booking.bookingId}
                  >
                    {loadingBookingId === booking.bookingId && <div className="mr-2 spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>}
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

export default BookingRequest;
