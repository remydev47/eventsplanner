'use client';

import React from 'react'

import Image from 'next/image';

const footerNav = {
    Services: [
      {
        title: "WEDDINGS",
        href: "/#",
      },
      {
        title: "MUSIC FESTIVALS",
        href: "/#",
      },
      { 
        title: "OFFICE PARTIES", 
        href: "/#" 
      },
      { 
        title: "PICNICS", 
        href: "/#" 
      },
      { 
        title: "FESTIVALS",
       href: "/#" 
      },
      { 
       title: "PRIVATE PARTIES",
       href: "/#" 
      },
      { 
        title: "SOCIALS",
       href: "/#" 
      },
      { 
        title: "FAMILY GATHERINGS",
       href: "/#" 
      },
      // { 
      //   title: "Afterfortey Cleaning",
      //  href: "/#" 
      // },
      // { 
      //   title: "Laundry Services",
      //  href: "/#" 
      // },
      // { 
      //   title: "Maid services",
      //  href: "/#" 
      // },
      // { 
      //   title: "Carpet Cleaning",
      //  href: "/#" 
      // },
    ],
    QuickLinks: [
      {
        title: "About Company",
        href: "/#",
      },
      { 
        title: "Member", 
        href: "/#" 
      },
      {
        title: "Service", 
        href: "/#" 
      },
      {
        title: "About Us", 
        href: "/#" 
      },
      {
        title: "Blog", 
        href: "/#" 
      },
      {
        title: "Porfolio", 
        href: "/#" 
      },
      {
        title: "Shop", 
        href: "/#" 
      },
      {
        title: "News Room", 
        href: "/#" 
      },
      {
        title: "FAQS", 
        href: "/#" 
      },
    ],
    ContactUs:[
      {
        title: "+254 789221140",
        href: "/#"
      },
      {
        title: " 16/A, Nairobi City, ",
        href: "/#"
      },
      {
        title: "royal-events@gmail.com",
        href: "/#"
      },
      {
        title: "Directions",
        href: "/#"
      },
    ]
  };
  
  const SocialLinks = [
    {
      title: "Instagram",
      link: "https://instagram.com/",
      image:'/images/instagram.svg'
    },
    {
      title: "Twitter",
      link: "https://tiktok.com/",
      image: '/images/twitter.svg',
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/",
      image: '/images/linkedin.svg',
    },
  ];

const Footer = () => {
    return (
    <footer className="bg-pink-500">
        <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
          <div className="grid grid-cols-1 gap-y-6 gap-x-6 md:!grid-cols-6 md:gap-8 xs:grid-cols-2">
            <div className="mb-4  flex flex-col xs:col-span-2">
              <span className="text-xl font-bold capitalize">PLAN MY DAY</span>
              <p className="mt-4 max-w-screen-xs text-sm font-semibold">
                We are on an unwavering mission to be Kenyas most loved Event Service
                platform.
              </p>
              <ul
                id="social-media-links"
                className="mt-4 flex items-center space-x-4"
               >
                {SocialLinks.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      aria-label={`${item.title} profile`}
                      className="transition-all duration-150 text-white dark:fill-white "
                    >
                      <Image src={item.image} height={60} width={60} />
                    </a>
                  </li>
                ))}
              </ul>
  
              <span className="mt-8 text-xl font-bold capitalize">
                our strategic partner
              </span>
  
              <a
                href="https://www.linkedin.com/"
                rel="noreferrer"
                target="_blank"
                className="mt-4 "
              >
                {/* <LinkedInFullIcon height={35} /> */}
                <Image 
                src="/images/logo_black.png"
                alt='royal-events'
                height={40}
               width={150}
                />
              </a>
            </div>
  
            {Object.entries(footerNav).map(([title, items]) => {
              return (
                <div key={title}>
                  <h2 className="text-xl font-semibold text-white dark:text-gray-100">
                    {title}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {items.map((item) => (
                      <li key={item.title}>
                        
                          <a className="transition-all duration-150 text-white hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white">
                            {item.title}
                          </a>
                     
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
  
      
         </div>
          <div
            id="footer-copyright"
            className="mt-2 border-t border-slate-200 py-4 dark:border-slate-600"
          >
            <p className="text-center text-sm dark:text-gray-300">
              Copyright © 2022{" "}
              <a
                href="https://github.com/miadv"
                className="font-semibold hover:text-indigo-800 hover:underline dark:hover:text-white"
              >
                Brian Rimi
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
  
  