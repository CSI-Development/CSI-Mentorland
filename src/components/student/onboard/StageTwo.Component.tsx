/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { setSession } from "@/utils/jwt";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";

function StageTwo(register: any) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const { setValue } = useFormContext();

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      console.log("success", e);
      toast.success("Image Upload Successfully");
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
      setImage(e.data.file.url);
    },
  });

  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      console.log(file, "imageee");
      const formData: any = new FormData();
      formData.append("file", file);
      mutate(formData);
    }
  };

  return (
    <div className="mt-20 ">
      <p className="mb-5 text-center text-2xl font-semibold">
        Now, Please add an avatar
      </p>
      <label
        htmlFor="imageInput"
        className="mx-auto mb-12 flex h-36 w-36 cursor-pointer justify-center rounded-full border-[4px] border-[#1b448f] bg-[#0e2344] text-center"
      >
        {image ? (
          <Image
            alt="Profile Picture"
            className="h-full w-full rounded-full"
            width={0}
            height={0}
            src={image as string}
          />
        ) : (
          <Icon className="my-auto text-6xl text-[#6a9df6]" icon="ei:camera" />
        )}
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        className="hidden"
        onChange={handleImageInput}
      />
    </div>
  );
}

export default StageTwo;
