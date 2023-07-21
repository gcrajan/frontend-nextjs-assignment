"use client"
import pageStyle from '../styles/page.module.css'
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import TopList from '../components/TopList'
import Footer from '../components/Footer'
import Image from 'next/image'
import phone from '../images/phonepay.png'
import home from '../images/homedelivery.png'
import discount from '../images/cashback.png'


export default function Home() {
  return (
    <div className={pageStyle.homeContainer}>
      <Header/>
      <HomeMain/>
      <div className={pageStyle.pageDiv}>
        <p>Top List</p>
        <h1>Some of the top selling lists are:</h1>
      </div>
      <TopList/>
{/*------------ feature component ---------  */}
      <div className={pageStyle.pageDiv}>
        <p>Our Features</p>
        <h1>Features that stands us out:</h1>
      </div>
      <div className="mx-auto my-10 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
            <p className="mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
            <p className="mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div><h3 className="mt-8 text-lg font-semibold text-black">Easy to search</h3>
            <p className="mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
          </div>
        </div>
      </div>
    
{/*------------ services component ---------  */}
      <div className={pageStyle.pageDiv}>
        <p>Our Services</p>
        <h1>Services we serve:</h1>
      </div>
    <div className='flex justify-around'>
      <div className="w-[300px] rounded-md border">
        <Image src={discount} alt="discount" className="h-[200px] w-full rounded-md object-cover"/>
        <div className="p-4">
          <h1 className="text-lg font-semibold">50% Discount</h1>
          <p className="mt-3 text-sm text-gray-600">
          Get 50% cashback on any item. Only for limited time. Grab this offer before it gone. Enjoy shopping.
          </p>
        </div>
      </div>

      <div className="w-[300px] rounded-md border">
        <Image src={phone} alt="online payment" className="h-[200px] w-full rounded-md object-cover"/>
        <div className="p-4">
          <h1 className="text-lg font-semibold">Easy Payment</h1>
          <p className="mt-3 text-sm text-gray-600">
          Online payment is available. Easy to pay through your phone.
          </p>
        </div>
      </div>

      <div className="w-[300px] rounded-md border">
        <Image src={home} alt="home" className="h-[200px] w-full rounded-md object-cover"/>
        <div className="p-4">
          <h1 className="text-lg font-semibold">Home Delivery</h1>
          <p className="mt-3 text-sm text-gray-600">
          Home delivery is availbale. You can buy anything from anywhere just by sitting from home.
          </p>
        </div>
      </div>
    </div>

{/*------------ services component ---------  */}
      <div className={pageStyle.pageDiv}>
        <p>FAQS</p>
        <h1>Frequently Asked Questions:</h1>
      </div>
      <section className="mx-auto max-w-7xl px-2 mb-20 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-black">How do I get started?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  );
}
