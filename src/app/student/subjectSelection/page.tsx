import Header from "@/components/Header";
import SelectSubjectComponent from "@/components/student/subjectSelection/SelectSubject.Component";
import React from "react";

function subjectSelection() {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <SelectSubjectComponent />
    </div>
  );
}

export default subjectSelection;
