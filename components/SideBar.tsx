"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { SlPlus } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
  redirect: string;
}
const SidebarButtons: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
    redirect: "/home",
  },
  {
    title: "Explore",
    icon: <IoSearchOutline />,
    redirect: "/",
  },
  {
    title: "Notifications",
    icon: <IoIosNotificationsOutline />,
    redirect: "/",
  },
  {
    title: "Messages",
    icon: <CiMail />,
    redirect: "/",
  },
  {
    title: "Communities",
    icon: <MdPeopleOutline />,
    redirect: "/",
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
    redirect: "/",
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
    redirect: "/",
  },
  {
    title: "More",
    icon: <CiCircleMore />,
    redirect: "/",
  },
];

const SideBar = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col fixed top-5">
      <span className="size-fit rounded-full p-2 flex items-center hover:bg-zinc-800 justify-center ">
        <FaXTwitter size={30} />
      </span>

      {SidebarButtons.map((data) => {
        return (
          <span
            onClick={() => router.push(data.redirect)}
            key={data.title}
            className=" flex hover:bg-zinc-800 duration-200 rounded-full max-w-min  p-3 pr-8 gap-4 items-center font-medium "
          >
            <span className="text-[28px]">{data.icon} </span>
            <span className="text-xl lg:block hidden"> {data.title}</span>
          </span>
        );
      })}
      <button className="bg-blue-500 p-3 mt-4 lg:w-full w-16 rounded-full text-white font-semibold">
      <SlPlus size={20} className="lg:hidden mx-auto"/>        
      <span className="lg:block hidden">Post</span>
      </button>
    </div>
  );
};

export default SideBar;
