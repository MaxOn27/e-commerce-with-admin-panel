import React, {Fragment} from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faSignOut,
  faUsersRectangle,
  faTools,
  faShoppingBasket,
  faListAlt,
  faReorder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { data: session } = useSession()

  return (
    <Fragment>
      <ul>
        <li className="flex justify-center items-center m-5 p-2">
          <FontAwesomeIcon
            icon={faShop}
            style={{ fontSize: 20, color: "gray" }}
          />
          <Link href="http://localhost:4000" className="text-gray-500 font-bold mx-2">
            E-commerce Admin
          </Link>
        </li>

        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faHome}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/" className="text-gray-500 font-bold mx-2">Dashboard</Link>
        </li>
        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/products" className="text-gray-500 font-bold mx-2">Products</Link>
        </li>
        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faListAlt}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/categories" className="text-gray-500 font-bold mx-2">Categories</Link>
        </li>
        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faReorder}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/orders" className="text-gray-500 font-bold mx-2">Orders</Link>
        </li>
        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faUsersRectangle}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/admins" className="text-gray-500 font-bold mx-2">Admins</Link>
        </li>
        <li className="flex items-center m-2 p-2">
          <FontAwesomeIcon
            icon={faTools}
            style={{ fontSize: 17, color: "gray" }}
          />
          <Link href="/settings" className="text-gray-500 font-bold mx-2">Settings</Link>
        </li>
        <li className="flex items-center m-2 p-2 my-10">
          <FontAwesomeIcon
            icon={faSignOut}
            style={{ fontSize: 17, color: "gray" }}
          />
          <button className="text-gray-500 font-bold mx-2" onClick={() => signOut()}>Sign out</button>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;