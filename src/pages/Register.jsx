

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const UserRegistration = () => {
//     const [inputData, setInputData] = useState({
//         name: '',
//         email: '',
//         mobile: '',
//         dob: '',
//         address: '',
//         city: '',
//         state: '',
//         password: '',
//         confirmPassword: '',
//         gender: '',
//         profileImg: null,
//         accountStatus: 'Pending',
//         idProof: null,
//     });

//     const [errors, setErrors] = useState({});
//     const [submitting, setSubmitting] = useState(false);
//     const [passwordStrength, setPasswordStrength] = useState('');
//     const [profileImgPreview, setProfileImgPreview] = useState(null);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;

//         if (type === 'file') {
//             setInputData((prevData) => ({
//                 ...prevData,
//                 [name]: files[0],
//             }));

//             // Create a preview for the profile image
//             if (name === 'profileImg' && files[0]) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                     setProfileImgPreview(reader.result);
//                 };
//                 reader.readAsDataURL(files[0]);
//             }
//         } else {
//             setInputData((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }

//         if (name === 'password') {
//             const password = value;
//             const hasUppercase = /[A-Z]/.test(password);
//             const hasLowercase = /[a-z]/.test(password);
//             const hasNumber = /\d/.test(password);
//             const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~|\\-]/.test(password);
//             const isLengthValid = password.length >= 6;

//             if (isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
//                 setPasswordStrength('Strong');
//             } else {
//                 setPasswordStrength('Weak');
//             }
//         }

//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             [name]: '',
//         }));
//     };

//     const validateValues = () => {
//         const newErrors = {};

//         if (!inputData.name) newErrors.name = 'Name is required.';
//         if (!inputData.email) newErrors.email = 'Email is required.';
//         if (!inputData.mobile) newErrors.mobile = 'Mobile number is required.';
//         if (!inputData.dob) newErrors.dob = 'Date of Birth is required.';
//         if (!inputData.address) newErrors.address = 'Address is required.';
//         if (!inputData.city) newErrors.city = 'City is required.';
//         if (!inputData.state) newErrors.state = 'State is required.';
//         if (!inputData.password) newErrors.password = 'Password is required.';
//         if (!inputData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required.';
//         if (!inputData.gender) newErrors.gender = 'Gender must be selected.';
//         if (!inputData.profileImg) newErrors.profileImg = 'Profile Image is required.';
//         if (!inputData.idProof) newErrors.idProof = 'ID Proof is required.';

//         if (inputData.name && /[^a-zA-Z\s]/.test(inputData.name)) {
//             newErrors.name = 'Name should contain only alphabets.';
//         }

//         if (inputData.mobile && (!/^\d{10}$/.test(inputData.mobile))) {
//             newErrors.mobile = 'Mobile number must be 10 digits long and contain only numbers.';
//         }

//         if (inputData.password) {
//             const password = inputData.password;
//             const hasUppercase = /[A-Z]/.test(password);
//             const hasLowercase = /[a-z]/.test(password);
//             const hasNumber = /\d/.test(password);
//             const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~|\\-]/.test(password);
//             const isLengthValid = password.length >= 6;

//             if (!isLengthValid) {
//                 newErrors.password = 'Password must be at least 6 characters long.';
//             } else if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
//                 newErrors.password = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
//             }
//         }

//         if (inputData.password && inputData.confirmPassword && inputData.password !== inputData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match.';
//         }

//         if (inputData.idProof) {
//             const allowedFormats = ['application/pdf', 'image/jpeg'];
//             if (!allowedFormats.includes(inputData.idProof.type)) {
//                 newErrors.idProof = 'ID Proof must be a PDF or JPG file.';
//             }
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitting(true);

//         if (!validateValues()) {
//             setSubmitting(false);
//             return;
//         }

//         if (passwordStrength === 'Weak') {
//             Swal.fire({
//                 title: 'Weak Password',
//                 text: 'Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
//                 icon: 'warning',
//             });
//             setSubmitting(false);
//             return;
//         }

//         const formData = new FormData();
//         Object.keys(inputData).forEach((key) => {
//             if (inputData[key]) {
//                 formData.append(key, inputData[key]);
//             }
//         });

//         try {
//             await axios.post('http://localhost:8029/user', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             Swal.fire({
//                 title: 'Registered Successfully!',
//                 icon: 'success',
//             });

//             navigate('/user-login');
//         } catch (err) {
//             console.error('Submit Error:', err);
//             Swal.fire({
//                 title: 'Error',
//                 text: 'An error occurred. Please try again.',
//                 icon: 'error',
//             });
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const getPasswordStrengthColor = () => {
//         return passwordStrength === 'Strong' ? 'text-green-500' : 'text-red-500';
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <button
//                 type="button"
//                 className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center"
//                 onClick={() => navigate('/')}
//             >
//                 <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
//             </button>
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//                 <form onSubmit={handleSubmit}>
//                     {/* Profile Image Section */}
//                     <div className="flex flex-col items-center mb-6">
//                         <label
//                             htmlFor="profileImg"
//                             className="block text-gray-700 font-medium mb-2 text-center"
//                         >
//                             Upload Profile Photo
//                         </label>
//                         {profileImgPreview ? (
//                             <img
//                                 src={profileImgPreview}
//                                 alt="Profile Preview"
//                                 className="w-32 h-32 object-cover rounded-full mb-4"
//                             />
//                         ) : (
//                             <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
//                                 <span className="text-gray-500">No Image</span>
//                             </div>
//                         )}
//                         <input
//                             type="file"
//                             id="profileImg"
//                             name="profileImg"
//                             onChange={handleChange}
//                             className="border rounded py-2 px-3"
//                         />
//                         {errors.profileImg && <div className="text-red-500 mt-1">{errors.profileImg}</div>}
//                     </div>

//                     {/* Form Fields */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//                         <div>
//                             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={inputData.name}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.name && <div className="text-red-500 mt-1">{errors.name}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={inputData.email}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
//                             <input
//                                 type="text"
//                                 id="mobile"
//                                 name="mobile"
//                                 value={inputData.mobile}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.mobile && <div className="text-red-500 mt-1">{errors.mobile}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
//                             <input
//                                 type="date"
//                                 id="dob"
//                                 name="dob"
//                                 value={inputData.dob}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.dob && <div className="text-red-500 mt-1">{errors.dob}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
//                             <input
//                                 type="text"
//                                 id="address"
//                                 name="address"
//                                 value={inputData.address}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.address && <div className="text-red-500 mt-1">{errors.address}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 name="city"
//                                 value={inputData.city}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.city && <div className="text-red-500 mt-1">{errors.city}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
//                             <input
//                                 type="text"
//                                 id="state"
//                                 name="state"
//                                 value={inputData.state}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.state && <div className="text-red-500 mt-1">{errors.state}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
//                             <select
//                                 id="gender"
//                                 name="gender"
//                                 value={inputData.gender}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             >
//                                 <option value="">Select</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                             {errors.gender && <div className="text-red-500 mt-1">{errors.gender}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="idProof" className="block text-gray-700 font-medium mb-2">ID Proof</label>
//                             <input
//                                 type="file"
//                                 id="idProof"
//                                 name="idProof"
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.idProof && <div className="text-red-500 mt-1">{errors.idProof}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={inputData.password}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                                 style={{ borderColor: getPasswordStrengthColor() }}
//                             />
//                             {errors.password && <div className="text-red-500 mt-1">{errors.password}</div>}
//                             {inputData.password && (
//                                 <div className={`mt-2 ${getPasswordStrengthColor()}`}>
//                                     Password Strength: {passwordStrength}
//                                 </div>
//                             )}
//                         </div>
//                         <div>
//                             <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//                             <input
//                                 type="password"
//                                 id="confirmPassword"
//                                 name="confirmPassword"
//                                 value={inputData.confirmPassword}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.confirmPassword && <div className="text-red-500 mt-1">{errors.confirmPassword}</div>}
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <button
//                             type="submit"
//                             disabled={submitting}
//                             className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
//                         >
//                             {submitting ? 'Submitting...' : 'Submit'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserRegistration;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserRegistration = () => {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        password: '',
        confirmPassword: '',
        gender: '',
        profileImg: null,
        accountStatus: 'Pending',
        idProof: null,
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [profileImgPreview, setProfileImgPreview] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setInputData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));

            // Create a preview for the profile image
            if (name === 'profileImg' && files[0]) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfileImgPreview(reader.result);
                };
                reader.readAsDataURL(files[0]);
            }
        } else {
            setInputData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        if (name === 'password') {
            const password = value;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~|\\-]/.test(password);
            const isLengthValid = password.length >= 6;

            if (isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
                setPasswordStrength('Strong');
            } else {
                setPasswordStrength('Weak');
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateValues = () => {
        const newErrors = {};

        if (!inputData.name) newErrors.name = 'Name is required.';
        if (!inputData.email) newErrors.email = 'Email is required.';
        if (!inputData.mobile) newErrors.mobile = 'Mobile number is required.';
        if (!inputData.dob) newErrors.dob = 'Date of Birth is required.';
        if (!inputData.address) newErrors.address = 'Address is required.';
        if (!inputData.city) newErrors.city = 'City is required.';
        if (!inputData.state) newErrors.state = 'State is required.';
        if (!inputData.password) newErrors.password = 'Password is required.';
        if (!inputData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required.';
        if (!inputData.gender) newErrors.gender = 'Gender must be selected.';
        if (!inputData.profileImg) newErrors.profileImg = 'Profile Image is required.';
        if (!inputData.idProof) newErrors.idProof = 'ID Proof is required.';

        if (inputData.name && /[^a-zA-Z\s]/.test(inputData.name)) {
            newErrors.name = 'Name should contain only alphabets.';
        }

        if (inputData.mobile && (!/^\d{10}$/.test(inputData.mobile))) {
            newErrors.mobile = 'Mobile number must be 10 digits long and contain only numbers.';
        }

        if (inputData.password) {
            const password = inputData.password;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~|\\-]/.test(password);
            const isLengthValid = password.length >= 6;

            if (!isLengthValid) {
                newErrors.password = 'Password must be at least 6 characters long.';
            } else if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
                newErrors.password = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
            }
        }

        if (inputData.password && inputData.confirmPassword && inputData.password !== inputData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (inputData.idProof) {
            const allowedFormats = ['application/pdf', 'image/jpeg'];
            if (!allowedFormats.includes(inputData.idProof.type)) {
                newErrors.idProof = 'ID Proof must be a PDF or JPG file.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!validateValues()) {
            setSubmitting(false);
            return;
        }

        if (passwordStrength === 'Weak') {
            Swal.fire({
                title: 'Weak Password',
                text: 'Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
                icon: 'warning',
            });
            setSubmitting(false);
            return;
        }

        const formData = new FormData();
        Object.keys(inputData).forEach((key) => {
            if (inputData[key]) {
                formData.append(key, inputData[key]);
            }
        });

        try {
            await axios.post('http://localhost:8029/user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Registered Successfully!',
                icon: 'success',
            });

            navigate('/userlogin');
        } catch (err) {
            console.error('Submit Error:', err);
            Swal.fire({
                title: 'Error',
                text: 'An error occurred. Please try again.',
                icon: 'error',
            });
        } finally {
            setSubmitting(false);
        }
    };

    const getPasswordStrengthColor = () => {
        return passwordStrength === 'Strong' ? 'text-green-500' : 'text-red-500';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <button
                type="button"
                className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                onClick={() => navigate('/')}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <form onSubmit={handleSubmit}>
                    {/* Profile Image Section */}
                    <div className="flex flex-col items-center mb-6">
                        <label
                            htmlFor="profileImg"
                            className="block text-gray-700 font-medium mb-2 text-center"
                        >
                            Upload Profile Photo
                        </label>
                        {profileImgPreview ? (
                            <img
                                src={profileImgPreview}
                                alt="Profile Preview"
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="profileImg"
                            name="profileImg"
                            onChange={handleChange}
                            className="border rounded py-2 px-3"
                        />
                        {errors.profileImg && <div className="text-red-500 mt-1">{errors.profileImg}</div>}
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.name && <div className="text-red-500 mt-1">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={inputData.email}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={inputData.mobile}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.mobile && <div className="text-red-500 mt-1">{errors.mobile}</div>}
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={inputData.dob}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.dob && <div className="text-red-500 mt-1">{errors.dob}</div>}
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={inputData.address}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.address && <div className="text-red-500 mt-1">{errors.address}</div>}
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={inputData.city}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.city && <div className="text-red-500 mt-1">{errors.city}</div>}
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={inputData.state}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.state && <div className="text-red-500 mt-1">{errors.state}</div>}
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={inputData.gender}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <div className="text-red-500 mt-1">{errors.gender}</div>}
                        </div>
                    </div>

                    {/* ID Proof Section */}
                    <div className="mb-6 w-full">
                        <label htmlFor="idProof" className="block text-gray-700 font-medium mb-2">ID Proof</label>
                        <input
                            type="file"
                            id="idProof"
                            name="idProof"
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                        />
                        {errors.idProof && <div className="text-red-500 mt-1">{errors.idProof}</div>}
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={inputData.password}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                style={{ borderColor: getPasswordStrengthColor() }}
                            />
                            {errors.password && <div className="text-red-500 mt-1">{errors.password}</div>}
                            {inputData.password && (
                                <div className={`mt-2 ${getPasswordStrengthColor()}`}>
                                    Password Strength: {passwordStrength}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={inputData.confirmPassword}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.confirmPassword && <div className="text-red-500 mt-1">{errors.confirmPassword}</div>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mb-6">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
                        >
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserRegistration;

