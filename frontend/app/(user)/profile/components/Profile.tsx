'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (234) 567-890',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Billing',
      fullName: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Shipping',
      fullName: 'John Doe',
      street: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      country: 'United States',
      isDefault: false,
    },
  ]);

  const [orders] = useState([
    {
      id: 'DP-001234',
      date: 'March 15, 2024',
      total: '$149.99',
      status: 'Delivered',
      items: 3,
    },
    {
      id: 'DP-001233',
      date: 'March 10, 2024',
      total: '$89.50',
      status: 'Delivered',
      items: 2,
    },
    {
      id: 'DP-001232',
      date: 'February 28, 2024',
      total: '$199.99',
      status: 'In Transit',
      items: 5,
    },
    {
      id: 'DP-001231',
      date: 'February 15, 2024',
      total: '$75.00',
      status: 'Delivered',
      items: 1,
    },
  ]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Handle save logic here
    console.log('Profile saved:', profileData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
              <p style={{ color: '#00000099' }} className="mt-2">
                Manage your profile, orders, and preferences
              </p>
            </div>
            <Link href="/shop">
              <button
                className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: '#4ea674' }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* User Info Card */}
              <div className="p-6 border-b border-gray-200 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p style={{ color: '#00000099' }}>{profileData.email}</p>
              </div>

              {/* Navigation Menu */}
              <nav className="p-4 space-y-2">
                {[
                  { id: 'profile', label: 'My Profile' },
                  { id: 'orders', label: 'My Orders' },
                  { id: 'addresses', label: 'Addresses' },
                  { id: 'wishlist', label: 'Wishlist' },
                  { id: 'settings', label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                      activeTab === item.id
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: activeTab === item.id ? '#4ea674' : 'transparent',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Logout Button */}
              <div className="p-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 border-2 rounded-lg font-semibold transition hover:bg-gray-50" style={{ borderColor: '#4ea674', color: '#4ea674' }}>
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className="px-4 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{
                      backgroundColor: editMode ? '#4ea674' : 'transparent',
                      color: editMode ? 'white' : '#4ea674',
                      border: editMode ? 'none' : '2px solid #4ea674',
                    }}
                  >
                    {editMode ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          First Name
                        </label>
                        {editMode ? (
                          <input
                            type="text"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          />
                        ) : (
                          <p style={{ color: '#00000099' }}>{profileData.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Last Name
                        </label>
                        {editMode ? (
                          <input
                            type="text"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          />
                        ) : (
                          <p style={{ color: '#00000099' }}>{profileData.lastName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Date of Birth
                        </label>
                        {editMode ? (
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={profileData.dateOfBirth}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          />
                        ) : (
                          <p style={{ color: '#00000099' }}>
                            {new Date(profileData.dateOfBirth).toLocaleDateString()}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Gender
                        </label>
                        {editMode ? (
                          <select
                            name="gender"
                            value={profileData.gender}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        ) : (
                          <p style={{ color: '#00000099' }}>{profileData.gender}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address
                        </label>
                        {editMode ? (
                          <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          />
                        ) : (
                          <p style={{ color: '#00000099' }}>{profileData.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        {editMode ? (
                          <input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#4ea674' } as any}
                          />
                        ) : (
                          <p style={{ color: '#00000099' }}>{profileData.phone}</p>
                        )}
                      </div>

                      <div className="pt-4">
                        <p style={{ color: '#00000099' }} className="text-sm mb-4">
                          Member since January 2023
                        </p>
                        <div className="flex gap-3">
                          <svg
                            className="w-5 h-5"
                            style={{ color: '#4ea674' }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-semibold text-gray-900">
                            Loyal Member
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {editMode && (
                  <div className="mt-8 flex gap-4 justify-end">
                    <button
                      onClick={() => setEditMode(false)}
                      className="px-6 py-2 rounded-lg font-semibold border-2 transition hover:bg-gray-50"
                      style={{ borderColor: '#4ea674', color: '#4ea674' }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: '#4ea674' }}
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h2>

                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <p className="text-sm" style={{ color: '#00000099' }}>
                              Order ID
                            </p>
                            <p className="font-bold text-gray-900">{order.id}</p>
                          </div>
                          <div>
                            <p className="text-sm" style={{ color: '#00000099' }}>
                              Date
                            </p>
                            <p className="font-semibold text-gray-900">
                              {order.date}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm" style={{ color: '#00000099' }}>
                              Items
                            </p>
                            <p className="font-semibold text-gray-900">
                              {order.items} items
                            </p>
                          </div>
                          <div>
                            <p className="text-sm" style={{ color: '#00000099' }}>
                              Status
                            </p>
                            <p
                              className="font-semibold px-3 py-1 rounded-full inline-block text-white text-sm"
                              style={{
                                backgroundColor:
                                  order.status === 'Delivered'
                                    ? '#4ea674'
                                    : '#ff9800',
                              }}
                            >
                              {order.status}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm" style={{ color: '#00000099' }}>
                              Total
                            </p>
                            <p className="font-bold text-lg text-gray-900">
                              {order.total}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-3">
                          <button
                            className="text-sm font-semibold transition"
                            style={{ color: '#4ea674' }}
                          >
                            View Details
                          </button>
                          <button
                            className="text-sm font-semibold transition"
                            style={{ color: '#4ea674' }}
                          >
                            Track Order
                          </button>
                          <button
                            className="text-sm font-semibold transition"
                            style={{ color: '#4ea674' }}
                          >
                            Return Items
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p style={{ color: '#00000099' }}>No orders yet</p>
                    <Link href="/shop">
                      <button
                        className="mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                        style={{ backgroundColor: '#4ea674' }}
                      >
                        Start Shopping
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">My Addresses</h2>
                  <button
                    className="px-4 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: '#4ea674' }}
                  >
                    + Add Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border border-gray-200 rounded-lg p-6 relative"
                    >
                      {address.isDefault && (
                        <div
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold"
                          style={{ backgroundColor: '#4ea674' }}
                        >
                          Default
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {address.type}
                      </h3>
                      <p style={{ color: '#00000099' }} className="mb-2">
                        {address.fullName}
                      </p>
                      <p style={{ color: '#00000099' }} className="mb-1">
                        {address.street}
                      </p>
                      <p style={{ color: '#00000099' }} className="mb-1">
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p style={{ color: '#00000099' }} className="mb-4">
                        {address.country}
                      </p>
                      <div className="flex gap-4 pt-4 border-t border-gray-200">
                        <button
                          className="text-sm font-semibold transition"
                          style={{ color: '#4ea674' }}
                        >
                          Edit
                        </button>
                        <button
                          className="text-sm font-semibold transition"
                          style={{ color: '#4ea674' }}
                        >
                          Delete
                        </button>
                        {!address.isDefault && (
                          <button
                            className="text-sm font-semibold transition"
                            style={{ color: '#4ea674' }}
                          >
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">My Wishlist</h2>
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p style={{ color: '#00000099' }} className="mb-4">
                    Your wishlist is empty
                  </p>
                  <Link href="/shop">
                    <button
                      className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: '#4ea674' }}
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Settings</h2>

                <div className="space-y-8 max-w-2xl">
                  {/* Notifications */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Notifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Email updates about orders',
                        'Promotional emails and offers',
                        'Product reviews and recommendations',
                      ].map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded"
                            defaultChecked={index === 0}
                          />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Password
                    </h3>
                    <button
                      className="px-4 py-2 rounded-lg font-semibold border-2 transition hover:bg-gray-50"
                      style={{ borderColor: '#4ea674', color: '#4ea674' }}
                    >
                      Change Password
                    </button>
                  </div>

                  {/* Delete Account */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-red-600 mb-4">
                      Delete Account
                    </h3>
                    <p style={{ color: '#00000099' }} className="mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button className="px-4 py-2 rounded-lg font-semibold bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
}