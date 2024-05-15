/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import axios from "axios";
import { getCookie } from "cookies-next";
import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import { setSession } from "@/utils/jwt";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function StepFour({ handlePrevStep }: any) {
  const router = useRouter();
  const [sections, setSections] = useState([
    {
      sectionName: "",
      describeSection: "",
      videos: [{ name: "", url: "", description: "", duration: 0, timeDuration: 0 }],
    },
  ]);
  const [videoDuration, setVideoDuration] = useState<string>("0");
  const [videoDurationNumber, setVideoDurationNumber] = useState<string>("0");
  const [video, setVideo] = useState<string | ArrayBuffer | null>(null);
  const [videoURL, setVideoUrl] = useState("");
  const [videoName, setVideoName] = useState<string[]>([]);
  const [saveStatus, setSaveStatus] = useState(true);

  // const handleAddSection = () => {
  //   setSections([...sections, { name: '', description: '', videos: [{ name: '', url: '', description: '' }] }]);
  // };

  const [sectionData, setSectionData] = useState({
    sectionName: "",
    describeSection: "",
  });

  // const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;

  //   setSectionData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  //   console.log(sectionData);
  // };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    sectionIndex: number,
  ) => {
    const { name, value } = e.target;
    const updatedSections = sections.map((item: any, i: number) =>
      i === sectionIndex ? { ...item, [name]: value } : item,
    );
    setSections(updatedSections);
    setSaveStatus(true);
  };

  const handleAddSection = async () => {
    try {
      // console.log(sections);
      // const lastSectionIndex = sections.length - 1;
      // const lastSection = sections[lastSectionIndex];
      // const { sectionName, describeSection } = lastSection;
      // let data = {
      //   name: sectionName,
      //   description: describeSection,
      // };
      const newSection = {
        sectionName: "",
        describeSection: "",
        videos: [{ name: "", url: "", description: "", duration: 0 }],
      };

      setSections((prev: any) => [...prev, newSection]); // Add the new section to the sections state
      setSectionData({
        // Clear the sectionData state
        sectionName: "",
        describeSection: "",
      });
      console.log("sections", sections);
    } catch (error) {
      console.error("Error adding section:", error); // Handle error
    }
  };

  // const handleAddVideo = (sectionIndex: number) => {
  //   const updatedSections = [...sections];
  //   updatedSections[sectionIndex].videos.push({
  //     name: "",
  //     url: "",
  //     description: "",
  //   });
  //   setSections(updatedSections);
  // };

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      console.log("success", e);
      setVideoUrl(e.data.file.url);
      setSession(e.data.token); //here will set the token into the session for axios header

      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setVideoUrl("studentAvatar", e.data.file.url, { shouldTouch: true });
    },
  });

  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
    sectionIndex: number,
  ) => {
    console.log(video, "image value");
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      if (!fileType.startsWith("video/")) {
        toast.error("Please select a video file.");
        setVideoName([]);
        setVideoUrl("");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideo(reader.result);
      };
      console.log("videdo: ", video);
      console.log(file, "setVideo");
      reader.readAsDataURL(file);
      // Create a video element to get the video duration
      const videoElement = document.createElement("video");
      videoElement.src = URL.createObjectURL(file);
      videoElement.addEventListener("loadedmetadata", () => {
        console.log("Video duration:", videoElement.duration);
        // Optionally, you can set the video duration state here
        console.log(videoElement.duration);
        setVideoDurationNumber(videoElement.duration.toString())
        console.log('videoDurationNumber', videoDurationNumber);

        const dateObj = new Date(videoElement.duration * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();
        const timeString =
          hours.toString().padStart(2, "0") +
          ":" +
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0");
        setVideoDuration(timeString);

        // Remember to clean up
        URL.revokeObjectURL(videoElement.src);
      });
      // setVideoName(file.name);
      // setVideoName(file.name);
      setVideoName((prevVideoNames) => {
        const updatedNames = [...prevVideoNames];
        updatedNames[sectionIndex] = file.name; // Update videoName at the specified sectionIndex
        return updatedNames;
      });

      console.log(file, "setVideo");
      const formData: any = new FormData();
      formData.append("file", file);
      mutate(formData);
    }
  };

  // const handleImageInput = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const fileType = file.type;
  //     if (!fileType.startsWith('video/')) {
  //       toast.error('Please select a video file.');
  //       setVideoName('');
  //       setVideoUrl('');
  //       return;
  //     }
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setVideo(reader.result);
  //     };
  //     reader.readAsDataURL(file);

  //     // Create a video element to get the video duration
  //     const videoElement = document.createElement('video');
  //     videoElement.src = URL.createObjectURL(file);
  //     videoElement.addEventListener('loadedmetadata', () => {
  //       console.log('Video duration:', videoElement.duration);
  //       // Optionally, you can set the video duration state here
  //       console.log(videoElement.duration);
  //       // Remember to clean up
  //       URL.revokeObjectURL(videoElement.src);
  //     });
  //   }
  // };

  const handleVideoUpload = async (sectionIndex: number) => {
    try {
      const descriptionInput = document.getElementById(
        `describeLesson-${sectionIndex}`,
      ) as HTMLInputElement;
      const description = descriptionInput?.value;
      console.log(videoName, videoURL, description, videoDuration, "helloo");
      const updatedSections = sections.map((item: any, i: number) =>
        i === sectionIndex
          ? {
            ...item,
            videos: [
              ...item.videos,
              {
                name: videoName,
                url: videoURL,
                description: description,
                duration: videoDuration,
                timeDuration: videoDurationNumber
              },
            ],
          }
          : item,
      );
      setSections(updatedSections);
      // const updatedSections = [...sections];
      // updatedSections[sectionIndex].videos.push({
      //   name: description,
      //   url: videoURL,
      //   description: description,
      // });
      // setSections(updatedSections);

      console.log(`updatedSections`, sections);
      setVideoName([]);
      descriptionInput.value = "";
      setVideoDuration("0");
      setVideoDurationNumber('0');
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const publishCourse = async () => {
    const token = getCookie("token") ?? "";
    const courseId = localStorage.getItem("courseId");
    const response = await axiosInstance.put(
      `/courses/publishCourse/${courseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      toast.success(`Course published successfully.`);
      setSaveStatus(false);
      router.back();
    }
  };

  const saveCourse = async () => {
    console.log(sections);

    const data = sections.map((section) => ({
      title: section.sectionName,
      description: section.describeSection,
      lectures: section.videos
        .filter((video) => video.url !== "" && video.description !== "")
        .map((video) => ({
          url: video.url,
          description: video.description,
          duration: Number(video.timeDuration)
        })),
    }));
    console.log(data);


    const token = getCookie("token") ?? "";
    const courseId = localStorage.getItem("courseId");
    const response = await axiosInstance.put(
      `/courses/updateCourseSection/${courseId}`,
      { data: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 201) {
      // toast.success(response.data.message);
      toast.success(
        `Section & Lecture saved successfully. Please publish the course.`,
      );
      setSaveStatus(false);
    }

    console.log(data);
  };

  return (
    <div className="my-20 w-[587px]">
      <div className="w-full p-2 text-center">
        <h1 className="font-popins text-2xl font-bold">
          Course Sections and Lectures{" "}
        </h1>
        <p className="mt-5">
          Put a bird on it glossier tumblr, kombucha tacos swag williamsburg
          ascot viral messenger bag celiac pitchfork twee. Bushwick selvage woke
          af helvetica.
        </p>
      </div>
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="mt-8 w-[587px] rounded-md bg-white p-5 shadow-sm"
        >
          <div className="flex w-full justify-between border-b border-[#B9BABA] pb-[20px]">
            <h1 className="flex items-center text-base font-bold text-[#1A458F]">
              Section {sectionIndex + 1}
            </h1>
            <IoIosArrowDown className="text-2xl text-[#2769D9]" />
          </div>
          <div className="mt-5 border-b border-[#B9BABA] pb-2">
            <label htmlFor="sectionName" className="text-base text-[#1A458F]">
              Section Name
            </label>
            <br />
            <input
              id="sectionName"
              name="sectionName"
              type="text"
              placeholder="Add Section Name"
              className="h-[55px] w-full rounded-md border border-[#B9BABA] bg-white p-[10px] outline-none"
              value={section.sectionName}
              onChange={(e) => handleFormChange(e, sectionIndex)}
            />
            <br />
            <br />
            <label
              htmlFor="describeSection"
              className="text-base text-[#1A458F]"
            >
              What would the students be able to after finishing this section?
            </label>
            <br />
            <textarea
              id="describeSection"
              name="describeSection"
              placeholder="Describe this section"
              className="h-[124px] w-full rounded-md border border-[#B9BABA] bg-white p-[10px] outline-none"
              value={section.describeSection}
              onChange={(e) => handleFormChange(e, sectionIndex)}
            />

            <br />

            <br />
          </div>
          <div className="mt-6 border-b border-[#B9BABA] p-[10px]">
            <div className="mt-6 border-b border-[#B9BABA] p-[10px]">
              <h1 className="text-xl font-bold text-[#2769D9]">Lectures</h1>
              {section.videos.length > 0 ? (
                section.videos.map(
                  (video, videoIndex) =>
                    video.url &&
                    video.description && (
                      <div key={videoIndex} className="my-1 flex items-center">
                        <video
                          src={video.url}
                          className="bg-slate-200 h-[85px] w-[106px]"
                        />
                        <h1 className="px-5 font-semibold text-[#2769d9]">
                          Lesson {videoIndex}:{" "}
                          <span className="text-slate-600 font-normal">
                            {video.description}
                          </span>
                        </h1>
                        <p className="text-slate-500 flex">
                          <FaPlayCircle className="mr-1 mt-1 text-black" />{" "}
                          {video.duration}
                        </p>
                      </div>
                    ),
                )
              ) : (
                <div className="my-1 flex">
                  <p>No Lecture Added</p>
                </div>
              )}
            </div>
            <div className="w-full border border-[#B9BABA] p-8">
              <div className="w-full text-center">
                <div className="flex w-[486px]">
                  <div className="flex h-[44px] w-full items-center border border-[#B9BABA] bg-white px-4 text-[#b9baba]">
                    <label
                      htmlFor={`file-${sectionIndex}`}
                      className="max-w-72"
                    >
                      <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        {videoName[sectionIndex]
                          ? videoName[sectionIndex]
                          : "No File Selected"}
                      </p>
                    </label>
                  </div>
                  <label
                    htmlFor={`file-${sectionIndex}`}
                    className="h-[44px] cursor-pointer whitespace-nowrap rounded-r-lg bg-[#2769D9] px-8 py-3 font-bold text-white"
                  >
                    Select Video
                  </label>
                </div>
              </div>
              <input
                id={`file-${sectionIndex}`}
                name={`file-${sectionIndex}`}
                type="file"
                placeholder="Describe this section"
                accept="video/*"
                hidden
                onChange={(e) => handleImageInput(e, sectionIndex)}
              />

              <br />
              <label
                htmlFor={`describeLesson-${sectionIndex}`}
                className="text-base text-[#1A458F]"
              >
                Enter a brief description of this lesson
              </label>
              <br />
              <textarea
                id={`describeLesson-${sectionIndex}`}
                name={`describeLesson-${sectionIndex}`}
                placeholder="Describe this Lesson"
                className="h-[124px] w-full rounded-md border border-[#B9BABA] bg-white p-[10px] outline-none"
              />
              <br />
              <button
                className="mt-5 h-[44px] cursor-pointer whitespace-nowrap rounded-lg bg-[#2769D9] px-8 py-3 font-bold text-white"
                type="button"
                onClick={() => handleVideoUpload(sectionIndex)}
              >
                Upload
              </button>
            </div>
          </div>
          {/* <div className="mt-5 w-full">
            <div className="">
              <button
                type="button"
                className="p-[5px] border font-bold border-[#B9BABA]"
                onClick={() => handleAddVideo(sectionIndex)}
              >
                Add Video
              </button>
            </div>
          </div> */}
        </div>
      ))}
      <div className="mt-10 flex w-full justify-between">
        <button
          type="button"
          className="text-md rounded-xl bg-[#5D6475] px-[15px] py-[5px] text-base font-bold text-white"
          id="previous"
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-md rounded-xl bg-[#2769D9] px-[15px] py-[5px] text-base font-bold text-white"
          onClick={handleAddSection}
        >
          Add Section
        </button>

        {saveStatus ? (
          <button
            type="submit"
            className="text-md rounded-xl bg-[#2769D9] px-[15px] py-[5px] text-base font-bold text-white"
            onClick={saveCourse}
          >
            Save
          </button>
        ) : (
          <button
            type="submit"
            className="text-md rounded-xl bg-[#2769D9] px-[15px] py-[5px] text-base font-bold text-white"
            onClick={publishCourse}
          >
            Publish Course
          </button>
        )}

        {/* saveStatus */}
      </div>
    </div>
  );
}

export default StepFour;
