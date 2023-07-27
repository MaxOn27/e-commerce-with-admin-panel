import React, {useState} from 'react';
import {IOrders} from "@/tools/interfaces/IOrders";

const Orders = () => {
  const [orders, setOrders] = useState<IOrders[]>([
    {
      id: "1",
      recipient: "John Smith",
      product: "Phone 14 Max Pro",
      date: new Date(),
      paid: "No"
    },
    {
      id: "2",
      recipient: "Kiara Red",
      product: "Macbook",
      date: new Date(),
      paid: "Yes"
    }
  ]);

  return (
    <div className="h-full">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Recipient
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Paid
            </th>
          </tr>
          </thead>
          <tbody className="bg-white">
          {orders.map(order => {
            return (
              <tr className="border-b" key={order.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.recipient}
                </th>
                <td className="px-6 py-4">
                  {order.product}
                </td>
                <td className="px-6 py-4">
                  {order.date.getDate() + "/" + order.date.getMonth() + "/" + order.date.getFullYear()}
                </td>
                <td className={`px-6 py-4 ${order.paid === "No" ? "text-red-500" : "text-green-700"}`}>
                  {order.paid}
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

export default Orders;