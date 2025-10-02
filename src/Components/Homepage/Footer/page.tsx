import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Footer = () => {
  return (
    <footer className={`${dm.className} bg-gray-100 mt-17 border-t border-black`}>
      <div className="max-w-6xl mx-auto px-1 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
            <Link href="/">
        <Image
          src="/zauctoImg.png" // Path to your logo image
          alt="Zaucto Logo"
          width={120} // Adjust width as needed
          height={8} // Adjust height as needed
        />
      </Link>
      </div>
            <p className="text-gray-600 text-sm mb-6">
              The smart way to procure chemicals is here...
            </p>

            <div className="mb-6">
              <h3 className="text-gray-800 font-medium ">
                Stay Connected With Us!
              </h3>
              <p className="text-[#868686] text-xs">
                All of update in Social
              </p>
              <div className="flex ml-3 space-x-8">
                <Link
                  href="#"
                  className="w-8 h-8 rounded flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={17}
                    height={20}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={17}
                    height={20}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/insta.png"
                    alt="Instagram"
                    width={17}
                    height={20}
                  />
                </Link>
              </div>
              <div className="flex text-xs text-gray-500  space-x-4">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>

          {/* Category Section */}
          <div className="md:col-span-1 ml-8">
            <h3 className="text-gray-800 font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Home</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Auctions</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Procurement</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">FAQ's</Link></li>
            </ul>
          </div>

          {/* Auctions Section */}
          <div className="md:col-span-1 ml-8">
            <h3 className="text-gray-800 font-semibold mb-4">Auctions</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Latest Auctions</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Upcoming Auctions</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Live Auctions</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">Completed Auctions</Link></li>
            </ul>
          </div>

          {/* Procurements Section */}
          <div className="md:col-span-1 ml-8">
            <h3 className="text-gray-800 font-semibold mb-4">Procurements</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">New RFQ</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">My RFQ</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">New Auction</Link></li>
              <li><Link href="#" className="text-gray-600 text-sm hover:text-gray-800 transition-colors">My Auction</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-1 ml-8">
            <h3 className="text-gray-800 font-semibold mb-4">
              Join Our Newsletter & More Information.
            </h3>
            <div className="border rounded-md">
            <div className="flex ">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-2 text-sm"
              />
              <button className="px-4 py-2 text-black text-sm border rounded-md ">
                →
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black mt-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-sm mb-2 md:mb-0">©Copyright 2025</div>
          <div className="flex space-x-4 text-white text-sm">
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
