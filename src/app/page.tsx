'use client'
import { useSearchParams } from "next/navigation";
import MyAccordion from "./SHADCN/MyAccordion";
import MyAlert from "./SHADCN/MyAlert";
import MyAlertDialog from "./SHADCN/MyAlertDialog";
import MyAspectRatio from "./SHADCN/MyAspectRatio";
import MyAvatar from "./SHADCN/MyAvatar"; // Make sure to import MyAvatar
import MyBadge from "./SHADCN/MyBadge";
import MyBreadCrumb from "./SHADCN/MyBreadCrumb";
import MyButton from "./SHADCN/MyButton";
import MyCalendar from "./SHADCN/MyCalendar";
import MyCard from "./SHADCN/MyCard";
import MyCarousle from "./SHADCN/MyCarousle";

export default function Home() {
  const searchParams = useSearchParams();
  const balance = searchParams.get('balance'); // Get the 'balance' query parameter

  return (
    <div className="w-[250px] flex flex-col gap-4">
      <MyAccordion />
      {balance === '0' && <MyAlert />} {/* Conditionally render MyAlert */}
      <MyAlertDialog trigger='Open' title="Are you subscribed to my channel?" content={<MyAccordion />} />
      <MyAlertDialog trigger='Abay' title="The man behind the scenes" content={<MyAlert />} />
      <MyAspectRatio />
      <MyAvatar />
      <MyBadge variant="destructive" title="Badge1" />
      <MyBadge variant="secondary" title="Badge2" />
      <MyBreadCrumb />
      <MyButton title="Click me" variant="primary" />
      <MyButton title="Click here" variant="destructive" />
      <MyCalendar />
      <MyCard />
      <MyCarousle />
    </div>
  );
}
