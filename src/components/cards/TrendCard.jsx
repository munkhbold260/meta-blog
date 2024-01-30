export default function TrendCard() {
  return (
    <div className="w-[293px] h-80 rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-[289px] h-80 bg-red-300 relative bg-opacity-40 rounded-xl"></div>
      <div className="w-[230px] h-[120px] left-[28.50px] top-[172px]  flex-col justify-start items-start gap-4 flex absolute-r">
        <div className="px-2.5 py-1 bg-indigo-500 rounded-md justify-center items-center gap-1 inline-flex">
          <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
            Technology
          </div>
        </div>
        <div className="w-[230px] h-[76px] text-black text-lg font-semibold font-['Work Sans'] leading-7">
          The Impact of Technology on the Workplace: How Technology is Changing
        </div>
      </div>
    </div>
  );
}
