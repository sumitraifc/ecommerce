import { useState } from 'react';
import { Eye, EyeOff, Check, X, User } from 'lucide-react';

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    return requirements;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
    setSuccess(false);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});

    // Validation
    const newErrors = {};
    
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else {
      const requirements = validatePassword(formData.newPassword);
      if (!Object.values(requirements).every(Boolean)) {
        newErrors.newPassword = 'Password does not meet requirements';
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // TODO: Replace with your actual API call
    try {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      }, 2000);
      
      // Example API call:
      // const response = await fetch('/api/change-password', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     currentPassword: formData.currentPassword,
      //     newPassword: formData.newPassword
      //   })
      // });
      // 
      // if (response.ok) {
      //   setSuccess(true);
      //   setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      // } else {
      //   const errorData = await response.json();
      //   setErrors({ general: errorData.message });
      // }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
      setIsSubmitting(false);
    }
  };

  const passwordRequirements = validatePassword(formData.newPassword);

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center py-4 text-sm text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Change Password</span>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Change Password</h1>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Password updated successfully!</span>
            </div>
          </div>
        )}

        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <X className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-800 font-medium">{errors.general}</span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="space-y-6">
            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.current ? 'text' : 'password'}
                  id="currentPassword"
                  value={formData.currentPassword}
                  onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                  placeholder="Enter Current Password"
                  className={`w-full px-3 py-3 border rounded-lg focus:ring-1 focus:ring-color3 focus:outline-none pr-10 ${
                    errors.currentPassword ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.currentPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Create New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? 'text' : 'password'}
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={(e) => handleInputChange('newPassword', e.target.value)}
                  placeholder="Enter Create New Password"
                  className={`w-full px-3 py-3 border rounded-lg focus:ring-1 focus:ring-color3  focus:outline-none pr-10 ${
                    errors.newPassword ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
              )}
            </div>

            {/* Password Requirements */}
            {formData.newPassword && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { key: 'length', text: 'At least 8 characters' },
                    { key: 'uppercase', text: 'One uppercase letter' },
                    { key: 'lowercase', text: 'One lowercase letter' },
                    { key: 'number', text: 'One number' },
                    { key: 'special', text: 'One special character' }
                  ].map(({ key, text }) => (
                    <div key={key} className="flex items-center">
                      {passwordRequirements[key] ? (
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mr-2" />
                      )}
                      <span className={passwordRequirements[key] ? 'text-green-700' : 'text-gray-600'}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? 'text' : 'password'}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm New Password"
                  className={`w-full px-3 py-3 border rounded-lg focus:ring-1 focus:ring-color3  focus:outline-none pr-10 ${
                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
              {formData.confirmPassword && formData.newPassword === formData.confirmPassword && (
                <div className="mt-1 flex items-center text-green-600">
                  <Check className="w-4 h-4 mr-1" />
                  <span className="text-sm">Passwords match</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-color3 text-white font-medium rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Updating Password...' : 'Update Password'}
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}