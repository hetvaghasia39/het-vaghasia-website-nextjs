import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Tecblic from "./Descriptions/Tecblic";
import AgileInfoways from "./Descriptions/AgileInfoways";
import PragetX from "./Descriptions/PragetX";

export default function WhereIHaveWorked({ descriptionJob, setDescriptionJob }) {
  const barRef = React.useRef<HTMLDivElement>(null);

  const GetDescription = () => {
    switch (descriptionJob) {
      case "PragetX":
        return <PragetX tasks={null}/>;
      case "Tecblic":
        return <Tecblic tasks={null}/>;
      case "Agile Infoways":
        return <AgileInfoways tasks={null}/>;
    }
  };

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar descriptionJob={descriptionJob} setDescriptionJob={setDescriptionJob} />
        {/* Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = ({ descriptionJob, setDescriptionJob }) => {
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState([
    true,
    false,
    false,
  ]);

  const CompanyButton = ({ companyName, barPosition, barAbovePosition, descriptionJob, buttonOrder }) => {
    return (
      <button
        onClick={() => {
          setBarPosition(barPosition);
          setBarAbovePosition(barAbovePosition);
          setDescriptionJob(descriptionJob);
          setCompanyNameBackgroundColorGreen((prev) =>
            prev.map((_, index) => index === buttonOrder)
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[buttonOrder]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {companyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* left bar Holder */}
      <div
        className="hidden md:block bg-gray-500 relative h-0.8 w-34 md:h-[120px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            companyName="PrgateX"
            barPosition={-12}
            barAbovePosition={1}
            descriptionJob="PragetX"
            buttonOrder={0}
          />
          <CompanyButton
            companyName="Tecblic"
            barPosition={32}
            barAbovePosition={129}
            descriptionJob="Tecblic"
            buttonOrder={1}
          />
          <CompanyButton
            companyName="Agile Infoways"
            barPosition={76}
            barAbovePosition={257}
            descriptionJob="Agile Infoways"
            buttonOrder={2}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const descriptionJob = "PragetX"; // Set the default description job here

  return {
    props: {
      descriptionJob,
    },
  };
}
