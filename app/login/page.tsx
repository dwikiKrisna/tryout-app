import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
const page = () => {
  return (
    <div>
      {/* make vertical center  */}

      <div className="relative min-h-screen  justify-center items-center flex ">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="p-8 py-12 sm:p-16">
                <div className="space-y-4">
                  {/* componen image with random logo link  */}
                  <img
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    className="h-8 "
                  />

                  <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                    Silahkan Masuk Menggunakan Akun Social 👌
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <button className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                    <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200">
                      <AiFillGoogleCircle size={30} />
                      <span>Continue with Google</span>
                    </span>
                  </button>

                  <button className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                    <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200">
                      <AiFillGithub size={30} />
                      <span>Continue with Github</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
