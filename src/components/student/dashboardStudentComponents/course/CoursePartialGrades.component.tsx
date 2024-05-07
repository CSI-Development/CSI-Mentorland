"use client";
import React from "react";

interface TableData {
  name: string;
  dateDelivered: string;
  dateMarked: string | null;
  grade: number | null;
}

const tableData: TableData[] = [
  {
    name: "Molderti Minthyret",
    dateDelivered: "03/15",
    dateMarked: null,
    grade: null,
  },
  {
    name: "Molderti Minthyret",
    dateDelivered: "03/15",
    dateMarked: "03/15",
    grade: 87,
  },
  {
    name: "Molderti Minthyret",
    dateDelivered: "03/15",
    dateMarked: "03/15",
    grade: 87,
  },
  {
    name: "Molderti Minthyret",
    dateDelivered: "03/15",
    dateMarked: "03/15",
    grade: 87,
  },
  {
    name: "Molderti Minthyret",
    dateDelivered: "03/15",
    dateMarked: "03/15",
    grade: 87,
  },
];

const CoursePartialGrades = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">Partial Grades</h1>
      </div>
      <div className="w-full">
        <table className="w-full mt-3 border-separate border-spacing-y-3">
          <thead className="text-xs  text-gray-600 font-semibold">
            <th className="text-start">TEST NAME</th>
            <th className="text-center"> DATE DELIVERED</th>
            <th className="text-center"> DATE MARKED</th>
            <th className="text-end">GRADE</th>
          </thead>
          <tbody>
            {tableData.map((item, idx) => {
              return (
                <tr key={idx} className="text-sm">
                  <td>{item.name}</td>
                  <td className="text-center">{item.dateDelivered}</td>
                  <td className="text-center">
                    {item.dateMarked ?? (
                      <div className="text-red-400 font-thin">
                        Needs Grading
                      </div>
                    )}
                  </td>
                  <td className="text-end">
                    {item.grade ? `${item.grade}%` : "-----"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
      </div>
      <div className="w-full flex flex-col gap-2 mt-2 mb-3">
        <h1 className="text-sm font-semibold text-gray-600">QUIZZES</h1>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-md font-thin">Overall Grades On Quizzes</h1>
          <h1 className="text-green-500 font-semibold text-md">82%</h1>
        </div>
      </div>
    </div>
  );
};

export default CoursePartialGrades;
