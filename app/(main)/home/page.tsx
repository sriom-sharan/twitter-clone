import FeedCard from "@/components/FeedCard";
import SideBar from "@/components/SideBar";
import TabComponent from "@/components/TabComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="border-x-[0.2px] w-full h-full border-white/30 bg-black">
        <TabComponent tab1="For you" tab2="Following"/>
    </div>
  );
}
