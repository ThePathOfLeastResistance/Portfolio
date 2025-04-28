import { Carousel } from "../components/carousel";
import { Timeline } from "../components/ui/timeline";

import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scrollX = useTransform(scrollYProgress, [0, 0.5], [0, -5000]);

  return (
    <div className="w-full">
      <div className="transition-bg relative flex h-[80vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900 pt-45">
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={`after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]
[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)] flex `}
          ></div>
        </div>
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cblack-50 to-cblack-400 bg-opacity-50">
            Hey! I'm James Cao.
          </h1>
          <p className="mt-2 ml-2 font-normal text-cblack-400 max-w-lg">
            Building Checkment, Hackathons Canada and other Cool things
          </p>
          <p className="mt-4 ml-2 font-normal text-cblack-400 max-w-lg ">
            Currently Software Engineer building a BTB startup, and Hackathons
            Canada a community, partnering with hackathons to give hackers a
            better experince and also helping helping hackers find hackathons (I
            LOVE hackathons, lmk if you are hosting/going to any!!)
          </p>
        </div>
      </div>
      <motion.div
        style={{
          x: scrollX 
        }}
        className="lg:-mt-20 -mt-4 mb-10 flex justify-center gap-5 py-4 sm:gap-8"
      >
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] rotate-2 ">
          <img
            src="\images\cameraSliderSideView.png"
            className="absolute inset-0 object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] -rotate-2">
          <img
            src="\images\cameraSliderSideView.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] rotate-2">
          <img
            src="\images\profile.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] rotate-2">
          <img
            src="\images\profile.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] -rotate-2">
          <img
            src="\images\profile.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] rotate-2">
          <img
            src="\images\profile.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
        <div className="relative aspect-16/9 w-88 overflow-hidden flex-none rounded-lg bg-bwhite-500 shadow-[8px_10px_23px_0px_rgba(0,_0,_0,_0.3)] -rotate-2">
          <img
            src="\images\profile.png"
            className="absolute inset-0 h-full w-full lobject-cover "
            alt=""
          />
        </div>
      </motion.div>
      {/* Major Acomplishments - Hackathons, Hackathons Canada, 3d laser engraver, this website */}
      <div className="mt-10">
        <Carousel slides={slideData} />
      </div>
      <div className="mt-20 w-full">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}

<h1 className="size"> </h1>;

const slideData = [
  {
    title: "Hackathon Canada",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hack Canada",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lazwer Engraver",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "This website",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Did this
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src=""
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          did this
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Hackathons are ....
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src=""
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          did rthis
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Card grid component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Startup template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Random file upload lol
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src=""
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src=""
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="  "
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg objecth-full w-full l-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];
