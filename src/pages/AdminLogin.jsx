
import React, { useState } from 'react';
import { FaCar, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported
import { useAuth } from '../components/AuthContext';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});


const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { loginAdmin } = useAuth();

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
    } else if (password.length !== 7) {
      errors.password = 'Password must be exactly 7 characters long.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        // Convert email to lowercase for case-insensitive comparison
        const response = await axios.post('http://localhost:8029/admin/login', {
          email: email.toLowerCase(), // Send email in lowercase
          password
        });

        if (response.data) {
         loginAdmin(response.data.adminId);
          sessionStorage.setItem('adminId', response.data.adminId);
          sessionStorage.setItem('adminEmail', response.data.email);

          await Toast.fire({
            icon: 'success',
            title: 'Logged in successfully',
          });

          setEmail('');
          setPassword('');
          setErrors({ email: '', password: '' });
          navigate('/admindashboard');
        } else {
          setErrors({ email: '', password: 'Invalid email or password' });
        }
      } catch (err) {
        await Toast.fire({
          icon: 'error',
          title: 'Login failed',
        });

        setErrors({ email: '', password: 'Invalid email or password' });
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors(prevErrors => ({ ...prevErrors, email: '' }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) setErrors(prevErrors => ({ ...prevErrors, password: '' }));
  };

  return (
    <div className="flex h-screen">
      <div 
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('https://image.freepik.com/free-vector/car-sharing-service-mobile-city-transportation-business-concept-illustration_114835-111.jpg')" }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-10 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">Admin Login</h2>
          <p className="text-gray-600 text-lg text-center mb-8">Please enter your credentials to access the admin dashboard.</p>
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
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                  className={`w-full pl-12 p-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                  placeholder="Enter your password"
                  maxLength={7}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white px-5 py-4 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300"
            >
              <FaCar className="inline-block mr-3" /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

