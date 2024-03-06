'use client';
// components/Content.tsx
import React, { useState } from 'react';

// Import the image from the public folder
import background from '../../../public/landingPage/LandingBg1.png';
import cards from '../../../public/landingPage/CascadingCard.png';
import Image from 'next/image';
import Link from 'next/link';
import landingSection1 from '../../../public/landingPage/landingSection1.png';
import landingSection2 from '../../../public/landingPage/landingSection2.png';
import landingSection3 from '../../../public/landingPage/landingSection3.png';
import landingSection4 from '../../../public/landingPage/landingSection4.png';
import landingSection5 from '../../../public/landingPage/landingSection5.png';
import landingSection7 from '../../../public/landingPage/landingSection7.png';
import blogThumbnail1 from '../../../public/landingPage/blogThumbnail1.png';
import blogThumbnail2 from '../../../public/landingPage/blogThumbnail2.png';
import blogThumbnail3 from '../../../public/landingPage/blogThumbnail3.png';
import quoteAutor from '../../../public/landingPage/quoteAutor.png';
import course1 from '../../../public/landingPage/course1.png';
import course2 from '../../../public/landingPage/course2.png';
import course3 from '../../../public/landingPage/course3.png';
import course4 from '../../../public/landingPage/course4.png';
import course5 from '../../../public/landingPage/course5.png';
import course6 from '../../../public/landingPage/course6.png';
import logo from '../../../public/logo.png';

const Content: React.FC = () => {
  interface Blog {
    title: string;
    thumbnailImg: string;
    description: string;
    date: string;
    author: string;
    link: string;
  }

  interface course {
    title: string;
    thumbnailImg: string;
    description: string;
    price: string;
  }

  const [blog, setBlog] = useState([{
    title: 'Education Online',
    thumbnailImg: blogThumbnail1,
    description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: '09/24/2022',
    author: 'Michel Fryuckten',
  },
  {
    title: 'What is the only way',
    thumbnailImg: blogThumbnail2,
    description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: '09/24/2022',
    author: 'Michel Fryuckten',
  },
  {
    title: 'Merty Humbfrey',
    thumbnailImg: blogThumbnail3,
    description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: '09/24/2022',
    author: 'Michel Fryuckten',
  },
  ])

  const [courses, setCourses] = useState([
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course1,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course2,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course3,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course4,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course5,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
    {
      title: 'Introduction to Blockchain',
      thumbnailImg: course6,
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$12,990',
    },
  ])



  return (
    <div className='overflow-hidden bg-[#010d27]'>
      <div className='h-screen pt-20'>
        <div className='w-full h-full overflow-y-scroll '>

          {/* signin and section 0 */}
          <div
            className=" bg-cover bg-center  flex items-center justify-center"
            style={{ backgroundImage: `url(${background.src})` }}
          >
            <div className='relative'>
              <Image alt='cards' src={cards} />
              <div className='absolute left-40 top-1/3 w-1/3 pt-5 '>
                <p className='text-4xl font-bold'>LEARN WITH THE BEST, & GET PAID TO DO SO!</p>
                <Link href={"/signup"}>
                  <button className='mt-6 bg-[#2769d8] px-3 py-2 text-lg rounded-lg'>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>

          {/* section 1 */}
          <Image alt='cards' src={landingSection1} className='w-full' />

          {/* section 2 */}
          <Image alt='cards' src={landingSection2} className='w-full' />

          {/* section 3 */}
          <div>
            <p className='my-10 text-3xl font-bold text-center'>Most Popular MENTORS</p>
            <Image alt='cards' src={landingSection3} className='w-9/12 mx-auto' />
            <button className='flex justify-center mt-2 mb-16 bg-[#2769d8] px-6 mx-auto py-2 text-lg rounded-lg'>All Mentors</button>
          </div>

          {/* section 4 */}
          <div className="bg-cover bg-center pb-10" style={{ backgroundImage: `url(${landingSection4.src})` }}>
            <p className='my-10 text-3xl font-bold text-center'>Blog</p>
            <div className='flex gap-5 justify-center'>
              {blog.map((blog,i) => {
                return (
                  <div key={i} className='w-3/12 rounded-t-3xl bg-[#151B2B]'>
                    <Image alt='cards' src={blog.thumbnailImg} className='w-full rounded-t-3xl' />
                    <div className='p-5  pt-0'>
                      <p className='text-2xl mt-2 font-bold'>{blog.title}</p>
                      <p className='text-lg text-[#FFD600] mt-1 mb-2'>{blog.date} - {blog.author}</p>
                      <p className='text-lg'>{blog.description}</p>
                      <button className='bg-[#2769d8] px-3 py-1 text-sm rounded-full mt-4'>Read More</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* section 5 */}
          <Image alt='cards' src={landingSection5} className='w-full' />

          {/* section 6 */}
          <div className='w-full mt-10'>
            <p className='w-4/12 mx-auto text-center text-2xl'>{`"I had several calls with mentees this week, and every single one of them has been insightful, cheerful, uplifting, and full of ideas being exchanged."`}</p>
            <div className='flex justify-center mt-10'>
              <Image alt='cards' src={quoteAutor} className='h-20' />
              <div className='flex flex-col justify-center mx-3'>
                <p className='text-2xl font-bold'>Matt Dibbert</p>
                <p className='text-sm'>Serial Enterpreneur, Author</p>
              </div>
            </div>
          </div>

          {/* section 7 */}
          <div className=' w-full mx-auto bg-cover bg-center pb-16 ' style={{ backgroundImage: `url(${landingSection7.src})` }}>
            <p className='my-10 mt-16 text-3xl font-bold text-center'>Most Popular Courses</p>
            <div className='grid grid-cols-3 gap-8 w-10/12 mx-auto  '>
              {courses.map((course,i) => {
                return (
                  <div key={i} className=' rounded-t-3xl bg-[#151B2B]'>
                    <Image alt='cards' src={course.thumbnailImg} className='w-full rounded-t-3xl' />
                    <div className='p-5  pt-0'>
                      <p className='text-2xl mt-2 font-bold'>{course.title}</p>
                      <p className='text-lg text-[#FFD600] mt-1 mb-2'>{course.price}</p>
                      <p className='text-lg'>{course.description}</p>
                      <button className='bg-[#2769d8] px-3 py-1 text-sm rounded-full mt-4'>Read More</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* footer */}
              <div className='bg-[#0f2345] h-20 flex items-center flex-col justify-center'>
                <Image alt='cards' src={logo} className=' w-3/12' />
              </div>

        </div>
      </div>
    </div>
  );
};

export default Content;
