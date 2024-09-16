// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // // // import { faEye, faFilePdf, faFileImage, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// // // // // // // // // const Users = () => {
// // // // // // // // //   const [users, setUsers] = useState([]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     axios.get('http://localhost:8029/admin/user')
// // // // // // // // //       .then(response => {
// // // // // // // // //         console.log(response.data);  // Log the data to check the format
// // // // // // // // //         setUsers(response.data);
// // // // // // // // //       })
// // // // // // // // //       .catch(error => {
// // // // // // // // //         console.error("Error fetching users:", error);
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Error',
// // // // // // // // //           text: 'Failed to fetch users',
// // // // // // // // //           icon: 'error'
// // // // // // // // //         });
// // // // // // // // //       });
// // // // // // // // //   }, []);

// // // // // // // // //   const updateStatus = (id, status) => {
// // // // // // // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: status })
// // // // // // // // //       .then(response => {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Success',
// // // // // // // // //           text: `User ${status}`,
// // // // // // // // //           icon: 'success'
// // // // // // // // //         });
// // // // // // // // //         // Refresh the list after updating
// // // // // // // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: status } : user));
// // // // // // // // //       })
// // // // // // // // //       .catch(error => {
// // // // // // // // //         console.error("Error updating status:", error);
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Error',
// // // // // // // // //           text: 'Failed to update status',
// // // // // // // // //           icon: 'error'
// // // // // // // // //         });
// // // // // // // // //       });
// // // // // // // // //   };

// // // // // // // // //   const showDetails = (user) => {
// // // // // // // // //     Swal.fire({
// // // // // // // // //       title: 'User Details',
// // // // // // // // //       html: `
// // // // // // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // // // // // //           <h3>User Information</h3>
// // // // // // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // // // // // //             <tr>
// // // // // // // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // // // // // // //               <td style="padding: 8px;">${user.id}</td>
// // // // // // // // //             </tr>
// // // // // // // // //             <tr>
// // // // // // // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // // // // // // //               <td style="padding: 8px;">${user.name}</td>
// // // // // // // // //             </tr>
// // // // // // // // //             <tr>
// // // // // // // // //               <td style="padding: 8px; font-weight: bold;">Email:</td>
// // // // // // // // //               <td style="padding: 8px;">${user.email}</td>
// // // // // // // // //             </tr>
// // // // // // // // //             <tr>
// // // // // // // // //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// // // // // // // // //               <td style="padding: 8px;">${user.accountStatus}</td>
// // // // // // // // //             </tr>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       `,
// // // // // // // // //       showCloseButton: true,
// // // // // // // // //       showConfirmButton: false,
// // // // // // // // //       width: '600px',
// // // // // // // // //       customClass: {
// // // // // // // // //         container: 'swal2-container',
// // // // // // // // //         popup: 'swal2-popup',
// // // // // // // // //         title: 'swal2-title',
// // // // // // // // //         content: 'swal2-content'
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // // // // // // //       {users.length === 0 ? (
// // // // // // // // //         <p>No users found</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // // // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // // // // // //               <th className="px-6 py-3 text-left">Name</th>
// // // // // // // // //               <th className="px-6 py-3 text-left">Email</th>
// // // // // // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // // // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>
// // // // // // // // //           <tbody>
// // // // // // // // //             {users.map(user => (
// // // // // // // // //               <tr key={user.id} className="border-b border-gray-300">
// // // // // // // // //                 <td className="px-6 py-4">{user.name}</td>
// // // // // // // // //                 <td className="px-6 py-4">{user.email}</td>
// // // // // // // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // // // // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => showDetails(user)}
// // // // // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // // // //                   >
// // // // // // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // // // // // //                   </button>
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => updateStatus(user.id, 'approved')}
// // // // // // // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // // // // // // //                   >
// // // // // // // // //                     Approve
// // // // // // // // //                   </button>
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => updateStatus(user.id, 'rejected')}
// // // // // // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // // // // //                   >
// // // // // // // // //                     Reject
// // // // // // // // //                   </button>
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //             ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Users;

// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // // import { faEye, faFilePdf, faFileImage, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// // // // // // // // const Users = () => {
// // // // // // // //   const [users, setUsers] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     axios.get('http://localhost:8029/admin/user')
// // // // // // // //       .then(response => {
// // // // // // // //         console.log(response.data);  // Log the data to check the format
// // // // // // // //         setUsers(response.data);
// // // // // // // //       })
// // // // // // // //       .catch(error => {
// // // // // // // //         console.error("Error fetching users:", error);
// // // // // // // //         Swal.fire({
// // // // // // // //           title: 'Error',
// // // // // // // //           text: 'Failed to fetch users',
// // // // // // // //           icon: 'error'
// // // // // // // //         });
// // // // // // // //       });
// // // // // // // //   }, []);

// // // // // // // //   const updateStatus = (id, status) => {
// // // // // // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: status })
// // // // // // // //       .then(response => {
// // // // // // // //         Swal.fire({
// // // // // // // //           title: 'Success',
// // // // // // // //           text: `User ${status}`,
// // // // // // // //           icon: 'success'
// // // // // // // //         });
// // // // // // // //         // Refresh the list after updating
// // // // // // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: status } : user));
// // // // // // // //         // Notify the user via email (assuming the backend handles this)
// // // // // // // //         axios.post(`http://localhost:8029/admin/notify/${id}`, { status })
// // // // // // // //           .catch(error => {
// // // // // // // //             console.error("Error sending email:", error);
// // // // // // // //           });
// // // // // // // //       })
// // // // // // // //       .catch(error => {
// // // // // // // //         console.error("Error updating status:", error);
// // // // // // // //         Swal.fire({
// // // // // // // //           title: 'Error',
// // // // // // // //           text: 'Failed to update status',
// // // // // // // //           icon: 'error'
// // // // // // // //         });
// // // // // // // //       });
// // // // // // // //   };

