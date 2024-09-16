
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import LandingPage from './pages/Landing';
import LoginPage from './pages/PassengerLogin';
import AdminLoginPage from './pages/AdminLogin';
import UserRegistration from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AddVehicle from './pages/Vehicle';
import AddRide from './pages/Ride';
import NotFound from './pages/NotFound';
import RideList from './pages/SearchRide';
import RideSelection from './pages/RideSelection';
import AdminUsers from './pages/AdminUser';
import PendingBookings from './pages/AdminBooking';
import PaymentPage from './pages/Payment';
import AdminHomePage from './pages/AdminDashboard';
import VehicleTable from './pages/AdminVehicle';
import RideTable from './pages/AdminRide';
import HomePage from './pages/UserHomePage';
import RatingPage from './pages/RatingPage';
import TrackingPage from './pages/Tracking';
import PaymentTable from './pages/AdminPayment';
import VehicleSelector from './pages/SelectVehicle';
import BookingRequest from './pages/BookingRequest';
import AdminReviews from './pages/AdminRating';
import ProtectedRoute from './components/PrivateRoute'; // Import your ProtectedRoute component

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/userlogin" element={<LoginPage />} />
            <Route path="/adminlogin" element={<AdminLoginPage />} />
            <Route path="/register" element={<UserRegistration />} />
            
            {/* Protected routes */}
            <Route path="/userdashboard" element={<ProtectedRoute element={UserDashboard} />} />
            <Route path="/vehicle" element={<ProtectedRoute element={AddVehicle} />} />
            <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
            <Route path="/ride" element={<ProtectedRoute element={AddRide} />} />
            <Route path="/searchride" element={<ProtectedRoute element={RideList} />} />
            <Route path="/rideselection" element={<ProtectedRoute element={RideSelection} />} />
            <Route path="/admindashboard" element={<ProtectedRoute element={AdminHomePage} adminOnly={true} />} />
            <Route path="/adminuser" element={<ProtectedRoute element={AdminUsers} adminOnly={true} />} />
            <Route path="/adminbooking" element={<ProtectedRoute element={PendingBookings} adminOnly={true} />} />
            <Route path="/payment/:payId" element={<ProtectedRoute element={PaymentPage} />} />
            <Route path="/adminvehicle" element={<ProtectedRoute element={VehicleTable} adminOnly={true} />} />
            <Route path="/adminride" element={<ProtectedRoute element={RideTable} adminOnly={true} />} />
            <Route path="/rating" element={<ProtectedRoute element={RatingPage} />} />
            <Route path="/tracking" element={<ProtectedRoute element={TrackingPage} />} />
            <Route path="/adminpayment" element={<ProtectedRoute element={PaymentTable} adminOnly={true} />} />
            <Route path="/selectvehicle" element={<ProtectedRoute element={VehicleSelector} />} />
            <Route path="/bookingrequest" element={<ProtectedRoute element={BookingRequest} />} />
            <Route path="/adminrating" element={<ProtectedRoute element={AdminReviews} adminOnly={true} />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
