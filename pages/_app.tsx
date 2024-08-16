import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import AppContext from "../components/AppContextFolder/AppContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const sharedState = {
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: null,
      windowSizeTracker: null,
      mousePositionTracker: null,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  };

  const router = useRouter();

  useEffect(() => {
    // Fetch data here using Next.js data fetching methods like getStaticProps or getServerSideProps
    // Update the sharedState with the fetched data
    // Example:
    // const fetchedData = await fetch("https://api.example.com/data");
    // sharedState.data = fetchedData;

    // Set finishedLoading to true once the data is fetched
    sharedState.finishedLoading = true;
  }, []);

  return (
    <AppContext.Provider value={{ sharedState }}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;