// // // // // // // //   const showDetails = (user) => {
// // // // // // // //     Swal.fire({
// // // // // // // //       title: 'User Details',
// // // // // // // //       html: `
// // // // // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // // // // //           <h3>User Information</h3>
// // // // // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // // // // //             <tr>
// // // // // // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // // // // // //               <td style="padding: 8px;">${user.id}</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // // // // // //               <td style="padding: 8px;">${user.name}</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td style="padding: 8px; font-weight: bold;">Email:</td>
// // // // // // // //               <td style="padding: 8px;">${user.email}</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td style="padding: 8px; font-weight: bold;">Status:</td>
// // // // // // // //               <td style="padding: 8px;">${user.accountStatus}</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td style="padding: 8px; font-weight: bold;">ID Proof:</td>
// // // // // // // //               <td style="padding: 8px;">
// // // // // // // //                 ${user.idProof ? `<img src="data:image/png;base64,${user.idProof}" style="max-width: 200px; max-height: 100px;"/>` : 'No ID Proof'}
// // // // // // // //               </td>
// // // // // // // //             </tr>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       `,
// // // // // // // //       showCloseButton: true,
// // // // // // // //       showConfirmButton: false,
// // // // // // // //       width: '600px',
// // // // // // // //       customClass: {
// // // // // // // //         container: 'swal2-container',
// // // // // // // //         popup: 'swal2-popup',
// // // // // // // //         title: 'swal2-title',
// // // // // // // //         content: 'swal2-content'
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // // // // // //       {users.length === 0 ? (
// // // // // // // //         <p>No users found</p>
// // // // // // // //       ) : (
// // // // // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // // // // //           <thead>
// // // // // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // // // // //               <th className="px-6 py-3 text-left">Name</th>
// // // // // // // //               <th className="px-6 py-3 text-left">Email</th>
// // // // // // // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // // // // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // // // // //             </tr>
// // // // // // // //           </thead>
// // // // // // // //           <tbody>
// // // // // // // //             {users.map((user, index) => (
// // // // // // // //               <tr key={user.id} className="border-b border-gray-300">
// // // // // // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // // // // // //                 <td className="px-6 py-4">{user.name}</td>
// // // // // // // //                 <td className="px-6 py-4">{user.email}</td>
// // // // // // // //                 <td className="px-6 py-4">
// // // // // // // //                   {user.idProof ? (
// // // // // // // //                     <button
// // // // // // // //                       onClick={() => showDetails(user)}
// // // // // // // //                       className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // // //                     >
// // // // // // // //                       <FontAwesomeIcon icon={faFilePdf} />
// // // // // // // //                     </button>
// // // // // // // //                   ) : (
// // // // // // // //                     'No ID Proof'
// // // // // // // //                   )}
// // // // // // // //                 </td>
// // // // // // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // // // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => showDetails(user)}
// // // // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // // //                     title="View Details"
// // // // // // // //                   >
// // // // // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // // // // //                   </button>
// // // // // // // //                   {user.accountStatus === 'pending' && (
// // // // // // // //                     <>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => updateStatus(user.id, 'approved')}
// // // // // // // //                         className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // // // // // //                         title="Approve"
// // // // // // // //                       >
// // // // // // // //                         Approve
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => updateStatus(user.id, 'rejected')}
// // // // // // // //                         className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // // // //                         title="Reject"
// // // // // // // //                       >
// // // // // // // //                         Reject
// // // // // // // //                       </button>
// // // // // // // //                     </>
// // // // // // // //                   )}
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //             ))}
// // // // // // // //           </tbody>
// // // // // // // //         </table>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Users;

// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // import { faEye, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// // // // // // // const Users = () => {
// // // // // // //   const [users, setUsers] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     axios.get('http://localhost:8029/admin/user')
// // // // // // //       .then(response => {
// // // // // // //         console.log(response.data);  // Log the data to check the format
// // // // // // //         setUsers(response.data);
// // // // // // //       })
// // // // // // //       .catch(error => {
// // // // // // //         console.error("Error fetching users:", error);
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Error',
// // // // // // //           text: 'Failed to fetch users',
// // // // // // //           icon: 'error'
// // // // // // //         });
// // // // // // //       });
// // // // // // //   }, []);

// // // // // // //   const updateStatus = (id, status) => {
// // // // // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: status })
// // // // // // //       .then(response => {
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Success',
// // // // // // //           text: `User ${status}`,
// // // // // // //           icon: 'success'
// // // // // // //         });
// // // // // // //         // Refresh the list after updating
// // // // // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: status } : user));
// // // // // // //         // Notify the user via email (assuming the backend handles this)
// // // // // // //         axios.post(`http://localhost:8029/admin/user/${id}`, { status })
// // // // // // //           .catch(error => {
// // // // // // //             console.error("Error sending email:", error);
// // // // // // //           });
// // // // // // //       })
// // // // // // //       .catch(error => {
// // // // // // //         console.error("Error updating status:", error);
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Error',
// // // // // // //           text: 'Failed to update status',
// // // // // // //           icon: 'error'
// // // // // // //         });
// // // // // // //       });
// // // // // // //   };

