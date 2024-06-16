import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PragetX() {
  const tasks = [
    {
      text: "Worked on projects in the multiple domains including ERP, CRM, E-commerce, and Other products",
      keywords: ["ERP, CRM, E-commerce, and Other products", "Python", "Django", "AWS", "Devops", "React", "PostgreSQL"],
    },
    {
      text: "Conducted test driven development to ensure website functionality and quality. Managed a large user base on applications.",
      keywords: ["quality", "Agile"],
    },
    {
      text: "Levereged my technical expertise to build intricate software applications across diverse industries.",
      keywords: ["Team lead"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with clients",
      keywords: ["Team lead", "Solution Architect"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Team Lead <span className="text-AAsecondary">@ PragetX</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.pragetx.com/", "_blank")}
          >
            www.pragetx.com
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
