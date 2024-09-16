
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Profile = ({ user, profileImage, handleSave, handleEdit, editMode, formData, handleChange }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img
                src={profileImage || 'https://via.placeholder.com/100'}
                alt="User Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6"
            />
            <div className="flex-1">
                {editMode ? (
                    <div>
                        {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
                            <div className="mb-4" key={field}>
                                <label className="block text-gray-700 capitalize">{field}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field] || ''}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                />
                            </div>
                        ))}
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <div>
                        {['name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'gender'].map((field) => (
                            <p key={field} className="mb-2">
                                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {user?.[field]}
                            </p>
                        ))}
                        <button
                            onClick={handleEdit}
                            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
