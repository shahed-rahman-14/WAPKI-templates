
import {  useState } from 'react';
 import banner from '../../public/banner.png'
 import service from '../../public/service.png'
 import service1 from '../../public/service3.png'
 import service2 from '../../public/service2.png'
 import build from '../../public/build.png'
 import knowlage from '../../public/knowlage.png'
 import feature from '../../public/feature.png'
 import feature1 from '../../public/feature1.png'
 import feature2 from '../../public/feature2.png'
 import m1m from '../../public/m1m.png'
 import icon from '../../public/icon.png'
import { MdClose, MdMenu } from 'react-icons/md'; // Import the hamburger menu icon
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


import feed from '../../public/feed.png';
import feed1 from '../../public/feed1.png';
import feed2 from '../../public/feed2.png';
import feed3 from '../../public/feed3.png';
import feed4 from '../../public/feed4.png';
import avatar from '../../public/avatar.png';
import avatar1 from '../../public/avatar1.png';
import avatar2 from '../../public/avatar2.png';
import avatar3 from '../../public/avatar3.png';

import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Home = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    // data for "our new feed section"
    const newsData = [
        {
          "id": 1,
          "img": feed,
          "date": "4 July 2020",
          "title": "Artificial intelligent has become commonplace in many ways",
          "avatar": avatar,
          "writer": "By Selena Gomz",
          "react": 32
        },
        {
          "id": 2,
          "img": feed4,
          "date": "4 July 2020",
          "title": "Artificial intelligent has become commonplace in many ways",
          "avatar": avatar,
          "writer": "By Selena Gomz",
          "react": 32
        },
        {
          "id": 3,
          "img": feed1,
          "date": "4 July 2020",
          "title": "Artificial intelligent has become commonplace in many ways",
          "avatar": avatar1,
          "writer": "By Selena Gomz",
          "react": 32
        },
        {
          "id": 4,
          "img": feed2,
          "date": "4 July 2020",
          "title": "Artificial intelligent has become commonplace in many ways",
          "avatar": avatar2,
          "writer": "By Selena Gomz",
          "react": 32
        },
        {
          "id": 5,
          "img": feed3,
          "date": "4 July 2020",
          "title": "Artificial intelligent has become commonplace in many ways",
          "avatar": avatar3,
          "writer": "By Selena Gomz",
          "react": 32
        },
      ];
      
    return (
        <div className=''>
           {/* navbar */}
           <nav className="p-4 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-lg">WAPKI</div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex items-center"
          >
            {isMenuOpen ? (
              <MdClose size={24} />
            ) : (
              <MdMenu size={24} />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="banner"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="px-4 py-2 rounded-md block md:inline-block"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="px-4 py-2 rounded-md block md:inline-block"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="px-4 py-2 rounded-md block md:inline-block"
          >
            Contact
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="px-4 py-2 rounded-md block md:inline-block"
          >
            Pricing
          </Link>

       
          <div className="relative px-4 py-2 rounded-md block md:inline-block">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-white text-black rounded focus:outline-none"
            >
              <option value="english" className='bg-white'>ENGLISH</option>
              <option value="bangla">BANGLA</option>
              {/* Add other language options as needed */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* ... (you can add an icon here if needed) */}
            </div>
          </div>
          <Link
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="px-4 py-2 rounded-md block md:inline-block"
          >
            <button className="text-white bg-red-600 hover:bg-red-700 px-8 py-2">
              Get Start
            </button>
          </Link>
        </div>
      </div>
    </nav>
    {/* banner section */}
    <section className='container px-4  mx-auto md:flex my-24  justify-between items-center gap-10'>
        <div className='md:w-1/2 w-full'>
            <h1 className='font-bold md:text-6xl text-4xl mb-[19px]'>We Help You To Build Your Creativity</h1>
            <p className=' mb-[35px]'>Programming is a skill best acquired by practice and example rather then from books.</p>
            <button className='text-white bg-red-600 hover:bg-red-700  px-8 mt-4 py-2'>Get Start</button>
        </div>
        <div className='md:w-1/2 w-full'>
            <img className='w-full mt-12 md:mt-0' src={banner} alt="Banner" />
        </div>
    </section>
    {/* Our Service */}
    <section id='service' className='container px-4 mx-auto md:px-24'>
        <h1 className='font-medium text-center text-4xl md:text-[50px] mb-[60px]'>Our Service</h1>
        <div className='md:flex gap-[30px] '>
            <div className='text-center border-[1px] py-[40px] border-[#F2F2F2]'>
                <div className='flex justify-center'>
                <img src={service} alt="" />
                </div>
                <h1 className='text-[26px] font-semibold my-[30px] mb-[20px]' >Business Planing</h1>
                <p>Voice and data system arecrucual to the success or failure of most yor business</p>
            </div>
         <div style={{ boxShadow: '0px 34px 50px 0px rgba(0, 0, 0, 0.1)' }} className='border-b-[15px] border-red-500 py-[40px]'>
         <div  className='text-center   py-[31px] px-[18px] bg-[#FFFFFF]'>
               <div className='flex justify-center '>
               <img className='' src={service2} alt="" />
               </div>
                <h1 className='text-[26px] font-semibold my-[30px] mb-[20px]'>Startup Planing</h1>
                <p>Voice and data system arecrucual to the success or failure of most yor business</p>
                
            </div>
         </div>
            <div className='text-center border-[1px] py-[40px] border-[#F2F2F2]'>
               <div className='flex justify-center pt-[40px]'>
               <img src={service1} alt="" />
               </div>
                <h1 className='text-[26px] font-semibold my-[30px] mb-[20px]'>Digital Thinking    </h1 >
                <p>Voice and data system arecrucual to the success or failure of most yor business</p>
            </div>
        </div>
    </section>
    {/* Build Your Own Business */}
    <section className='md:flex gap-[71px] justify-between px-4 items-center mt-[52px] container mx-auto'>
        <div className='md:1/2 pr-16'>
            <h1 className=' text-4xl md:text-[52px]  font-medium'>Build Your Own Business!</h1>
            <p className='mt-[20px] text-lg md:text-[24px]'>Build your business with WAPKi. We will <br /> help you to build your business and make it sucess</p>
            <button className='px-6  mt-[40px] py-2 hover:text-white hover:bg-red-400  border border-red-300 text-[20px]'>Set Timer</button>
        </div>
    
        <div className='md:w-1/2 mt-11 md:mt-0'>
            <img src={build} className='w-full' alt="Build Img" />
        </div>
    </section>
    {/* All The Knowledge */}
    <section className='container mx-auto md:flex justify-between px-4 items-center gap-[65px] mt-[80px] md:mt-0 mb-[163px] '>
        <div className='md:w-1/2'>
            <img src={knowlage} className='w-full' alt="" />
        </div>
        <div className='md:w-1/2 mt-11 md:mt-0'>
            <h1 className='text-4xl md:text-[52px]  font-medium'>All The Knowlage !</h1>
            <p className='mt-[20px] text-lg md:text-[24px]'>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</p>
            <button className='px-6 mt-[50px] py-2  border border-red-300 hover:bg-red-400 text-[20px]'>Explore</button>
        </div>
    </section>
    {/* More then 1m People */}
    <section className='container mx-auto px-4 mb-[168px]'>
        <div className='md:flex justify-between gap-[47px] items-center'>
        <div className='md:w-1/2'>
            <h1 className='text-4xl md:text-5xl  font-medium mb-[50px]'>More then 1M People Like Us</h1>
            <p className='mb-[30px]'>“Employees who report receiving recognition and praise within the last seven days show increased productivity, get higher scores from customers, and have better safety records. They’re just more engaged at work.”</p>
            <div>
                <img src={icon} className='mb-[10px] w-[65px]' alt="" />
                <h1 className='text-[28] font-semibold '>David Smith</h1>
                <p>Business Agent</p>
            </div>
        </div>
        <div className='md:w-1/2 mt-11 md:mt-0'>
            <img src={m1m} alt="" />
        </div>
        </div>
    </section>
    {/* Our Features */}
    <section id='about' className='container px-4 mx-auto md:px-[20px] xl:px-[192px] mb-[172px]'>
        <h1 className='text-4xl md:text-[50px] font-semibold text-center mb-[60px]'>Our Features</h1>
        <div className='md:flex justify-around items-center gap-11'>
            <div className='text-center pr-6 md:border-r-[1px] mx-auto w-[288px] h-[225px]  border-gray-500'>
                <div className='flex  justify-center mb-4'>
                <img src={feature} alt=""  />
                </div>
                <h1 className='text-2xl font-medium mb-[15px]'>Business Analysis</h1>
                <p className=''>It is a long established fact that a reader will be distracted by the readable contnt</p>
            </div>
            <div className='text-center pr-6 mt-10 md:mt-0 md:border-r-[1px] w-[288px] h-[225px] mx-auto border-gray-500'>
                <div className='flex justify-center mb-4'>
                <img className='' src={feature1  } alt="" />
                </div>
                <h1 className='text-2xl font-medium mb-[15px]'>SEO Consultancy</h1>
                <p className=''>It is a long established fact that a reader will be distracted by the readable contnt </p>
            </div>
            <div className='text-center pr-6 mt-10 md:mt-0 mx-auto w-[288px] h-[225px] '>
                <div className='flex justify-center mb-4'>
                <img src={feature2} alt="" />
                </div>
                <h1 className='text-2xl font-medium mb-[15px]'>Keyword Research</h1>
                <p className=''>It is a long established fact that a reader will be distracted by the readable contnt</p>
            </div>
           
        </div>
    </section>
{/* News Feed Section */}
<section className="container my-24 px-4 mx-auto">
    <h1 className='text-center text-4xl md:text-[50px] font-semibold mb-[67px] font-'>Our News Feed</h1>
    <Swiper
  slidesPerView={1}
  spaceBetween={30}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}
  modules={[FreeMode, Pagination]}
  className="mySwiper"
>
  {newsData.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="p-8 border-grey-100 border w-96 rounded-xl md:w-full mx-auto max-h-full  lg:w-96 shadow-xl">
        <div className="w-full">
          <img
            src={item.img}
            alt={`Slide ${item.id}`}
            className="md:w-full w-96 mx-auto h-48 md:h-80 bg-[#F4F9FF] mb-4 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p className="text-gray-500 text-sm mb-2">{item.date}</p>
        <h2 className="text-xl my-[20px] font-bold">{item.title}</h2>
        <div className="flex gap-16 items-center">
          <div className="flex items-center mb-6">
            <img
              src={item.avatar}
              alt="Avatar"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p className="text-gray-700">{item.writer}</p>
          </div>
          <div className="text-gray-700 mb-6 flex items-center gap-1">
            <FaHeart className="text-red-600" />
            {item.react}{' '}
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
    {/* Get in Touch section */}
    <section id='contact' className='container mx-auto px-4'>
        <div>
        <div className=" md:flex justify-evenly items-center gap-7 ">
            <div className='my-8 mb px-8 pt-5'>
                <h1 className='font-medium md:text-[42px] mb-4  text-4xl '>Get In Touch
With Us</h1>
<p className='text-lg'>Do you have any questions?</p>
            </div>
      <form className="  p-8 rounded shadow-xl max-w-md" >
      
        <input placeholder='Name'
          className="w-full p-2 mb-4 border-b-[2px] border-gray-300 rounded"
          type="text"
          id="name"
          name="name"
          required
        />

        
        <input
          className="w-full p-2 mb-4 border-b-[2px] border-gray-300   rounded"
          type="email" placeholder='Email'
          id="email"
          name="email"
          required
        />

        
        <textarea
          className="w-full p-4 mb-6  border-b-[2px] border-gray-300 block  rounded"
          id="message" placeholder='Message'
          name="message"
          rows="4"
          required
        ></textarea>

        <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
        </div>
    </section>
    {/* footer  */}
    <footer className="bg-[#F4F9FF] container mx-auto mt-12 p-8">
    <div className=" ">
        <div className="mb-4 md:mb-0 md:flex justify-between">
          <h1 className="text-2xl md:w-1/2 font-bold cursor-pointer" onClick={scrollToTop}>WAPKI</h1>
          <p className="mt-2 md:px-6 lg:pl-60 md:m-1/2">
            Build your business with WAPKi. We will help you to build  your business and make it successful.
          </p>
        </div>
        <hr className='my-2' />
        <div className='md:flex  justify-between items-center'>
        <div className="mt-8 my-2">
        <p>@ All right reserved 2024</p>
      </div>
        <div className="flex items-center space-x-4">
          <a href="#" className=" hover:text-blue-700">
            <FaFacebook />
          </a>
          <a href="#" className=" hover:text-blue-700">
            <FaTwitter />
          </a>
          <a href="#" className=" hover:text-blue-700">
            <FaInstagram />
          </a>
          <a href="#" className=" hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
        </div>
      </div>

      
    </footer>
    </div>
       
    );
};

export default Home;