import React, {useState} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faBucket
} from "@fortawesome/free-solid-svg-icons";
import {IProduct} from "@/tools/interfaces/IProduct";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: "1",
      productName: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$ 2,499"
    },
    {
      id: "2",
      productName: "Apple iPhone 14\" Pro Max",
      color: "Black",
      category: "Phone",
      price: "$ 1,599"
    }
  ])

  return (
    <div className="h-full">
      <div className="relative overflow-x-auto">
        <Link href="/products/addProduct" className="flex justify-center items-center bg-blue-500 rounded p-2 mx-4 my-1 w-1/5">Add new product</Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
          </thead>
          <tbody className="bg-white">
          {products.map(product => {
            return (
              <tr className="border-b" key={product.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.productName}
                </th>
                <td className="px-6 py-4">
                  {product.color}
                </td>
                <td className="px-6 py-4">
                  {product.category}
                </td>
                <td className="px-6 py-4">
                  {product.price}
                </td>
                <td className="px-6 py-4 flex justify-around items-center">
                  <Link href={`/products/${product.id}`}
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
          })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Products;