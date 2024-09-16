// import React, { useState } from 'react';
// import StarRatings from 'react-star-ratings';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const RatingPage = () => {
//     const [rating, setRating] = useState(0);
//     const [feedback, setFeedback] = useState('');
//     const [rideId, setRideId] = useState(sessionStorage.getItem('rideId'));
//     const [userId, setUserId] = useState(sessionStorage.getItem('userId'));

 
//     const handleRatingChange = (newRating) => {
//         setRating(newRating);
//     };

//     const handleFeedbackChange = (event) => {
//         setFeedback(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!userId) {
//             Swal.fire('Error', 'User ID is missing from session storage.', 'error');
//             return;
//         }

//         try {
//             const review = {
//                 rating: rating,
//                 review: feedback,
//                 ride: rideId 
//             };

//             console.log(review);
//             const response = await axios.post('http://localhost:8029/review', review, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.data === 'Success') {
//                 Swal.fire('Success', 'Review submitted successfully!', 'success');
//                 setRating(0);
//                 setFeedback('');
//             } else {
//                 Swal.fire('Error', 'Failed to submit review.', 'error');
//             }
//         } catch (error) {
//             Swal.fire('Error', 'An error occurred while submitting the review.', 'error');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Rate Your Experience</h1>
//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="mb-4">
//                     <StarRatings
//                         rating={rating}
//                         starRatedColor="gold"
//                         changeRating={handleRatingChange}
//                         numberOfStars={5}
//                         name='rating'
//                         starDimension="30px"
//                         starSpacing="5px"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2" htmlFor="feedback">
//                         Your Feedback
//                     </label>
//                     <textarea
//                         id="feedback"
//                         value={feedback}
//                         onChange={handleFeedbackChange}
//                         rows="4"
//                         className="border p-2 w-full rounded"
//                         placeholder="Write your feedback here..."
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RatingPage;


import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

const RatingPage = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [rideId, setRideId] = useState(sessionStorage.getItem('rideId'));
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const navigate = useNavigate();

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!userId || !rideId) {
            Swal.fire('Error', 'User ID or Ride ID is missing from session storage.', 'error');
            return;
        }

        try {
            const review = new FormData();
            review.append('rating', rating);
            review.append('review', feedback);
            review.append('rideId', rideId)
            console.log(review);

            const response = await axios.post('http://localhost:8029/review', review)
             console.log(response);

            if (response.data === 'Success') {
                Swal.fire('Success', 'Review submitted successfully!', 'success');
                navigate('/userdashboard');
                setRating(0);
                setFeedback('');
            } else {
                Swal.fire('Error', 'Failed to submit review.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'An error occurred while submitting the review.', 'error');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Rate Your Experience</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        changeRating={handleRatingChange}
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="5px"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="feedback">
                        Your Feedback
                    </label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        rows="4"
                        className="border p-2 w-full rounded"
                        placeholder="Write your feedback here..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RatingPage;

