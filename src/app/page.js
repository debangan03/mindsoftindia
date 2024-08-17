import Slider from "./Components/Slider/Slider";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GiTrophyCup, GiNotebook } from "react-icons/gi";
import { MdQueryStats } from "react-icons/md";
import About from "./Components/About/About";
import CoreValues from "./Components/About/CoreValues";
import WeAreHere from "./Components/About/WeAreHere";
import UnderConstruction from "./Components/UnderConstruction";
import Advcount from "./Components/Advertisement/Advcount";
import CustomerFirstSection from "./Components/CustomerFirstSection/CustomerFirstSection";
export default function Home() {
  const maintinanmode = true;
  return (
    <>
      {/* {maintinanmode &&<UnderConstruction/>} */}
      <main className="min-h-screen w-screen ">
        <Slider />
        <div className="justify-items-center p-10 lg:mx-28 mx-4 items-center -mt-20 drop-shadow-lg bg-zinc-50 rounded grid lg:grid-cols-4 grid-flow-row z-40">
          <div className="p-6 flex flex-col space-y-4 h-full lg:border-r border-zinc-600">
            <TbBrandGoogleAnalytics className="size-10 text-blue-500 shake-on-hover" />
            <h2 className="text-xl font-semibold">Executive Search</h2>
            <p>
              All-inclusive strategy and unique sourcing methodology to simplify
              executive search and select process for corporates.
            </p>
          </div>
          <div className="p-6 flex flex-col space-y-4 h-full lg:border-r border-zinc-600">
            <GiTrophyCup className="size-10 text-blue-500 shake-on-hover" />
            <h2 className="text-xl font-semibold">Staffing Services</h2>
            <p>
              Effective permanent and temporary staffing services to make things
              easier, faster and at scale for your business.
            </p>
          </div>
          <div className="p-6 flex flex-col space-y-4 h-full lg:border-r border-zinc-600">
            <GiNotebook className="size-10 text-blue-500 shake-on-hover" />
            <h2 className="text-xl font-semibold">
              Recruitment Process Outsourcing (RPO)
            </h2>
            <p>
              Let us take the responsibility to find the suitable talent
              acquisition for you while making you free to focus on your long
              term corporate goals.
            </p>
          </div>
          <div className="p-6 flex flex-col space-y-4 h-full">
            <MdQueryStats className="size-10 text-blue-500 shake-on-hover" />
            <h2 className="text-xl font-semibold">Training & Development</h2>
            <p>
              Maximise the forte of your people by introducing them to the most
              advanced skills in the market.
            </p>
          </div>
        </div>

        <About />
        <CoreValues />
        <Advcount />
        <WeAreHere />
        <CustomerFirstSection />
      </main>
    </>
  );
}
