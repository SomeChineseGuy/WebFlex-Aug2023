"use client"

import { usePathname } from "next/navigation";
import React from "react";


const CarsId = ({params}) => {
  console.log(params);
  const pathname = usePathname();
  const path = pathname.slice('/urls/'.length)
  console.log(path);
  return (
    <div>
      <h1>Hello you are on the - {params.id}</h1>
    </div>
  )
};

export default CarsId;