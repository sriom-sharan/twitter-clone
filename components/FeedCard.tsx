import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart,CiBookmark } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { MdEqualizer } from "react-icons/md";

const FeedCard = () => {
  return (
    <div className="border-b-[0.2px]  transition-all border-white/20 p-4 ">
      <div className=" grid grid-cols-12">
        <div className="col-span-1 ">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="avatar"
            src={
              "https://static.vecteezy.com/system/resources/previews/006/487/917/non_2x/man-avatar-icon-free-vector.jpg"
            }
          />
        </div>
        <div className="col-span-11">
          <h5 className="font-semibold">Sriom Sharan <span className="font-[40] text-sm text-white/40">@sriom-sharan</span></h5>
          <p className="text-sm mt-0.5">
            Discover how Affinidi’s tech stack, centred on scalability and
            trust, is accelerating innovation. With user consent as our
            cornerstone, redefine how you manage data and identity to create
            seamless experiences.
          </p>
        <div className="flex justify-between mt-4 text-white/40">
            <div className="flex items-center gap-1 hover:bg-zinc-800">
                <FaRegComment/>
                <span className="text-sm text-white/30">1k</span>
            </div>
            <div className="flex items-center gap-1">
                <BiRepost size={22}/>
                <span className="text-sm text-white/30">1k</span>
            </div >
            <div className="flex items-center gap-1">
                <CiHeart size={22}/>
                <span className="text-sm text-white/30">1k</span>
            </div>
            <div className="flex items-center gap-1">
                <MdEqualizer size={22}/>
                <span className="text-sm text-white/30">1k</span>
            </div>
            <div className="flex gap-4 items-center">
                <CiBookmark size={18}/>
                <RiShare2Line size={18}/>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
