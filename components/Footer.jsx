import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer className="w-full my-5 py-5 border-t-2 border-yellow-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        <div className="flex justify-center items-center">
          <Link href='/' className="flex items-center"> 
            <Image src={Logo} alt="logo" className='h-8 w-8'/>
            <span className="ml-4 text-lg font-bold">Ecom Site</span>
           </Link>
          
        </div>
        <div className="hidden items-center md:inline-flex">
          <span className="text-sm font-medium text-black">Buy anything, anywhere.</span>
          <Link href='/contact'
            className="ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to know our sells.</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer