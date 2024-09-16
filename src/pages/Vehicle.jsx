

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const AddVehicle = () => {
//     const [formData, setFormData] = useState({
//         vehicleName: '',
//         model: '',
//         numberPlate: '',
//         seatingCapacity: '',
//         carImage: null,
//         license: null,
//         rcBook: null,
//     });

//     const [errors, setErrors] = useState({});
//     const [submitting, setSubmitting] = useState(false);
//     const [carImagePreview, setCarImagePreview] = useState(null);
//     const [licensePreview, setLicensePreview] = useState(null);
//     const [rcBookPreview, setRcBookPreview] = useState(null);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;

//         if (type === 'file') {
//             setFormData(prevData => ({
//                 ...prevData,
//                 [name]: files[0],
//             }));

//             // Create a preview for the files
//             if (name === 'carImage' && files[0]) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => setCarImagePreview(reader.result);
//                 reader.readAsDataURL(files[0]);
//             }
//             if (name === 'license' && files[0]) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => setLicensePreview(reader.result);
//                 reader.readAsDataURL(files[0]);
//             }
//             if (name === 'rcBook' && files[0]) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => setRcBookPreview(reader.result);
//                 reader.readAsDataURL(files[0]);
//             }
//         } else {
//             setFormData(prevData => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }

//         // Clear error for the current field
//         setErrors(prevErrors => ({
//             ...prevErrors,
//             [name]: '',
//         }));
//     };

//     const validateValues = () => {
//         const newErrors = {};

//         if (!formData.vehicleName) newErrors.vehicleName = 'Vehicle name is required.';
//         if (!formData.model) newErrors.model = 'Model is required.';
//         if (!formData.numberPlate) newErrors.numberPlate = 'Number plate is required.';
//         if (!formData.seatingCapacity) newErrors.seatingCapacity = 'Seating capacity is required.';
//         if (!formData.carImage) newErrors.carImage = 'Car image is required.';
//         if (!formData.license) newErrors.license = 'License document is required.';
//         if (!formData.rcBook) newErrors.rcBook = 'RC Book is required.';

//         if (formData.numberPlate && !/^[A-Z0-9]{6,7}$/.test(formData.numberPlate)) {
//             newErrors.numberPlate = 'Number plate must be 6 to 7 alphanumeric characters.';
//         }

//         if (formData.seatingCapacity && (!/^\d+$/.test(formData.seatingCapacity) || parseInt(formData.seatingCapacity, 10) <= 0)) {
//             newErrors.seatingCapacity = 'Seating capacity must be a positive number.';
//         }

//         if (formData.carImage && !['image/jpeg', 'image/png'].includes(formData.carImage.type)) {
//             newErrors.carImage = 'Car image must be a JPEG or PNG file.';
//         }

//         if (formData.license && !['application/pdf', 'image/jpeg', 'image/png'].includes(formData.license.type)) {
//             newErrors.license = 'License document must be a PDF, JPEG, or PNG file.';
//         }

//         if (formData.rcBook && !['application/pdf', 'image/jpeg', 'image/png'].includes(formData.rcBook.type)) {
//             newErrors.rcBook = 'RC Book must be a PDF, JPEG, or PNG file.';
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

//         const formDataToSend = new FormData();
//         Object.keys(formData).forEach(key => {
//             if (formData[key]) {
//                 formDataToSend.append(key, formData[key]);
//             }
//         });

//         try {
//             await axios.post('http://localhost:8029/vehicle', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             Swal.fire({
//                 title: 'Vehicle Added Successfully!',
//                 icon: 'success',
//             });

//             navigate('/addride');
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
//                     {/* Car Image Section */}
//                     <div className="flex flex-col items-center mb-6">
//                         <label htmlFor="carImage" className="block text-gray-700 font-medium mb-2 text-center">
//                             Upload Car Image
//                         </label>
//                         {carImagePreview ? (
//                             <img
//                                 src={carImagePreview}
//                                 alt="Car Preview"
//                                 className="w-32 h-32 object-cover rounded mb-4"
//                             />
//                         ) : (
//                             <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
//                                 <span className="text-gray-500">No Image</span>
//                             </div>
//                         )}
//                         <input
//                             type="file"
//                             id="carImage"
//                             name="carImage"
//                             onChange={handleChange}
//                             className="border rounded py-2 px-3"
//                             accept="image/jpeg, image/png"
//                         />
//                         {errors.carImage && <div className="text-red-500 mt-1">{errors.carImage}</div>}
//                     </div>

//                     {/* Form Fields */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//                         <div>
//                             <label htmlFor="vehicleName" className="block text-gray-700 font-medium mb-2">Vehicle Name</label>
//                             <input
//                                 type="text"
//                                 id="vehicleName"
//                                 name="vehicleName"
//                                 value={formData.vehicleName}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.vehicleName && <div className="text-red-500 mt-1">{errors.vehicleName}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Model</label>
//                             <input
//                                 type="text"
//                                 id="model"
//                                 name="model"
//                                 value={formData.model}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.model && <div className="text-red-500 mt-1">{errors.model}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="numberPlate" className="block text-gray-700 font-medium mb-2">Number Plate</label>
//                             <input
//                                 type="text"
//                                 id="numberPlate"
//                                 name="numberPlate"
//                                 value={formData.numberPlate}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.numberPlate && <div className="text-red-500 mt-1">{errors.numberPlate}</div>}
//                         </div>
//                         <div>
//                             <label htmlFor="seatingCapacity" className="block text-gray-700 font-medium mb-2">Seating Capacity</label>
//                             <input
//                                 type="number"
//                                 id="seatingCapacity"
//                                 name="seatingCapacity"
//                                 value={formData.seatingCapacity}
//                                 onChange={handleChange}
//                                 className="border rounded w-full py-2 px-3"
//                             />
//                             {errors.seatingCapacity && <div className="text-red-500 mt-1">{errors.seatingCapacity}</div>}
//                         </div>
//                     </div>

//                     {/* License Document Section */}
//                     <div className="mb-6">
//                         <label htmlFor="license" className="block text-gray-700 font-medium mb-2">Upload License Document</label>
//                         {licensePreview ? (
//                             <img
//                                 src={licensePreview}
//                                 alt="License Preview"
//                                 className="w-32 h-32 object-cover rounded mb-4"
//                             />
//                         ) : (
//                             <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
//                                 <span className="text-gray-500">No Document</span>
//                             </div>
//                         )}
//                         <input
//                             type="file"
//                             id="license"
//                             name="license"
//                             onChange={handleChange}
//                             className="border rounded w-full py-2 px-3"
//                             accept="application/pdf, image/jpeg, image/png"
//                         />
//                         {errors.license && <div className="text-red-500 mt-1">{errors.license}</div>}
//                     </div>

//                     {/* RC Book Section */}
//                     <div className="mb-6">
//                         <label htmlFor="rcBook" className="block text-gray-700 font-medium mb-2">Upload RC Book</label>
//                         {rcBookPreview ? (
//                             <img
//                                 src={rcBookPreview}
//                                 alt="RC Book Preview"
//                                 className="w-32 h-32 object-cover rounded mb-4"
//                             />
//                         ) : (
//                             <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
//                                 <span className="text-gray-500">No Document</span>
//                             </div>
//                         )}
//                         <input
//                             type="file"
//                             id="rcBook"
//                             name="rcBook"
//                             onChange={handleChange}
//                             className="border rounded w-full py-2 px-3"
//                             accept="application/pdf, image/jpeg, image/png"
//                         />
//                         {errors.rcBook && <div className="text-red-500 mt-1">{errors.rcBook}</div>}
//                     </div>

//                     {/* Submit Button */}
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

// export default AddVehicle;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddVehicle = () => {
    const [formData, setFormData] = useState({
        vehicleName: '',
        model: '',
        numberPlate: '',
        seatingCapacity: '',
        carImage: null,
        license: null,
        rcBook: null,
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [carImagePreview, setCarImagePreview] = useState(null);
    const [licensePreview, setLicensePreview] = useState(null);
    const [rcBookPreview, setRcBookPreview] = useState(null);
    const [userId, setUserId] = useState(null); // State to store userId
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve userId from session storage or global state
        // Example: const userIdFromSession = sessionStorage.getItem('userId');
        const userIdFromSession = sessionStorage.getItem('userId');
        setUserId(userIdFromSession);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setFormData(prevData => ({
                ...prevData,
                [name]: files[0],
            }));

            // Create a preview for the files
            if (name === 'carImage' && files[0]) {
                const reader = new FileReader();
                reader.onloadend = () => setCarImagePreview(reader.result);
                reader.readAsDataURL(files[0]);
            }
            if (name === 'license' && files[0]) {
                const reader = new FileReader();
                reader.onloadend = () => setLicensePreview(reader.result);
                reader.readAsDataURL(files[0]);
            }
            if (name === 'rcBook' && files[0]) {
                const reader = new FileReader();
                reader.onloadend = () => setRcBookPreview(reader.result);
                reader.readAsDataURL(files[0]);
            }
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }

        // Clear error for the current field
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateValues = () => {
        const newErrors = {};

        if (!formData.vehicleName) newErrors.vehicleName = 'Vehicle name is required.';
        if (!formData.model) newErrors.model = 'Model is required.';
        if (!formData.numberPlate) newErrors.numberPlate = 'Number plate is required.';
        if (!formData.seatingCapacity) newErrors.seatingCapacity = 'Seating capacity is required.';
        if (!formData.carImage) newErrors.carImage = 'Car image is required.';
        if (!formData.license) newErrors.license = 'License document is required.';
        if (!formData.rcBook) newErrors.rcBook = 'RC Book is required.';

        if (formData.numberPlate && !/^[A-Z0-9]{6,10}$/.test(formData.numberPlate)) {
            newErrors.numberPlate = 'Number plate must be 6 to 10 alphanumeric characters.';
        }

        if (formData.seatingCapacity && (!/^\d+$/.test(formData.seatingCapacity) || parseInt(formData.seatingCapacity, 10) <= 0)) {
            newErrors.seatingCapacity = 'Seating capacity must be a positive number.';
        }

        if (formData.carImage && !['image/jpeg', 'image/png'].includes(formData.carImage.type)) {
            newErrors.carImage = 'Car image must be a JPEG or PNG file.';
        }

        if (formData.license && !['application/pdf', 'image/jpeg', 'image/png'].includes(formData.license.type)) {
            newErrors.license = 'License document must be a PDF, JPEG, or PNG file.';
        }

        if (formData.rcBook && !['application/pdf', 'image/jpeg', 'image/png'].includes(formData.rcBook.type)) {
            newErrors.rcBook = 'RC Book must be a PDF, JPEG, or PNG file.';
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

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        });

        // Add userId to the FormData
        if (userId) {
            formDataToSend.append('userId', userId);
        }

        try {
            await axios.post('http://localhost:8029/vehicle', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Vehicle Added Successfully!',
                icon: 'success',
            });
            navigate('/selectvehicle');
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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <button
                type="button"
                className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                onClick={() => navigate('/userdashboard')}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <form onSubmit={handleSubmit}>
                    {/* Car Image Section */}
                    <div className="flex flex-col items-center mb-6">
                        <label htmlFor="carImage" className="block text-gray-700 font-medium mb-2 text-center">
                            Upload Car Image
                        </label>
                        {carImagePreview ? (
                            <img
                                src={carImagePreview}
                                alt="Car Preview"
                                className="w-32 h-32 object-cover rounded mb-4"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="carImage"
                            name="carImage"
                            onChange={handleChange}
                            className="border rounded py-2 px-3"
                            accept="image/jpeg, image/png"
                        />
                        {errors.carImage && <div className="text-red-500 mt-1">{errors.carImage}</div>}
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="vehicleName" className="block text-gray-700 font-medium mb-2">Vehicle Name</label>
                            <input
                                type="text"
                                id="vehicleName"
                                name="vehicleName"
                                value={formData.vehicleName}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.vehicleName && <div className="text-red-500 mt-1">{errors.vehicleName}</div>}
                        </div>
                        <div>
                            <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Model</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.model && <div className="text-red-500 mt-1">{errors.model}</div>}
                        </div>
                        <div>
                            <label htmlFor="numberPlate" className="block text-gray-700 font-medium mb-2">Number Plate</label>
                            <input
                                type="text"
                                id="numberPlate"
                                name="numberPlate"
                                value={formData.numberPlate}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.numberPlate && <div className="text-red-500 mt-1">{errors.numberPlate}</div>}
                        </div>
                        <div>
                            <label htmlFor="seatingCapacity" className="block text-gray-700 font-medium mb-2">Seating Capacity</label>
                            <input
                                type="number"
                                id="seatingCapacity"
                                name="seatingCapacity"
                                value={formData.seatingCapacity}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            {errors.seatingCapacity && <div className="text-red-500 mt-1">{errors.seatingCapacity}</div>}
                        </div>
                    </div>

                    {/* License Document Section */}
                    <div className="mb-6">
                        <label htmlFor="license" className="block text-gray-700 font-medium mb-2">Upload License Document</label>
                        {licensePreview ? (
                            <img
                                src={licensePreview}
                                alt="License Preview"
                                className="w-32 h-32 object-cover rounded mb-4"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                                <span className="text-gray-500">No Document</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="license"
                            name="license"
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            accept="application/pdf, image/jpeg, image/png"
                        />
                        {errors.license && <div className="text-red-500 mt-1">{errors.license}</div>}
                    </div>

                    {/* RC Book Section */}
                    <div className="mb-6">
                        <label htmlFor="rcBook" className="block text-gray-700 font-medium mb-2">Upload RC Book</label>
                        {rcBookPreview ? (
                            <img
                                src={rcBookPreview}
                                alt="RC Book Preview"
                                className="w-32 h-32 object-cover rounded mb-4"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                                <span className="text-gray-500">No Document</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="rcBook"
                            name="rcBook"
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            accept="application/pdf, image/jpeg, image/png"
                        />
                        {errors.rcBook && <div className="text-red-500 mt-1">{errors.rcBook}</div>}
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

export default AddVehicle;


