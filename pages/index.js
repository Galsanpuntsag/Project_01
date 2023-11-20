import Image from "next/image";
import { Inter } from "next/font/google";
import CardItems from "@/components/CardItems";
import Figure from "@/components/Chart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Login/> */}

      <div clasName="bg-slate-200 flex flex-col justify-center ">
        <CardItems />
        <Figure />
      </div>
    </main>
  );
}
