import { useRouter } from "next/router";
import Link from "next/link";
import CardDesign from "@/components/cards/CardDesign";

export default function Design() {
  const router2 = useRouter();
  return (
    <div className="bg-red-200 w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <Link
            href={"blog/all"}
            className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
          >
            All
          </Link>

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
      <CardDesign />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const blog1 = await fetch("https://dev.to/api/articles");
  const blogs1 = await blog1.json();
  // Pass data to the page via props
  return { props: { blogs1 } };
}
