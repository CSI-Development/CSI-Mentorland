"use client";
import React, { useState } from "react";
import sampleSubject from "../../../public/selectSubject/subjectCoverImg.png";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  // price: string;
  id: string;
}

function CourseCard(props: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const { title, description, imageUrl, id } = props;

  const truncatedText = expanded
    ? description
    : description.length > 600
      ? `${description?.slice(0, 600)}...`
      : description;

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
          <Link
            href={`/student/dashboard/community/course/${id}`}
            className="mt-4  whitespace-nowrap rounded-lg bg-blue-500 px-4 py-2 text-white "
          >
            Go to Course
          </Link>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
