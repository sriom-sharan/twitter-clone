import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import FeedCard from "./FeedCard";

const TabComponent = ({ tab1, tab2 }: { tab1: string; tab2: string }) => {
  return (
    <div className="w-full h-full ">
      <Tabs defaultValue={tab1} className="w-full relative">
        <TabsList className="w-full justify-around  sticky top-0 backdrop-blur-sm bg-black/60 border-b-[1px] py-6 rounded-none border-white/30 ">
          <TabsTrigger className="py-2 pt-4" value={tab1}>{tab1}</TabsTrigger>
          <TabsTrigger  className="py-2 pt-4" value={tab2}>{tab2} </TabsTrigger>
        </TabsList>
        <TabsContent value={tab1}>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </TabsContent>
        <TabsContent value={tab2}>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabComponent;
