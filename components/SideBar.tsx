import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarButtons: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
  },
  {
    title: "Explore",
    icon: <IoSearchOutline />,
  },
  {
    title: "Notifications",
    icon: <IoIosNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Communities",
    icon: <MdPeopleOutline />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

const SideBar = () => {
  return (
    <>
      <span className="size-fit rounded-full p-2 flex items-center hover:bg-zinc-800 justify-center ">
        <FaXTwitter size={30} />
      </span>

      {SidebarButtons.map((data) => {
        return (
          <span
            key={data.title}
            className=" flex hover:bg-zinc-800 duration-200 rounded-full max-w-min  p-3 pr-8 gap-4 items-center font-medium "
          >
            <span className="text-[28px]">{data.icon} </span>
            <span className="text-xl"> {data.title}</span>
          </span>
        );
      })}
      <button className="bg-blue-500 p-3 mt-4 rounded-full font-semibold">
        Post
      </button>
    </>
  );
};

export default SideBar;
