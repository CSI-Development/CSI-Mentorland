import React from "react";
import Layout from "../../../../../components/Layouts/DashboardLayout";
import courseThumbnail from "@/../public/studentDashboard/wallet/coursecompletion/courseThumbnail.png";
import presentedTo from "@/../public/studentDashboard/wallet/coursecompletion/presentedTo.png";
import certificate from "@/../public/studentDashboard/wallet/coursecompletion/certificate.png";

import Image from "next/image";
import Link from "next/link";
function completionCertificate() {
  return (
    <Layout showSidebar={false}>
      <div className="px-12">
        <Link href={'/student/dashboard/wallet'}>
        <button className="text-[#2769D9] font-semibold mt-1" >{`<< Back`}</button>
        </Link>
        <div className="flex gap-10">
          <div className="w-4/12">
            <div className="flex justify-center py-6 mt-6 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_6px]">
              <Image src={courseThumbnail} alt="course thumbnail" />
            </div>
            {/* they gpt write here code */}
          </div>

          <div className="w-7/12 py-10">
            <p className="font-bold text-xl text-[#5D6475]">
              Certificate of Completion
            </p>
            <p className="text-2xl font-bold text-black mt-1">
              Courses Make Millions Course Initial Level
            </p>
            <p className="text-sm mt-10 text-[#5D6475]">Presented To:</p>
            <div className="flex gap-3 mt-2">
              <Image src={presentedTo} alt="presented to" />
              <p className="text-black my-auto  text-xl">
                Engelbert Bryughternexter
              </p>
            </div>
            <div className="w-10/12 mt-4">
              <p className="font-bold text-xl text-black">Course Description</p>
              <p className="text-[#5D6475] text-md">
                Pommy ipsum Geordie pork scratchings down the local trouble and
                strife nuthouse a diamond geezer a fiver, blighty chuffed upper
                class pants laughing gear Dr. Watson curtain twitching. Off with
                her head upper class smeg head meat and two veg easy peasy
                shepherd's pie fish and chips, squiffy golly gosh hard cheese
                old boy blimey
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl text-black mt-4 mb-2">
                Printable Diploma
              </p>
              <Image className="w-10/12" src={certificate} alt="certificate" />
            </div>
            <div className="w-10/12 mt-4">
              <p className="font-bold text-xl text-black">Grades</p>
              <p className="text-[#5D6475] text-md">
                Watson curtain twitching. Off with her head upper class smeg
                head meat and two veg easy peasy shepherd's pie fish and chips,
                squiffy golly gosh hard cheese old boy blimey
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default completionCertificate;
