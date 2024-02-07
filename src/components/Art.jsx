import { useState, useEffect } from "react";

export default function Art() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getBackEndData() {
      const res = await fetch("http://localhost:5000/api/carousel");
      const article = await res.json();
      setData(article);
    }

    getBackEndData();
  }, []);

  return (
    <div className="flex flex-col">
      {data?.[0].id}

      <p>hihi</p>
    </div>
  );
}
