import { uploadApi } from "@/api/file/upload.api";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";

function StageTwo() {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setImage(reader.result);
        const form = new FormData();
        form.append('file', file);
        console.log(form);
        const res = await uploadApi(form);
        console.log(res);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-20 ">
      <p className="text-center font-semibold text-2xl mb-5">
        Now, Please add an avatar
      </p>
      <label
        htmlFor="imageInput"
        className="mx-auto bg-[#0e2344] border-[4px] border-[#1b448f] w-36 h-36 text-center flex justify-center rounded-full mb-12 cursor-pointer"
      >
        {image ? (
          <Image
            alt="Profile Picture"
            className="h-full w-full rounded-full object-cover"
            width={0}
            height={0}
            src={image as string}
          ></Image>
        ) : (
          <Icon className="my-auto text-6xl text-[#6a9df6]" icon="ei:camera" />
        )}
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageInput}
      />
    </div>
  );
}

export default StageTwo;
