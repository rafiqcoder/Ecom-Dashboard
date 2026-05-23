import React from "react";
import TrandingProduct from "./components/TrandingProduct";
import Heading from "@/components/common/Heading";

function page() {
  return (
    <div>
      <div>
        <Heading title="Tranding Products" />
      </div>
      <div>
        <TrandingProduct />
      </div>
    </div>
  );
}

export default page;
