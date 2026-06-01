"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CreateAddress from "./CreateAddress";
import { useSelector } from "react-redux";
import { AddressInterface } from "@/global/types/type";
import { useAddress } from "../hook/useAddress";
function MyAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Billing",
      fullName: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      type: "Shipping",
      fullName: "John Doe",
      street: "456 Oak Avenue",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "United States",
      isDefault: false,
    },
  ]);
  const [isAddress, setIsAddress] = useState(false);

  // addresses from redux store
  const addressesData = useSelector(
    (state: { address: AddressInterface }) => state.address,
  );

  // use address hook
  const { getUserAddresses, deleteAddress } = useAddress();

  // save address data to redux store
  useEffect(() => {
    async function getAddressFunc() {
      await getUserAddresses();
    }
    if (addressesData.success === false) {
      getAddressFunc();
    }
  }, []);

  // delete addresses functions
  const handleDelete = async (addressId: string) => {
    await deleteAddress(addressId);
  };

  // edit address
  const [addressId, setAddressId] = useState<string | null>(null);

  return (
    <div>
      {" "}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">My Addresses</h2>
          <button
            onClick={() => setIsAddress(true)}
            className="px-4 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#4ea674" }}
          >
            + Add Address
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addressesData?.data?.map((address) => (
            <div
              key={address._id}
              className="border border-gray-200 rounded-lg p-6 relative"
            >
              {/* {address.isDefault && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: "#4ea674" }}
                >
                  Default
                </div>
              )} */}
              {/* <h3 className="text-lg font-bold text-gray-900 mb-4">
                {address.type}
              </h3> */}
              <p style={{ color: "#00000099" }} className="mb-2">
                {address.fullName}
              </p>
              <p style={{ color: "#00000099" }} className="mb-1">
                {address.streetAddress}
              </p>
              <p style={{ color: "#00000099" }} className="mb-1">
                {address.city}, {address.state} {address.postalCode}
              </p>
              <p style={{ color: "#00000099" }} className="mb-4">
                {address.country}
              </p>
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setAddressId(address._id);
                    setIsAddress(true);
                  }}
                  className="text-sm font-semibold transition"
                  style={{ color: "#4ea674" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(address._id)}
                  className="text-sm font-semibold transition"
                  style={{ color: "#4ea674" }}
                >
                  Delete
                </button>
                {/* {!address.isDefault && (
                  <button
                    className="text-sm font-semibold transition"
                    style={{ color: "#4ea674" }}
                  >
                    Set as Default
                  </button>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* address div and functionalities */}
      {isAddress && (
        <div className="z-50 fixed inset-0 bg-black/60 backdrop-blur-sm w-screen h-screen left-0 top-0" />
      )}
      {isAddress && (
        <CreateAddress
          isAddress={isAddress}
          setIsAddress={setIsAddress}
          addressId={addressId}
          setAddressId={setAddressId}
        />
      )}
    </div>
  );
}

export default MyAddress;
