"use client";
import React from "react";
import Badge1 from "../../../../../public/studentDashboard/wallet/badge1.svg";
import Badge2 from "../../../../../public/studentDashboard/wallet/badge2.svg";
import Badge3 from "../../../../../public/studentDashboard/wallet/badge3.svg";
import Image from "next/image";
import AccessCard1 from "../../../../../public/studentDashboard/wallet/accesscard1.png";
import AccessCard2 from "../../../../../public/studentDashboard/wallet/accesscard2.png";
import Link from "next/link";

const AccessCard = ({ idx }: { idx: number }) => {
  if (idx == 1) {
    return (
      <Image src={AccessCard1} alt="" className="w-full h-36 object-cover" />
    );
  }
  if (idx == 2) {
    return (
      <Image src={AccessCard2} alt="" className="w-full h-36 object-cover" />
    );
  }
  // return <div className="w-full bg-red-400 h-36 rounded-lg"></div>;
};

const AccessCards = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2  bg-white shadow-md rounded-lg p-3 py-5 text-black">
      <h1 className="text-lg font-semibold">Access Cards</h1>
      <p>
        Once you’ve finished with these cards, you can sell them in our
        marketplace, read{" "}
        <span className="text-primary">
          How to resell access cards in Mentorland
        </span>
      </p>
      <div className="w-full grid grid-cols-5 gap-3">
        {[...Array(2)].map((item, idx) => (
          <Link key={idx} href={"/student/accesscard"}>
            <AccessCard idx={idx + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
};
const CertificatedOfCompletion = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-2 bg-white shadow-md rounded-lg p-3 py-5 text-black">
      <h1 className="text-lg font-semibold">Your Certificates Of Completion</h1>
      <p>
        Once you’ve finished with these cards, you can sell them in our
        marketplace, read{" "}
        <span className="text-primary">
          How to resell access cards in Mentorland
        </span>
      </p>
      <div className="w-full grid grid-cols-5 gap-3">
        {[...Array(1)].map((item, idx) => (
          <Link
            key={idx}
            href={"/student/dashboard/wallet/completionCertificate"}
          >
            <AccessCard idx={idx + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
};
const Badges = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 bg-white shadow-md rounded-lg p-3 py-5 text-black">
      <h1 className="text-lg font-semibold">My Badges</h1>
      <div className="grid grid-cols-4 ">
        <Image src={Badge1} alt="" />
        <Image src={Badge2} alt="" />
        <Image src={Badge3} alt="" />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </div>
  );
};
const EnrichedPacks = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-2 bg-white shadow-md rounded-lg p-3 py-5 text-black">
      <h1 className="text-lg font-semibold">My Enriched Packs</h1>
      <p>
        Once you’ve finished with these cards, you can sell them in our
        marketplace, read{" "}
        <span className="text-primary">
          How to resell access cards in Mentorland
        </span>
      </p>
      <div className="w-full grid grid-cols-5 gap-3">
        {[...Array(2)].map((item, idx) => (
          <Link key={idx} href={"/student/resellAccessCard"}>
            <AccessCard idx={idx + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
};
const EventCards = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-2 bg-white shadow-md rounded-lg p-3 py-5 text-black">
      <h1 className="text-lg font-semibold">Event Cards</h1>
      <p>
        Once you’ve finished with these cards, you can sell them in our
        marketplace, read{" "}
        <span className="text-primary">
          How to resell access cards in Mentorland
        </span>
      </p>
      <div className="w-full grid grid-cols-5 gap-3">
        {[...Array(2)].map((item, idx) => (
          <AccessCard key={idx} idx={idx + 1} />
        ))}
      </div>
    </div>
  );
};

const WalletAssets = () => {
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-6">
      <AccessCards />
      <Badges />
      <EventCards />
      <EnrichedPacks />
      <CertificatedOfCompletion />
    </div>
  );
};

export default WalletAssets;
