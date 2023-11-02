"use client";

import Image from 'next/image'
import Logo from '../public/logos/logo_full_transparent.png'
import Nav from '@/components/nav/nav'

export default function Home() {
  return (
    <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="max-w-screen-xl m-auto"> 
          <Nav></Nav>
          <div className="flex justify-between items-center flex-col gap-8 mt-16 relative z-10">
            <p className="text-4xl">
              Welcome to Gaming Portal
            </p>
            <h1>
              A place for passionate gamers and developers to meet and collaborate.
            </h1>
            <button className="mt-6 justify-center items-center bg-indigo-600 bg-opacity-50 border border-indigo-600 border-opacity-50 px-6 py-3 rounded-lg flex justify-center items-center hover:bg-opacity-100 duration-200">
              Enter the Portal
            </button>
          </div>
         
          <video className="mt-12" autoPlay loop muted>
            <source src="animations/gp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}
