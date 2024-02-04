import SubNavbar from "@/components/SubNavbar";

export default function All() {
  return (
    <div className=" w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
        <div className="justify-start items-center gap-5 flex menu menu-horizontal">
          <li className="text-orange-300 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/"}>All</a>
          </li>
          <li className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/design"}>Design</a>
          </li>
          <li className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/travel"}>Travel</a>
          </li>
          <li className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/fashion"}>Fashion</a>
          </li>
          <li className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/technology"}>Technology</a>
          </li>
          <li className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
            <a href={"/blog/branding"}>Branding</a>
          </li>
        </div>
        <li className="grow shrink basis-0 text-right text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]">
          <a href={"/blog/viewAll"}>View All</a>
        </li>
      </div>
    </div>
  );
}
