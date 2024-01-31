import Card from "@/components/cards/Card";
import { useRouter } from "next/router";

const Blog = (props) => {
  const router = useRouter();
  const { blogs, blogDetail } = props;
  console.log("detail", blogDetail);

  return (
    <div className="w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <div className="w-[1216px] h-[85px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-[184px] text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
          All Blog Post
        </div>
        <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
          <div className="justify-start items-center gap-5 flex">
            <button
              onClick={() => router.push("blog/all")}
              className="text-orange-300 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              All
            </button>
            <button
              onClick={() => router.push("blog/design")}
              className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              Design
            </button>
            <button
              onClick={() => router.push("blog/travel")}
              className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              Travel
            </button>
            <button
              onClick={() => router.push("blog/fashion")}
              className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              Fashion
            </button>
            <button
              onClick={() => router.push("blog/technology")}
              className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              Technology
            </button>
            <button
              onClick={() => router.push("blog/branding")}
              className="text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              Branding
            </button>
          </div>
          <button
            onClick={() => router.push("blog/viewAll")}
            className="grow shrink basis-0 text-right text-zinc-600 text-xs font-bold font-['Work Sans'] leading-[25px]"
          >
            View All
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-5">
          {blogs.map((blog) => (
            <Card blog={blog} blogDetail={blogDetail} />
          ))}
        </div>

        <button className="text-zinc-500 text-base font-medium font-['Work Sans'] leading-normal   w-[123px] h-12 px-5 py-3 rounded-md border border-zinc-500 border-opacity-30 justify-center m-auto items-center gap-3 inline-flex">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const blog = await fetch("https://dev.to/api/articles?page=2&per_page=15");
  const blogs = await blog.json();

  // const path = blogs[0].path;
  // const blogDetails = await fetch(`https://dev.to/api/articles${path}`);
  // const blogDetail = await blogDetails.json();

  return { props: { blogs } };
}
