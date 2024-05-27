/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useContext, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AppContext } from "@/providers/ContextProvider";

function AddClassmates({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLoading } = useContext(AppContext);
  const [selectedClassmates, setSelectedClassmates] = useState<number[]>([]);

  const classmates = [
    {
      id: 1,
      name: "Brandon Washington",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Ashley Smith",
      img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Michael Johnson",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Sarah Williams",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "David Brown",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Laura Green",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Sophia Taylor",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "James Wilson",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const handleClassmateSelection = (id: number) => {
    setSelectedClassmates((prev) =>
      prev.includes(id)
        ? prev.filter((classmateId) => classmateId !== id)
        : [...prev, id],
    );

  };
  
  
  console.log(selectedClassmates, "selected classmates")
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
      <div className="w-full p-10">
        <div className="w-full">
          <h1 className="w-full text-center text-3xl font-bold text-black">
            Add another student to your favorite list
          </h1>
        </div>
        <p className="py-8 font-semibold text-black">All Community Students</p>
        <div className="grid grid-cols-2 gap-8">
          {classmates.map((classmate) => (
            <div
              key={classmate.id}
              className="relative flex cursor-pointer items-center"
              onClick={() => handleClassmateSelection(classmate.id)}
            >
              {selectedClassmates.includes(classmate.id) && (
                <div className="absolute h-12 w-12 rounded-full bg-[#04C300] opacity-60">
                  <Icon
                    icon="mdi:check-bold"
                    className="absolute inset-0 m-auto h-6 w-6 text-white"
                  />
                </div>
              )}
              <img
                src={classmate.img}
                alt={classmate.name}
                className={`h-12 w-12 rounded-full object-cover`}
              />

              <h2 className="ml-4 text-sm font-semibold">{classmate.name}</h2>
            </div>
          ))}
        </div>
        <div className="mt-8 flex w-full justify-center">
          <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-primary bg-primary p-1 px-2 font-semibold text-white">
            <Icon icon="bxs:user-plus" className="h-6 w-6" />
            Add New
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default AddClassmates;
