"use client";
import { getEnrollCourseApi } from "@/app/api/enrollCourse/getCourses.api";
import { searchMentorApi } from "@/app/api/searchMentor/searchMentor";
import CourseCard from "@/components/student/subjectSelection/CourseCard.Component";
import { useDebounce } from "@/hooks/useDebounce";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { getEdgePolyfilledModules } from "next/dist/build/webpack/plugins/middleware-plugin";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import Pagination from "@/components/pagination/Pagination";

const EnrollCourses = () => {
  const [search, setSearch] = useState();
  const debouncedSearch = useDebounce<any>(search, 1000);
  const [active, setActive] = useState(1);
  const [total, setTotal] = useState(0);
  const { data } = useQuery({
    queryKey: ["searchCourses", debouncedSearch, active],
    queryFn: () => getEnrollCourseApi(debouncedSearch, active),
    refetchOnWindowFocus: false,
    // enabled: !!debouncedSearch,
  });

  useEffect(() => {
    if (data) {
      setActive(data?.currentPage);
      setTotal(data?.totalPages);
    }
  }, [data]);
  const onSearch = (e:any)=>{
    setSearch(e.target.value);
    setActive(1);
  }
  return (
    <DashboardLayout showSidebar={true}>
      <div className="flex justify-between">
        <h1 className="p-3 text-4xl font-bold text-black">All Courses</h1>
        <div className="relative p-6 text-black">
          <input className="h-10 border-2 border-black/10 p-2 rounded-xl" placeholder="Search Courses or Category" type="text" onChange={onSearch}/>
          <FaSearch className="absolute right-8 -translate-y-7 -translate-x-3 text-[#90A4B6]"/>
        </div>
      </div>
      <div className="text-black">
        {data?.courses?.map((item: any, i: number) => {
          console.log(item?.mentors?.[0]?._id, "item?.mentors?.[0]?._id");
          return (
            <CourseCard
              title={item?.name}
              description={item?.description}
              id={item?.id}
              imageUrl={item?.logo}
              mentorId={item?.mentors?.[0]?._id}
              key={i}
              class="rounded-xl border border-black/10 bg-white p-4 shadow-lg"
              mentorName={`${item?.mentors?.[0]?.firstName} ${item?.mentors?.[0]?.lastName}`}
              mentorImg={item?.mentors?.[0]?.mentorAvatar}
            />
          );
        })}
      </div>
      <div className="mt-8 flex w-full items-center justify-center">
        <Pagination
          totalPageCount={total}
          currentPage={active}
          setCurrentPage={setActive}
          buttonConst={3}
          siblingCount={1}
          gapCount={3}
        />
      </div>
    </DashboardLayout>
  );
};

export default EnrollCourses;
