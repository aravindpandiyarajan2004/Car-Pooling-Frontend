

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaTrash } from 'react-icons/fa';
import AdminNavbar from '../components/AdminNabar';

const VehicleTable = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:8029/vehicle/all');
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicle data:', error);
            }
        };

        fetchVehicles();
    }, []);

    const handleView = (vehicle) => {
        Swal.fire({
            title: 'Vehicle Details',
            html: `
                <div class="p-4">
                    <img
                        src="data:image/jpeg;base64,${vehicle.carImage}" 
                        alt="${vehicle.vehicleName}" 
                        class="w-full h-auto mb-4"
                    />
                    <p><strong>Name:</strong> ${vehicle.vehicleName}</p>
                    <p><strong>Model:</strong> ${vehicle.model}</p>
                    <p><strong>Number Plate:</strong> ${vehicle.numberPlate}</p>
                    <p><strong>Seating Capacity:</strong> ${vehicle.seatingCapacity}</p>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            width: '500px',
            customClass: {
                container: 'swal2-container',
                popup: 'swal2-popup',
                title: 'swal2-title',
                content: 'swal2-content'
            }
        });
    };

    const handleDelete = async (vehicleId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:8029/vehicle/${vehicleId}`);
                setVehicles(vehicles.filter(vehicle => vehicle.vehicleId !== vehicleId));
                Swal.fire('Deleted!', 'Vehicle has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting vehicle:', error);
                Swal.fire('Error!', 'An error occurred while deleting the vehicle.', 'error');
            }
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-6">Vehicle List</h2>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className='px-6 py-3 text-left text-gray-600'>Driver Name</th>
                            <th className="px-6 py-3 text-left text-gray-600">Image</th>
                            <th className="px-6 py-3 text-left text-gray-600">Name</th>
                            <th className="px-6 py-3 text-left text-gray-600">Number Plate</th>
                            <th className='px-6 py-3 text-left text-gray-600'>License</th>
                            <th className='px-6 py-3 text-left text-gray-600'>RC Book</th>
                            <th className="px-6 py-3 text-left text-gray-600">Seating Capacity</th>
                            <th className="px-6 py-3 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map(vehicle => (
                            <tr key={vehicle.vehicleId} className="border-b border-gray-200">
                                <td className="px-6 py-4 text-gray-800">{vehicle.user.name}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`data:image/jpeg;base64,${vehicle.carImage}`} 
                                        alt={vehicle.vehicleName} 
                                        className="w-24 h-auto object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 text-gray-800">{vehicle.vehicleName}</td>
                                <td className="px-6 py-4 text-gray-800">{vehicle.numberPlate}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`data:image/jpeg;base64,${vehicle.license}`} 
                                        alt="License" 
                                        className="w-24 h-auto object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`data:image/jpeg;base64,${vehicle.rcBook}`} 
                                        alt="RC Book" 
                                        className="w-24 h-auto object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 text-gray-800">{vehicle.seatingCapacity}</td>
                                <td className="px-6 py-4 flex items-center space-x-2">
                                    <button 
                                        onClick={() => handleView(vehicle)} 
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md shadow hover:bg-blue-600"
                                    >
                                        <FaEye />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(vehicle.vehicleId)} 
                                        className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VehicleTable;


