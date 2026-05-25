import { editProfileApi } from "@/apis/editProfile/editProfile.api";
import { useAuth } from "@/features/auth/hook/useAuth";
import { useDispatch } from "react-redux";
import { setProfileError, setProfileMessage } from "../toolkit/profile.slice";
import { updateProfileImageApi } from "@/apis/editProfile/updateProfileImg";
import toast from "react-hot-toast";

export const updateProfileHook = () => {
  const dispatch = useDispatch();
  const { handleGetMe } = useAuth();
  // update profile
  async function updateProfile({
    formData,
  }: {
    formData: {
      name?: string | undefined;
      email?: string | undefined;
      phone?: string | undefined;
      gender?: string | undefined;
    };
  }) {
    try {
      dispatch(setProfileMessage(""));
      dispatch(setProfileError(""));
      const response = await editProfileApi({ ...formData });
      if (response.success === true) {
        dispatch(setProfileMessage(response.message));
        toast.success(response.message)
      } else {
        dispatch(setProfileError(response.message));
        dispatch(setProfileMessage(response.message));
        toast.error(response.message)
      }
      await handleGetMe();
    } catch (error:any) {
      dispatch(setProfileError("Something went wrong"));
      toast.error("Something went wrong")
    }
  }
  // update profile picture
  async function updateProfilePic(formData: FormData) {
  try {
    const response = await updateProfileImageApi(formData);
    if(response.success === true){
      await handleGetMe();
      toast.success(response.message)
      dispatch(setProfileMessage(response.message));
      dispatch(setProfileError(""));
    }
    else{
      toast.error(response.message)
      dispatch(setProfileMessage(response.message));
      dispatch(setProfileError(response.message));
    }

    
  } catch (error:any) {
    dispatch(setProfileError("Something went wrong"));
    dispatch(setProfileMessage("Something went wrong"));
    toast.error("Something went wrong")
  }
}
  return {
    updateProfile,
    updateProfilePic,
  };
};
