"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import musiclistStyle from '../../../styles/musiclist.module.css'

function Page({ params }) {
  const [value, setValue] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setValue(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={musiclistStyle.searchMainContainer}>
      <Header />
      <div>
        {value &&
          value
            .filter((data) => data.id === parseInt(params.items))
            .map((data) => (
              <section className="overflow-hidden">
                <div className="mx-auto max-w-5xl px-5 py-24">
                  <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={320}
                      height={320}
                      className="z-0 rounded-md object-cover"
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                      <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                        {data.category}
                      </h2>
                      <h1 className="my-4 text-3xl font-semibold text-black">
                        {data.title}
                      </h1>

                      <p className="leading-relaxed">{data.description}</p>
                      <div className="flex items-center justify-between mt-6">
                        <span className="title-font text-xl font-bold text-gray-900">
                          $ {data.price}
                        </span>
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-semibold text-white shadow-sm rounded bg-blue-500 hover:bg-blue-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
