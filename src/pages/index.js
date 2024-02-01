import TrendCard from "@/components/cards/TrendCard";
import HighlightCard from "@/components/cards/HighlightCard";

export default function () {
  return (
    <div className="w-[1920px] px-[352px] flex flex-col gap-[100px] mt-12 mb-20">
      <HighlightCard />
      <TrendCard />
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://dev.to/api/articles?per_page=5&top=2");
  const datas = await response.json();

  return { props: { datas } };
}
