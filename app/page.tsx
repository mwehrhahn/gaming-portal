"use client";

import Image from 'next/image'
import Logo from '../public/logos/logo_full_transparent.png'
import Nav from '@/components/nav/nav'
import Link from 'next/link'

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
            <Link href="/portal">
            <button className="mt-6 justify-center items-center bg-indigo-600 bg-opacity-50 border border-indigo-600 border-opacity-50 px-6 py-3 rounded-lg flex justify-center items-center hover:bg-opacity-100 duration-200">
              Enter the Portal
            </button></Link>
          </div>
         
          <video className="mt-12 rounded-lg" autoPlay loop muted>
            <source src="animations/gp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Image
              src={Logo}
              alt="Flowbite Logo"
              width={100}
              height={100}
              style={{ margin: "-20px" }}
            />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Mission Statement
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com" className="hover:underline">
              Gaming Portal™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}
