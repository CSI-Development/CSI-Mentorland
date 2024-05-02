import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function StageThree() {

  const { setValue } = useFormContext();

  const [subjectStr, setSubjectStr] = useState('');
  const [subjects, setSubjects] = useState<Array<any>>([]);

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
      .split(',')
      .filter((item) => item.trim())
      .map((item, index) => ({ id: index, label: item.trim() }));
      
      setSubjects(subjects);
      const sub = subjects.map((item) => item.label)
      console.log(subjects, sub,"subjects...")
    setValue("subjectsFromMentor", sub , { shouldTouch: true });

  };

  const handleCancel = (indexToRemove: any) =>{
    setSubjects(prevTodos => prevTodos.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="w-5/12 mx-auto mt-10  h-fit flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        Now tell us what subjects would you like to <br /> mentor about
      </p>
      <div className="flex flex-col mt-7 gap-3 w-2/3 mx-auto py-3 text-[#fefffe]">
        <div className="text-xs">
          Enter each subject name separated by commas
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
          value={subjectStr}
          onChange={handleSubjectStrChange}
        ></input>
        <div className="flex gap-2 items-center  ">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className="w-fit px-3 py-1 text-xs text-[#FFD600] bg-[#2E344D] border-[2px] border-[#464C63] flex gap-2 justify-between items-center "
            >
              <h1 className="font-medium">{subject.label}</h1>
              <Icon icon="material-symbols:close" className="w-4 h-4" onClick={() => handleCancel(index)}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StageThree;
