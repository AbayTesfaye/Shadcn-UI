'use client'
import { useSearchParams } from "next/navigation";
import MyAccordion from "./SHADCN/MyAccordion";
import MyAlert from "./SHADCN/MyAlert";
import MyAlertDialog from "./SHADCN/MyAlertDialog";
import MyAspectRatio from "./SHADCN/MyAspectRatio";
import MyAvatar from "./SHADCN/MyAvatar"; // Make sure to import MyAvatar

export default function Home() {
  const searchParams = useSearchParams();
  const balance = searchParams.get('balance'); // Get the 'balance' query parameter

  return (
    <div className="w-[300px] flex flex-col gap-4">
      <MyAccordion />
      {balance === '0' && <MyAlert />} {/* Conditionally render MyAlert */}
      <MyAlertDialog trigger='Open' title="Are you subscribed to my channel?" content={<MyAccordion />} />
      <MyAlertDialog trigger='Abay' title="The man behind the scenes" content={<MyAlert />} />
      <MyAspectRatio />
      <MyAvatar />
    </div>
  );
}
