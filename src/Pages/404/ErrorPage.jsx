import React from 'react';
import error from '../../Assets/404.json'
import Lottie from "react-lottie-player";
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
      <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <Lottie
              loop
              animationData={error}
              play
              style={{ width: 300, height: 300 }}
            />
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
               to={'/'}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            
            </div>
          </div>
        </main>
      </div>
    );
};

export default ErrorPage;