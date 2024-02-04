import TrendCard from "@/components/cards/TrendCard";
import HighlightCard from "@/components/cards/HighlightCard";
import { useState } from "react";
import Card from "@/components/cards/Card";
import Art from "@/components/Art";

export default function ({ designs }) {
  const [articles, setArticles] = useState(designs);
  const [pageNumber, setPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMoreHandler() {
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?tag=design&per_page=3&page=${pageNumber}`
    );
    const data = await response.json();
    setArticles([...articles, ...data]);
    setPageNumber(pageNumber + 1);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-[1920px] px-[352px] flex flex-col gap-[100px] mt-12 mb-20">
      <Art />
      <HighlightCard />
      <TrendCard />
      <div className="w-[1216px]  flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-[184px] text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
          All Blog Post
        </div>
        <div className="flex flex-wrap gap-5">
          {articles.map((a) => {
            return (
              <Card
                key={`${a.title}-${a.id}`}
                title={a.title}
                img_url={a.social_image}
                tag={a.tags}
                img_url2={a.user.profile_image_90}
                user_name={a.user.name}
                date={a.created_at}
                id={a.id}
              />
            );
          })}
        </div>
      </div>

      <button
        onClick={loadMoreHandler}
        className="text-zinc-500 text-base font-medium font-['Work Sans'] leading-normal   w-[123px] h-12 px-5 py-3 rounded-md border border-zinc-500 border-opacity-30 justify-center m-auto items-center gap-3 inline-flex"
      >
        Load More
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=3`
  );
  const designs = await response.json();
  return {
    props: { designs },
  };
}
