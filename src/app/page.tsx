// import Image from "next/image";

import Feature from "./components/feature";
import Hero from "./components/hero";
import RecentPost from "./components/recentPost";

export default function Home() {
  return (
    <div>
      <Hero/> 
      <RecentPost/>
      <Feature/>
    </div>
  );
}
