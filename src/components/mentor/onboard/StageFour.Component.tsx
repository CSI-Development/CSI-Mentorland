"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useFormContext } from "react-hook-form";

function StageFour() {
  const { setValue } = useFormContext();

  const [qualifications, setQualifications] = useState<Array<any>>([]);
  const [subject, setSubject] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState(1990);

  const handleAddClick = () => {
    const updated = [...qualifications, { subject, institution, year: Number(year) }];
    console.log(updated, "qualification");
    setQualifications(updated);
    setValue("verifiableQualifications", updated, { shouldTouch: true });
    setSubject("");
    setInstitution("");
    setYear(0);
  };

  const handleCancel = (indexToRemove: any) => {
    setQualifications((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="w-8/12 mx-auto mt-10  h-fit flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        Do you have any verifiable qualifications?
      </p>

      <p className="text-[#fefffe] text-center mt-8 mb-3">
        The information given in this form will be verified by an administrator.
      </p>

      {/* <div className="flex flex-col gap-3"> */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[30%_30%_20%_10%] gap-3">
          {/* <div className="flex gap-4"> */}
          <h1 className="text-sm">Subject</h1>
          <h1 className="text-sm">Institution</h1>
          <h1 className="text-sm">Year Finished</h1>
          <div></div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Institution"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          ></input>
          <input
            type="number"
            min="2001"
            max="2100"
            placeholder="Year"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          ></input>
          <button
            type="button"
            className="bg-primary w-full py-1 px-5 rounded-lg font-semibold text-white"
            onClick={handleAddClick}
          >
            Add
          </button>
          {/* </div> */}
        </div>
        {qualifications.map((qualification, index) => (
          <div key={index} className="grid grid-cols-[30%_30%_20%_10%] gap-3">
            <h1>{qualification.subject}</h1>
            <h1>{qualification.institution}</h1>
            <h1>{qualification.year}</h1>

            <div className=" flex items-center justify-end">
              <Icon
                icon="mingcute:close-fill"
                className="w-5 h-5"
                color="#FFD600"
                onClick={() => handleCancel(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StageFour;
