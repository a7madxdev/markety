import InputField from "@/components/InputField";
import { Search } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <header>
        <h2 className="text-lg font-semibold">Products</h2>
        <InputField Icon={Search} placeholder="Search in products" />
      </header>
    </>
  );
}

export default page;
