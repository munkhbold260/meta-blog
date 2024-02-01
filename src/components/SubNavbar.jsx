import Link from "next/link";
import { useState } from "react";
export default function SubNavbar() {
  const [color, setColor] = useState(
    "text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
  );
  return (
    <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
      <div className="justify-start items-center gap-5 flex">
        <Link
          className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
          href={"/blog/"}
        >
          All
        </Link>

        <Link
          onClick={() => {
            setColor(
              color ==
                "text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
                ? "text-orange-300 text-xs font-bold font-['Work Sans'] leading-[25px]"
                : "text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            );
          }}
          className={color}
          href={"/blog/design"}
        >
          Design
        </Link>
        <Link
          className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
          href={"/blog/travel"}
        >
          Travel
        </Link>

        <Link
          href={"/blog/fashion"}
          className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
        >
          Fashion
        </Link>
        <Link
          href={"/blog/technology"}
          className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
        >
          Technology
        </Link>
        <Link
          href={"/blog/branding"}
          className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
        >
          Branding
        </Link>
      </div>
      <Link
        href={"/blog/viewAll"}
        className="grow shrink basis-0 text-right text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
      >
        View All
      </Link>
    </div>
  );
}
