import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Central Hope Town <br /> Selaqui, Dehradun–24801, Uttarakhand, India</p>
          <p className=' text-gray-500'>Tel:+91 9845739656 <br /> Email: medilink61@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT Medi-Link</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className="bg-primary text-white border border-black px-4 py-2 text-xs rounded-full group relative overflow-hidden transition-all duration-500">
  <span className="inline-block transition-all duration-500 group-hover:translate-x-2">
    Explore Jobs →
  </span>
</button>


        </div>
      </div>

    </div>
  )
}

export default Contact
