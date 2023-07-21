'use client';
import Link from "next/link";
import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import musiclistStyle from '../styles/musiclist.module.css'


const MusicList = () => {
    const [data,setData]= useState();
    const url = 'https://fakestoreapi.com/products?limit=6';

    useEffect(()=>{
      fetch(url)
            .then(res=>res.json())
            .then(json=>{
              setData(json);
              // console.log(json)
            })
            .catch(err=>{
              console.log(err);
            })
    },[])
    
    console.log(data);
  return (
    <div className={musiclistStyle.musicListContainer}>
        {data && data.map((data)=>(
        <div key={data.id} className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
        <Image src={data.image} alt={data.title} width={640} height={640} className="z-0 h-full w-full rounded-md object-cover"/>
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{data.title}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Price: {data.price}
            </p>
            <Link href="/search" className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-500 p-1 rounded hover:bg-blue-500/80">Shop More</Link>
          </div>
        </div>
      ))}


    </div>
  )
}

export default MusicList
