"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Logo from "../../public/logos/logo_full_transparent.png";

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="max-w-screen-xl m-auto">
          <Nav></Nav>
          <h1>Welcome to the Contact Page</h1>
          <p>This is the Team Contact content.</p>
        </div>
      </div>

      <main className="flex-grow pb-16">
        <div>
          <h1>Content Here</h1>
         
        </div>
      </main>

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
  );
}

export default Team;
