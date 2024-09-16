

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // for navigation
import Swal from 'sweetalert2'; // Import SweetAlert2
import { ChevronLeftIcon } from '@heroicons/react/solid'; // Import arrow icon from Heroicons

const VehicleSelector = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // for programmatic navigation

  useEffect(() => {
    const userId = sessionStorage.getItem('userId'); // Get userId from session storage

    if (userId) {
      // Fetch vehicles for the given userId
      const fetchVehicles = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8029/vehicle/byUser`, {
            params: { userId } // Pass userId as query parameter
          });
          setVehicles(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching vehicles:', error);
          setError('Failed to load vehicles');
          setLoading(false);
        }
      };

      fetchVehicles();
    } else {
      setError('User ID not found');
    }
  }, []);

  const handleSelect = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleScheduleRide = () => {
    if (selectedVehicleId) {
      sessionStorage.setItem('vehicleId', selectedVehicleId); // Store only vehicleId

      // Show SweetAlert confirmation
      Swal.fire({
        title: 'Ready to Schedule Ride',
        text: 'You have selected a vehicle. Do you want to proceed to schedule the ride?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, schedule it!',
        cancelButtonText: 'No, go back'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/ride'); // Navigate to the ride scheduling page
        }
      });
    } else {
      setError('Please select a vehicle');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => navigate('/vehicle')}
        className="absolute top-4 left-4 bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center"
      >
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="ml-2">Back</span>
      </button>

      <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-lg mt-12">
        {loading && <p className="text-gray-500">Loading vehicles...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && vehicles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(vehicle => (
              <div key={vehicle.vehicleId} className={`bg-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${selectedVehicleId === vehicle.vehicleId ? 'border-2 border-green-500' : ''}`}>
                <img
                  src={`data:image/jpeg;base64,${vehicle.carImage}`} // Assuming carImage is base64 encoded
                  alt={vehicle.vehicleName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{vehicle.vehicleName}</h3>
                <p className="text-gray-700">Model: {vehicle.model}</p>
                <p className="text-gray-700">Number Plate: {vehicle.numberPlate}</p>
                <p className="text-gray-700">Seating Capacity: {vehicle.seatingCapacity}</p>
                <button
                  onClick={() => handleSelect(vehicle.vehicleId)}
                  className={`mt-2 px-4 py-2 rounded ${selectedVehicleId === vehicle.vehicleId ? 'bg-green-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {selectedVehicleId === vehicle.vehicleId ? 'Selected' : 'Select'}
                </button>
              </div>
            ))}
            <div className="col-span-full mt-6">
              <button
                onClick={handleScheduleRide}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule Ride
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSelector;


