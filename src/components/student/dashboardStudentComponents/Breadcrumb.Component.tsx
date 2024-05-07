import React from "react";

function Breadcrumb({ titel }: { titel: string }) {
  return <div className="text-xl text-black font-bold mt-5">{titel}</div>;
}

export default Breadcrumb;
