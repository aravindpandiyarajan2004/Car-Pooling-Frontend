
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

