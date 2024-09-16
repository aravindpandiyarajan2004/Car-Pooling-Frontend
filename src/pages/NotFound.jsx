import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-12">
      <h1 className="text-4xl mb-5">404 - Page Not Found</h1>
      <img
        src="https://flexdata.accuratesoftware.online/assets/images/not-found/6358482.jpg"
        alt="Not Found"
        className="h-30 w-full max-w-2xl mx-auto"
      />
      <button
        onClick={() => navigate('/userlogin')}
        className="mt-6 text-lg px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Go to Login Page
      </button>
    </div>
  );
};

export default NotFound;
