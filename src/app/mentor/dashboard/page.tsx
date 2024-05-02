import GeneralDashboard from "@/components/mentor/dashboardMentorComponents/dashboard/generalDashboard";
import React from "react";
import MentorDashboardLayout from "@/components/Layouts/mentorDashboardLayout";

function generateTimeIntervals(startHour: any, numberOfIntervals: any) {
    const timeIntervals = [];
  
    for (let i = 0; i < numberOfIntervals; i++) {
      const currentHour = (startHour + i) % 24;
      const formattedHour = currentHour.toString().padStart(2, "0");
  
      const timeString = `${formattedHour}:00`;
  
      timeIntervals.push(timeString);
    }
  
    return timeIntervals;
  }
  
  const startHour = 9; // Start from 09:00
  const numberOfIntervals = 8; // Generate 5 intervals (09:00, 10:00, 11:00, 12:00, 13:00)
  
  const timeIntervals = generateTimeIntervals(startHour, numberOfIntervals);


function page() {
  return (
    // <Dashbaord />
    <MentorDashboardLayout showSidebar={true}>
        <GeneralDashboard timeIntervals={timeIntervals} />
    </MentorDashboardLayout>
  );
}

export default page;
