import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
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


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/userlogin" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/vehicle" element={<AddVehicle />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ride" element={<AddRide />} />
          <Route path="/searchride" element={<RideList />} />
          <Route path="/rideselection" element={<RideSelection/>} />
          <Route path="/admindashboard" element={<AdminHomePage />} />
          <Route path="/adminuser" element={<AdminUsers />} />
          <Route path="/adminbooking" element={<PendingBookings />} />
          <Route path="/payment/:payId" element={<PaymentPage />} />
          <Route path="/adminvehicle" element={<VehicleTable />} />
          <Route path="/adminride" element={<RideTable />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/adminpayment" element={<PaymentTable />} />
          <Route path="/selectvehicle" element={<VehicleSelector />} />
          <Route path="/bookingrequest" element={<BookingRequest />} />
          <Route path="/adminrating" element={<AdminReviews />} />
          <Route path="*" element={<NotFound/>} />
         </Routes>
       
    </div>
    </Router>
  );
}

export default App;
