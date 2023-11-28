"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../public/logos/logo_full_transparent.png";
import Youtube from "../../public/logos/youtube-logo-png-2074.png";
import IGN from "../../public/logos/ign-logo-transparent.png";
import nba from "../../public/images/nba2k24.jpg";

const Nba2k24 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className=" m-auto">
          <Nav></Nav>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
      <main className="flex-grow pb-16" style={{ 
        paddingInline: '21rem', 
      textAlign: 'center', 
      position: 'relative', 
      backgroundImage: 'url(/images/nba2k24court.jpg)',
       backgroundSize: 'cover', 
       backgroundPosition: 'center', 
       backgroundRepeat: 'no-repeat' }}>
            {/* Game Logo */}
    <div className="game-logo" style={{ display: 'flex', justifyContent: 'left',top: '28rem',position: 'absolute' }}>
      
      <Link href="https://nba.2k.com/2k24/" target="_blank" rel="noopener noreferrer">
      <h1 style={{fontSize:"3rem",position:"relative",right:"10rem"}}>Want To Be A Hall Famer?</h1>
          
        <Image
          className='rounded-lg'
          src={nba}
          alt=""
          width={350}
          height={350}
        />
      </Link>
    </div>

    {/* Live Streams Section */}
    <div className="stream-section"style={{padding: "2rem"}}>
      <h1 style={{position: "relative",fontSize:"3rem",textDecoration:"underline" }}>Live Streams</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="https://www.youtube.com/@nba2k/streams" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={Youtube}
          alt=""
          width={350}
          height={350}
        />
      </Link>
    </div>
    </div>

    {/* Reviews Section */}
    <div className="review-section"style={{padding: "2rem"}}>
      <h1 style={{position: "relative",bottom: "2rem",fontSize:"3rem",textDecoration:"underline" }}>Reviews</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="https://www.ign.com/articles/nba-2k24-review" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={IGN}
          alt=""
          width={200}
          height={200}
        />
      </Link>
    </div>
    </div>

     {/* Code Section */}
     <div className="code-section"style={{padding: "5rem"}}>
      <h1 style={{position: "relative",top: "2rem",fontSize:"3rem",textDecoration:"underline" }}>Code Base</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="https://www.youtube.com/watch?v=g7yv5VOsM5A" target="_blank" rel="noopener noreferrer">
        <Image
          className='rounded-lg'
          src={Youtube}
          alt=""
          width={250}
          height={250}
        />
      </Link>
    </div>
  </div>
</main>

</div>



      <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full  mx-auto p-4 md:py-8">
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

export default Nba2k24;
