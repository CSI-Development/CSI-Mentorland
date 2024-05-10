/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import sampleSubject from "../../../../public/selectSubject/subjectCoverImg.png";
import sampleSubject2 from "../../../../public/selectSubject/subjectMentor.png";
import MentorProfileCard from "./MentorProfileCard.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import CourseCard from "./CourseCard.Component";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { studentCourseGetApi } from "@/app/api/createStudent/getStudentCourse.api";

function SelectSubjectComponent() {
  const { data } = useQuery({
    queryKey: ["coursesData"],
    queryFn: () => studentCourseGetApi(),
  });

  console.log(data);

  // const mentorData = [
  //   {
  //     coachName: "Cody Getchell",
  //     domain: "Software Development",
  //     twitter: "codygetchell",
  //     facebook: "codygetchell",
  //     instagram: "codygetchell",
  //     profilePic: sampleSubject2,
  //     courses: [
  //       {
  //         courseName: "Introduction to JavaScript",
  //         courseDiscription:
  //           "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
  //         courseThumbnail: sampleSubject,
  //         courseId: "js101",
  //         price: 49.99,
  //       },
  //       {
  //         courseName: "React Fundamentals",
  //         courseDiscription:
  //           "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
  //         courseThumbnail: sampleSubject,
  //         courseId: "react101",
  //         price: 59.99,
  //       },
  //       {
  //         courseName: "Node.js Basics",
  //         courseDiscription:
  //           "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
  //         courseThumbnail: sampleSubject,
  //         courseId: "node101",
  //         price: 69.99,
  //       },
  //     ],
  //   },
  //   {
  //     coachName: "Mike Dougall",
  //     domain: "Web Design",
  //     twitter: "mikedougall",
  //     facebook: "mikedougall",
  //     instagram: "mikedougall",
  //     profilePic: sampleSubject2,
  //     courses: [
  //       {
  //         courseName: "HTML & CSS Basics",
  //         courseDiscription:
  //           "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
  //         courseThumbnail: sampleSubject,
  //         courseId: "htmlcss101",
  //         price: 39.99,
  //       },
  //       {
  //         courseName: "Responsive Web Design",
  //         courseDiscription:
  //           "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
  //         courseThumbnail: sampleSubject,
  //         courseId: "responsive101",
  //         price: 49.99,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="overflow-hidden bg-[#010d27]">
      <div className="min-h-screen pt-20 px-20">
        <div className="h-full w-full pb-5">
          <p className="mx-auto mt-4 w-3/12 text-center text-2xl font-semibold">
            Here are the courses taught by your chosen mentor
          </p>

          {data?.map((val: any, i: number) => (
            <div key={i} className="py-16 border-b border-white">
              <MentorProfileCard
                mentorDomain=""
                mentorName={`${val.firstName} ${val.lastName}`}
                mentorProfilePic={val.mentorAvatar}
                // twitter={mentor.twitter}
                // facebook={mentor.facebook}
                // instagram={mentor.instagram}
              />
              <div className="flex flex-col gap-2">
                {val?.courses?.map((ele: any, i: number) => (
                  <CourseCard
                    key={i}
                    description={ele.description}
                    imageUrl={ele.logo}
                    // price={course.price.toString()}
                    title={ele.name}
                    id={ele._id}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-center gap-10 bg-[#010d27] ">
            {/* <Link href={"/student/dashboard"}>
              <button className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg">
                <Icon className="text-3xl" icon="tabler:arrow-right" />
                Next
              </button>
            </Link> */}
            <Link href={"/student/dashboard"}>
              <button className="rounded-md bg-[#2668d8] px-4 py-1.5 text-xl text-white">
                Skip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectSubjectComponent;
