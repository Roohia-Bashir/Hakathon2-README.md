import React from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'

function Shopmainimage() {
  return (
    <div>
      <section className="mb-[46px]">

       {/* Banner Section */}


       <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16 mb-10 min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[240px]">
  <div className="container text-center px-4">
    <div className="inline-block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[url('/logo1.png')] bg-cover mb-4" />
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 font-poppins">Shop</h1>
    <div className="flex items-center justify-center gap-2 text-sm md:text-base">
      <a href="#" className="hover:underline">Home</a>
      <span>
        <Image
          src="/rightA.png"
          width={16}
          height={16}
          className="w-4 h-4 md:w-5 md:h-5"
          alt="arrow"
        />
      </span>
      <span>Shop</span>
    </div>
  </div>
</div>
        {/* Bottom section with filter and sort options */}
        <div className="hidden sm:flex items-center justify-between w-full h-[100px] bg-[#f9f1e7] px-4">

          {/* Left side: Filter section */}
          <div className="flex items-center gap-[64px] ">
            <div className="flex items-center">
              <Image
                src="/shopIcon1.png"
                alt="shopIcon1"
                width={25}
                height={25}
              />
              <p className="text-[20px] leading-[30px] font-[400] font-poppins text-black ml-3 mr-[23px]">Filter</p>

              <Image
                src="/shopIcon2.png"
                alt="shopIcon2"
                width={25}
                height={25}
              />
              <Image
                src="/shopIcon3.png"
                alt="shopIcon3"
                width={25}
                height={25}
                className="ml-[24px]"
              />
            </div>

            <div className="hidden md:block w-[237px] border-l-2 border-black">
              <p className="pl-[34px] text-[16px] leading-[24px] font-[400] font-poppins text-black">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>

          {/* Right side: Sort and Show options */}
          <div className=" hidden md:flex items-center justify-center text-[20px] leading-[30px] gap-4 sm:gap-[35px]">
            <p className="pr-[35px]">Show</p>
            <Input
              placeholder="16"
              className="w-[55px] h-[55px] bg-white rounded-none text-center mr-[29px] text-[16px] leading-[24px] font-[400] font-poppins text-[#9f9f9f] "
            />
            <p className="pr-[35px] md:hidden lg:block">Sort By</p>
            <Input
              placeholder="Default"
              className="w-[188px] h-[55px] bg-white rounded-none text-center text-[16px] leading-[24px] font-[400] font-poppins text-[#9f9f9f] md:hidden lg:block"
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Shopmainimage