

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const RideSelection = () => {
  const [ride, setRide] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [requestedSeats, setRequestedSeats] = useState(1); // Default to 1 seat
  const navigate = useNavigate();

  useEffect(() => {
    const storedRide = sessionStorage.getItem('selectedRide');
    const storedVehicle = sessionStorage.getItem('selectedVehicle');
    const storedUserId = sessionStorage.getItem('userId'); // Assuming userId is stored in session

    if (storedRide && storedVehicle) {
      setRide(JSON.parse(storedRide));
      setVehicle(JSON.parse(storedVehicle));
    } else {
      navigate('/'); // Redirect to home or an error page if no data
    }
  }, [navigate]);

  const handleConfirmBooking = async () => {
    try {
      const rideId = ride.rideId;
      const userId = sessionStorage.getItem('userId'); // Fetch user ID from session
      const bookingDate = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

      const bookingData = {
        requestedSeats,
        bookingDate,
        bookingStatus: 'Pending',
        ride: { rideId }, // Assuming you are sending rideId
        user: { userId }  // Assuming you are sending userId
      };

      const response = await axios.post('http://localhost:8029/booking', bookingData);

      if (response.status === 200) {
        Swal.fire('Success', 'Booking confirmed!', 'success');
        navigate('/userdashboard'); // Redirect to a confirmation page
      } else {
        const errorMessage = response.data.message || 'Failed to confirm booking. Please try again later.';
        Swal.fire('Error', errorMessage, 'error');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred while confirming the booking.';
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative container mx-auto p-6 max-w-4xl bg-white rounded-lg shadow-lg">
        <button 
          onClick={() => navigate('/userdashboard')} 
          className="absolute top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
        >
          Back to Dashboard
        </button>
        
        <h1 className="text-center text-3xl font-bold mb-6">Ride Selection</h1>

        {ride && vehicle ? (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {ride.startPoint} to {ride.endPoint}
              </h2>
              <p className="text-lg mb-2">Date: {new Date(ride.rideDate).toLocaleDateString()}</p>
              <p className="mb-2">Available Seats: {ride.availableSeats}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Vehicle Information</h3>
              <p className="mb-2">Vehicle ID: {vehicle.vehicleId}</p>
              <p className="mb-2">Vehicle Model: {vehicle.model}</p>
              <p className="mb-2">Vehicle Plate Number: {vehicle.numberPlate}</p>

              {vehicle.carImage && (
                <div className="flex justify-center mt-4">
                  <img 
                    src={`data:image/jpeg;base64,${vehicle.carImage}`} 
                    alt={`${vehicle.model} image`} 
                    className="w-full max-w-md h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Requested Seats:</label>
              <input 
                type="number" 
                value={requestedSeats}
                onChange={(e) => setRequestedSeats(parseInt(e.target.value, 10))}
                className="border p-2 rounded w-full"
                min="1"
              />
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handleConfirmBooking} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg">No schedules available now... Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RideSelection;
