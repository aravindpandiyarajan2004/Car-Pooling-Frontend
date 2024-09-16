

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 11.127123,
  lng: 78.656891,
};

const AddRide = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [distance, setDistance] = useState(0);
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(1);
  const [errors, setErrors] = useState({});
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const storedUserId = sessionStorage.getItem('userId');
  const storedVehicleId = sessionStorage.getItem('vehicleId');
  
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};
    if (!startPoint) newErrors.startPoint = 'Start point is required';
    if (!endPoint) newErrors.endPoint = 'End point is required';
    if (!departureTime) newErrors.departureTime = 'Departure time is required';
    if (!arrivalTime) newErrors.arrivalTime = 'Arrival time is required';
    if (!rideDate) newErrors.rideDate = 'Ride date is required';
    if (new Date(rideDate) < new Date(today)) newErrors.rideDate = 'Cannot book for a past date';
    if (availableSeats <= 0) newErrors.availableSeats = 'Available seats must be greater than 0';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDistanceChange = (e) => {
    const distance = Number(e.target.value);
    setDistance(distance);

    let price = 0;
    if (distance >= 1 && distance <= 10) price = 100;
    else if (distance >= 11 && distance <= 20) price = 200;
    else if (distance >= 21 && distance <= 30) price = 300;
    else if (distance >= 31 && distance <= 40) price = 400;
    else if (distance >= 41 && distance <= 50) price = 500;
    else if (distance >= 51 && distance <= 60) price = 600;
    else if (distance >= 61 && distance <= 70) price = 700;
    else if (distance >= 71 && distance <= 80) price = 800;
    else if (distance >= 81 && distance <= 90) price = 900;
    else if (distance > 90) price = 1000;

    setPricePerPerson(price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const ride = new FormData();
      ride.append('startPoint', startPoint);
      ride.append('endPoint', endPoint);
      ride.append('departureTime', departureTime);
      ride.append('arrivalTime', arrivalTime);
      ride.append('rideDate', rideDate);
      ride.append('distance', distance);
      ride.append('pricePerPerson', pricePerPerson);
      ride.append('availableSeats', availableSeats);
      ride.append('userId', storedUserId);
      ride.append('vehicleId', storedVehicleId);

      console.log('FormData:', Array.from(ride.entries())); // Log FormData entries for debugging

      const response = await axios.post('http://localhost:8029/ride', ride); // No need to set Content-Type manually

      console.log('API Response:', response);
      if (response.data === 'SUCCESS') {
        Swal.fire('Success', 'Ride scheduled successfully!', 'success');
        navigate('/userdashboard'); // Navigate after successful submission
      } else {
        Swal.fire('Error', 'Failed to schedule the ride. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error); // Log detailed error
      Swal.fire('Error', 'An error occurred. Please try again.', 'error');
    }
  };

  const handleDirectionsCallback = (result) => {
    if (result && result.response) {
      setDirectionsResponse(result.response);
      const distanceInMeters = result.response.routes[0].legs[0].distance.value;
      const distanceInKm = distanceInMeters / 1000;
      setDistance(distanceInKm);
      setPricePerPerson(distanceInKm * 0.5); // Example calculation, adjust as needed
    } else if (result && result.error_message) {
      console.error('Directions API Error:', result.error_message);
      Swal.fire('Error', `Failed to get directions: ${result.error_message}`, 'error');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => navigate('/selectvehicle')}
        className="absolute top-4 left-4 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Back
      </button>

      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-12">
        <h1 className="text-center text-3xl font-bold mb-6">Schedule a Ride</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="startPoint" className="block text-lg font-semibold mb-2">Start Point</label>
            <input
              type="text"
              id="startPoint"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
              className={`border rounded-lg p-3 w-full ${errors.startPoint ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.startPoint && <p className="text-red-500 text-sm">{errors.startPoint}</p>}
          </div>
          <div>
            <label htmlFor="endPoint" className="block text-lg font-semibold mb-2">End Point</label>
            <input
              type="text"
              id="endPoint"
              value={endPoint}
              onChange={(e) => setEndPoint(e.target.value)}
              className={`border rounded-lg p-3 w-full ${errors.endPoint ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.endPoint && <p className="text-red-500 text-sm">{errors.endPoint}</p>}
          </div>
          <div>
            <label htmlFor="departureTime" className="block text-lg font-semibold mb-2">Departure Time</label>
            <input
              type="time"
              id="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className={`border rounded-lg p-3 w-full ${errors.departureTime ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.departureTime && <p className="text-red-500 text-sm">{errors.departureTime}</p>}
          </div>
          <div>
            <label htmlFor="arrivalTime" className="block text-lg font-semibold mb-2">Arrival Time</label>
            <input
              type="time"
              id="arrivalTime"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              className={`border rounded-lg p-3 w-full ${errors.arrivalTime ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.arrivalTime && <p className="text-red-500 text-sm">{errors.arrivalTime}</p>}
          </div>
          <div>
            <label htmlFor="rideDate" className="block text-lg font-semibold mb-2">Ride Date</label>
            <input
              type="date"
              id="rideDate"
              value={rideDate}
              onChange={(e) => setRideDate(e.target.value)}
              min={today} // Set minimum date to today
              className={`border rounded-lg p-3 w-full ${errors.rideDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.rideDate && <p className="text-red-500 text-sm">{errors.rideDate}</p>}
          </div>
          <div>
            <label htmlFor="distance" className="block text-lg font-semibold mb-2">Distance (in km)</label>
            <input
              type="text"
              id="distance"
              value={distance}
              onChange={handleDistanceChange}
              className={`border rounded-lg p-3 w-full ${errors.distance ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.distance && <p className="text-red-500 text-sm">{errors.distance}</p>}
          </div>
          <div>
            <label htmlFor="availableSeats" className="block text-lg font-semibold mb-2">Available Seats</label>
            <input
              type="number"
              id="availableSeats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(Math.max(1, Number(e.target.value)))}
              className={`border rounded-lg p-3 w-full ${errors.availableSeats ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              min="1"
            />
            {errors.availableSeats && <p className="text-red-500 text-sm">{errors.availableSeats}</p>}
          </div>
          <div>
            <label htmlFor="pricePerPerson" className="block text-lg font-semibold mb-2">Price Per Person</label>
            <input
              type="text"
              id="pricePerPerson"
              value={`${pricePerPerson.toFixed(2)}`}
              readOnly
              className="border rounded-lg p-3 w-full bg-gray-100 text-gray-700"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
          </div>
        </form>
      </div>

      <div className="mt-6">
        <LoadScript googleMapsApiKey="AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            {startPoint && endPoint && (
              <DirectionsService
                options={{
                  destination: endPoint,
                  origin: startPoint,
                  travelMode: 'DRIVING',
                }}
                callback={handleDirectionsCallback}
              />
            )}
            {directionsResponse && (
              <DirectionsRenderer
                options={{
                  directions: directionsResponse,
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default AddRide;
