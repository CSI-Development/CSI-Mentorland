"use client";
import React, { useState } from "react";
import sampleSubject from "../../../public/selectSubject/subjectCoverImg.png";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { joinCourseApi } from "@/app/api/joinCourse/JoinCourse.api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  // price: string;
  id: string;
  mentorId: string;
}

function CourseCard(props: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const { title, description, imageUrl, id, mentorId } = props;

  const truncatedText = expanded
    ? description
    : description.length > 600
      ? `${description?.slice(0, 600)}...`
      : description;

  const { mutate } = useMutation({
    mutationFn: joinCourseApi,
    onSuccess: (e) => {
      console.log("success", e);
      router.push("/student/dashboard");
      
    },
  });

  const handlejoincourse = async () => {
    const data = {
      mentorId: mentorId,
      courseId: id,
    };
    mutate(data);
  };
  return (
    <div className="mx-auto mt-4 w-8/12">
      <p className="text-xl font-semibold">{title}</p>
      <div className="mt-5 flex gap-8">
        <Image
          width={80}
          height={80}
          src={imageUrl}
          alt="subject"
          className="h-44 w-44 rounded-full"
        />
        <div className="flex-1">
          <p>{truncatedText}</p>
          {!expanded && description.length > 600 && (
            <button className="text-blue-500" onClick={toggleExpand}>
              Read More
            </button>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <p className="text-center text-3xl font-bold">Free</p>
          {/* <p className="text-center text-3xl font-bold">{price}</p> */}
          {/* <Link href="/student/subjectSelection/payment"> */}
          <button
            className="mt-4  whitespace-nowrap rounded-lg bg-blue-500 px-4 py-2 text-white "
            onClick={handlejoincourse}
          >
            Join Course
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
