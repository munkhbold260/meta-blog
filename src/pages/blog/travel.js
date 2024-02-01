import SubNavbar from "@/components/SubNavbar";
import Card from "@/components/cards/Card";

export default function Travel({ data }) {
  return (
    <div className=" w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <SubNavbar />
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-5">
          {data.map((a) => {
            return (
              <Card
                key={`${a.title}-${a.id}`}
                title={a.title}
                img_url={a.social_image}
                tag={a.tags}
                img_url2={a.user.profile_image_90}
                user_name={a.user.name}
                date={a.created_at}
              />
            );
          })}
        </div>

        <button className="text-zinc-500 text-base font-medium font-['Work Sans'] leading-normal   w-[123px] h-12 px-5 py-3 rounded-md border border-zinc-500 border-opacity-30 justify-center m-auto items-center gap-3 inline-flex">
          Load More
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://dev.to/api/articles?page=2&per_page=3&tag=travel"
  );
  const data = await response.json();
  return { props: { data } };
}
