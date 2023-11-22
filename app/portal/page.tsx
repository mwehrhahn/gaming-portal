"use client"
import React from 'react';
import Link from 'next/link'
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Logo from "../../public/logos/logo_full_transparent.png";
import Cs from "../../public/images/csgo.png";
import Minecraft from "../../public/images/minecraft.png";
import Fortnite from "../../public/images/fortnite.png";
import Roblox from "../../public/images/roblox.jpg";
import League from "../../public/images/league.jpg";
import Cyberpunk from "../../public/images/cyberpunk.jpg"
import Sims from "../../public/images/sims.jpg"
import Cod from "../../public/images/cod.jpg"
import Valorant from "../../public/images/valorant.jpg"
import Gta from "../../public/images/gta.jpg"

const Portal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="max-w-screen-xl m-auto">
          <Nav></Nav>
          <h1>Welcome to the Portal</h1>
          <p className="mt-6">Click on any game to continue</p>
        </div>
      </div>

      <main className="flex-grow flex flex-row items-center justify-center bg-slate-700">
        <ul className="flex justify-center flex-col list-none">
          <li className='mt-4 mb-4'>
            <Image
              className='rounded-lg'
              src={Cs}
              alt=""
              width={350}
              height={350}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Minecraft}
              alt=""
              width={350}
              height={350}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Fortnite}
              alt=""
              width={350}
              height={350}
            />
          </li>
        </ul>
        <ul className="ml-4 flex justify-center flex-col list-none">
          <li className='mt-4 mb-4'>
            <Image
              className='rounded-lg'
              src={Roblox}
              alt=""
              width={350}
              height={350}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={League}
              alt=""
              width={350}
              height={350}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Cyberpunk}
              alt=""
              width={350}
              height={350}
            />
          </li>
        </ul>
        <ul className="ml-4 flex justify-center flex-col list-none">
          <li className='mt-4 mb-4'>
            <Image
              className='rounded-lg'
              src={Sims}
              alt=""
              width={300}
              height={300}
            />
          </li>
          <li className='mb-4'>
  <Link href="/MWII">
    <Image
      className='rounded-lg'
      src={Cod}
      alt=""
      width={300}
      height={300}
    />
  </Link>
</li>

          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Valorant}
              alt=""
              width={300}
              height={300}
            />
          </li>
        </ul>
        <ul className="ml-4 flex justify-center flex-col list-none">
          <li className='mt-4 mb-4'>
            <Image
              className='rounded-lg'
              src={Gta}
              alt=""
              width={300}
              height={300}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Cod}
              alt=""
              width={300}
              height={300}
            />
          </li>
          <li className='mb-4'>
            <Image
              className='rounded-lg'
              src={Valorant}
              alt=""
              width={300}
              height={300}
            />
          </li>
        </ul>
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

export default Portal;
