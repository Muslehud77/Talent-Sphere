import React, { useState } from 'react';
import { ModalWrapper } from 'reoverlay';
import useUser from '../../Api/useUser';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import useContextInfo from '../../Hooks/useContextInfo';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ProfileUpdate = () => {
const [img, setImg] = useState(null);
    const {userData,refetch} = useUser()
const {user,closeModal} = useContextInfo()
const axiosSecure = useAxiosSecure()
 

const handleSubmit = async (e) => {
  e.preventDefault();


  const form = new FormData(e.currentTarget);
  const displayName = form.get("name");
   let photoURL = userData.userImg   

  if (img) {
    const imageFile = { image: img };
    await axios
      .post(import.meta.env.VITE_imgHosting, imageFile, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        photoURL = res.data.data.url;
      });
  }

  await updateProfile(user, {
    displayName,
    photoURL,
  })
  console.log(displayName);

  axiosSecure.patch(`/userUpdate/${userData._id}`, {
    name: displayName,
    userImg: photoURL
  }).then((res) => {
    if (res.data.modifiedCount) {
      toast.success(`Profile Updated`, {
        style: {
          borderRadius: "10px",
          background: `${"white"}`,
          color: `${"black"}`,
        },
      });
      
    }
  });
  console.log(refetch);
  refetch();
  closeModal();
 
};

const image = (e) => {
  const file = e.target.files[0];

  setImg(file);
};


    return (
      <ModalWrapper className="overflow-hidden" animation="door">
        <form
        data-theme='dark'
          onSubmit={handleSubmit}
          className=" w-96 overflow-hidden bg-black border border-[#37e8ff]"
        >
          <div className="flex items-center  justify-center w-full card-body">
            <label
              for="dropzone-file"
              className="flex flex-col overflow-hidden items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img
                  src={img ? URL.createObjectURL(img) : userData.userImg}
                  className="object-contain w-full"
                  alt=""
                />
              </div>
              <input
                onChange={image}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
              <span className="text-black">Click Here to Update Image</span>
            </label>
          </div>
          <div>
            <div>
              <label className="form-control w-full  px-10 ">
                <div className="label">
                  <span className="label-text-alt">Update your name</span>
                </div>
                <input
                  name="name"
                  defaultValue={user.displayName}
                  type="text"
                  placeholder="Type here"
                  className="input text-white input-bordered w-full max-w-xs"
                />
              </label>
              <button className="btn w-full mt-5 btn-outline rounded-none">
                Update
              </button>
            </div>
          </div>
        </form>
      </ModalWrapper>
    );
};

export default ProfileUpdate;