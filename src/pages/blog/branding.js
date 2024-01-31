import Link from "next/link";

export default function () {
  return (
    <div className="bg-red-200 w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <button
            onClick={() => router2.push("blog/all")}
            className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
          >
            All
          </button>

          <Link
            className="text-orange-300 text-xs font-bold font-['Work Sans'] leading-[25px]"
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
      design
    </div>
  );
}
