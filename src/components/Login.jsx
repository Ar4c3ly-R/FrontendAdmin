export const Login = () => {
  return (
    <div className="">
      <main className="h-screen flex flex-col justify-center">
        <section className="self-center flex flex-col">
          <img className="self-center" src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000749_online_store_logos_design_free_online_E-commerce_cart_logo_maker-02.png" alt="" />
          <h2 className=" text-xl pt-0 py-8 text-center text-amber-500">
            <label className="text-black"> Welcome </label>
            to Admin Panel</h2>
        </section>
        

        <section className="self-center">
          <form className=" border rounded-md p-6 bg-white">
            <div className="mb-6 w-80">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6 w-80">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

      </main>
    </div>
  );
};