// // // // // // //   const showIdProof = (idProof) => {
// // // // // // //     if (idProof) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'ID Proof',
// // // // // // //         imageUrl: `data:image/png;base64,${idProof}`,
// // // // // // //         imageWidth: 400,
// // // // // // //         imageHeight: 200,
// // // // // // //         imageAlt: 'ID Proof'
// // // // // // //       });
// // // // // // //     } else {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'No ID Proof',
// // // // // // //         text: 'No ID proof available for this user.',
// // // // // // //         icon: 'info'
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const showDetails = (user) => {
// // // // // // //     Swal.fire({
// // // // // // //       title: 'User Details',
// // // // // // //       html: `
// // // // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // // // //           <h3>User Information</h3>
// // // // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // // // //             <tr>
// // // // // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // // // // //               <td style="padding: 8px;">${user.userId}</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // // // // //               <td style="padding: 8px;">${user.name}</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// // // // // // //               <td style="padding: 8px;">${user.address}</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td style="padding: 8px; font-weight: bold;">City:</td>
// // // // // // //               <td style="padding: 8px;">${user.city}</td>
// // // // // // //             </tr>
        
// // // // // // //             <tr>
// // // // // // //             <td style="padding: 8px; font-weight: bold;">State:</td>
// // // // // // //             <td style="padding: 8px;">${user.state}</td>
// // // // // // //           </tr>

// // // // // // //           <tr>
// // // // // // //             <td style="padding: 8px; font-weight: bold;">DOB:</td>
// // // // // // //             <td style="padding: 8px;">${user.dob}</td>
// // // // // // //           </tr>
// // // // // // //           <tr>
// // // // // // //             <td style="padding: 8px; font-weight: bold;">Contact:</td>
// // // // // // //             <td style="padding: 8px;">${user.mobile}</td>
// // // // // // //           </tr>
          
          
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       `,
// // // // // // //       showCloseButton: true,
// // // // // // //       showConfirmButton: false,
// // // // // // //       width: '600px',
// // // // // // //       customClass: {
// // // // // // //         container: 'swal2-container',
// // // // // // //         popup: 'swal2-popup',
// // // // // // //         title: 'swal2-title',
// // // // // // //         content: 'swal2-content'
// // // // // // //       }
// // // // // // //     });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // // // // //       {users.length === 0 ? (
// // // // // // //         <p>No users found</p>
// // // // // // //       ) : (
// // // // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // // // //           <thead>
// // // // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // // // //               <th className="px-6 py-3 text-left">Name</th>
// // // // // // //               <th className="px-6 py-3 text-left">Email</th>
// // // // // // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // // // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {users.map((user, index) => (
// // // // // // //               <tr key={user.id} className="border-b border-gray-300">
// // // // // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // // // // //                 <td className="px-6 py-4">{user.name}</td>
// // // // // // //                 <td className="px-6 py-4">{user.email}</td>
// // // // // // //                 <td className="px-6 py-4">
// // // // // // //                   <button
// // // // // // //                     onClick={() => showIdProof(user.idProof)}
// // // // // // //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// // // // // // //                     title="View ID Proof"
// // // // // // //                   >
// // // // // // //                     <FontAwesomeIcon icon={faFileAlt} />
// // // // // // //                   </button>
// // // // // // //                 </td>
// // // // // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // // // //                   <button
// // // // // // //                     onClick={() => showDetails(user)}
// // // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // //                     title="View Details"
// // // // // // //                   >
// // // // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     onClick={() => updateStatus(user.id, 'approved')}
// // // // // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // // // // //                     title="Approve"
// // // // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // // // //                   >
// // // // // // //                     Approve
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     onClick={() => updateStatus(user.id, 'rejected')}
// // // // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // // //                     title="Reject"
// // // // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // // // //                   >
// // // // // // //                     Reject
// // // // // // //                   </button>
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             ))}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Users;

// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // import { faEye, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
// // // // // // import { useNavigate } from 'react-router-dom'; // Import useHistory

// // // // // // const AdminUsers = () => {
// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const navigate = useNavigate(); // Initialize useHistory

// // // // // //   useEffect(() => {
// // // // // //     axios.get('http://localhost:8029/admin/user')
// // // // // //       .then(response => {
// // // // // //         console.log(response.data);  // Log the data to check the format
// // // // // //         setUsers(response.data);
// // // // // //       })
// // // // // //       .catch(error => {
// // // // // //         console.error("Error fetching users:", error);
// // // // // //         Swal.fire({
// // // // // //           title: 'Error',
// // // // // //           text: 'Failed to fetch users',
// // // // // //           icon: 'error'
// // // // // //         });
// // // // // //       });
// // // // // //   }, []);

// // // // // //   const updateStatus = (id, status) => {
// // // // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: status })
// // // // // //       .then(response => {
// // // // // //         Swal.fire({
// // // // // //           title: 'Success',
// // // // // //           text: `User ${status}`,
// // // // // //           icon: 'success'
// // // // // //         });
// // // // // //         // Refresh the list after updating
// // // // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: status } : user));
// // // // // //         // Notify the user via email (assuming the backend handles this)
// // // // // //         axios.post(`http://localhost:8029/admin/user/${id}`, { status })
// // // // // //           .catch(error => {
// // // // // //             console.error("Error sending email:", error);
// // // // // //           });
// // // // // //       })
// // // // // //       .catch(error => {
// // // // // //         console.error("Error updating status:", error);
// // // // // //         Swal.fire({
// // // // // //           title: 'Error',
// // // // // //           text: 'Failed to update status',
// // // // // //           icon: 'error'
// // // // // //         });
// // // // // //       });
// // // // // //   };

// // // // // //   const showIdProof = (idProof) => {
// // // // // //     if (idProof) {
// // // // // //       Swal.fire({
// // // // // //         title: 'ID Proof',
// // // // // //         imageUrl: `data:image/png;base64,${idProof}`,
// // // // // //         imageWidth: 400,
// // // // // //         imageHeight: 200,
// // // // // //         imageAlt: 'ID Proof'
// // // // // //       });
// // // // // //     } else {
// // // // // //       Swal.fire({
// // // // // //         title: 'No ID Proof',
// // // // // //         text: 'No ID proof available for this user.',
// // // // // //         icon: 'info'
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const showDetails = (user) => {
// // // // // //     Swal.fire({
// // // // // //       title: 'User Details',
// // // // // //       html: `
// // // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // // //           <h3>User Information</h3>
// // // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // // // //               <td style="padding: 8px;">${user.userId}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // // // //               <td style="padding: 8px;">${user.name}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// // // // // //               <td style="padding: 8px;">${user.address}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">City:</td>
// // // // // //               <td style="padding: 8px;">${user.city}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">State:</td>
// // // // // //               <td style="padding: 8px;">${user.state}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">DOB:</td>
// // // // // //               <td style="padding: 8px;">${user.dob}</td>
// // // // // //             </tr>
// // // // // //             <tr>
// // // // // //               <td style="padding: 8px; font-weight: bold;">Contact:</td>
// // // // // //               <td style="padding: 8px;">${user.mobile}</td>
// // // // // //             </tr>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       `,
// // // // // //       showCloseButton: true,
// // // // // //       showConfirmButton: false,
// // // // // //       width: '600px',
// // // // // //       customClass: {
// // // // // //         container: 'swal2-container',
// // // // // //         popup: 'swal2-popup',
// // // // // //         title: 'swal2-title',
// // // // // //         content: 'swal2-content'
// // // // // //       }
// // // // // //     });
// // // // // //   };

// // // // // //   // Function to handle back navigation
// // // // // //   const goBack = () => {
// // // // // //     navigate('/admindashboard');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <button
// // // // // //         onClick={goBack}
// // // // // //         className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mb-4"
// // // // // //       >
// // // // // //         Back to Dashboard
// // // // // //       </button>
// // // // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // // // //       {users.length === 0 ? (
// // // // // //         <p>No users found</p>
// // // // // //       ) : (
// // // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // // //               <th className="px-6 py-3 text-left">Name</th>
// // // // // //               <th className="px-6 py-3 text-left">Email</th>
// // // // // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {users.map((user, index) => (
// // // // // //               <tr key={user.id} className="border-b border-gray-300">
// // // // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // // // //                 <td className="px-6 py-4">{user.name}</td>
// // // // // //                 <td className="px-6 py-4">{user.email}</td>
// // // // // //                 <td className="px-6 py-4">
// // // // // //                   <button
// // // // // //                     onClick={() => showIdProof(user.idProof)}
// // // // // //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// // // // // //                     title="View ID Proof"
// // // // // //                   >
// // // // // //                     <FontAwesomeIcon icon={faFileAlt} />
// // // // // //                   </button>
// // // // // //                 </td>
// // // // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // // //                   <button
// // // // // //                     onClick={() => showDetails(user)}
// // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // //                     title="View Details"
// // // // // //                   >
// // // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={() => updateStatus(user.userId, 'approved')}
// // // // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // // // //                     title="Approve"
// // // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // // //                   >
// // // // // //                     Approve
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={() => updateStatus(user.userId, 'rejected')}
// // // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // //                     title="Reject"
// // // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // // //                   >
// // // // // //                     Reject
// // // // // //                   </button>
// // // // // //                 </td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminUsers;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { faEye, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
// // // // // import { useNavigate } from 'react-router-dom'; // Import useHistory

// // // // // const AdminUsers = () => {
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const navigate = useNavigate(); // Initialize useHistory

// // // // //   useEffect(() => {
// // // // //     axios.get('http://localhost:8029/admin/user')
// // // // //       .then(response => {
// // // // //         console.log(response.data);  // Log the data to check the format
// // // // //         setUsers(response.data);
// // // // //       })
// // // // //       .catch(error => {
// // // // //         console.error("Error fetching users:", error);
// // // // //         Swal.fire({
// // // // //           title: 'Error',
// // // // //           text: 'Failed to fetch users',
// // // // //           icon: 'error'
// // // // //         });
// // // // //       });
// // // // //   }, []);

// // // // //   const updateStatus = (id, accountStatus) => {
// // // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: accountStatus })
// // // // //       .then(response => {
// // // // //         Swal.fire({
// // // // //           title: 'Success',
// // // // //           text: `User ${accountStatus}`,
// // // // //           icon: 'success'
// // // // //         });
// // // // //         // Refresh the list after updating
// // // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: accountStatus } : user));
// // // // //         // Notify the user via email (assuming the backend handles this)
// // // // //         axios.post(`http://localhost:8029/admin/user/${id}`, { accountStatus })
// // // // //           .catch(error => {
// // // // //             console.error("Error sending email:", error);
// // // // //           });
// // // // //       })
// // // // //       .catch(error => {
// // // // //         console.error("Error updating status:", error);
// // // // //         Swal.fire({
// // // // //           title: 'Error',
// // // // //           text: 'Failed to update status',
// // // // //           icon: 'error'
// // // // //         });
// // // // //       });
// // // // //   };

// // // // //   const showIdProof = (idProof) => {
// // // // //     if (idProof) {
// // // // //       Swal.fire({
// // // // //         title: 'ID Proof',
// // // // //         imageUrl: `data:image/png;base64,${idProof}`,
// // // // //         imageWidth: 400,
// // // // //         imageHeight: 200,
// // // // //         imageAlt: 'ID Proof'
// // // // //       });
// // // // //     } else {
// // // // //       Swal.fire({
// // // // //         title: 'No ID Proof',
// // // // //         text: 'No ID proof available for this user.',
// // // // //         icon: 'info'
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const showDetails = (user) => {
// // // // //     Swal.fire({
// // // // //       title: 'User Details',
// // // // //       html: `
// // // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // // //           <h3>User Information</h3>
// // // // //           <table style="width: 100%; border-collapse: collapse;">
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // // //               <td style="padding: 8px;">${user.userId}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // // //               <td style="padding: 8px;">${user.name}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// // // // //               <td style="padding: 8px;">${user.address}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">City:</td>
// // // // //               <td style="padding: 8px;">${user.city}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">State:</td>
// // // // //               <td style="padding: 8px;">${user.state}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">DOB:</td>
// // // // //               <td style="padding: 8px;">${user.dob}</td>
// // // // //             </tr>
// // // // //             <tr>
// // // // //               <td style="padding: 8px; font-weight: bold;">Contact:</td>
// // // // //               <td style="padding: 8px;">${user.mobile}</td>
// // // // //             </tr>
// // // // //           </table>
// // // // //         </div>
// // // // //       `,
// // // // //       showCloseButton: true,
// // // // //       showConfirmButton: false,
// // // // //       width: '600px',
// // // // //       customClass: {
// // // // //         container: 'swal2-container',
// // // // //         popup: 'swal2-popup',
// // // // //         title: 'swal2-title',
// // // // //         content: 'swal2-content'
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   // Function to handle back navigation
// // // // //   const goBack = () => {
// // // // //     navigate('/admindashboard');
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <button
// // // // //         onClick={goBack}
// // // // //         className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mb-4"
// // // // //       >
// // // // //         Back to Dashboard
// // // // //       </button>
// // // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // // //       {users.length === 0 ? (
// // // // //         <p>No users found</p>
// // // // //       ) : (
// // // // //         <table className="w-full border-collapse border border-gray-200">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // // //               <th className="px-6 py-3 text-left">Name</th>
// // // // //               <th className="px-6 py-3 text-left">Email</th>
// // // // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // // // //               <th className="px-6 py-3 text-left">Status</th>
// // // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {users.map((user, index) => (
// // // // //               <tr key={user.id} className="border-b border-gray-300">
// // // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // // //                 <td className="px-6 py-4">{user.name}</td>
// // // // //                 <td className="px-6 py-4">{user.email}</td>
// // // // //                 <td className="px-6 py-4">
// // // // //                   <button
// // // // //                     onClick={() => showIdProof(user.idProof)}
// // // // //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// // // // //                     title="View ID Proof"
// // // // //                   >
// // // // //                     <FontAwesomeIcon icon={faFileAlt} />
// // // // //                   </button>
// // // // //                 </td>
// // // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // // //                 <td className="px-6 py-4 flex space-x-2">
// // // // //                   <button
// // // // //                     onClick={() => showDetails(user)}
// // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // //                     title="View Details"
// // // // //                   >
// // // // //                     <FontAwesomeIcon icon={faEye} />
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => updateStatus(user.userId, 'approved')}
// // // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // // //                     title="Approve"
// // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // //                   >
// // // // //                     Approve
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => updateStatus(user.userId, 'rejected')}
// // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // //                     title="Reject"
// // // // //                     disabled={user.accountStatus !== 'pending'}
// // // // //                   >
// // // // //                     Reject
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminUsers;



// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';
// // // // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // // // const AdminUsers = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const navigate = useNavigate(); // Initialize useNavigate

// // // //   useEffect(() => {
// // // //     axios.get('http://localhost:8029/admin/user')
// // // //       .then(response => {
// // // //         console.log(response.data);  // Log the data to check the format
// // // //         setUsers(response.data);
// // // //       })
// // // //       .catch(error => {
// // // //         console.error("Error fetching users:", error);
// // // //         Swal.fire({
// // // //           title: 'Error',
// // // //           text: 'Failed to fetch users',
// // // //           icon: 'error'
// // // //         });
// // // //       });
// // // //   }, []);

// // // //   const updateStatus = (id, newStatus) => {
// // // //     axios.put(`http://localhost:8029/admin/user/${id}`, { accountStatus: newStatus })
// // // //       .then(response => {
// // // //         Swal.fire({
// // // //           title: 'Success',
// // // //           text: `User ${newStatus}`,
// // // //           icon: 'success'
// // // //         });
// // // //         // Refresh the list after updating
// // // //         setUsers(users.map(user => user.id === id ? { ...user, accountStatus: newStatus } : user));
// // // //       })
// // // //       .catch(error => {
// // // //         console.error("Error updating status:", error);
// // // //         Swal.fire({
// // // //           title: 'Error',
// // // //           text: 'Failed to update status',
// // // //           icon: 'error'
// // // //         });
// // // //       });
// // // //   };

// // // //   const showIdProof = (idProof) => {
// // // //     if (idProof) {
// // // //       Swal.fire({
// // // //         title: 'ID Proof',
// // // //         imageUrl: `data:image/png;base64,${idProof}`,
// // // //         imageWidth: 400,
// // // //         imageHeight: 200,
// // // //         imageAlt: 'ID Proof'
// // // //       });
// // // //     } else {
// // // //       Swal.fire({
// // // //         title: 'No ID Proof',
// // // //         text: 'No ID proof available for this user.',
// // // //         icon: 'info'
// // // //       });
// // // //     }
// // // //   };

// // // //   const showDetails = (user) => {
// // // //     Swal.fire({
// // // //       title: 'User Details',
// // // //       html: `
// // // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // // //           <h3>User Information</h3>
// // // //           <table style="width: 100%; border-collapse: collapse;">
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // // //               <td style="padding: 8px;">${user.userId}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // // //               <td style="padding: 8px;">${user.name}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// // // //               <td style="padding: 8px;">${user.address}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">City:</td>
// // // //               <td style="padding: 8px;">${user.city}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">State:</td>
// // // //               <td style="padding: 8px;">${user.state}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">DOB:</td>
// // // //               <td style="padding: 8px;">${user.dob}</td>
// // // //             </tr>
// // // //             <tr>
// // // //               <td style="padding: 8px; font-weight: bold;">Contact:</td>
// // // //               <td style="padding: 8px;">${user.mobile}</td>
// // // //             </tr>
// // // //           </table>
// // // //         </div>
// // // //       `,
// // // //       showCloseButton: true,
// // // //       showConfirmButton: false,
// // // //       width: '600px',
// // // //       customClass: {
// // // //         container: 'swal2-container',
// // // //         popup: 'swal2-popup',
// // // //         title: 'swal2-title',
// // // //         content: 'swal2-content'
// // // //       }
// // // //     });
// // // //   };

// // // //   // Function to handle back navigation
// // // //   const goBack = () => {
// // // //     navigate('/admindashboard');
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <button
// // // //         onClick={goBack}
// // // //         className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mb-4"
// // // //       >
// // // //         Back to Dashboard
// // // //       </button>
// // // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // // //       {users.length === 0 ? (
// // // //         <p>No users found</p>
// // // //       ) : (
// // // //         <table className="w-full border-collapse border border-gray-200">
// // // //           <thead>
// // // //             <tr className="bg-gray-200 border-b border-gray-300">
// // // //               <th className="px-6 py-3 text-left">S.No</th>
// // // //               <th className="px-6 py-3 text-left">Name</th>
// // // //               <th className="px-6 py-3 text-left">Email</th>
// // // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // // //               <th className="px-6 py-3 text-left">Status</th>
// // // //               <th className="px-6 py-3 text-left">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {users.map((user, index) => (
// // // //               <tr key={user.id} className="border-b border-gray-300">
// // // //                 <td className="px-6 py-4">{index + 1}</td>
// // // //                 <td className="px-6 py-4">{user.name}</td>
// // // //                 <td className="px-6 py-4">{user.email}</td>
// // // //                 <td className="px-6 py-4">
// // // //                   <button
// // // //                     onClick={() => showIdProof(user.idProof)}
// // // //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// // // //                     title="View ID Proof"
// // // //                   >
// // // //                     <FontAwesomeIcon icon={faFileAlt} />
// // // //                   </button>
// // // //                 </td>
// // // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // // //                 <td className="px-6 py-4 flex space-x-2">
// // // //                   <button
// // // //                     onClick={() => showDetails(user)}
// // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // //                     title="View Details"
// // // //                   >
// // // //                     <FontAwesomeIcon icon={faEye} />
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => updateStatus(user.id, 'Approve')}
// // // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // // //                     title="Approve"
// // // //                     disabled={user.accountStatus !== 'Pending'}
// // // //                   >
// // // //                     Approve
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => updateStatus(user.id, 'Reject')}
// // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // //                     title="Reject"
// // // //                     disabled={user.accountStatus !== 'Pending'}
// // // //                   >
// // // //                     Reject
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminUsers;

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';
// // // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // // const AdminUsers = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const navigate = useNavigate(); // Initialize useNavigate

