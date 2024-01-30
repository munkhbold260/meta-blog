export default function (props) {
  console.log("ddddd", props);
  return <div>dededwdewdwefeefed</div>;
}
export async function getStaticProps() {
  const response = await fetch("https://dev.to/api/articles?per_page=5&top=2");
  const datas = await response.json();

  return { props: { articles: datas } };
}
