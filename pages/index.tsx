import Head from 'next/head';
import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const descriptionJob = ""; // Define the descriptionJob variable

  return (
    <>
      <Head>
        <title>Het Vaghasia</title>
        <meta name="robots" content="follow, index" />
        <meta content="I am a Software development. Get in touch with me to know more." name="description" />
        <meta property="og:url" content={`https://hetvaghasia.xyz`} />
        <link rel="canonical" href={`https://hetvaghasia.xyz`} />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header sectionsRef={homeRef} />
        <MyName />
        <SocialMediaArround />
        <AboutMe ref={aboutRef} />
        <WhereIHaveWorked descriptionJob={descriptionJob} setDescriptionJob={null} />
        <SomethingIveBuilt />
        <GetInTouch />
        <Footer githubUrl={"https://github.com/"} hideSocialsInDesktop={true} />
      </div>
    </>
  );
}

// Add this if you need to fetch any data at build time
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}