import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function StageThree() {
  const { setValue } = useFormContext();

  const [subjectStr, setSubjectStr] = useState("");
  const [subjects, setSubjects] = useState<
    Array<{ id: number; label: string }>
  >([]);

  // Function to handle option selection
  // const handleOptionSelect = (option: string) => {
  //   // Toggle selection for the clicked option
  //   setSelectedOptions((prevOptions) => {
  //     if (prevOptions.includes(option)) {
  //       // Remove the option if already selected
  //       return prevOptions.filter((item) => item !== option);
  //     } else {
  //       // Add the option if not already selected
  //       return [...prevOptions, option];
  //     }
  //   });
  // };
  const handleSubjectStrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectStr(e.target.value);

    const subjects = e.target.value
      .split(",")
      .filter((item) => item.trim())
      .map((item, index) => ({ id: index, label: item.trim() }));

    setSubjects(subjects);
    const sub = subjects.map((item) => item.label);
    console.log(subjects, sub, "subjects...");
    setValue("subjectsFromMentor", sub, { shouldTouch: true });
  };

  const handleCancel = (indexToRemove: number) => {
    setSubjects((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div className="mx-auto mt-10 flex  h-fit w-5/12 flex-col  justify-center">
      <p className="text-center text-2xl font-semibold">
        Now tell us what subjects would you like to <br /> mentor about
      </p>
      <div className="mx-auto mt-7 flex w-2/3 flex-col gap-3 py-3 text-[#fefffe]">
        <div className="text-xs">
          Enter each subject name separated by commas
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg border border-[#3c4252] bg-[#141b2b] px-4 py-3"
          value={subjectStr}
          onChange={handleSubjectStrChange}
        />
        <div className="flex items-center gap-2  ">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className="flex w-fit items-center justify-between gap-2 border-[2px] border-[#464C63] bg-[#2E344D] px-3 py-1 text-xs text-[#FFD600] "
            >
              <h1 className="font-medium">{subject.label}</h1>
              <Icon
                icon="material-symbols:close"
                className="h-4 w-4"
                onClick={() => handleCancel(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StageThree;
