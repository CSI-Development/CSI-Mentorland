"use client";
import { useState } from "react";
import Logo from "/public/logo.png";
import { FaChevronDown, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
// Import the image from the public folder
import mentor from "/public/mentor.png";
import mentorBg from "/public/mentorBg.png";
import dimondBtn from "/public/dimondBtn.png";
import teacher from "/public/teacher.png";
import accessCard1 from "/public/landingPage/accessCard1.png";
// import becomeMentorBg from "/public/landingPage/becomeMentorBg.png";
import accessCard2 from "/public/landingPage/accessCard2.png";
import cards from "/public/landingPage/CascadingCard.png";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
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
import ForgotPassword from "@/components/forgotPassword";

export default function LandingPage() {
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
    <>
      <nav className="fixed top-0 z-50 flex w-full justify-between bg-[#010d27] px-10 py-5">
        <div>
          <Image alt="logo" src={Logo} />
        </div>
        <div className="flex justify-center gap-5 text-xl">
          <button>What we do</button>
          <button className="flex items-center">
            Categories <FaChevronDown className="ml-2" />
          </button>
          <button className="flex items-center">
            Search <FaSearch className="ml-2" />
          </button>
          <Link className="my-auto" href={"/auth/signup"}>
            <button>Sign Up</button>
          </Link>
          <Link className="my-auto" href={"/auth/signin"}>
            <button>Log In</button>
          </Link>
          <button className="flex items-center">
            <IoLanguageSharp className="text-2xl font-bold text-white" />
            <FaChevronDown className="ml-2" />
          </button>
          <div className="my-auto">
            <CiWallet className="text-4xl" />
          </div>
          <div className="my-auto">
            <LiaFacebookSquare className="text-4xl" />
          </div>
          <div className="my-auto">
            <FaTwitter className="text-4xl" />
          </div>
          <div className="my-auto">
            <FaInstagram className="text-4xl" />
          </div>
        </div>
        {/* <LoginDialog
          OpenDialog={isOpenLoginDialog}
          setOpenDialog={setIsOpenLoginDialog}
        /> */}
      </nav>
      {/* <div className="overflow-hidden ">
        <div className="h-screen pt-20"> */}
      <div className="h-full w-full bg-[#010d27] pt-20">
        {/* signin and section 0 */}
        <div
          className=" flex items-center  justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${mentorBg.src})` }}
        >
          <div className=" flex w-full justify-around px-28 pt-10">
            <div className="mt-40 w-2/5 pt-5">
              <p className="text-4xl font-bold">
                Join our platform as a mentor and help shape the future of our
                next generation of learners.{" "}
              </p>
              <Link href={"/auth/signup"}>
                <button className="mt-6 rounded-lg bg-[#2769d8] px-3 py-2 text-lg font-bold">
                  Be a Mentor
                </button>
              </Link>
            </div>
            <div className="bg-[#0E2245] p-5 h-fit mt-96 ml-64">
              <h1 className="font-bold text-xl whitespace-nowrap">Cody Getchell</h1>
              <p className="font-bold text-sm">Coaching Mentor</p>
            </div>
            <Image alt="cards" src={mentor} />
          </div>
        </div>

        {/* section 1 */}
        <div className="w-full px-48 py-32 bg-radial-gradient">
          <div className="w-full text-center">
            <h1 className="px-28 text-5xl font-bold ">
              Tired off having your program on 5 different disconnected
              platforms?
            </h1>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex w-1/3 flex-col gap-4">
              <h1 className="text-4xl font-bold">
                We have all your communities
              </h1>
              <p>(The free, paid and high ticket ones 😉 )</p>
              <h3 className="text-lg">
                All in one place with built in GAMIFICATION to get them begging
                to pay you to access the next level.
              </h3>
            </div>
            <div>
              <Image alt="cards" src={teacher} />
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div
          className={`relative flex w-full justify-around px-48 py-32 bg-access-gradient`}
        >
          <div className="">
            <Image alt="cards" src={accessCard1} className="absolute z-10" />
            <Image alt="cards" src={accessCard2} className="absolute left-80" />
          </div>
          <div className="flex w-1/3 flex-col gap-4 mt-20">
            <h1 className="text-4xl font-bold">Access passes </h1>
            <p>
              Built in Access passes that allow you to bridge your mentorship,
              community and real world events. Access cards are biometircally
              locked to your individual students so no can ever rip off or share
              your material without you earning royalties ever again
            </p>
            <h3 className="text-lg">
              All in one place with built in GAMIFICATION to get them begging to
              pay you to access the next level.
            </h3>
            <Link href={"/auth/signup"}>
              <button className="mt-6 rounded-lg bg-[#2769d8] px-3 py-2 text-lg font-bold">
                Become a Mentor
              </button>
            </Link>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex w-full items-center justify-around px-48 py-28 h-[644px] bg-[url('/dimondBg.png')] bg-cover bg-no-repeat">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Secondary MARKET </h1>
            <p className="w-2/3">
              Mentorland offers a secondary market where your students can
              Enrich and re-sell access to your courses after they complete
              them... Allowing you to drive endless paying prospects to your
              high ticket mentorships.
            </p>
          </div>
          <div className="h-40"  >
            <button>
              {" "}
              <Image alt="btn" src={dimondBtn} className="" />
            </button>
          </div>
        </div>
        {/* section 4 */}
        <div
          className="bg-cover bg-center py-10"
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
        {/* section 6 */}
        <div className="w-full py-20 h-[474px] bg-[url('/testimonial.png')] bg-cover">
          <p className="mx-auto w-4/12 text-center text-2xl">{`"I had several calls with mentees this week, and every single one of them has been insightful, cheerful, uplifting, and full of ideas being exchanged."`}</p>
          <div className="mt-10 flex justify-center">
            <Image alt="cards" src={quoteAutor} className="h-20" />
            <div className="mx-3 flex flex-col justify-center">
              <p className="text-2xl font-bold">Matt Dibbert</p>
              <p className="text-sm">Serial Enterpreneur, Author</p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col items-center justify-center bg-[#0f2345] py-10">
          <Image alt="cards" src={logo} className=" w-3/12" />
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}
