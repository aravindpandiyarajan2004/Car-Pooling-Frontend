// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import AdminNavbar from '../components/AdminNabar';

// const AdminReviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch all reviews
//     axios.get('http://localhost:8029/review/all')
//       .then(response => {
//         setReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching reviews:', error);
//         Swal.fire({
//           title: 'Error',
//           text: 'Failed to fetch reviews',
//           icon: 'error'
//         });
//       });
//   }, []);

//   const deleteReview = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this review!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:8029/review/${id}`)
//           .then(() => {
//             setReviews(reviews.filter(review => review.reviewId !== id));
//             Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
//           })
//           .catch(error => {
//             console.error('Error deleting review:', error);
//             Swal.fire('Error', 'Failed to delete review', 'error');
//           });
//       }
//     });
//   };

//   return (
//     <div>
//         <AdminNavbar />
//       <h2 className="text-2xl font-semibold mb-4">Admin Reviews</h2>
//       {reviews.length === 0 ? (
//         <p>No reviews available</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-200 border-b border-gray-300">
//               <th className="px-6 py-3 text-left">S.No</th>
//               <th className="px-6 py-3 text-left">Rating</th>
//               <th className="px-6 py-3 text-left">Review</th>
//               <th className="px-6 py-3 text-left">Ride ID</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review, index) => (
//               <tr key={review.reviewId} className="border-b border-gray-300">
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4">{review.rating}</td>
//                 <td className="px-6 py-4">{review.review}</td>
//                 <td className="px-6 py-4">{review.ride.rideId}</td>
//                 <td className="px-6 py-4 flex space-x-2">
//                   <button
//                     onClick={() => deleteReview(review.reviewId)}
//                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
//                     title="Delete"
//                   >
//                     Delete
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

// export default AdminReviews;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNabar';


const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch all reviews
    axios.get('http://localhost:8029/review/all')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to fetch reviews',
          icon: 'error'
        });
      });
  }, []);

  const deleteReview = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this review!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8029/review/${id}`)
          .then(() => {
            setReviews(reviews.filter(review => review.reviewId !== id));
            Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
          })
          .catch(error => {
            console.error('Error deleting review:', error);
            Swal.fire('Error', 'Failed to delete review', 'error');
          });
      }
    });
  };

  return (
    <div>
      <AdminNavbar />
      <h2 className="text-2xl font-semibold mb-4">Admin Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600">S.No</th>
                <th className="px-6 py-3 text-left text-gray-600">Rating</th>
                <th className="px-6 py-3 text-left text-gray-600">Review</th>
                <th className="px-6 py-3 text-left text-gray-600">Ride ID</th>
                <th className="px-6 py-3 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review.reviewId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 border-b border-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{review.rating}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{review.review}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{review.ride.rideId}</td>
                  <td className="px-6 py-4 border-b border-gray-200 flex space-x-2">
                    <button
                      onClick={() => deleteReview(review.reviewId)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                      title="Delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminReviews;