// // //   useEffect(() => {
// // //     axios.get('http://localhost:8029/admin/user')
// // //       .then(response => {
// // //         console.log(response.data);  // Log the data to check the format
// // //         setUsers(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error("Error fetching users:", error);
// // //         Swal.fire({
// // //           title: 'Error',
// // //           text: 'Failed to fetch users',
// // //           icon: 'error'
// // //         });
// // //       });
// // //   }, []);

// // //   const updateStatus = (userId, newStatus) => {
// // //     axios.put(`http://localhost:8029/admin/user/${userId}`, { accountStatus: newStatus })
// // //       .then(response => {
// // //         // Check if the API response is successful
// // //         if (response.status === 200) {
// // //           Swal.fire({
// // //             title: 'Success',
// // //             text: `User ${newStatus}`,
// // //             icon: 'success'
// // //           });
// // //           // Refresh the list after updating
// // //           setUsers(users.map(user => user.userId === userId ? { ...user, accountStatus: newStatus } : user));
// // //         }
// // //       })
// // //       .catch(error => {
// // //         console.error("Error updating status:", error);
// // //         Swal.fire({
// // //           title: 'Error',
// // //           text: 'Failed to update status',
// // //           icon: 'error'
// // //         });
// // //       });
// // //   };

// // //   const showIdProof = (idProof) => {
// // //     if (idProof) {
// // //       Swal.fire({
// // //         title: 'ID Proof',
// // //         imageUrl: `data:image/png;base64,${idProof}`,
// // //         imageWidth: 400,
// // //         imageHeight: 200,
// // //         imageAlt: 'ID Proof'
// // //       });
// // //     } else {
// // //       Swal.fire({
// // //         title: 'No ID Proof',
// // //         text: 'No ID proof available for this user.',
// // //         icon: 'info'
// // //       });
// // //     }
// // //   };

