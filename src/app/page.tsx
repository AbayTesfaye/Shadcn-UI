'use client'
import { useSearchParams } from "next/navigation";
import MyAccordion from "./SHADCN/MyAccordion";
import MyAlert from "./SHADCN/MyAlert";

export default function Home() {
  const searchParams = useSearchParams();
  const balance = searchParams.get('balance'); // Get the 'balance' query parameter

  return (
    <div className="w-[300px]">
      <MyAccordion />
      {balance === '0' ? <MyAlert /> : null}
    </div>
  );
}
