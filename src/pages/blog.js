import Card from "@/components/cards/Card";

const Blog = (props) => {
  const { blogs, blogDetail } = props;
  console.log("detail", blogDetail);

  return (
    <div>
      <h1>All Blog Post</h1>

      {blogs.map((blog) => (
        <Card blog={blog} blogDetail={blogDetail} />
      ))}
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
