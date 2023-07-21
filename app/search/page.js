"use client"
import Link from "next/link";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import musiclistStyle from '../../styles/musiclist.module.css'


const page = () => {
  const [searchInput,setSearchInput]= useState("");
  const [info,setInfo]= useState();
  const url = 'https://fakestoreapi.com/products';

  useEffect(()=>{
    fetch(url)
          .then(res=>res.json())
          .then(json=>{
            setInfo(json);
          })
          .catch(err=>{
            console.log(err);
          })
  },[])
  return (
    <div className={musiclistStyle.searchMainContainer}>
      <Header/>
{/* --------------- search list ------------ */}
      <div>
        <div className={musiclistStyle.searchBar}>
            <input type="text" value={searchInput} onChange={event=> setSearchInput(event.target.value)} placeholder='eg Jacket'/>
        </div>
        <div className={musiclistStyle.musicListContainer}>
        
        {info && info
        .filter((data) => data.title && data.title.toLowerCase().includes(searchInput.toLowerCase()))
        .map((data)=>(
        <div key={data.id} className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
        <Image src={data.image} alt={data.title} width={640} height={640} className="z-0 h-full w-full rounded-md object-cover"/>
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{data.title}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Price: {data.price}
            </p>
            <Link href={`search/${data.id}`} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-500 p-1 rounded hover:bg-blue-500/80">Read More &rarr;</Link>

          </div>
        </div>
      ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