// // //   const showDetails = (user) => {
// // //     Swal.fire({
// // //       title: 'User Details',
// // //       html: `
// // //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// // //           <h3>User Information</h3>
// // //           <table style="width: 100%; border-collapse: collapse;">
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// // //               <td style="padding: 8px;">${user.userId}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// // //               <td style="padding: 8px;">${user.name}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// // //               <td style="padding: 8px;">${user.address}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">City:</td>
// // //               <td style="padding: 8px;">${user.city}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">State:</td>
// // //               <td style="padding: 8px;">${user.state}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">DOB:</td>
// // //               <td style="padding: 8px;">${user.dob}</td>
// // //             </tr>
// // //             <tr>
// // //               <td style="padding: 8px; font-weight: bold;">Contact:</td>
// // //               <td style="padding: 8px;">${user.mobile}</td>
// // //             </tr>
// // //           </table>
// // //         </div>
// // //       `,
// // //       showCloseButton: true,
// // //       showConfirmButton: false,
// // //       width: '600px',
// // //       customClass: {
// // //         container: 'swal2-container',
// // //         popup: 'swal2-popup',
// // //         title: 'swal2-title',
// // //         content: 'swal2-content'
// // //       }
// // //     });
// // //   };

// // //   // Function to handle back navigation
// // //   const goBack = () => {
// // //     navigate('/admindashboard');
// // //   };

