import { HeaderIcon } from "@/icons/HeaderIcon";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-[1850px] px-[350px] py-8 flex items-center justify-between ">
      <HeaderIcon />

      <div className="flex items-center gap-10">
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/blog")}>Blog</button>
        <button onClick={() => router.push("/contact")}>Contact</button>
      </div>

      <div className="flex items-center gap-3 py-2 px-4 rounded-[5px]  bg-zinc-100">
        <input
          class=" bg-zinc-100 "
          placeholder="Search"
          type="text"
          name="search"
        />
        <button>
          {" "}
          <CiSearch />
        </button>
      </div>
    </div>
  );
};
export default Header;
