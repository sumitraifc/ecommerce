import React, { useState } from 'react';
import { Camera, Check, ChevronDown, Calendar, Mail, Phone, User, MapPin } from 'lucide-react';

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Demo Customer',
    country: 'Bangladesh',
    mobile: '01000000405',
    countryCode: '+880',
    gender: '',
    dateOfBirth: '',
    email: 'user@readyecommerce.com'
  });

  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const countries = [
    'Bangladesh', 'India', 'Pakistan', 'United States', 'United Kingdom', 
    'Canada', 'Australia', 'Germany', 'France', 'Japan'
  ];

  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  const countryCodes = [
    { code: '+880', country: 'BD' },
    { code: '+91', country: 'IN' },
    { code: '+92', country: 'PK' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    // Here you would typically send the data to your API
    console.log('Updating profile:', profileData);
    setIsEditing(false);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 dark:bg-darkBg dark:text-darkText">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 dark:bg-darkBg dark:text-darkText">
          <h1 className="text-3xl font-bold text-gray-900 dark:bg-darkBg dark:text-darkText ">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ">
         {/* Profile Picture Section */}
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4">
      {/* Top Row: Profile Pic label left + Verified right */}
    <div className="flex justify-between items-center mb-4">
      <span className="text-pink-500 text-sm font-medium">Profile Picture</span>
      <div className="px-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
        <Check className="w-5 h-5 bg-green-800 p-1 rounded-full" />
        Verified
      </div>
    </div>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
  {/* Profile Picture Section */}
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-8 rounded-lg flex justify-center">
    <div className="w-full max-w-md flex flex-col items-center">
      
      {/* Profile Picture */}
      <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center overflow-hidden">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
        )}
      </div>

      {/* Change Photo button below */}
      <div className="mt-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="profile-image"
        />
        <label
          htmlFor="profile-image"
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
        >
          <Camera className="w-4 h-4 mr-2" />
          Change Photo
        </label>
      </div>
    </div>
  </div>
</div>

</div>


          {/* Form Section */}
          <div className="p-8 dark:bg-darkBg dark:text-darkText">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-black dark:bg-darkBg dark:text-darkText mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1   focus:outline-none focus:ring-color3 focus:border-transparent transition-colors dark:bg-darkBg dark:text-darkText"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Country Field */}
              <div>
                <label className="block text-sm font-medium text-black dark:bg-darkBg dark:text-darkText mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Country
                </label>
                <div className="relative">
                  <select
                    value={profileData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1  dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-color3 focus:border-transparent appearance-none bg-white transition-colors"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-sm font-medium text-black dark:bg-darkBg dark:text-darkText mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={profileData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-1  dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-color3 focus:border-transparent bg-gray-50"
                  >
                    {countryCodes.map(item => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={profileData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-1  dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-color3 focus:border-transparent transition-colors"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              {/* Gender Field */}
              <div>
                <label className="block text-sm font-medium text-black dark:bg-darkBg dark:text-darkText mb-2">
                  Gender
                </label>
                <div className="relative">
                  <select
                    value={profileData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1  dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-color3 focus:border-transparent appearance-none bg-white transition-colors"
                  >
                    <option value="">Select a gender</option>
                    {genderOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Date of Birth Field */}
              <div>
                <label className="block text-sm font-medium text-black dark:bg-darkBg dark:text-darkText mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 dark:bg-darkBg dark:text-darkText  focus:outline-none focus:ring-color3 focus:border-transparent transition-colors"
                />
              </div>

              {/* Email Field */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                {/* Left side: Label */}
                <label className="flex items-center text-sm font-medium text-black dark:bg-darkBg dark:text-darkText">
                    <Mail className="w-4 h-4 mr-1" />
                    Email Address
                </label>

                {/* Right side: Verified */}
                <span className="inline-flex items-center text-xs text-green-700">
                    <Check className="w-4 h-4 mr-1 bg-green-500 rounded-full p-1 text-white" />
                    Verified
                </span>
                </div>

                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1   dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-color3 focus:border-transparent transition-colors"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            {/* Update Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleUpdateProfile}
                className="px-8 py-3 bg-color3 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center"
              >
                Update Profile
              </button>
              {/* <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-8 py-3 border border-gray-300 text-black dark:bg-darkBg dark:text-darkText font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button> */}
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        {/* <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Account Status:</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Member Since:</span>
              <span className="font-medium">January 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Last Updated:</span>
              <span className="font-medium">Today</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyProfile;