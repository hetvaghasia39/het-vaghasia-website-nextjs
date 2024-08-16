import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Tecblic(props: { tasks }) {
  const { tasks } = props;

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Team Lead <span className="text-AAsecondary">@ Tecblic</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">December 2022 - October 2023</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.tecblic.com/", "_blank")}
          >
            www.tecblic.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const tasks = [
    {
      text: "As a software engineer, I create complex software solutions for a variety of sectors, such as Holiday Tours and Bike Rentals.",
      keywords: ["NFT Marketplace"],
    },
    {
      text: "Directed a team of three developers in the successful completion of a large software project, ensuring on-time delivery and quality requirements.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Built a REST API in Django with several databases such as Postgres and MySQL, and also worked on frontend technology such as React Js, displaying full-stack development expertise and experience with modern web development technologies.",
      keywords: ["REST API", "Django", "Postgres", "MySQL", "React Js"],
    },
  ];

  return {
    props: {
      tasks
    },
  };
}