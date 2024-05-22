/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { communityCourseDetailsAPI } from "@/app/api/communityCourseDetails/communityCourseDetails.api";
import { useParams } from "next/navigation";
import DashboardLayout from "@/layouts/DashboardLayout";
import CourseContent from "@/components/student/courseDetail/courseContent";
import { useEffect, useState } from "react";
import VideoSection from "@/components/student/courseDetail/videoSection";
import { RequestCertificateApi } from "@/app/api/requestForCertificate/requestForCertificate.api";
import { type AxiosError } from "axios";
import Image from "next/image";
import { myCertificateAPI } from "@/app/api/myCertificate/myCertificate.api";

function WatchCourse() {
  const [activeLecture, setActiveLecture] = useState({});

  const [quizTest, setQuizTest] = useState();

  const [mintStatus, setMintStatus] = useState(false);

  // const params=useParams()
  const { slug }: { slug: string } = useParams();
  console.log(slug);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["slug", slug],
    // @ts-ignore
    queryFn: () => communityCourseDetailsAPI(slug),
  });

  const { data: nftData } = useQuery({
    queryKey: ["nfts"],
    queryFn: () => myCertificateAPI(slug),
    enabled: !!mintStatus,
  });

  console.log(nftData, "nftData");

  const { mutate } = useMutation({
    mutationFn: RequestCertificateApi,
    onSuccess: async (e) => {
      console.log("success", e);
      await refetch();
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log(e);
    },
  });

  const handleRequest = () => {
    mutate(slug);
  };

  useEffect(() => {
    if (!isLoading && data) {
      if (
        data?.courses[0].sections &&
        data?.courses[0].sections.length > 0 &&
        data?.courses[0].sections[0].lectures &&
        data?.courses[0].sections[0].lectures.length > 0 &&
        data?.courses[0].sections[0].quiz.length > 0
      ) {
        // setActiveLecture({
        //   url: data.sections[0].lectures[0].url,
        //   description: data.sections[0].lectures[0].description,
        // });
        const updatedActive = [
          data?.courses[0].sections[0].lectures[0],
          data?.courses[0].sections[0],
          data?.courses[0].sections[0].quiz,
        ];
        setActiveLecture(updatedActive);
      }
      setMintStatus(data?.isCertificateMinted);
    }
  }, [isLoading, data]);

  return (
    <DashboardLayout showSidebar={false}>
      {!isLoading && (
        <div className="flex w-full gap-10 bg-[#f7f9fb] text-black">
          <div className="w-[70%]">
            <VideoSection
              // @ts-ignore
              data={data?.courses[0]}
              quizTest={quizTest}
              activeLecture={activeLecture}
            />
          </div>

          <div className="w-[30%]">
            <CourseContent
              data={data?.courses[0]}
              setQuizTest={setQuizTest}
              activeLecture={activeLecture}
              setActiveLecture={setActiveLecture}
            />
            <div className="flex flex-col items-start justify-center gap-8">
              <h1 className="text-2xl font-bold text-[#2769D9]">
                {!data.isCertificateMinted && "Eligible for"} Certificate:
              </h1>

              {!data?.isRequestedForCertificate && (
                <button
                  className="rounded-md bg-red-500 px-4 py-2 font-medium text-white"
                  onClick={() => handleRequest()}
                >
                  Request Certificate
                </button>
              )}
              {data?.isRequestedForCertificate &&
                !data?.isCertificateMinted && (
                  <button className="rounded-md bg-red-500 px-4 py-2 font-medium text-white">
                    Request Sent!
                    <br /> Wait for Approval...
                  </button>
                )}
              {data?.isCertificateMinted && nftData && (
                <div className="pr-4">
                  <Image
                    src={nftData.token_uri}
                    alt=""
                    width={480}
                    height={320}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default WatchCourse;
