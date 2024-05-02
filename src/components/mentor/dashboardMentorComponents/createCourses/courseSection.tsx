import { useRouter } from "next/navigation";
import React from "react";

function CourseSection() {

    const router = useRouter();

    const createCourse = () => {
        router.push("createCourse");
    }
  return (
    <div className="w-full text-black">
      <div className="w-full h-[585px] bg-[#E8ECF3] flex justify-center items-center">

      </div>
      <div className="w-full flex justify-center items-center text-center mt-10 ">
        <div>
            <h1 className="text-[#5D6475] text-3xl font-semibold">Start Creating your course</h1>
            <p className="text-[#5D6475] text-xl mt-4">If you need help with it, we’ve made a tutorial for that. Have a look here.</p>
            <button type="button" className=" bg-[#2769D9] mt-10 py-[9px] px-[14px] rounded-lg font-bold text-white" onClick={createCourse}>Create your first  Course</button>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
