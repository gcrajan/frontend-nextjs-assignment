'use client';
import Link from "next/link";
import Image from 'next/image'
import Logo from '../images/logo.png'
import React from 'react'
import headerStyle from '../styles/header.module.css'
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
  return (
    <nav className={headerStyle.navbar}>
        <div className={headerStyle.imageNav}>
            <Link href='/'> <Image src={Logo} alt="logo"/> </Link>
        </div>
        <div className={headerStyle.contentNav}>
            <ul>
                <li>
                    <Link href="/" className={pathname == "/" ? "bg-yellow-500 p-2 text-white rounded-sm" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/search" className={pathname == "/search" ? "bg-yellow-500 p-2 text-white rounded-sm" : ""}>Shop</Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname == "/contact" ? "bg-yellow-500 p-2 text-white rounded" : ""}>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