// // //   return (
// // //     <div>
// // //       <button
// // //         onClick={goBack}
// // //         className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mb-4"
// // //       >
// // //         Back to Dashboard
// // //       </button>
// // //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// // //       {users.length === 0 ? (
// // //         <p>No users found</p>
// // //       ) : (
// // //         <table className="w-full border-collapse border border-gray-200">
// // //           <thead>
// // //             <tr className="bg-gray-200 border-b border-gray-300">
// // //               <th className="px-6 py-3 text-left">S.No</th>
// // //               <th className="px-6 py-3 text-left">Name</th>
// // //               <th className="px-6 py-3 text-left">Email</th>
// // //               <th className="px-6 py-3 text-left">ID Proof</th>
// // //               <th className="px-6 py-3 text-left">Status</th>
// // //               <th className="px-6 py-3 text-left">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {users.map((user, index) => (
// // //               <tr key={user.id} className="border-b border-gray-300">
// // //                 <td className="px-6 py-4">{index + 1}</td>
// // //                 <td className="px-6 py-4">{user.name}</td>
// // //                 <td className="px-6 py-4">{user.email}</td>
// // //                 <td className="px-6 py-4">
// // //                   <button
// // //                     onClick={() => showIdProof(user.idProof)}
// // //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// // //                     title="View ID Proof"
// // //                   >
// // //                     <FontAwesomeIcon icon={faFileAlt} />
// // //                   </button>
// // //                 </td>
// // //                 <td className="px-6 py-4">{user.accountStatus}</td>
// // //                 <td className="px-6 py-4 flex space-x-2">
// // //                   <button
// // //                     onClick={() => showDetails(user)}
// // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // //                     title="View Details"
// // //                   >
// // //                     <FontAwesomeIcon icon={faEye} />
// // //                   </button>
// // //                   <button
// // //                     onClick={() => updateStatus(user.userId, 'Approved')}
// // //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
// // //                     title="Approve"
// // //                     disabled={user.accountStatus !== 'Pending'}
// // //                   >
// // //                     Approve
// // //                   </button>
// // //                   <button
// // //                     onClick={() => updateStatus(user.userId, 'Rejected')}
// // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // //                     title="Reject"
// // //                     disabled={user.accountStatus !== 'Pending'}
// // //                   >
// // //                     Reject
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AdminUsers;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'; // Import lock and unlock icons
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import AdminNavbar from '../components/AdminNabar';


