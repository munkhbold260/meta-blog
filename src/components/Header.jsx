import { HeaderIcon } from "@/icons/HeaderIcon";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="px-[350px] py-8 flex items-center justify-between bg-green-200 ">
      <HeaderIcon />

      <div className="flex items-center gap-10">
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/blog")}>Blog</button>
        <button onClick={() => router.push("/contact")}>Contact</button>
      </div>
      <div className="flex items-center">
        <input
          class=" py-2 px-4  bg-red-200"
          placeholder="Search"
          type="text"
          name="search"
        />
      </div>
    </div>
  );
};
export default Header;
