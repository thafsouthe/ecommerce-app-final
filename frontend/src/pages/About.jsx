import React, { Component } from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>  
          <Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[700px]' src= {assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gary-600  '>
              <p>At TechZone, we believe technology should make life easier, smarter, and more enjoyable. That’s why we’re dedicated to offering the best electronic products in one convenient place. From powerful laptops and gaming PCs to the latest smartphones, headphones, and earpods, we provide high-quality devices that meet your everyday needs.</p>
              <p>Our goal is to make shopping for technology simple, secure, and affordable. We partner with trusted brands to ensure every product meets our high standards of performance and reliability. Whether you’re upgrading your setup, exploring new gadgets, or searching for the perfect tech gift, TechZone is here to help.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to make technology accessible, reliable, and affordable for everyone. We strive to connect people with the latest and most innovative electronic devices, from laptops and smartphones to headphones and accessories, that enhance daily life. Our focus is on delivering quality products, exceptional service, and a seamless shopping experience. We aim to inspire confidence and satisfaction in every purchase, helping our customers stay connected, productive, and ahead in today’s digital world.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'Why'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance :</b>
            <p className='text-gray-600'>Every product is carefully tested and inspected to ensure the highest standards of quality, performance, and durability, giving you reliable technology you can trust.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience :</b>
            <p  className='text-gray-600'>We make online shopping effortless by offering a smooth, fast, and user-friendly experience. Browse, compare, and order your favorite tech products anytime, anywhere, all with just a few clicks.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service :</b>
            <p className='text-gray-600'>Our team is always ready to assist you with care, professionalism, and quick responses to ensure your shopping experience is smooth, satisfying, and worry-free.</p>
          </div>
        </div>

        <NewsletterBox/>

    </div>
  )
}

export default About