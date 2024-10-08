
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import AdminNavbar from '../components/AdminNabar';


const AdminHomePage = () => {
    const [userCount, setUserCount] = useState(0);
    const [vehicleCount, setVehicleCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);
    const [rideCount, setRideCount] = useState(0);
    const [paymentCount, setPaymentCount] = useState(0);
    const [pendingBookings, setPendingBookings] = useState([]);
    const [approvedUsers, setApprovedUsers] = useState(0);
    const [rejectedUsers, setRejectedUsers] = useState(0);
    const [pendingUsers, setPendingUsers] = useState(0);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [userRes, vehicleRes, bookingRes, rideRes, paymentRes, pendingBookingRes, userStatusesRes] = await Promise.all([
                    axios.get('http://localhost:8029/admin/user'),
                    axios.get('http://localhost:8029/admin/vehicle'),
                    axios.get('http://localhost:8029/admin/booking'),
                    axios.get('http://localhost:8029/admin/ride'),
                    axios.get('http://localhost:8029/admin/payment'),
                    axios.get('http://localhost:8029/admin/pendingBooking'),
                    axios.get('http://localhost:8029/admin/userStatusSummary') // Adjusted endpoint
                ]);

                setUserCount(userRes.data.length);
                setVehicleCount(vehicleRes.data.length);
                setBookingCount(bookingRes.data.length);
                setRideCount(rideRes.data.length);
                setPaymentCount(paymentRes.data.length);
                setPendingBookings(pendingBookingRes.data);

                const { approved, rejected, pending } = userStatusesRes.data;
                setApprovedUsers(approved || 0);
                setRejectedUsers(rejected || 0);
                setPendingUsers(pending || 0);

            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    const data = [
        { name: 'Approved Users', value: approvedUsers },
        { name: 'Rejected Users', value: rejectedUsers },
        { name: 'Pending Users', value: pendingUsers },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Dashboard Cards */}
                    {[{ label: 'Total Users', count: userCount }, { label: 'Total Vehicles', count: vehicleCount }, { label: 'Total Bookings', count: bookingCount }, { label: 'Total Rides', count: rideCount }, { label: 'Total Payments', count: paymentCount }, { label: 'Pending Bookings', count: pendingBookings.length }].map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                            <h2 className="text-lg font-semibold text-gray-600">{item.label}</h2>
                            <h1 className="text-3xl font-bold text-gray-800">{item.count}</h1>
                        </div>
                    ))}
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">User Status Distribution</h2>
                    <div className="flex justify-center">
                        <PieChart width={800} height={400}>
                            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#82ca9d', '#ff6666', '#ffc107'][index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;

