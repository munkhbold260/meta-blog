import Card from "@/components/cards/Card";

const Blog = (props) => {
  const { blogs, blogDetail } = props;
  console.log("detail", blogDetail);

  return (
    <div className="w-[1920px] px-[352px] flex flex-col gap-12 mt-12 mb-20">
      <div className="w-[1216px] h-7 text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7">
        All Blog Post
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
