import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img
          src={Profile}
          alt="img"
          className='h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white  '>
          About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
        I am Shivam Pandey, an aspiring full stack developer with knowledge of latest web technologies. I've 2+ years of experience at enVista corp, I am proficient in making full blown web applications and especially frontend part of it. I have made static as well as dynamic web pages using HTML, CSS, Javascript & ReactJS. I am proficient in JavaScript and know core Java and C++. Though, I am learning to deal with complex algorithms till now. I am ready to collaborate on projects so I will be ready to contact you.

        <br/>Besides all this, I used to write motivational quotes to share on Social Media, just to spread positivity in the environment. I like chilling out on weekends and like to make new and interesting friends.
        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaUserAlt size={14} /> Shivam Pandey
          </p>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdOutlineAlternateEmail size={14} /> <a href="mailto:cse.shivam98@gmail.com">cse.shivam98@gmail.com</a>
          </p>
          <a
            href='https://wa.me/+11 234 567 897'
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +91 7266963636
          </a>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdWifiCalling2 size={14} /> +91 7266963636
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;