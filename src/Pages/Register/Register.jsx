import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import welcome from "../../Assets/register2.json";
import logo from "../../Assets/logo.png";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../ContextProvider/AuthContext";
import toast from "react-hot-toast";
import Transition from "../../Transition/Transition";
import Lottie from "react-lottie-player";

const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

const Register = () => {
  //   const { state } = useLocation();
  const navigate = useNavigate()
  const { register ,dark,setName,goToTop } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(null);

  //   useEffect(() => {
  //     Aos.init();
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    
    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      toast.error(`Password must be at least 6 characters!`, {
        style: {
          borderRadius: "10px",
          background: `${dark ? "black" : "white"}`,
          color: `${dark ? "white" : "black"}`,
        },
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErr("Password must contain at least 1 upper case letter!");
      toast.error(`Password must contain at least 1 upper case letter!`, {
        style: {
          borderRadius: "10px",
          background: `${dark ? "black" : "white"}`,
          color: `${dark ? "white" : "black"}`,
        },
      });
      return;
    }

    if (!specialCharacter.test(password)) {
      setErr("Password should have at least 1 special character!");
      toast.error(`Password should have at least 1 special character!`, {
        style: {
          borderRadius: "10px",
          background: `${dark ? "black" : "white"}`,
          color: `${dark ? "white" : "black"}`,
        },
      });
      return;
    }

    if (!/\d/.test(password)) {
      setErr("Password must contain at least 1 number!");
      toast.error(`Password must contain at least 1 number!`, {
        style: {
          borderRadius: "10px",
          background: `${dark ? "black" : "white"}`,
          color: `${dark ? "white" : "black"}`,
        },
      });
      return;
    }

    

    register(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName,
          photoURL,
        });
        setName(displayName)
         toast.success(`Welcome! ${displayName}`, {
           style: {
             borderRadius: "10px",
             background: `${dark ? "black" : "white"}`,
             color:`${!dark ? "black" : "white"}`,
           },
         });
         goToTop()
        navigate('/')

      })
      .catch((error) => {
       
        setErr(error.message);
      });
  };

  return (
    <div className="flex pt-20 bg-patternLight dark:bg-patternDark justify-center items-center ">
      <div className="hidden w-[500px] md:flex relative flex-col justify-center items-center">
        <img src={logo} className="w-24  top-64 left-32 absolute" alt="" />
        <Lottie
          animationData={welcome}
          play
          style={{ width: 800, height: 800 }}
        />
      </div>
      <div className="relative">
        <div className="w-full">
          <div
            className={`w-96  ${
              dark ? "bg-gray-800" : "bg-white "
            } shadow-2xl duration-300  relative z-10  py-10 px-8 mx-auto space-y-8 rounded-md`}
          >
            <h2 className="font-semibold text-3xl">Register Account</h2>
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
              <input
                type="url"
                name="photoUrl"
                placeholder="Your photo url"
                className="input input-bordered w-full bg-gray-100 text-black"
              />
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
      <Transition />
    </div>
  );
};

export default Register;