// // const AdminUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   useEffect(() => {
// //     axios.get('http://localhost:8029/admin/user')
// //       .then(response => {
// //         console.log(response.data);  // Log the data to check the format
// //         setUsers(response.data);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching users:", error);
// //         Swal.fire({
// //           title: 'Error',
// //           text: 'Failed to fetch users',
// //           icon: 'error'
// //         });
// //       });
// //   }, []);

// //   const updateStatus = (userId, newStatus) => {
// //     axios.put(`http://localhost:8029/admin/user/${userId}`, { accountStatus: newStatus })
// //       .then(response => {
// //         // Check if the API response is successful
// //         if (response.status === 200) {
// //           Swal.fire({
// //             title: 'Success',
// //             text: `User ${newStatus}`,
// //             icon: 'success'
// //           });
// //           // Refresh the list after updating
// //           setUsers(users.map(user => user.userId === userId ? { ...user, accountStatus: newStatus } : user));
// //         }
// //       })
// //       .catch(error => {
// //         console.error("Error updating status:", error);
// //         Swal.fire({
// //           title: 'Error',
// //           text: 'Failed to update status',
// //           icon: 'error'
// //         });
// //       });
// //   };

// //   const showIdProof = (idProof) => {
// //     if (idProof) {
// //       Swal.fire({
// //         title: 'ID Proof',
// //         imageUrl: `data:image/png;base64,${idProof}`,
// //         imageWidth: 400,
// //         imageHeight: 200,
// //         imageAlt: 'ID Proof'
// //       });
// //     } else {
// //       Swal.fire({
// //         title: 'No ID Proof',
// //         text: 'No ID proof available for this user.',
// //         icon: 'info'
// //       });
// //     }
// //   };

// //   const showDetails = (user) => {
// //     Swal.fire({
// //       title: 'User Details',
// //       html: `
// //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
// //           <h3>User Information</h3>
// //           <table style="width: 100%; border-collapse: collapse;">
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">ID:</td>
// //               <td style="padding: 8px;">${user.userId}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Name:</td>
// //               <td style="padding: 8px;">${user.name}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Address:</td>
// //               <td style="padding: 8px;">${user.address}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">City:</td>
// //               <td style="padding: 8px;">${user.city}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">State:</td>
// //               <td style="padding: 8px;">${user.state}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">DOB:</td>
// //               <td style="padding: 8px;">${user.dob}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px; font-weight: bold;">Contact:</td>
// //               <td style="padding: 8px;">${user.mobile}</td>
// //             </tr>
// //           </table>
// //         </div>
// //       `,
// //       showCloseButton: true,
// //       showConfirmButton: false,
// //       width: '600px',
// //       customClass: {
// //         container: 'swal2-container',
// //         popup: 'swal2-popup',
// //         title: 'swal2-title',
// //         content: 'swal2-content'
// //       }
// //     });
// //   };

 

// //   return (
   
// //     <div>
// //         <AdminNavbar />
      
// //       <h2 className="text-2xl font-semibold mb-4">Users</h2>
// //       {users.length === 0 ? (
// //         <p>No users found</p>
// //       ) : (
// //         <table className="w-full border-collapse border border-gray-200">
// //           <thead>
// //             <tr className="bg-gray-200 border-b border-gray-300">
// //               <th className="px-6 py-3 text-left">S.No</th>
// //               <th className="px-6 py-3 text-left">Name</th>
// //               <th className="px-6 py-3 text-left">Email</th>
// //               <th className="px-6 py-3 text-left">ID Proof</th>
// //               <th className="px-6 py-3 text-left">Status</th>
// //               <th className="px-6 py-3 text-left">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {users.map((user, index) => (
// //               <tr key={user.userId} className="border-b border-gray-300">
// //                 <td className="px-6 py-4">{index + 1}</td>
// //                 <td className="px-6 py-4">{user.name}</td>
// //                 <td className="px-6 py-4">{user.email}</td>
// //                 <td className="px-6 py-4">
// //                   <button
// //                     onClick={() => showIdProof(user.idProof)}
// //                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
// //                     title="View ID Proof"
// //                   >
// //                     <FontAwesomeIcon icon={faFileAlt} />
// //                   </button>
// //                 </td>
// //                 <td className="px-6 py-4">{user.accountStatus}</td>
// //                 <td className="px-6 py-4 flex space-x-2">
// //                   <button
// //                     onClick={() => showDetails(user)}
// //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// //                     title="View Details"
// //                   >
// //                     <FontAwesomeIcon icon={faEye} />
// //                   </button>
// //                   <button
// //                     onClick={() => updateStatus(user.userId, 'Approved')}
// //                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
// //                     title="Approve"
// //                     disabled={user.accountStatus !== 'Pending'}
// //                   >
// //                     <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
// //                     <span className="ml-2">Approve</span>
// //                   </button>
// //                   <button
// //                     onClick={() => updateStatus(user.userId, 'Rejected')}
// //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
// //                     title="Reject"
// //                     disabled={user.accountStatus !== 'Pending'}
// //                   >
// //                     <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
// //                     <span className="ml-2">Reject</span>
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminUsers;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from '../components/AdminNabar';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false); // State to manage loader
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     axios.get('http://localhost:8029/admin/user')
//       .then(response => {
//         console.log(response.data);
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching users:", error);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to fetch users',
//           icon: 'error'
//         });
//       });
//   };

//   const updateStatus = (userId, newStatus) => {
//     setLoading(true); // Show loader
//     axios.put(`http://localhost:8029/admin/user/${userId}`, { accountStatus: newStatus })
//       .then(response => {
//         if (response.status === 200) {
//           axios.post(`http://localhost:8029/user/sendEmail/${userId}/${newStatus}`)
//             .then(() => {
//               Swal.fire({
//                 title: 'Success',
//                 text: `User ${newStatus} and email sent.`,
//                 icon: 'success'
//               });
//               fetchUsers(); // Refresh the user list
//             })
//             .catch(error => {
//               console.error("Error sending email:", error.response ? error.response.data : error.message);
//               Swal.fire({
//                 title: 'Error',
//                 text: 'Failed to send email',
//                 icon: 'error'
//               });
//             })
//             .finally(() => setLoading(false)); // Hide loader
//         }
//       })
//       .catch(error => {
//         console.error("Error updating status:", error.response ? error.response.data : error.message);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to update status',
//           icon: 'error'
//         });
//         setLoading(false); // Hide loader
//       });
//   };

