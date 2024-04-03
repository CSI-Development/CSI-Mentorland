"use client";
import React from "react";
import sampleSubject from "../../../../public/selectSubject/subjectCoverImg.png";
import sampleSubject2 from "../../../../public/selectSubject/subjectMentor.png";
import MentorProfileCard from "./MentorProfileCard.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import CourseCard from "./CourseCard.Component";
import Link from "next/link";

function SelectSubjectComponent() {
  const mentorData = [
    {
      coachName: "Cody Getchell",
      domain: "Software Development",
      twitter: "codygetchell",
      facebook: "codygetchell",
      instagram: "codygetchell",
      profilePic: sampleSubject2,
      courses: [
        {
          courseName: "Introduction to JavaScript",
          courseDiscription:
            "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
          courseThumbnail: sampleSubject,
          courseId: "js101",
          price: 49.99,
        },
        {
          courseName: "React Fundamentals",
          courseDiscription:
            "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
          courseThumbnail: sampleSubject,
          courseId: "react101",
          price: 59.99,
        },
        {
          courseName: "Node.js Basics",
          courseDiscription:
            "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
          courseThumbnail: sampleSubject,
          courseId: "node101",
          price: 69.99,
        },
      ],
    },
    {
      coachName: "Mike Dougall",
      domain: "Web Design",
      twitter: "mikedougall",
      facebook: "mikedougall",
      instagram: "mikedougall",
      profilePic: sampleSubject2,
      courses: [
        {
          courseName: "HTML & CSS Basics",
          courseDiscription:
            "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
          courseThumbnail: sampleSubject,
          courseId: "htmlcss101",
          price: 39.99,
        },
        {
          courseName: "Responsive Web Design",
          courseDiscription:
            "Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.",
          courseThumbnail: sampleSubject,
          courseId: "responsive101",
          price: 49.99,
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden bg-[#010d27]">
      <div className="h-screen pt-20">
        <div className="w-full h-full overflow-y-scroll pb-5">
          <p className="text-center font-semibold text-2xl mt-4 w-3/12 mx-auto">
            Here are the courses taught by your chosen mentor
          </p>

          {mentorData.map((mentor) => (
            <div key={mentor.coachName}>
              <MentorProfileCard
                mentorDomain={mentor.domain}
                mentorName={mentor.coachName}
                mentorProfilePic={mentor.profilePic.src}
                twitter={mentor.twitter}
                facebook={mentor.facebook}
                instagram={mentor.instagram}
              />
              {mentor.courses.map((course) => (
                <CourseCard
                  key={course.courseId}
                  description={course.courseDiscription}
                  imageUrl={course.courseThumbnail.src}
                  price={course.price.toString()}
                  title={course.courseName}
                />
              ))}
            </div>
          ))}

          <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
            <Link href={"/student/dashboard"}>
              <button className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg">
                <Icon className="text-3xl" icon="tabler:arrow-right" />
                Next
              </button>
            </Link>
            <button className="text-xl text-[#b9baba] w-20">Skip</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectSubjectComponent;
