/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { mentorCourseDetailsAPI } from "@/app/api/mentorCourseDetails/mentorCourseDetails.api";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import VideoSection from "@/components/mentor/courseDetail/videoSection";
import CourseContent from "@/components/mentor/courseDetail/courseContent";
import { mint } from "@/utils/contractMethods";
import { useMagic } from "@/providers/MagicProvider";
import { AppContext } from "@/providers/ContextProvider";
import { toast } from "react-toastify";
import { getStudentListApi } from "@/app/api/getStudentsList/getStudentsList.api";
import { changeMintStatusApi } from "@/app/api/changeMintStatus/changeMintStatus.api";
import { generateCertificateAPI } from "@/app/api/generateCertificate/generateCertificate.api";

function WatchCourse() {
  // const params=useParams()
  const { setLoading } = useContext(AppContext);
  const { slug }: { slug: string } = useParams();
  const [activeLecture, setActiveLecture] = useState({});
  console.log(slug);
  const { data, isLoading: detailLoad } = useQuery({
    queryKey: ["slug", slug],
    // @ts-ignore
    queryFn: () => mentorCourseDetailsAPI(slug),
  });

  // @ts-ignore
  // @ts-ignore
  const {
    data: students,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["studentList", slug],
    // @ts-ignore
    queryFn: () => getStudentListApi(slug),
  });

  const { mutateAsync: generate } = useMutation({
    mutationFn: generateCertificateAPI,
  });

  const { mutateAsync } = useMutation({
    mutationFn: changeMintStatusApi,

    onSuccess: (e) => {
      console.log(e, "res");
    },
    onError: async (e) => {
      // toast.error(e?.response?.data.error.message);
      console.log(e);
    },
  });

  console.log(students, "students");
  const { web3 } = useMagic();

  // @ts-ignore
  const handleMint = async (walletAddress, id, courseAddress) => {
    console.log(walletAddress, id, courseAddress, "weeee");
    try {
      setLoading(true);
      if (!walletAddress) {
        toast.error("Wallet address not available");
        setLoading(false);
        return;
      }
      const source = await generate({
        courseId: slug,
        userId: id,
      });
      if (source) {
        const data = await mint(web3, walletAddress, source.url, courseAddress)
          .then(async (data) => {
            console.log(data, "response");
            await mutateAsync({
              courseId: slug,
              userId: id,
            });
            await refetch();
            toast.success("Mint Successfull");
          })
          .catch((err) => {
            console.log(err, "errr");
            toast.error("Something went wrong");
          });
        console.log(data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err, "err");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!detailLoad && data) {
      if (
        data?.courses[0].sections &&
        data?.courses[0].sections.length > 0 &&
        data?.courses[0].sections[0].lectures &&
        data?.courses[0].sections[0].lectures.length > 0
      ) {
        const updatedActive = [
          data?.courses[0].sections[0].lectures[0],
          data?.courses[0].sections[0],
        ];
        setActiveLecture(updatedActive);
      }
    }
  }, [detailLoad, data]);

  return (
    <MentorDashboardLayout showSidebar={false}>
      {!detailLoad && (
        <div
          className="flex w-full bg-[#f7f9fb] px-20 text-black"
          style={{ paddingTop: "120px" }}
        >
          <div className="w-[70%]">
            <VideoSection activeLecture={activeLecture} />
          </div>

          <div className="w-[30%]">
            <CourseContent
              data={data?.courses[0]}
              activeLecture={activeLecture}
              setActiveLecture={setActiveLecture}
            />
            <div className="flex flex-col items-start justify-center gap-8">
              <h1 className="text-2xl font-bold text-[#2769D9]">
                Mint Certificates of Enrolled Students:
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 border-b-2 border-black">
                  <div className="flex w-full gap-4 text-black">
                    <h1 className="w-40 px-3 font-medium">Name</h1>
                    <h1 className="w-40 px-3 font-medium">Wallet Address</h1>
                    <h1 className="w-40 px-3 font-medium">Mint</h1>
                  </div>
                </div>
                {students?.length > 0 &&
                  // @ts-ignore
                  students.map((item) => (
                    <div
                      className="flex w-full items-center gap-4 text-black"
                      key={item.userId}
                    >
                      <p className="w-40 px-3">
                        {item.students[0].firstName} {item.students[0].lastName}
                      </p>
                      <p className="w-40 overflow-hidden text-ellipsis px-3">
                        {item.users[0].walletAddress}
                      </p>
                      {!item.isRequestedForCertificate && (
                        <h1 className="text-gray-600">Pending</h1>
                      )}
                      {item.isRequestedForCertificate && !item.isCertificateMinted && (
                        <button
                          className="rounded-md bg-red-500 px-4 py-2 font-medium text-white disabled:cursor-not-allowed"
                          onClick={() =>
                            handleMint(
                              item.users[0].walletAddress,
                              item.userId,
                              data?.courses[0].courseContractAddress,
                            )
                          }
                        >
                          Mint
                        </button>
                      )}
                      {item.isCertificateMinted && (
                        <h1 className="text-green-600">Minted!</h1>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </MentorDashboardLayout>
  );
}

export default WatchCourse;
