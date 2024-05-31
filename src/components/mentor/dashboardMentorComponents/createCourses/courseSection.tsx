/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { courseGetApi } from "@/app/api/createCourse/getCourse.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import CommunityBanner from "../communities/CommunityBanner.Component";

function CourseSection({ cData, id, refetch }: any) {
  const { data } = useQuery({
    queryKey: ["courses"],
    queryFn: () => courseGetApi(),
  });

  console.log(data, "course data");
  console.log("IDDDDD-CHECK")
  console.log(id, "IDDDDD");

  // const router = useRouter();

  // const createCourse = () => {
  //   router.push("/mentor/dashboard/community/course/create");
  // };

  return (
    <div className="w-full text-black">
      <CommunityBanner data={cData} id={id} refetch={refetch} />

      {data ? (
        <div className="mt-10 w-full">
          <div className="w-full text-center">
            <h1 className="text-4xl font-bold">My Courses</h1>
          </div>
          <div className="flex w-full justify-end p-10">
            <Link
              href={`/mentor/dashboard/community/course/create/${id}`}
              className=" mt-10 rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
            >
              Create another Courses
            </Link>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-10 p-10	">
            {data?.courses?.length > 0 &&
              data?.courses?.map((val: any, i: number) => (
                <div
                  className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
                  key={i}
                >
                  <Image
                    className="rounded-t-lg"
                    src={val.logo}
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    style={{ aspectRatio: "3/2", objectFit: "contain" }}
                    alt=""
                  />
                  <div className="h-64 p-5">
                    <p className="w-fit rounded bg-[#E8ECF3] p-1 text-sm text-primary">
                      {val.category}
                    </p>
                    <h5 className="mb-2 min-h-24 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {val.name}
                    </h5>
                    <p className="mb-3 h-12 w-full overflow-hidden text-ellipsis font-normal text-gray-700 dark:text-gray-400">
                      {val.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/mentor/dashboard/community/course/${val._id}`}
                        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Go to Course{" "}
                        <svg
                          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                      {val.status ? (
                        <h1 className="text-green-600">Published</h1>
                      ) : (
                        <Link
                          href={`/mentor/dashboard/community/course/${val._id}`}
                          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Edit Course
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 flex w-full items-center justify-center text-center ">
          <div>
            <h1 className="text-3xl font-semibold text-[#5D6475]">
              Start Creating your course
            </h1>
            <p className="mt-4 text-xl text-[#5D6475]">
              If you need help with it, we’ve made a tutorial for that. Have a
              look here.
            </p>
            <Link
              href={`/mentor/dashboard/community/course/create/${id}`}
              className=" mt-10 rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
            >
              Create your first Course
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default CourseSection;
