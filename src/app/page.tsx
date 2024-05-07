"use client";
import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

// Import the image from the public folder
import background from "/public/landingPage/LandingBg1.png";
import cards from "/public/landingPage/CascadingCard.png";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import landingSection1 from "/public/landingPage/landingSection1.jpeg";
import landingSection2 from "/public/landingPage/landingSection2.png";
import landingSection3 from "/public/landingPage/landingSection3.png";
import landingSection4 from "/public/landingPage/landingSection4.png";
import landingSection5 from "/public/landingPage/landingSection5.png";
import landingSection7 from "/public/landingPage/landingSection7.png";
import blogThumbnail1 from "/public/landingPage/blogThumbnail1.png";
import blogThumbnail2 from "/public/landingPage/blogThumbnail2.png";
import blogThumbnail3 from "/public/landingPage/blogThumbnail3.png";
import quoteAutor from "/public/landingPage/quoteAutor.png";
import course1 from "/public/landingPage/course1.png";
import course2 from "/public/landingPage/course2.png";
import course3 from "/public/landingPage/course3.png";
import course4 from "/public/landingPage/course4.png";
import course5 from "/public/landingPage/course5.png";
import course6 from "/public/landingPage/course6.png";
import logo from "/public/logo.png";

export default function Home() {
  interface Blog {
    title: string;
    thumbnailImg: StaticImageData;
    description: string;
    date: string;
    author: string;
    // link: string;
  }

  interface course {
    title: string;
    thumbnailImg: StaticImageData;
    description: string;
    price: string;
  }

  const [blog] = useState<Blog[]>([
    {
      title: "Education Online",
      thumbnailImg: blogThumbnail1,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "09/24/2022",
      author: "Michel Fryuckten",
    },
    {
      title: "What is the only way",
      thumbnailImg: blogThumbnail2,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "09/24/2022",
      author: "Michel Fryuckten",
    },
    {
      title: "Merty Humbfrey",
      thumbnailImg: blogThumbnail3,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "09/24/2022",
      author: "Michel Fryuckten",
    },
  ]);

  const [courses] = useState<course[]>([
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course1,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990",
    },
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course2,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990",
    },
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course3,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990",
    },
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course4,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990",
    },
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course5,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990",
    },
    {
      title: "Introduction to Blockchain",
      thumbnailImg: course6,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$12,990000000",
    },
  ]);
  return (
    <DefaultLayout>
      {/* <div className="overflow-hidden ">
        <div className="h-screen pt-20"> */}
      <div className="h-full w-full bg-[#010d27] pt-20">
        {/* signin and section 0 */}
        <div
          className=" flex items-center  justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <div className="relative">
            <Image alt="cards" src={cards} />
            <div className="absolute left-40 top-1/3 w-1/3 pt-5 ">
              <p className="text-4xl font-bold">
                LEARN FACE TO FACE WITH THE BEST INSIDE THEIR LIVE COMMUNITIES
              </p>
              <Link href={"/auth/signup"}>
                <button className="mt-6 rounded-lg bg-[#2769d8] px-3 py-2 text-lg">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* section 1 */}
        <Image alt="cards" src={landingSection1} className="w-full" />

        {/* section 2 */}
        <Image alt="cards" src={landingSection2} className="w-full" />

        {/* section 3 */}
        <div>
          <p className="my-10 text-center text-3xl font-bold">
            Most Popular MENTORS
          </p>
          <Image alt="cards" src={landingSection3} className="mx-auto w-9/12" />
          <button className="mx-auto mb-16 mt-2 flex justify-center rounded-lg bg-[#2769d8] px-6 py-2 text-lg">
            All Mentors
          </button>
        </div>

        {/* section 4 */}
        <div
          className="bg-cover bg-center pb-10"
          style={{ backgroundImage: `url(${landingSection4.src})` }}
        >
          <p className="my-10 text-center text-3xl font-bold">Blog</p>
          <div className="flex justify-center gap-5">
            {blog.map((blog, i) => {
              return (
                <div key={i} className="w-3/12 rounded-t-3xl bg-[#151B2B]">
                  <Image
                    alt="cards"
                    src={blog.thumbnailImg}
                    className="w-full rounded-t-3xl"
                  />
                  <div className="p-5  pt-0">
                    <p className="mt-2 text-2xl font-bold">{blog.title}</p>
                    <p className="mb-2 mt-1 text-lg text-[#FFD600]">
                      {blog.date} - {blog.author}
                    </p>
                    <p className="text-lg">{blog.description}</p>
                    <button className="mt-4 rounded-full bg-[#2769d8] px-3 py-1 text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* section 5 */}
        <Image alt="cards" src={landingSection5} className="w-full" />

        {/* section 6 */}
        <div className="mt-10 w-full">
          <p className="mx-auto w-4/12 text-center text-2xl">{`"I had several calls with mentees this week, and every single one of them has been insightful, cheerful, uplifting, and full of ideas being exchanged."`}</p>
          <div className="mt-10 flex justify-center">
            <Image alt="cards" src={quoteAutor} className="h-20" />
            <div className="mx-3 flex flex-col justify-center">
              <p className="text-2xl font-bold">Matt Dibbert</p>
              <p className="text-sm">Serial Enterpreneur, Author</p>
            </div>
          </div>
        </div>

        {/* section 7 */}
        <div
          className=" mx-auto w-full bg-cover bg-center pb-16 "
          style={{ backgroundImage: `url(${landingSection7.src})` }}
        >
          <p className="my-10 mt-16 text-center text-3xl font-bold">
            Most Popular Courses
          </p>
          <div className="mx-auto grid w-10/12 grid-cols-3 gap-8  ">
            {courses.map((course, i) => {
              return (
                <div key={i} className=" rounded-t-3xl bg-[#151B2B]">
                  <Image
                    alt="cards"
                    src={course.thumbnailImg}
                    className="w-full rounded-t-3xl"
                  />
                  <div className="p-5  pt-0">
                    <p className="mt-2 text-2xl font-bold">{course.title}</p>
                    <p className="mb-2 mt-1 text-lg text-[#FFD600]">
                      {course.price}
                    </p>
                    <p className="text-lg">{course.description}</p>
                    <button className="mt-4 rounded-full bg-[#2769d8] px-3 py-1 text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* footer */}
        <div className="flex h-20 flex-col items-center justify-center bg-[#0f2345]">
          <Image alt="cards" src={logo} className=" w-3/12" />
        </div>
      </div>
      {/* </div>
      </div> */}
    </DefaultLayout>
  );
}
