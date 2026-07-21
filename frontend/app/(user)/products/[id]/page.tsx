import { viewProductApi } from "@/apis/products/viewProduct";
import React from "react";

async function page({ params }: { params: { id: string } }) {

  const {id} = await params;
  

  const product = await viewProductApi(id);
  console.log(product)


  return <div>page</div>;
}

export default page;