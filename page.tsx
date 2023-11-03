'use client';

import { useSearchParams } from "next/navigation";

export default function Page() {
  let searchParams = useSearchParams();
  console.log(searchParams);
  return <div>TEST</div>;

}
