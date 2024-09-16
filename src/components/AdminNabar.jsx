import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../components/AuthContext'; 
import Swal from 'sweetalert2';

const AdminNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            logout();
            sessionStorage.clear();
            navigate('/adminlogin');
        });
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <Link to="/admindashboard" className="flex items-center text-white text-xl font-bold no-underline">
                    <img
                        src="https://th.bing.com/th/id/OIP.HQrq0z6AIwPMcJgFCWRdoQHaHa?rs=1&pid=ImgDetMain"
                        width="50"
                        height="50"
                        className="mr-2"
                        alt="Admin Logo"
                    />
                    Admin Dashboard
                </Link>
                <button 
                    className="text-white text-2xl md:hidden" 
                    onClick={toggleNav}
                >
                    ☰
                </button>
                <ul className={`fixed top-0 right-0 mt-16 bg-gray-800 w-full md:relative md:flex md:items-center md:space-x-4 md:bg-transparent md:mt-0 ${isNavOpen ? 'block' : 'hidden'} md:block`}>
                    <li className="nav-item ml-6">
                        <Link to="/adminuser" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">User</Link>
                    </li>
                    <li className="nav-item ml-6">
                        <Link to="/adminbooking" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">Bookings</Link>
                    </li>
                    <li className="nav-item ml-6">
                        <Link to="/adminvehicle" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">Vehicles</Link>
                    </li>
                    <li className="nav-item ml-6">
                        <Link to="/adminride" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">Rides</Link>
                    </li>
                    
                    <li className="nav-item ml-6">
                        <Link to="/adminpayment" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">Payment Verification</Link>
                    </li>
                    <li className="nav-item ml-6">
                        <Link to="/adminrating" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline">Ratings</Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center mt-4"
                        >
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;
