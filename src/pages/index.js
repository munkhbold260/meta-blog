import Image from "next/image";
import { Inter } from "next/font/google";
import MetaBlog from "./metaBlog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <MetaBlog />;
}
