import { Button } from "./common/Button/Button";
import { LOGIN_LABEL } from "../utilities/constants";

import { Input } from "./common/Input/Input";

export const Login = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex justify-around self-center bg-slate-50 rounded-lg h-3/4 w-4/5 shadow-lg shadow-slate-500/50 divide-x-2 ">
        <section className="self-center flex flex-col ">
          <img
            className="self-center lg:h-96 md:h-60 md:p-0"
            src="https://png.pngtree.com/png-clipart/20221227/original/pngtree-host-and-admin-marketing-job-vacancies-vector-png-image_8815346.png"
            alt=""
          />
        </section>

        <main className="self-center xl:pl-40 lg:pl-7 lg:pr-20 md:pl-6">
          <h2 className=" text-xl pt-0 py-8 text-yellow-500">
            <label className="font-bold"> Welcome </label>
            to Admin Panel
          </h2>
          <form className=" p-4">
            <div className="mb-6 w-80">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
              >
                Your email
              </label>
              <Input  
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
              >
                Your password
              </label>
              <Input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=". . . . . . . . ."
                required
              />
            </div>
            <div className="flex mt-8">
              <Button
                type="login"
                text={LOGIN_LABEL}
                className="text-white bg-cyan-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm md:w-80 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
