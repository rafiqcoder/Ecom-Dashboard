"use client";

import Loader from "@/components/common/Loader";
import { initialInterface } from "@/global/types/type";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileHook } from "../hook/updateProfile";
import { useEffect, useState } from "react";
import { InitialInterface } from "./types/type";
import { setEditMode } from "../toolkit/profile.slice";

function MyProfile() {
  // use dispathc
  const dispatch = useDispatch();
  const { data, loading, success, err } = useSelector(
    (state: { auth: initialInterface }) => state.auth,
  );
  // profile data state
  const { editMode } = useSelector(
    (state: { orders: InitialInterface }) => state.orders,
  );
  const [profileData, setProfileData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    gender: data.gender,
  });

  useEffect(() => {
    setProfileData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
    });
  }, [data]);

  // edit profile change handler
  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // update profile hook
  const { updateProfile } = updateProfileHook();
  // save profile
  const handleSaveProfile = async () => {
    dispatch(setEditMode(false));
    // Handle save logic here
    if (
      profileData.name !== data.name ||
      profileData.email !== data.email ||
      profileData.phone !== data.phone ||
      profileData.gender !== data.gender
    ) {
      await updateProfile({
        formData: {
          name: profileData.name !== data.name ? profileData.name : undefined,
          email:
            profileData.email !== data.email ? profileData.email : undefined,
          phone:
            profileData.phone !== data.phone ? profileData.phone : undefined,
          gender:
            profileData.gender !== data.gender
              ? profileData.gender?.toLowerCase()
              : undefined,
        },
      });
    }
  };

  // all months names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = Number(data.createdAt?.split("-")[1]);
  const year = data.createdAt?.split("-")[0]?.padStart(4, "0");
  return loading ? (
    <div className=" min-h-[500px] w-full flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
        <button
          onClick={() => dispatch(setEditMode(!editMode))}
          className="px-4 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
          style={{
            backgroundColor: editMode ? "#4ea674" : "transparent",
            color: editMode ? "white" : "#4ea674",
            border: editMode ? "none" : "2px solid #4ea674",
          }}
        >
          {editMode ? "Cancel" : "Edit Profile"}
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
                Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#4ea674" } as any}
                />
              ) : (
                <p style={{ color: "#00000099" }}>{profileData.name}</p>
              )}
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Last Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName || "Hossen"}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#4ea674" } as any}
                />
              ) : (
                <p style={{ color: "#00000099" }}>
                  {profileData.lastName || "Hossen"}
                </p>
              )}
            </div> */}

            {/* <div>
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
            </div> */}

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
                  style={{ "--tw-ring-color": "#4ea674" } as any}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer not to say">Prefer not to say</option>
                </select>
              ) : (
                <p className=" capitalize" style={{ color: "#00000099" }}>
                  {profileData.gender || "male"}
                </p>
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
                  style={{ "--tw-ring-color": "#4ea674" } as any}
                />
              ) : (
                <p style={{ color: "#00000099" }}>{profileData.email}</p>
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
                  style={{ "--tw-ring-color": "#4ea674" } as any}
                />
              ) : (
                <p style={{ color: "#00000099" }}>{profileData.phone}</p>
              )}
            </div>

            <div className="pt-4">
              <p style={{ color: "#00000099" }} className="text-sm mb-4">
                Member since {months[month - 1]} {year}
              </p>
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5"
                  style={{ color: "#4ea674" }}
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
            style={{ borderColor: "#4ea674", color: "#4ea674" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSaveProfile}
            className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#4ea674" }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
