/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AppContext } from "@/providers/ContextProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchMentorApi } from "@/app/api/searchMentor/searchMentor";
import { useDebounce } from "@/hooks/useDebounce";
import { selectedMentorsApi } from "@/app/api/searchMentor/postSelectedMentors";
import { any } from "zod";

function AddMentors({
  OpenDialog,
  setOpenDialog,
  refetch,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}) {
  const [search, setSearch] = useState<string>("");
  const { setLoading } = useContext(AppContext);
  const [selectedMentors, setSelectedMentors] = useState<number[]>([]);
  const debouncedSearch = useDebounce(search, 1000);

  //   const mentors = [
  //     {
  //       id: 1,
  //       name: "Brandon Washington",
  //       img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //     {
  //       id: 2,
  //       name: "Ashley Smith",
  //       img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //     {
  //       id: 3,
  //       name: "Michael Johnson",
  //       img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //     {
  //       id: 4,
  //       name: "Sarah Williams",
  //       img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //     },
  //   ];

  const handleMentorSelection = (id: number) => {
    setSelectedMentors((prev) =>
      prev.includes(id)
        ? prev.filter((mentorId) => mentorId !== id)
        : [...prev, id],
    );
  };

  const { data } = useQuery({
    queryKey: ["searchMentors", debouncedSearch],
    queryFn: () => searchMentorApi(debouncedSearch),
    refetchOnWindowFocus: false,
    // enabled: !!debouncedSearch,
  });

  //   const handleSearchClick = async () => {
  //     // setTriggerSearch(true);
  //     await refetch();
  //   }

  const { mutate: addSelectedMentorsData } = useMutation({
    mutationFn: selectedMentorsApi,
    onSuccess: async (e: any) => {
      console.log("success", e);
      await refetch();
      setOpenDialog(false);
      setSelectedMentors([]);
      setSearch("");
    },
  });

  const handleAddMentors = () => {
    addSelectedMentorsData({ mentors: selectedMentors });
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
      <div className="w-full p-10">
        <div className="w-full">
          <h1 className="w-full text-center text-3xl font-bold text-black">
            Find Mentors
          </h1>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Search By Subjects or by Name"
              className="border-[#B9BABA ] w-full border px-1 py-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button
              onClick={handleSearchClick}
              type="button"
              className="ml-3 rounded-md bg-primary px-3 py-1 font-bold text-white"
            >
              Search
            </button> */}
          </div>
          <p className="mt-6 text-black">
            Here are the Mentors within the{" "}
            <span className="font-bold">
              {search.length > 0 ? search : "Coaching"}
            </span>{" "}
            tag
          </p>
        </div>
        <div className="mt-5 grid h-96 grid-cols-4 gap-8 overflow-y-scroll">
          {data?.length > 0 &&
            data?.map((mentor: any) => (
              <div
                key={mentor._id}
                className={`flex cursor-pointer flex-col items-center rounded-lg text-center `}
                onClick={() => handleMentorSelection(mentor._id)}
              >
                <div className="relative">
                  {selectedMentors.includes(mentor._id) && (
                    <div className="absolute h-24 w-24 rounded-lg bg-[#04C300] opacity-60">
                      <Icon
                        icon="mdi:check-bold"
                        className="absolute inset-0 m-auto h-6 w-6 text-white"
                      />
                    </div>
                  )}
                  <img
                    src={mentor?.mentorAvatar}
                    alt={mentor?.mentorAvatar}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                </div>
                <h2 className="mt-3 text-sm font-semibold">
                  {mentor.firstName} {mentor.lastName}
                </h2>
              </div>
            ))}
        </div>
        <div className="mt-8 flex w-full justify-center">
          <button
            type="button"
            onClick={handleAddMentors}
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-primary bg-primary p-1 px-2 font-semibold text-white"
          >
            <Icon icon="bxs:user-plus" className="h-6 w-6" />
            Add New
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default AddMentors;
