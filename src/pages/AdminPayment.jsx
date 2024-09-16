

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import AdminNavbar from '../components/AdminNabar';


const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format the date as needed
};

const PaymentTable = () => {
    const [payments, setPayments] = useState([]);
    const [filteredPayments, setFilteredPayments] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8029/admin/payment');
                setPayments(response.data);
                setFilteredPayments(response.data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchPayments();
    }, []);

    useEffect(() => {
        let filtered = payments;

        if (filterStatus) {
            filtered = filtered.filter(payment => payment.status === filterStatus);
        }

        setFilteredPayments(filtered);
    }, [filterStatus, payments]);

    const handleDelete = async (payId) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`http://localhost:8029/payment/${payId}`);
                setPayments(payments.filter(payment => payment.payId !== payId));
                Swal.fire('Deleted!', 'The payment has been deleted.', 'success');
            }
        } catch (error) {
            console.error('Error deleting payment:', error);
        }
    };

    // Pagination logic
    const indexOfLastPayment = currentPage * recordsPerPage;
    const indexOfFirstPayment = indexOfLastPayment - recordsPerPage;
    const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-6">Payment List</h2>
                <div className="mb-4 flex justify-end">
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-700">Filter by Status:</label>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">All</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                        </select>
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="px-6 py-3 text-left text-gray-600">Serial No</th>
                            <th className="px-6 py-3 text-left text-gray-600">Amount</th>
                            <th className="px-6 py-3 text-left text-gray-600">Payment Method</th>
                            <th className="px-6 py-3 text-left text-gray-600">Status</th>
                            <th className="px-6 py-3 text-left text-gray-600">Payment Date</th>
                            <th className="px-6 py-3 text-left text-gray-600">User</th>
                            <th className="px-6 py-3 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPayments.map((payment, index) => (
                            <tr key={payment.payId} className="border-b border-gray-200">
                                <td className="px-6 py-4 text-gray-800">{index + 1 + indexOfFirstPayment}</td>
                                <td className="px-6 py-4 text-gray-800">₹{payment.amount}</td>
                                <td className="px-6 py-4 text-gray-800">{payment.payMethod}</td>
                                <td className="px-6 py-4 text-gray-800">{payment.status}</td>
                                <td className="px-6 py-4 text-gray-800">{formatDate(payment.payDate)}</td>
                                <td className="px-6 py-4 text-gray-800">{payment.user.name}</td>
                                <td className="px-6 py-4 flex items-center">
                                    <button
                                        onClick={() => handleDelete(payment.payId)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-600"
                                    >
                                        <FaTrashAlt />
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
                        disabled={currentPage * recordsPerPage >= filteredPayments.length}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default PaymentTable;
