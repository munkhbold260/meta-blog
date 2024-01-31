import SubNavbar from "@/components/SubNavbar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Technology() {
  return (
    <div className="bg-red-200 w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <SubNavbar />
      Technology
    </div>
  );
}
