import React, {Fragment} from 'react';

const Settings = () => {
  return (
    <Fragment>
      <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
        <form className="mb-6">
          <div className="flex flex-wrap -mx-3 mb-6 2-full">
            <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="featured-product">
                Featured product
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="featured-product" type="email" placeholder="Featured product" required/>
            </div>
            <div className="w-1/2 md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="price">
                Price (in usd)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="price" type="text" placeholder="Price" required/>
            </div>
          </div>
          <button type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Save settings
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Settings;