import Header from "@/components/commonComponents/Header.Component";
import SelectmentorComponent from "@/components/student/mentorselection/Selectmentor.Component";
import React from "react";

function mentorselection() {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <SelectmentorComponent />
    </div>
  );
}

export default mentorselection;
