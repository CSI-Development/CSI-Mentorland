import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import Image from "next/image";
import React from "react";
import courseCamera from "/public/images/courseCamera.png";
import kombocha from "/public/images/kombocha.png";
import light from "/public/images/light.png";
import robot from "/public/images/robot.png";
import laptop from "/public/images/laptop.png";
import Link from "next/link";

function howToCreateCourse() {
  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full w-full py-20">
        <div className="flex w-full justify-between px-20 py-10 text-black">
          <div className="w-[60%]">
            <h1 className="text-2xl font-semibold">How to create a Course</h1>
            <div className="mt-10 flex">
              <div>
                <Image alt="logo" className="w-[650px]" src={courseCamera} />
              </div>
              <div className="p-6 text-xl">
                <h1 className="font-bold">
                  Arrr me hearties! Make traditional Latin walk the plank and
                  opt for pirate lorem ipsum for your next high seas design
                  adventure.
                </h1>
                <p className="mt-6">
                  Im baby art party celiac live-edge cloud bread air plant banh
                  mi JOMO tilde enamel pin. Adaptogen gastropub PBR&B, portland
                  chicharrones yuccie bespoke authentic.
                </p>
              </div>
            </div>
            <p className="mt-10">
              ame affogato vaporware fashion axe skateboard vape hoodie pug
              cliche kogi activated charcoal keytar vexillologist knausgaard
              VHS. Grailed hell of cray, photo booth heirloom skateboard
              raclette stumptown tumblr portland organic flexitarian bespoke
              enamel pin messenger bag. DIY Brooklyn tacos, banh mi bitters palo
              santo prism taiyaki venmo meggings blue bottle trust fund cray
              cloud bread JOMO. Church-key banjo scenester keffiyeh chicharrones
              lyft ennui meditation gorpcore tofu direct trade fanny pack
              literally raclette same.
            </p>
            <div className="grid grid-cols-1 gap-10 px-20 py-10">
              <div className="flex items-center gap-8">
                <Image alt="logo" src={kombocha} />
                <h1 className="font-bold">
                  Put a bird on it glossier tumblr, kombucha tacos{" "}
                  <span className="font-normal">
                    swag williamsburg ascot viral messenger bag celiac pitchfork
                    twee. Bushwick selvage woke af helvetica.
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-8">
                <Image alt="logo" src={light} />
                <h1 className="font-bold">
                  Same affogato vaporware fashion axe skateboard{" "}
                  <span className="font-normal">
                    vape hoodie pug cliche kogi activated charcoal keytar
                    vexillologist knausgaard
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-8">
                <Image alt="logo" src={robot} />
                <h1 className="font-bold">
                  Same affogato vaporware fashion axe skateboard{" "}
                  <span className="font-normal">
                    vape hoodie pug cliche kogi activated charcoal keytar
                    vexillologist knausgaard
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-8">
                <Image alt="logo" src={laptop} />
                <h1 className="font-bold">
                  Church-key banjo scenester{" "}
                  <span className="font-normal">
                    keffiyeh chicharrones lyft ennui meditation gorpcore tofu
                    direct trade fanny pack literally raclette same. Everyday
                    carry man bun lomo big mood, williamsburg banh mi grailed
                    praxis YOLO. Whatever subway tile taxidermy palo santo same
                    trust fund.
                  </span>
                </h1>
              </div>
              <div className="w-full flex justify-center">
                <Link href="/mentor/dashboard/createCourse">
                <button
                  type="button"
                  className="w-fit bg-primary font-semibold text-white px-4 py-3 rounded-lg outline-none"
                >
                  Create your first Course
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h1 className="text-xl font-bold">Recent Articles</h1>
              <div className="mt-5 border-b border-[#B9BABA] pb-4">
                <h1 className="text-lg font-bold">Cupcake ipsum dolo</h1>
                <p>
                  Topping cheesecake muffin. Halvah croissant candy canes bonbon
                  candy. Apple pie jelly beans topping carrot cake danish tart
                  cake cheesecake.
                </p>
                <p className="mt-5 text-[#5D6475]">12/23/2022</p>
              </div>
              <div className="mt-5 border-b border-[#B9BABA] pb-4">
                <h1 className="text-lg font-bold">Cupcake ipsum dolo</h1>
                <p>
                  Topping cheesecake muffin. Halvah croissant candy canes bonbon
                  candy. Apple pie jelly beans topping carrot cake danish tart
                  cake cheesecake.
                </p>
                <p className="mt-5 text-[#5D6475]">12/23/2022</p>
              </div>
              <div className="mt-5 border-b border-[#B9BABA] pb-4">
                <h1 className="text-lg font-bold">Cupcake ipsum dolo</h1>
                <p>
                  Topping cheesecake muffin. Halvah croissant candy canes bonbon
                  candy. Apple pie jelly beans topping carrot cake danish tart
                  cake cheesecake.
                </p>
                <p className="mt-5 text-[#5D6475]">12/23/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
}

export default howToCreateCourse;
