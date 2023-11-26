import {  useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import welcome from "../../Assets/Lotties/solving.json";
import logo from "../../Assets/Logo/TS-black-removebg-preview.png";
import { updateProfile } from "firebase/auth";

import toast from "react-hot-toast";
import Transition from "../../Transition/Transition";
import Lottie from "react-lottie-player";

import useContextInfo from "../../Hooks/useContextInfo";
import axios from "axios";


const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

const Register =  () => {

  const navigate = useNavigate()
  const { register ,setName,goToTop } = useContextInfo()
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(null);
  const [img,setImg] = useState(null);

  const handleSubmit =async (e) => {
    e.preventDefault();
    setErr(null);


   const form = new FormData(e.currentTarget);
   const displayName = form.get("name");
   let photoURL = form.get("photoUrl");
   const email = form.get("email");
   const password = form.get("password");

    if(img){
      const imageFile = { image: img };
      await axios
        .post(import.meta.env.VITE_imgHosting, imageFile, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
        
          photoURL = res.data.data.url;
        });
    }
    
  

   //TODO: uncomment these regex
    
    // if (password.length < 6) {
    //   setErr("Password must be at least 6 characters!");
    //   toast.error(`Password must be at least 6 characters!`, {
    //     style: {
    //       borderRadius: "10px",
    //       background: `${"white"}`,
    //       color: `${"black"}`,
    //     },
    //   });
    //   return;
    // }

    // if (!/[A-Z]/.test(password)) {
    //   setErr("Password must contain at least 1 upper case letter!");
    //   toast.error(`Password must contain at least 1 upper case letter!`, {
    //     style: {
    //       borderRadius: "10px",
    //       background: `${"white"}`,
    //       color: `${"black"}`,
    //     },
    //   });
    //   return;
    // }

    // if (!specialCharacter.test(password)) {
    //   setErr("Password should have at least 1 special character!");
    //   toast.error(`Password should have at least 1 special character!`, {
    //     style: {
    //       borderRadius: "10px",
    //       background: `${"white"}`,
    //       color: `${"black"}`,
    //     },
    //   });
    //   return;
    // }

    // if (!/\d/.test(password)) {
    //   setErr("Password must contain at least 1 number!");
    //   toast.error(`Password must contain at least 1 number!`, {
    //     style: {
    //       borderRadius: "10px",
    //       background: `${"white"}`,
    //       color: `${"black"}`,
    //     },
    //   });
    //   return;
    // }

    

    await register(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName,
          photoURL,
        });
        setName(displayName)
         toast.success(`Welcome! ${displayName}`, {
           style: {
             borderRadius: "10px",
             background: `${"white"}`,
             color:`${"black"}`,
           },
         });
         goToTop()
        navigate('/')

      })
      .catch((error) => {
       
        setErr(error.message);
      });

    



  };


  const image = e =>{
   const file = e.target.files[0];
   
   setImg(file);
  }


  return (
    <div className="mt-10">
      <Link to={"/"}>
       
        <div className="flex justify-center items-center">
          <img src={logo} className="w-36" alt="" />
        </div>
      </Link>
      <div className="flex bg-patternLight dark:bg-patternDark justify-center items-center ">
        <div className="hidden w-[500px] md:flex relative flex-col justify-center items-center">
          <Lottie
            animationData={welcome}
            play
            style={{ width: 800, height: 800 }}
          />
        </div>
        <div className="relative">
          <div className="w-full">
            <div
              className={`w-96  md:shadow-2xl duration-300  relative z-10  py-10 px-8 mx-auto space-y-8 rounded-md`}
            >
              <h2 className="font-semibold text-3xl text-center md:text-left">
                Register Account
              </h2>
              <hr />
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-semibold">Your Name</p>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full bg-gray-100 text-black"
                />
                <p className="font-semibold">Your Photo</p>
                <div className="flex gap-5 justify-center items-center">
                  <div className="flex  items-center justify-center">
                    <label className="flex flex-col items-center justify-center w-20  h-20 border-2 border-gray-300 border-dashed rounded-[50px] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex  items-center justify-center">
                        {img ? (
                          <img src={URL.createObjectURL(img)} alt="" />
                        ) : (
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                        )}
                      </div>
                      <input
                        onChange={image}
                        id="dropzone-file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div>
                    <div className="h-6 w-[0.5px] bg-black"></div>
                  </div>
                  <input
                    disabled={img}
                    type="url"
                    name="photoUrl"
                    placeholder="or Your photo url"
                    className="input input-bordered w-full bg-gray-100 text-black"
                  />
                </div>
                <p className="font-semibold">Your Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-gray-100 text-black"
                />
                <p className="font-semibold">Set Password</p>
                <div className="relative">
                  <input
                    id="password"
                    required
                    type={`${show ? "text" : "password"}`}
                    name="password"
                    placeholder="Password must be at-least 6 characters"
                    className="input input-bordered w-full bg-gray-100 text-black"
                  />
                  <div
                    className="hover:cursor-pointer absolute right-3 bottom-3 text-black text-xl"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                {err && (
                  <div className="text-red-500 rounded-lg p-2 bg-white font-serif font-light">
                    <p>{err}</p>
                  </div>
                )}
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <input
                      required
                      type="checkbox"
                      className="checkbox checkbox-sm bg-white"
                      name=""
                      id=""
                    />
                    <label>
                      Accept{" "}
                      <a className="hover:underline" href="">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-neutral outline outline-white bg-black text-white w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Transition />
    </div>
  );
};

export default Register;
