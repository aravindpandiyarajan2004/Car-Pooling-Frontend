

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FaEye } from 'react-icons/fa';
// import AdminNavbar from '../components/AdminNabar';

// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString(); // Format the date as needed
// };

// const RideTable = () => {
//     const [rides, setRides] = useState([]);
//     const [filteredRides, setFilteredRides] = useState([]);
//     const [filterDate, setFilterDate] = useState('');
//     const [startPoints, setStartPoints] = useState([]);
//     const [endPoints, setEndPoints] = useState([]);
//     const [selectedStartPoint, setSelectedStartPoint] = useState('');
//     const [selectedEndPoint, setSelectedEndPoint] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [recordsPerPage] = useState(3);

//     useEffect(() => {
//         const fetchRides = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8029/admin/ride');
//                 setRides(response.data);
//                 setFilteredRides(response.data);
//                 // Fetch unique start and end points
//                 const startPointsResponse = await axios.get('http://localhost:8029/admin/startPoints');
//                 setStartPoints(startPointsResponse.data);
//                 const endPointsResponse = await axios.get('http://localhost:8029/admin/endPoints');
//                 setEndPoints(endPointsResponse.data);
//             } catch (error) {
//                 console.error('Error fetching ride data:', error);
//             }
//         };

//         fetchRides();
//     }, []);

//     useEffect(() => {
//         let filtered = rides;

//         if (filterDate) {
//             filtered = filtered.filter(ride =>
//                 new Date(ride.rideDate).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
//             );
//         }

//         if (selectedStartPoint) {
//             filtered = filtered.filter(ride => ride.startPoint === selectedStartPoint);
//         }

//         if (selectedEndPoint) {
//             filtered = filtered.filter(ride => ride.endPoint === selectedEndPoint);
//         }

//         setFilteredRides(filtered);
//     }, [filterDate, selectedStartPoint, selectedEndPoint, rides]);

//     const handleView = (ride) => {
//         Swal.fire({
//             title: 'Ride Details',
//             html: `
//                 <div class="p-4">
//                     <p><strong>Ride ID:</strong> ${ride.rideId}</p>
//                     <p><strong>Start Location:</strong> ${ride.startPoint}</p>
//                     <p><strong>End Location:</strong> ${ride.endPoint}</p>
//                     <p><strong>Ride Date:</strong> ${formatDate(ride.rideDate)}</p>
//                     <p><strong>Driver Name:</strong> ${ride.vehicle.user.name}</p>
//                 </div>
//             `,
//             showCloseButton: true,
//             showConfirmButton: false,
//             width: '500px',
//             customClass: {
//                 container: 'swal2-container',
//                 popup: 'swal2-popup',
//                 title: 'swal2-title',
//                 content: 'swal2-content'
//             }
//         });
//     };

//     // Pagination logic
//     const indexOfLastRide = currentPage * recordsPerPage;
//     const indexOfFirstRide = indexOfLastRide - recordsPerPage;
//     const currentRides = filteredRides.slice(indexOfFirstRide, indexOfLastRide);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <>
//             <AdminNavbar />
//             <div className="container mx-auto mt-10 px-4">
//                 <h2 className="text-2xl font-bold mb-6">Ride List</h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Filter by Date:</label>
//                     <input
//                         type="date"
//                         value={filterDate}
//                         onChange={(e) => setFilterDate(e.target.value)}
//                         className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Filter by Start Point:</label>
//                     <select
//                         value={selectedStartPoint}
//                         onChange={(e) => setSelectedStartPoint(e.target.value)}
//                         className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     >
//                         <option value="">All Start Points</option>
//                         {startPoints.map(point => (
//                             <option key={point} value={point}>{point}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Filter by End Point:</label>
//                     <select
//                         value={selectedEndPoint}
//                         onChange={(e) => setSelectedEndPoint(e.target.value)}
//                         className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     >
//                         <option value="">All End Points</option>
//                         {endPoints.map(point => (
//                             <option key={point} value={point}>{point}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//                     <thead>
//                         <tr className="bg-gray-100 border-b border-gray-200">
//                             <th className="px-6 py-3 text-left text-gray-600">Ride ID</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Start Location</th>
//                             <th className="px-6 py-3 text-left text-gray-600">End Location</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Arrival Time</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Departure Time</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Ride Date</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Driver Name</th>
//                             <th className="px-6 py-3 text-left text-gray-600">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentRides.map(ride => (
//                             <tr key={ride.rideId} className="border-b border-gray-200">
//                                 <td className="px-6 py-4 text-gray-800">{ride.rideId}</td>
//                                 <td className="px-6 py-4 text-gray-800">{ride.startPoint}</td>
//                                 <td className="px-6 py-4 text-gray-800">{ride.endPoint}</td>
//                                 <td className="px-6 py-4 text-gray-800">{ride.arrivalTime}</td>
//                                 <td className="px-6 py-4 text-gray-800">{ride.departureTime}</td>
//                                 <td className="px-6 py-4 text-gray-800">{formatDate(ride.rideDate)}</td>
//                                 <td className="px-6 py-4 text-gray-800">{ride.vehicle.user.name}</td>
//                                 <td className="px-6 py-4 flex items-center">
//                                     <button
//                                         onClick={() => handleView(ride)}
//                                         className="bg-blue-500 text-white px-3 py-1 rounded-md shadow hover:bg-blue-600"
//                                     >
//                                         <FaEye />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="mt-4 flex justify-between items-center">
//                     <button
//                         onClick={() => paginate(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//                     >
//                         Previous
//                     </button>
//                     <span>Page {currentPage}</span>
//                     <button
//                         onClick={() => paginate(currentPage + 1)}
//                         disabled={currentPage * recordsPerPage >= filteredRides.length}
//                         className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default RideTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import AdminNavbar from '../components/AdminNabar';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format the date as needed
};

