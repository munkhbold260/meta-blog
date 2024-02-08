import TrendCard from "@/components/cards/TrendCard";
import HighlightCard from "@/components/cards/HighlightCard";
import { useState } from "react";
import Card from "@/components/cards/Card";

export default function ({ designs, highLights, trends }) {
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
      <div className="carousel">
        {highLights.map((b, index) => {
          return (
            <HighlightCard
              key={`${b.title}-${b.id}`}
              item={index}
              title={b.title}
              img_url={b.cover_image}
              tag={b.tags}
              img_url2={b.user.profile_image_90}
              user_name={b.user.name}
              date={b.created_at}
              id={b.id}
            />
          );
        })}
      </div>
      <div className="w-[1231px] h-[378px] flex flex-col gap-[30px] ">
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="w-[184px] text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
            Trending
          </div>
        </div>
        <div className=" flex gap-[30px]">
          {trends.map((c) => {
            return (
              <TrendCard
                key={`${c.title}-${c.id}`}
                title={c.title}
                img_url={c.cover_image}
                tag={c.tags}
                img_url2={c.user.profile_image_90}
                user_name={c.user.name}
                date={c.created_at}
                id={c.id}
              />
            );
          })}
        </div>
      </div>

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
  //////////
  const response = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=3`
  );
  const designs = await response.json();
  // ////////
  const response1 = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=4`
  );
  const highLights = await response1.json();
  // ///////
  const response2 = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=4`
  );
  const trends = await response2.json();
  // ///////
  return {
    props: { designs, highLights, trends },
  };
}
