import React, {Fragment, useState} from 'react';
import {IAdmins} from "@/tools/interfaces/IAdmins";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBucket, faEdit} from "@fortawesome/free-solid-svg-icons";

const Admins = () => {
  const [admins, setAdmins] = useState<IAdmins[]>([
    {
      id: "1",
      name: "Milka",
      surname: "White",
      username: "milka.white",
      email: "milka.white@gmail.com"
    },
    {
      id: "1",
      name: "Kiara",
      surname: null,
      username: "kiara.red",
      email: "kiara.red@gmail.com"
    }
  ])

  return (
    <Fragment>
      <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
        <form className="mb-6">
          <div className="flex flex-wrap -mx-3 mb-6 2-full">
            <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="email">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email" type="email" placeholder="E-mail" required/>
            </div>
            <div className="w-1/2 md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="username">
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username" type="text" placeholder="Username" required/>
            </div>
          </div>
          <button type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add admin
          </button>
        </form>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="w-full text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr className="w-full">
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3 rounded-l-lg"/>
            </tr>
            </thead>
            <tbody className="bg-white">
            {admins.map(admin => {
              return (
                <tr key={admin.id}>
                  <td className="px-6 py-4">
                    {admin.username}
                  </td>
                  <td className="px-6 py-4">
                    {admin.email}
                  </td>
                  <td className="px-6 py-4 flex justify-around items-center">
                    <Link href={`admins/${admin.id}`}
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

              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Admins;