/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCommunityApi } from "@/app/api/createCommunity/getAllCommunity.api";
import { courseGetApi } from "@/app/api/createCourse/getCourse.api";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  IEventSchedule,
  ScheduleData,
} from "@/schema/scheduler/scheduler.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { scheduleApi } from "@/app/api/schedule/postSchedule.api";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

function AddScheduler({
  OpenDialog,
  setOpenDialog,
  dateValue,
  refetch,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dateValue: any;
  refetch: any;
}) {
  const [selectedCommunity, setSelectedCommunity] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [showCourses, setShowCourses] = useState<boolean>(false);
  const [coursesData, setCoursesData] = useState([]);
  const [communities, setCommunities] = useState<any>();

  const { data } = useQuery({
    queryKey: ["allCommunities"],
    queryFn: () => getAllCommunityApi(),
  });

  const { data: getCourses } = useQuery({
    queryKey: ["courses", selectedCommunity],
    queryFn: () => courseGetApi(selectedCommunity),
    enabled: !!selectedCommunity,
  });

  useEffect(() => {
    if (data) {
      setCommunities(data);
    }
  }, [data]);

  useEffect(() => {
    if (getCourses) {
      setCoursesData(getCourses.courses);
    }
  }, [getCourses]);

  const handleCommunityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCommunity(value);
    setShowCourses(value !== "" && value !== "all");
  };
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCourse(value);
  };

  console.log(selectedCommunity, "selected community");

  const methods = useForm<IEventSchedule>({
    defaultValues: {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      community: "",
      course: "",
      isSelectedAllCommunityMembers: false,
    },
    resolver: zodResolver(ScheduleData),
  });
  //   const router = useRouter();

  const { mutate: postSchedule } = useMutation({
    mutationFn: scheduleApi,
    onSuccess: async (e) => {
      await refetch();
      toast.success("Add Event Successfully");
      setOpenDialog(false);
      console.log(e);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log(e);
      toast.error(e?.message);
    },
  });

  const onSubmit: SubmitHandler<IEventSchedule> = async (
    data: IEventSchedule,
  ) => {
    const val = { ...data, date: dateValue };
    const title = methods.getValues("title");
    const description = methods.getValues("description");
    const startTime = methods.getValues("startTime");
    const endTime = methods.getValues("endTime");
    if (!title) {
      toast.error("Enter the title");
      return;
    }
    if (!description) {
      toast.error("Enter the description");
      return;
    }
    if (!startTime) {
      toast.error("Enter the start time");
      return;
    }
    if(!endTime){
      toast.error("Enter the end time")
      return;
    }
    console.log(data, "form data");
    postSchedule(val);
    methods.reset();
  };

  return (
    <Dialog
      size="sm"
      open={OpenDialog}
      handler={() => console.log("opened")}
      placeholder
      className="relative"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Icon
        onClick={() => {
          setOpenDialog(false);
        }}
        className="absolute right-4 top-4 cursor-pointer text-black"
        icon="maki:cross"
      />
      <div className="w-full rounded-lg bg-gray-50 p-10 text-black">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className=" flex flex-col gap-10"
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                Add Event
              </h1>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    {...methods.register("title")}
                    id="title"
                    placeholder="Enter the Event Title"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    {...methods.register("description")}
                    type="text"
                    id="description"
                    placeholder="Enter the Event Description"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    {...methods.register("startTime")}
                    placeholder="Start Time"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    {...methods.register("endTime")}
                    placeholder="End Time"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="Community"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select the Community
                  </label>
                  <select
                    id="Community"
                    value={selectedCommunity}
                    {...methods.register("community")}
                    onChange={handleCommunityChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="all">All Community</option>
                    {communities?.map((item: any, index: number) => (
                      <option key={index} value={item?.id}>
                        {item?.communityName}
                      </option>
                    ))}
                  </select>
                </div>
                {showCourses && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Courses
                    </label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <select
                          {...methods.register("course")}
                          id="course"
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          {coursesData?.length > 0 &&
                            coursesData?.map((val: any) => (
                              <option key={val.id} value={val?.id}>
                                {val?.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="dsa"
                          {...methods.register("isSelectedAllCommunityMembers")}
                          defaultChecked={false}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="dsa"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          All Community Members
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex w-full justify-center pt-5">
                  <button
                    type="submit"
                    className="rounded bg-primary px-3 py-2 text-sm font-bold text-white"
                  >
                    Add Event
                  </button>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <ToastContainer />
    </Dialog>
  );
}

export default AddScheduler;
