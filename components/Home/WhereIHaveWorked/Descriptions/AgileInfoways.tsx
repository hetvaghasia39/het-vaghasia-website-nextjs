import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AgileInfoways(props: { tasks }) {
  const { tasks } = props;
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software Engineer<span className="text-AAsecondary"> @ Agile Infoways</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">August 2021 - November 2022</span>
        <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
          // set on click to open the website
          onClick={() => window.open("https://www.agileinfoways.com/", "_blank")}
        >
          www.agileinfoways.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
  );
}

export async function getStaticProps() {
  const tasks = [
    {
      text: "Developed multiple Backend projects using Django and DRF in which I developed and worked on backend APIs, unit testing, deployment and version control and implemented a variety of real life use-cases.",
      keywords: ["Django", "DRF", "APIs, unit testing, deployment", "version control"],
    },
    {
      text: "Developed the frontend of admin dashboard as well as website and enhanced user experience of existing flows using ReactJs and Redux.",
      keywords: ["ReactJs", "Redux"],
    },
    {
      text: "Also worked on blockchain technology in which did R&D on Smart Contracts, NFTs, Dapps and Marketplace using Cardano and Ethereum Platforms.",
      keywords: ["Veeam Endpoint Backup", "SQL Server 2012"],
    },
  ];
  return {
    props: {
      tasks
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
}