//   const showIdProof = (idProof) => {
//     if (idProof) {
//       Swal.fire({
//         title: 'ID Proof',
//         imageUrl: `data:image/png;base64,${idProof}`,
//         imageWidth: 400,
//         imageHeight: 200,
//         imageAlt: 'ID Proof'
//       });
//     } else {
//       Swal.fire({
//         title: 'No ID Proof',
//         text: 'No ID proof available for this user.',
//         icon: 'info'
//       });
//     }
//   };

//   const showDetails = (user) => {
//     Swal.fire({
//       title: 'User Details',
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//           <h3>User Information</h3>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">ID:</td>
//               <td style="padding: 8px;">${user.userId}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Name:</td>
//               <td style="padding: 8px;">${user.name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Address:</td>
//               <td style="padding: 8px;">${user.address}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">City:</td>
//               <td style="padding: 8px;">${user.city}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">State:</td>
//               <td style="padding: 8px;">${user.state}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">DOB:</td>
//               <td style="padding: 8px;">${user.dob}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold;">Contact:</td>
//               <td style="padding: 8px;">${user.mobile}</td>
//             </tr>
//           </table>
//         </div>
//       `,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '600px',
//       customClass: {
//         container: 'swal2-container',
//         popup: 'swal2-popup',
//         title: 'swal2-title',
//         content: 'swal2-content'
//       }
//     });
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <h2 className="text-2xl font-semibold mb-4">Users</h2>
//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
//         </div>
//       )}
//       {users.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-200 border-b border-gray-300">
//               <th className="px-6 py-3 text-left">S.No</th>
//               <th className="px-6 py-3 text-left">Name</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-left">ID Proof</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user.userId} className="border-b border-gray-300">
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4">{user.name}</td>
//                 <td className="px-6 py-4">{user.email}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => showIdProof(user.idProof)}
//                     className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
//                     title="View ID Proof"
//                   >
//                     <FontAwesomeIcon icon={faFileAlt} />
//                   </button>
//                 </td>
//                 <td className="px-6 py-4">{user.accountStatus}</td>
//                 <td className="px-6 py-4 flex space-x-2">
//                   <button
//                     onClick={() => showDetails(user)}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     title="View Details"
//                   >
//                     <FontAwesomeIcon icon={faEye} />
//                   </button>
//                   <button
//                     onClick={() => updateStatus(user.userId, 'Approved')}
//                     className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
//                     title="Approve"
//                     disabled={user.accountStatus !== 'Pending'}
//                   >
//                     <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
//                     <span className="ml-2">Approve</span>
//                   </button>
//                   <button
//                     onClick={() => updateStatus(user.userId, 'Rejected')}
//                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
//                     title="Reject"
//                     disabled={user.accountStatus !== 'Pending'}
//                   >
//                     <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
//                     <span className="ml-2">Reject</span>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileAlt, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNabar';


const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loader
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true); // Show loader when fetching starts
    axios.get('http://localhost:8029/admin/user')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to fetch users',
          icon: 'error'
        });
      })
      .finally(() => setLoading(false)); // Hide loader after fetching
  };

  const updateStatus = (userId, newStatus) => {
    setLoading(true); // Show loader when updating starts
    axios.put(`http://localhost:8029/admin/user/${userId}`, { accountStatus: newStatus })
      .then(response => {
        if (response.status === 200) {
          axios.post(`http://localhost:8029/user/sendEmail/${userId}/${newStatus}`)
            .then(() => {
              Swal.fire({
                title: 'Success',
                text: `User ${newStatus} and email sent.`,
                icon: 'success'
              });
              fetchUsers(); // Refresh the user list
            })
            .catch(error => {
              console.error("Error sending email:", error.response ? error.response.data : error.message);
              Swal.fire({
                title: 'Error',
                text: 'Failed to send email',
                icon: 'error'
              });
            })
            .finally(() => setLoading(false)); // Hide loader after updating
        }
      })
      .catch(error => {
        console.error("Error updating status:", error.response ? error.response.data : error.message);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update status',
          icon: 'error'
        });
        setLoading(false); // Hide loader on error
      });
  };

  const showIdProof = (idProof) => {
    if (idProof) {
      Swal.fire({
        title: 'ID Proof',
        imageUrl: `data:image/png;base64,${idProof}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'ID Proof'
      });
    } else {
      Swal.fire({
        title: 'No ID Proof',
        text: 'No ID proof available for this user.',
        icon: 'info'
      });
    }
  };

  const showDetails = (user) => {
    Swal.fire({
      title: 'User Details',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>User Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">ID:</td>
              <td style="padding: 8px;">${user.userId}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${user.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Address:</td>
              <td style="padding: 8px;">${user.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">City:</td>
              <td style="padding: 8px;">${user.city}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">State:</td>
              <td style="padding: 8px;">${user.state}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">DOB:</td>
              <td style="padding: 8px;">${user.dob}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Contact:</td>
              <td style="padding: 8px;">${user.mobile}</td>
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

  return (
    <div>
      <AdminNavbar />
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="px-6 py-3 text-left">S.No</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">ID Proof</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.userId} className="border-b border-gray-300">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => showIdProof(user.idProof)}
                    className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700"
                    title="View ID Proof"
                  >
                    <FontAwesomeIcon icon={faFileAlt} />
                  </button>
                </td>
                <td className="px-6 py-4">{user.accountStatus}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => showDetails(user)}
                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    title="View Details"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button
                    onClick={() => updateStatus(user.userId, 'Approved')}
                    className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 flex items-center"
                    title="Approve"
                    disabled={user.accountStatus !== 'Pending'}
                  >
                    <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
                    <span className="ml-2">Approve</span>
                  </button>
                  <button
                    onClick={() => updateStatus(user.userId, 'Rejected')}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
                    title="Reject"
                    disabled={user.accountStatus !== 'Pending'}
                  >
                    <FontAwesomeIcon icon={user.accountStatus === 'Pending' ? faUnlock : faLock} />
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

export default AdminUsers;
