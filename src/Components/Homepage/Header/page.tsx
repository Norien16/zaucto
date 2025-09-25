// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-10">
      {/* Top Bar */}
      <div className="flex justify-between font-medium items-center px-42 py-2 text-md text-[#0B0C0C]">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Mail size={20} />
            <span>info@example.com</span>
          </span>
          <span>|</span>
          <span className="flex items-center space-x-1">
            <Phone size={16} />
            <span>+91 6549 6547</span>
          </span>
          
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3 ">
          <button className="px-5 py-1 border border-[#D3AF37] text-[#D3AF37] rounded-md hover:bg-yellow-50 text-medium">
            How To Bid
          </button>
          <button className="px-5 py-1 border border-gray-600 text-gray-800 rounded-md hover:bg-gray-50 text-medium">
            How To Sell
          </button>
        </div>
      </div>
       {/* Divider */}
  <hr className="border-t border-gray-400" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-7 py-3">
       {/* Logo */}
      <Link href="/">
        <Image
          src="/zauctoImg.png" // Path to your logo image
          alt="Zaucto Logo"
          width={148} // Adjust width as needed
          height={20} // Adjust height as needed
        />
      </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex pr-55 mt-2 space-x-14 font-medium text-[#0B0C0C]">
          <li>
            <Link href="/" className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li className="relative group">
            <button className="focus:outline-none">Auctions ▾</button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
              <Link href="/auctions/live" className="block px-4 py-2 hover:bg-gray-100">
                Live Auctions
              </Link>
              <Link href="/auctions/upcoming" className="block px-4 py-2 hover:bg-gray-100">
                Upcoming Auctions
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="focus:outline-none">Procurement ▾</button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
              <Link href="/procurement/buy" className="block px-4 py-2 hover:bg-gray-100">
                Buy
              </Link>
              <Link href="/procurement/sell" className="block px-4 py-2 hover:bg-gray-100">
                Sell
              </Link>
            </div>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-medium font-bold">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-11 py-3.5 bg-gradient-to-r from-[#D3AF37] to-[#7B6300] text-white rounded-md text-sm font-semibold  hover:from-[#7B6300] hover:to-[#D3AF37]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}