import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
            <Image 
          src="/horse.png"
          alt="pic"
          height={100}
          width={100}
          className="absolute right-150 top-50 rounded-full"
        />
        <Image src="/cliff.webp" alt="cliff" width={50} height={50} />

                </Link></span>
        <p className="text-slate-600">Copyright © All Rights Reserved |Touseeq Haider</p>
      </div>
    </footer>
  );
};

export default Footer;