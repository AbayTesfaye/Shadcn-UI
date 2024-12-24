'use client'
import { useSearchParams } from "next/navigation";
import MyAccordion from "./SHADCN/MyAccordion";
import MyAlert from "./SHADCN/MyAlert";
import MyAlertDialog from "./SHADCN/MyAlertDialog";

export default function Home() {
  const searchParams = useSearchParams();
  const balance = searchParams.get('balance'); // Get the 'balance' query parameter

  return (
    <div className="w-[300px] flex flex-col gap-4">
      <MyAccordion />
      {balance === '0' ? <MyAlert /> : null}
      <MyAlertDialog trigger='Open' title="Are you subscribe my channel?" content='Why always me?' />
      <MyAlertDialog trigger='Abay' title="The man behind the sceen" content='Really?' />
    </div>
  );
}
