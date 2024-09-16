
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../components/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const validateForm = () => {
    let valid = true;
    let errors = { email: '', password: '' };

    if (!email) {
      errors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid.';
      valid = false;
    }

    if (!password) {
      errors.password = 'Password is required.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8029/user/login', { email, password });

        if (response.status === 200) {
         loginUser(response.data.userId);
          // Successful login
          Swal.fire({
            icon: 'success',
            title: 'Logged in successfully',
            text: 'Welcome back! '+response.data.name,
          });
          sessionStorage.setItem('userId', response.data.userId);
          sessionStorage.setItem('userName', response.data.name);
          sessionStorage.setItem('userEmail', response.data.email);

          navigate('/userdashboard'); // Redirect to user dashboard
        }
      } catch (error) {
        if (error.response) {
          // Server responded with an error
          const { status, data } = error.response;
          if (status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: data,
            });
          } else if (status === 403) {
            Swal.fire({
              icon: 'warning',
              title: 'Registration Pending',
              text: data,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An unexpected error occurred.',
            });
          }
        } else {
          // Network error or other issue
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Unable to connect to the server. Please try again later.',
          });
        }
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('https://crinsurance.com.au/wp-content/uploads/2023/07/Ride-Share-1-1024x726.jpg')" }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-10 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
          <p className="text-gray-600 text-lg text-center mb-8">Please enter your credentials to access your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-5">
              <label htmlFor="email" className="block text-gray-700 text-xl font-medium mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: '' })); }}
                  className={`w-full pl-12 p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div className="relative mb-6">
              <label htmlFor="password" className="block text-gray-700 text-xl font-medium mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((prev) => ({ ...prev, password: '' })); }}
                  className={`w-full pl-12 p-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-5 py-4 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <div className="text-center mt-5">
              <p className="text-gray-600 text-lg">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
