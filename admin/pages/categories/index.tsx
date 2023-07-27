import React, {Fragment, useState} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBucket, faEdit} from "@fortawesome/free-solid-svg-icons";
import {ICategory} from "@/tools/interfaces/ICategory";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([
    {
      id: "1",
      name: "iPhone",
      parent: "Phone"
    },
    {
      id: "2",
      name: "Headphones",
      parent: null
    }
  ])

  return (
    <Fragment>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
        <form className="my-6">
          <div className="mb-6">
            <label htmlFor="=new-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add new category</label>
            <input type="text" id="new-category"
                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                   placeholder="Add new category" required/>
          </div>
          <div className="mb-6">
            <label htmlFor="parent-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent category</label>
            <select id="parent-category"
                    defaultValue="No category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="No category" disabled >No category</option>
              <option value="Phones">Phones</option>
              <option value="Tablets">Tablets</option>
              <option value="Laptops">Laptops</option>
            </select>
          </div>
          <button type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add category
          </button>
        </form>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="w-full text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr className="w-full">
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Parent Name
              </th>
              <th scope="col" className="px-6 py-3 rounded-l-lg"/>
            </tr>
            </thead>
            <tbody className="bg-white">
            {
              categories.map(category => {
                return (
                  <tr key={category.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {category.name}
                    </th>
                    <td className="px-6 py-4">
                      {category.parent}
                    </td>
                    <td className="px-6 py-4 flex justify-around items-center">
                      <Link href={`categories/${category.id}`}
                            className="text-center border-2 w-1/3 border-gray-500 rounded p-1 text-blue-500">
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{fontSize: 17, color: "gray"}}
                          className="mr-1"
                        />
                        Edit
                      </Link>
                      <button
                        className="flex items-center justify-center border-2 w-1/3 border-red-500 bg-red-300 rounded p-1 text-red-500">
                        <FontAwesomeIcon
                          icon={faBucket}
                          style={{fontSize: 17, color: "red"}}
                          className="mr-1"
                        />
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;