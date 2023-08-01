import {Fragment} from "react";
import Image from 'next/image'

import Navigation from "@/components/Navigation";
import {signOut, useSession} from "next-auth/react";


export default function Layout(props: any) {
  const {data: session} = useSession()

  return (
    <div className="flex">
      {(session)
        ?
        <Fragment>
          <nav className='h-screen w-1/6'>
            <Navigation/>
          </nav>
          <main className='h-screen w-5/6'>
            <div className="flex justify-between items-center m-5 p-2">
              <p className="text-gray-500 font-bold mx-4">Welcome, <span
                className="text-gray-700">{session && session.user && session.user.name}</span>!</p>
              <span className="bg-gray-700 text-white rounded flex justify-between items-center pr-2">
                <Image
                  src="/../public/milka.jpeg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded mr-2"
                />
                {session && session.user && session.user.name}
              </span>
            </div>
            <Fragment>{props.children}</Fragment>
          </main>
        </Fragment>
        :
        <Fragment>
          <main className='h-screen w-screen'>
            <Fragment>{props.children}</Fragment>
          </main>
        </Fragment>
      }

    </div>
  );
}