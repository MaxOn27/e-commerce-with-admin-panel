import {Inter} from 'next/font/google'
import {signIn, signOut, useSession} from "next-auth/react";
import Image from 'next/image';

export default function Home() {
  const {data: session} = useSession()
  if (session) {
    return (
      <div className="h-full">
        <section className="h-1/3 m-10 mx-6">
          <h1 className="w-full h-1/6 font-bold text-gray-500 m-2 ml-6 text-2xl">Orders</h1>
          <div className="flex justify-between items-center h-5/6">
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">Today</h3>
              <h2 className="text-blue-500 font-bold m-2 text-3xl">2</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">2 orders today</h3>
            </div>
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">This week</h3>
              <h2 className="text-blue-500 font-bold m-2 text-3xl">32</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">32 orders this week</h3>
            </div>
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">This month</h3>
              <h2 className="text-blue-500 font-bold m-2 text-3xl">103</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">103 orders this month</h3>
            </div>
          </div>
        </section>
        <section className="h-1/3 m-10 mx-6">
          <h1 className="w-full h-1/6 font-bold text-gray-500 m-2 ml-6 text-2xl">Revenue</h1>
          <div className="flex justify-between items-center h-5/6">
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">Today</h3>
              <h2 className="text-green-700 font-bold m-2 text-3xl">$ 4,000</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">2 orders today</h3>
            </div>
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">This week</h3>
              <h2 className="text-green-700 font-bold m-2 text-3xl">$ 121,100</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">32 orders this week</h3>
            </div>
            <div className="shadow-md bg-white w-4/12 h-full rounded mx-2 p-4 flex justify-center items-center flex-col">
              <h3 className="text-gray-500 font-bold m-2 text-xl">This month</h3>
              <h2 className="text-green-700 font-bold m-2 text-3xl">$ 511, 010</h2>
              <h3 className="text-gray-300 font-bold m-2 text-l">103 orders this month</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className="bg-white px-6 p-2 rounded flex justify-center items-center text-xl w-1/6" onClick={() => signIn("google")}>
        <Image
          src="/../public/icons8-google-48.png"
          width={38}
          height={38}
          alt="google"
          className="rounded mr-2"
        />
        Sign in
      </button>
    </div>
  )
}
