"use client";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAddress } from "../hook/useAddress";
import { useSelector } from "react-redux";
import { AddressInterface } from "@/global/types/type";
function CreateAddress({
  addressId,
  isAddress,
  setIsAddress,
  setAddressId,
}: {
  isAddress: boolean;
  setIsAddress: React.Dispatch<React.SetStateAction<boolean>>;
  addressId?: string | null;
  setAddressId?: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  // use addresss hook
  const { createAddress, editAddress } = useAddress();

  // address state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  // save data in state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAddress && !addressId) {
      await createAddress({
        name: formData.name,
        phone: formData.phone,
        addressLine1: formData.addressLine1,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      });
    } else if (addressId && isAddress) {
      await editAddress(addressId, {
        name: formData.name,
        phone: formData.phone,
        addressLine1: formData.addressLine1,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      });
      setIsAddress(false);
      setAddressId?.(null);
    }
  };

  // get address data from redux store
  const addressData = useSelector(
    (state: { address: AddressInterface }) => state.address,
  );

  // find address by id
  useEffect(() => {
    if (addressId) {
      const findAddress = addressData?.data?.find(
        (address) => address._id === addressId,
      );
      if (findAddress) {
        setFormData({
          name: findAddress.fullName,
          phone: findAddress.phone,
          addressLine1: findAddress.streetAddress,
          city: findAddress.city,
          state: findAddress.state,
          zipCode: findAddress.postalCode,
          country: findAddress.country,
        });
      }
    }
  }, [addressId]);

  return (
    <div className=" fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white px-16 rounded-md py-8">
      <div className=" absolute top-4 right-4 text-xl">
        <IoClose
          onClick={() => {
            setIsAddress(false);
            setAddressId?.(null);
          }}
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Add New Address</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Street Address */}
        <div>
          <label
            htmlFor="addressLine1"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Street Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Street Address, P.O. Box, Company name, etc."
            required
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            City <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your city"
            required
          />
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            State <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your state"
            required
          />
        </div>

        {/* Zip Code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ZIP Code <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your ZIP code"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Country <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200"
            placeholder="Enter your country"
            required
          />
        </div>

        {/* Save Address Button */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="px-4 py-3 rounded-lg font-semibold text-white transition"
            style={{ backgroundColor: "#4ea674" }}
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddress;
