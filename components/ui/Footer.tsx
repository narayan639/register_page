import React from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <div className=' bg-[#183B84] bg-blend-color-burn text-white py-5 md:py-5 md:pt-20' style={{ backgroundImage: "url('https://banshwali-full.vercel.app/footer-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat' }}>
        <div className="h-max hidden md:block mt-10">
          <div className="p-2 md:px-10 lg:px-20 h-max grid md:grid-cols-3 lg:grid-cols-5 justify-between gap-10 lg:gap-20 pb-5">
            <div className="flex gap-2 w-max">
              <div className='h-[80px] w-[80px] rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://banshwali-full.vercel.app/logo.png" alt="img" />
              </div>
              <div  className='flex flex-col gap-4'>
                <h1 className='font-bold md:text-[2.2vw] lg:text-[1.3vw]'>Godar Thapa</h1>
                <ul className='flex flex-col gap-2 font-medium'>
                  <li className='flex items-center gap-2'><MapPin size={20}/> उर्लाबारी, मोरंग</li>
                  <li className='flex items-center gap-2'><Phone size={20}/> ९८५१३५३५९९</li>
                  <li className='flex items-center gap-2'><Mail size={20}/> info@metalogic.com.np</li>
                </ul>
              </div>
            </div>
            <div className="lg:hidden"></div>

            <div className=" flex flex-col gap-5 lg:pl-24">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Banshawali</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">प्रतिक्रिया</li>
                <li className="cursor-pointer">Admin</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-5 lg:pl-24">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Help Center</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">सम्पर्क गर्नुहोस्</li>
                <li className="cursor-pointer">सहायता र समर्थन</li>
                <li className="cursor-pointer">FAQs</li>

              </ul>
            </div>

            <div className=" flex flex-col gap-5 lg:pl-24">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Quick links</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About us</li>

              </ul>
            </div>

            <div className=" flex flex-col gap-5">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Join us</h1>

              <ul className='flex gap-2 font-medium items-center mt-1 flex-wrap'>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Twitter size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Facebook size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Instagram size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><FaWhatsapp size={20} /></li>
              </ul>
            </div>
          </div>

          <hr />
          <div className='flex items-center justify-between pt-5 px-4 md:px-8 text-sm gap-3 flex-wrap'>
            <p>© Copyright 2023 MetaLogic Software Pvt. Ltd All rights reserved.</p>
            <div className='flex gap-4'>
              <p className='cursor-pointer'>Terms & Conditions</p>
              <p className='cursor-pointer'>Privacy Policy</p>
            </div>
            <div className='flex'>
              Powered by
              <p className='underline'> MetaLogic Software Pvt. Ltd</p>
            </div>
          </div>
        </div>

        <div className="md:hidden  p-3">
          <div className="flex flex-col gap-3">
            <div className='h-[100px] w-[100px] rounded-full overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://banshwali-full.vercel.app/logo.png" alt="" />
            </div>       
             <div>
              <h1 className='font-bold md:text-[2.2vw] lg:text-[1.3vw]'>Godar Thapa</h1>
              <ul className='flex flex-col gap-2 font-medium'>
                <li className='flex items-center gap-2'><MapPin /> उर्लाबारी, मोरंग</li>
                <li className='flex items-center gap-2'><Phone /> ९८५१३५३५९९</li>
                <li className='flex items-center gap-2'><Mail /> info@metalogic.com.np</li>
              </ul>
            </div>
          </div>

          <div className="h-max grid grid-cols-2 justify-between my-10 gap-5">


            <div className=" flex flex-col gap-5">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Banshawali</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">प्रतिक्रिया</li>
                <li className="cursor-pointer">Admin</li>
              </ul>
            </div>

            <div className=" flex flex-col gap-5">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Help Center</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">सम्पर्क गर्नुहोस्</li>
                <li className="cursor-pointer">सहायता र समर्थन</li>
                <li className="cursor-pointer">FAQs</li>

              </ul>
            </div>

            <div className=" flex flex-col gap-5">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Quick links</h1>

              <ul className="text-lgray flex flex-col gap-2 font-medium">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>

              </ul>
            </div>

            <div className=" flex flex-col gap-5">
              <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Join us</h1>

              <ul className='flex gap-2 font-medium items-center mt-1 flex-wrap'>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Twitter size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Facebook size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><Instagram size={20} /></li>
                <li className='flex items-center border-2 p-2 cursor-pointer rounded-full hover:bg-white hover:text-black transform duration-75 ease-in'><FaWhatsapp size={20} /></li>
              </ul>
            </div>
          </div>

          <hr />
          <div className='flex items-center justify-between pt-5 px-4 text-sm gap-3 flex-wrap'>
            <p>© Copyright 2023 MetaLogic Software Pvt. Ltd All rights reserved.</p>
            <div className='flex gap-4'>
              <p className='cursor-pointer'>Terms & Conditions</p>
              <p className='cursor-pointer'>Privacy Policy</p>
            </div>
            <div className='flex'>
              Powered by
              <p className='underline'> MetaLogic Software Pvt. Ltd</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer