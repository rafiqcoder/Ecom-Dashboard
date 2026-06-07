import { createAddressApi } from "@/apis/addresses/createAddress.api";
import { useDispatch } from "react-redux";
import {
  setAddressData,
  setAddressError,
  setAddressMessage,
} from "../toolkit/address.slice";
import toast from "react-hot-toast";
import { getAddressesApi } from "@/apis/addresses/getAddresses.api";
import { deleteAddressApi } from "@/apis/addresses/deleteAddress.api";
import { editAddressApi } from "@/apis/addresses/editAddress.api";
import { setDefaultAddressApi } from "@/apis/addresses/setDefaultAddress.api";

export function useAddress() {
  const dispatch = useDispatch();

  // get addresses hokk
  async function getUserAddresses() {
    try {
      const response = await getAddressesApi();
      if (response.success) {
        dispatch(setAddressData(response.data));
        dispatch(setAddressMessage(response.message));
        return true;
      } else {
        dispatch(setAddressMessage(response.message));
        toast.error(response.message);
        return false;
      }
    } catch (error: any) {
      dispatch(setAddressError(error.message));
      toast.error(error.message);
      return false;
    }
  }

  // create address hook
  async function createAddress({
    name,
    phone,
    addressLine1,
    city,
    state,
    zipCode,
    country,
  }: {
    name: string;
    phone: string;
    addressLine1: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }) {
    try {
      const response = await createAddressApi({
        name,
        phone,
        addressLine1,
        city,
        state,
        zipCode,
        country,
      });

      if (response.success) {
        dispatch(setAddressMessage(response.message));
        await getUserAddresses();
        toast.success(response.message);
        return true;
      } else {
        dispatch(setAddressMessage(response.message));
        toast.error(response.message);
        return false;
      }
    } catch (error: any) {
      dispatch(setAddressError(error.message));
      toast.error(error.message);
      return false;
    }
  }

  //delete address hook
  async function deleteAddress(addressId: string) {
    try {
      const response = await deleteAddressApi(addressId);
      if (response.success) {
        dispatch(setAddressMessage(response.message));
        await getUserAddresses();
        toast.success(response.message);
        return true;
      } else {
        dispatch(setAddressMessage(response.message));
        toast.error(response.message);
        return false;
      }
    } catch (error: any) {
      dispatch(setAddressError(error.message));
      toast.error(error.message);
      return false;
    }
  }

  // edit address hook
  async function editAddress(addressId: string, {
    name,
    phone,
    addressLine1,
    city,
    state,
    zipCode,
    country,
  }: {
    name: string;
    phone: string;
    addressLine1: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }) {
    try {
      const response = await editAddressApi(addressId, {
        name,
        phone,
        addressLine1,
        city,
        state,
        zipCode,
        country,
      });
      if (response.success) {
        dispatch(setAddressMessage(response.message));
        await getUserAddresses();
        await getUserAddresses();
        toast.success(response.message);
        return true;
      } else {
        dispatch(setAddressMessage(response.message));
        toast.error(response.message);
        return false;
      }
    } catch (error: any) {
      dispatch(setAddressError(error.message));
      toast.error(error.message);
      return false;
    }
  }

  // set default address hook
  async function setDefaultAddressHook(addressId: string) {
    try {
      const response = await setDefaultAddressApi(addressId);
      if (response.success) {
        dispatch(setAddressMessage(response.message));
        await getUserAddresses();
        toast.success(response.message);
        return true;
      } else {
        dispatch(setAddressMessage(response.message));
        toast.error(response.message);
        return false;
      }
    } catch (error: any) {
      dispatch(setAddressError(error.message));
      toast.error(error.message);
      return false;
    }
  }

  return {
    createAddress,
    getUserAddresses,
    deleteAddress,
    editAddress, 
    setDefaultAddressHook
  };
}