const RideTable = () => {
    const [rides, setRides] = useState([]);
    const [filteredRides, setFilteredRides] = useState([]);
    const [filterDate, setFilterDate] = useState('');
    const [startPoints, setStartPoints] = useState([]);
    const [endPoints, setEndPoints] = useState([]);
    const [selectedStartPoint, setSelectedStartPoint] = useState('');
    const [selectedEndPoint, setSelectedEndPoint] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await axios.get('http://localhost:8029/admin/ride');
                setRides(response.data);
                setFilteredRides(response.data);
                // Fetch unique start and end points
                const startPointsResponse = await axios.get('http://localhost:8029/admin/startPoints');
                setStartPoints(startPointsResponse.data);
                const endPointsResponse = await axios.get('http://localhost:8029/admin/endPoints');
                setEndPoints(endPointsResponse.data);
            } catch (error) {
                console.error('Error fetching ride data:', error);
            }
        };

        fetchRides();
    }, []);

    useEffect(() => {
        let filtered = rides;

        if (filterDate) {
            filtered = filtered.filter(ride =>
                new Date(ride.rideDate).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
            );
        }

        if (selectedStartPoint) {
            filtered = filtered.filter(ride => ride.startPoint === selectedStartPoint);
        }

        if (selectedEndPoint) {
            filtered = filtered.filter(ride => ride.endPoint === selectedEndPoint);
        }

        setFilteredRides(filtered);
    }, [filterDate, selectedStartPoint, selectedEndPoint, rides]);

    const handleView = (ride) => {
        Swal.fire({
            title: 'Ride Details',
            html: ` 
                <div class="p-4"> 
                    <p><strong>Ride ID:</strong> ${ride.rideId}</p>
                    <p><strong>Start Location:</strong> ${ride.startPoint}</p>
                    <p><strong>End Location:</strong> ${ride.endPoint}</p>
                    <p><strong>Ride Date:</strong> ${formatDate(ride.rideDate)}</p>
                    <p><strong>Driver Name:</strong> ${ride.vehicle.user.name}</p>
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

    // Pagination logic
    const indexOfLastRide = currentPage * recordsPerPage;
    const indexOfFirstRide = indexOfLastRide - recordsPerPage;
    const currentRides = filteredRides.slice(indexOfFirstRide, indexOfLastRide);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-6">Ride List</h2>
                <div className="mb-4 flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-gray-700">Filter by Date:</label>
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-gray-700">Filter by Start Point:</label>
                        <select
                            value={selectedStartPoint}
                            onChange={(e) => setSelectedStartPoint(e.target.value)}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        >
                            <option value="">All Start Points</option>
                            {startPoints.map(point => (
                                <option key={point} value={point}>{point}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-gray-700">Filter by End Point:</label>
                        <select
                            value={selectedEndPoint}
                            onChange={(e) => setSelectedEndPoint(e.target.value)}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        >
                            <option value="">All End Points</option>
                            {endPoints.map(point => (
                                <option key={point} value={point}>{point}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="px-6 py-3 text-left text-gray-600">Serial No</th>
                            <th className="px-6 py-3 text-left text-gray-600">Start Location</th>
                            <th className="px-6 py-3 text-left text-gray-600">End Location</th>
                            <th className="px-6 py-3 text-left text-gray-600">Arrival Time</th>
                            <th className="px-6 py-3 text-left text-gray-600">Departure Time</th>
                            <th className="px-6 py-3 text-left text-gray-600">Ride Date</th>
                            <th className="px-6 py-3 text-left text-gray-600">Driver Name</th>
                            <th className="px-6 py-3 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRides.map((ride, index) => (
                            <tr key={ride.rideId} className="border-b border-gray-200">
                                <td className="px-6 py-4 text-gray-800">{index + 1 + indexOfFirstRide}</td>
                                <td className="px-6 py-4 text-gray-800">{ride.startPoint}</td>
                                <td className="px-6 py-4 text-gray-800">{ride.endPoint}</td>
                                <td className="px-6 py-4 text-gray-800">{ride.arrivalTime}</td>
                                <td className="px-6 py-4 text-gray-800">{ride.departureTime}</td>
                                <td className="px-6 py-4 text-gray-800">{formatDate(ride.rideDate)}</td>
                                <td className="px-6 py-4 text-gray-800">{ride.vehicle.user.name}</td>
                                <td className="px-6 py-4 flex items-center">
                                    <button
                                        onClick={() => handleView(ride)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md shadow hover:bg-blue-600"
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage * recordsPerPage >= filteredRides.length}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default RideTable;
