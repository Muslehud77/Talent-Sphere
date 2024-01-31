import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import useContextInfo from "../../../../Hooks/useContextInfo";
import SectionHeading from "../../../../Shared/SectionHeading/SectionHeading";


import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const capitalize = (array) => {
  return array.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });
};

const EditContest = () => {
  const [disable, setDisable] = useState(false);
  const { user } = useContextInfo();
  const [img, setImg] = useState(null);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
const {id} = useParams() 


const { data: contest = {} } = useQuery({
    queryKey: [`contest_${id}`],
    queryFn: async () => {
      const data = await axiosSecure.get(`/contest/${id}`);
      return data.data;
    },
  });





  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const image = (e) => {
    const file = e.target.files[0];

    setImg(file);
  };

  const addProduct = async (e) => {
    setDisable(true);
    e.preventDefault();
    const form = e.target;
    const contestName = form.name.value;
    const shortDescription = form.shortDescription.value;
    const detailedDescription = form.detailedDescription.value;
    const taskSubmissionInstructions = capitalize(
      form.taskSubmissionInstructions.value.split(",")
    );
    const tags = capitalize(form.tags.value.split(","));
    const contestCategory = form.contestCategory.value;

    const contestDeadline = form.contestDeadline.value;
    let contestImg = form.contestImg?.value;

    const contestPrice = form.contestPrice.value;
    const prizeMoney = form.prizeMoney.value;

    if (img) {
      const imageFile = { image: img };
      await axios
        .post(import.meta.env.VITE_imgHosting, imageFile, {
          
ers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          contestImg = res.data.data.url;
        });
    }

    const product = {
      contestName,
      detailedDescription,
      shortDescription,
      taskSubmissionInstructions,
      prizeMoney,
      
      
      tags,
      contestCategory,
      
      
      contestDeadline,
      contestImg,
      contestPrice,
    };

    await axiosSecure.patch(`/edit-contest/${id}`, product).then((res) => { console.log(res.data);
      if (res.data.modifiedCount>0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The contest has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setDisable(true);
        navigate("/dashboard/creator/submissions");
      }
    });

    console.log(product);
  };

  return (
    <div className="isolate px-6 lg:px-8">
      <SectionHeading head={"edit contest"} />

      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-[#65C9C0] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 "></p>
      </div>
      <form
        onSubmit={addProduct}
        className="mx-auto justify-center flex-col md:flex-row gap-10 flex mt-16 sm:mt-20"
      >
        <div>
          <div className=" items-center justify-center md:w-96">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer overflow-hidden bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              {img ? (
                <img
                  src={img ? URL.createObjectURL(img) : contest.Img}
                  className="h-64"
                ></img>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
              )}

              <input
                onChange={image}
                id="dropzone-file"
                accept="image/*"
                name="file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          {img && (
            <button
              onClick={() => setImg(null)}
              className="btn btn-error text-white w-full mt-3 "
            >
              Remove
            </button>
          )}
          {!img && (
            <div className="mt-2">
              <label className="block text-center text-sm font-semibold leading-6 ">
                OR
              </label>
              <div className=" mt-2.5">
                <input
                  required
                  defaultValue={contest.contestImg}
                  placeholder="URL"
                  type="photo"
                  name="contestImg"
                  className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
        </div>
        <div className="md:grid gap-x-8 space-y-5 gap-y-6 md:space-y-0 md:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Contest Name
            </label>
            <div className="mt-2.5">
              <input
                required
                defaultValue={contest.contestName}
                placeholder="Contest Name"
                type="text"
                name="name"
                autoComplete="given-name"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-white ">
              Category
            </label>
            <select
              name="contestCategory"
              defaultValue="Category?"
              className={`select select-bordered w-full bg-white  mt-1 block rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            >
              <option>Business</option>
              <option>Medical</option>
              <option>Article</option>
              <option>Gaming</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Contest Price
            </label>
            <div className=" mt-2.5">
              <input
                required
                placeholder="100"
                defaultValue={contest.contestPrice}
                // required
                type="number"
                name="contestPrice"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Prize Money
            </label>
            <div className="relative mt-2.5">
              <input
                required
                placeholder="prizeMoney"
                defaultValue={contest.prizeMoney}
                // required
                type="number"
                name="prizeMoney"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Deadline
            </label>
            <div className="relative mt-2.5">
              <input
                required
                defaultValue={contest.contestDeadline}
                placeholder="contestDeadline"
                // required
                type="date"
                name="contestDeadline"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Tags
            </label>
            <div className=" mt-2.5">
              <input
                defaultValue={contest.tags}
                required
                // required
                placeholder="Tags (put Comma ',' after each Tags)"
                name="tags"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Instructions
            </label>
            <div className=" mt-2.5">
              <input
                required
                defaultValue={contest.taskSubmissionInstructions}
                // required
                placeholder="Instruction (put Comma ',' after each Instruction)"
                name="taskSubmissionInstructions"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Short Description
            </label>
            <div className=" mt-2.5">
              <input
                required
                // required
                defaultValue={contest.shortDescription}
                placeholder="Short Description.."
                name="shortDescription"
                className="block w-full text-black rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                defaultValue={contest.detailedDescription}
                name="detailedDescription"
                rows={4}
                className="block w-full text-black rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Description..."
              />
            </div>
          </div>
          <div className="col-span-2 mt-5">
            <button
              disabled={disable}
              type="submit"
              className=" w-full  flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {disable && (
                <span className="loading loading-spinner loading-sm"></span>
              )}{" "}
              Edit Contest
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContest;
