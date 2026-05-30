"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MyProfile from "./MyProfile";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { InitialInterface } from "./types/type";
import { initialInterface } from "@/global/types/type";
import Image from "next/image";
import { updateProfileHook } from "../hook/updateProfile";
import { setProfileMessage } from "../toolkit/profile.slice";
import { useRouter } from "next/navigation";
import MyOrder from "./MyOrder";
import { useAuth } from "@/features/auth/hook/useAuth";
import MyAddress from "./MyAddress";

export default function Profile() {
  // logout auth
  const { handleLogout } = useAuth();
  const router = useRouter();
  // profiel data state
  const { data, loading, success, err, message } = useSelector(
    (state: { auth: initialInterface }) => state.auth,
  );
  useEffect(() => {
    if (success === false) {
      router.push("/login");
    }
  }, [data]);
  // dispatch new data
  const dispatch = useDispatch();
  // update profile picture
  const { updateProfilePic } = updateProfileHook();

  // get data from redux store
  const { activeTab, editMode } = useSelector(
    (state: { orders: InitialInterface }) => state.orders,
  );


  // set edit profile
  const [editProfileImg, setEditProfileImg] = useState(false);

  // update profile picture functionality
  const updateProfilePicture = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!validTypes.includes(selectedFile.type)) {
      dispatch(setProfileMessage("Please select a valid image"));
      return;
    }

    // Validate file size (5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      dispatch(setProfileMessage("File size must be less than 5MB"));
      return;
    }

    try {
      const formData = new FormData();
      formData.append("profile", selectedFile);

      await updateProfilePic(formData);
    } catch (error) {
      console.error(error);
      dispatch(setProfileMessage("Failed to upload image"));
    }
  };

  // logout handle
  const logoutHandle = async () => {
    await handleLogout();
    router.push("/");
  }



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
              <p style={{ color: "#00000099" }} className="mt-2">
                Manage your profile, orders, and preferences
              </p>
            </div>
            <Link href="/products">
              <button
                className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#4ea674" }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* User Info Card */}
              <div className="p-6 border-b border-gray-200 text-center">
                <div
                  onClick={() => setEditProfileImg(true)}
                  className="w-16 relative h-16 overflow-hidden rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200"
                >
                  {data.profile ? (
                    <Image
                      src={data.profile}
                      alt="profile"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  ) : (
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                  {editProfileImg && (
                    <input
                      onChange={updateProfilePicture}
                      type="file"
                      className=" absolute w-full h-full opacity-0"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
                <p style={{ color: "#00000099" }}>{data.email}</p>
              </div>

              {/* Navigation Menu */}
              <Navigation />

              {/* Logout Button */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={logoutHandle}
                  className="w-full px-4 py-2 border-2 rounded-lg font-semibold transition hover:bg-gray-50"
                  style={{ borderColor: "#4ea674", color: "#4ea674" }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && <MyProfile />}

            {/* Orders Tab */}
            {activeTab === "orders" && <MyOrder />}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <MyAddress/>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  My Wishlist
                </h2>
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
                  <p style={{ color: "#00000099" }} className="mb-4">
                    Your wishlist is empty
                  </p>
                  <Link href="/shop">
                    <button
                      className="px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: "#4ea674" }}
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Settings
                </h2>

                <div className="space-y-8 max-w-2xl">
                  {/* Notifications */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Notifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Email updates about orders",
                        "Promotional emails and offers",
                        "Product reviews and recommendations",
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
                      style={{ borderColor: "#4ea674", color: "#4ea674" }}
                    >
                      Change Password
                    </button>
                  </div>

                  {/* Delete Account */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-red-600 mb-4">
                      Delete Account
                    </h3>
                    <p style={{ color: "#00000099" }} className="mb-4">
                      Permanently delete your account and all associated data.
                      This action cannot be undone.
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
