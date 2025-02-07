import React from 'react';
import Waves from './../../public/waves-topo.png';
import HeroImage from './../../public/hero.png';
import Image from 'next/image';
import Image1 from './../../public/img1.png';
import Image2 from './../../public/img2.png';

const LandingPage = () => {
  return (
    <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      {/* Nav */}
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" />
                <path className="plane-take-off" d="M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z" />
              </svg>
              LANDING
            </a>
          </div>
          {/* Toggle button for mobile view */}
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* Menu items */}
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
            </ul>
            <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/* Hero section */}
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just right!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <Image src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <Image src={Waves} alt="waves" layout="responsive" width={500} height={300} className="w-full" />
      </div>
     
      <section className="bg-white border-b py-8">
  <div className="container max-w-5xl mx-auto m-8">
    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
      Title
    </h2>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-5/6 sm:w-1/2 p-6">
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          <br />
          <br />
          Images from:
          <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <Image className="w-full sm:h-64 mx-auto" src={Image1} alt="travel booking" layout="responsive" />
      </div>
    </div>
    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <Image className="w-5/6 sm:h-64 mx-auto" src={Image2} alt="connected world" layout="responsive" />
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
            <br />
            <br />
            Images from:
            <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" />
                  <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z" />
                </svg>
                LANDING
              </a>
            </div>
            {/* Additional Footer Links */}
            {/* More content here... */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;