"use client";

import { useParams } from "next/navigation";

function ViewOrder() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default ViewOrder;
