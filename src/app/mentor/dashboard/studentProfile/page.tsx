"use client";
import Image from "next/image";
import { SlSocialInstagram } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import Link from "next/link";
import CourseBadges from "@/components/student/dashboardStudentComponents/course/CourseBadges.component";
import StudentMessage from "@/components/modals/studentMessage";
import { useEffect, useState } from "react";
import { open } from "fs/promises";

function StudentProfile() {
  const [openStudentMessage, setOpenStudentMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenStudentMessage(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full w-full py-20 text-black">
        <div className="">
          <Link
            href="/mentor/dashboard"
            className="cursor-pointer font-bold text-[#2769D9]"
          >
            {" "}
            {"<< Back to Main Dashboard"}
          </Link>
          <h1 className="mt-5 text-2xl font-bold">Engelbert Bryughternexter</h1>
        </div>
        <div className="flex w-full justify-between gap-8">
          <div className="mt-10 h-[375px] w-[35%] rounded-xl bg-white shadow-lg">
            <div className="h-[212px] w-full">
              <div className="h-[50%] rounded-t-lg bg-black">
                <img
                  src="/images/back.jpeg"
                  alt="user"
                  className="h-full w-full rounded-xl rounded-t"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <Image
                  src="/svg/user.svg"
                  alt="user"
                  width={136}
                  height={136}
                  className="-mt-20 rounded-full bg-white p-[1px]"
                />
                <h1 className="font-bold text-[#151B2B]">
                  Engelbert Bryughternexter
                </h1>
              </div>
              <div className="mt-10 flex gap-8 p-5 text-2xl text-[#2769D9]">
                <SlSocialInstagram />
                <FiYoutube />
                <RiFacebookBoxLine />
              </div>
            </div>
          </div>
          <div className="mt-10 h-[375px] w-[65%] rounded-lg bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Latest Chat Activity</h1>
              <h1 className="font-bold text-[#2769D9]">Go To Chat</h1>
            </div>
            <div className=" mt-5 border-b border-[#B9BABA] pb-5">
              <h2 className="text-xs text-[#5D6475]">Recent Publications</h2>
              <div className="mt-5 flex justify-between">
                <div className="flex">
                  <p className="text-[#5D6475]">10:30 am</p>
                  <p className="ml-10 text-[#2769D9]">
                    Thoughts on psychological strategies
                  </p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                  2
                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <div className="flex">
                  <p className="text-[#5D6475]">02:00 am</p>
                  <p className="ml-10 text-[#2769D9]">Diaconic Mostrelaum</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                  2
                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <div className="flex">
                  <p className="text-[#5D6475]">08:00 am</p>
                  <p className="ml-10 text-[#2769D9]">Mionh the Muyngtrews</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-8">
          <div className="mt-10 h-[375px] w-[55%] rounded-lg bg-white p-5 shadow-lg overflow-y-scroll">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Partial Grades</h1>
            </div>
            <div className="mt-5 border-b border-[#B9BABA] pb-4">
              <table
                className="w-full border-spacing-y-3 gap-3"
                cellSpacing={8}
                cellPadding={8}
              >
                <thead>
                  <tr className="text-left text-xs font-semibold text-[#5D6475]">
                    <th>TEST NAME</th>
                    <th>DATE DELIVERED</th>
                    <th>DATE MARKED</th>
                    <th>GRADE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="mt-5 text-sm text-[#151B2B]">
                    <td>Thoughts on psychological strategies</td>
                    <td>03/15</td>
                    <td className="text-[#FF007A]">Needs Grading</td>
                    <td>------</td>
                  </tr>
                  <tr className="mt-5 text-sm text-[#151B2B]">
                    <td>Nori grape silver beet broccoli kombu</td>
                    <td>03/15</td>
                    <td className="text-[#151b2b]">03/15</td>
                    <td>95%</td>
                  </tr>
                  <tr className="mt-5 text-sm  text-[#151B2B]">
                    <td>Nori grape silver beet broccoli kombu</td>
                    <td>03/15</td>
                    <td className="text-[#151b2b]">03/15</td>
                    <td>95%</td>
                  </tr>
                  <tr className="mt-5 text-sm text-[#151B2B]">
                    <td>Nori grape silver beet broccoli kombu</td>
                    <td>03/15</td>
                    <td className="text-[#151b2b]">03/15</td>
                    <td>95%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 w-full">
              <h1 className="text-sm font-semibold text-[#5D6475]">QUIZZES</h1>
              <div className="mt-3 flex w-full justify-between">
                <h1 className="text-[#5D6475]">Overall Grades on Quizzes</h1>
                <h1 className="font-bold text-[#04D800]">82%</h1>
              </div>
            </div>
          </div>
          <div className="mt-10 h-[375px] w-[45%] rounded-lg">
            <CourseBadges />
          </div>
        </div>
        <StudentMessage
          setOpenDialog={setOpenStudentMessage}
          OpenDialog={openStudentMessage}
        />
      </div>
    </MentorDashboardLayout>
  );
}

export default StudentProfile;
