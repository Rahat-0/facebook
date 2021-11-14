import React from "react";
import PostText from "./PostText";
import StatusCard from "./StatusCard";
import StoryCard from "./StoryCard";
import data from "../../data/people.json";
function Center() {
  const text = data[0].post.text;
  const image = data[0].post.image;
  const avater = data[0].avater;
  return (
    <div className=" h-full text-white flex-col flex justify-center lg:w-9/12 w-full xl:w-full items-center">
      <StoryCard />
      <StatusCard />
      <PostText text={text} dp={avater} />

      <PostText img={image} text={text} />
      
    </div>
  );
}

export default Center;
