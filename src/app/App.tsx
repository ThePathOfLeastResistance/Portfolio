import { NavBar } from "../components/nav-bar.tsx";
// Icons
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-background-500">
      <div className="fixed top-0 z-20 flex items-center justify-center mt-20 w-full">
        <NavBar
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
      <Outlet />
    </div>
  );
}

// TODO: figure out a cool hero section 
// TODO: Make it so that the person can choose between different colors shcemes
// This will be used for the nav bar
// TODO: Add a prop to chnage between a navlink and a normal a tag for the github link
// TODO: Change the size of the nav bars to be bigger with more space
const links = [
  {
    title: "Home",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Home</h1>
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >About</h1>
    ),
    href: "/about",
  },
  {
    title: "Projects",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Projects</h1>
    ),
    href: "/projects",
  },
  {
    title: "Resume",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Resume</h1>
    ),
    href: "/resume",
  },
  {
    title: "Other",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Other</h1>
    ),
    href: "/other",
  },
  {
    title: "Other",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Other</h1>
    ),
    href: "/other",
  },
  {
    title: "GitHub Repos",
    icon: (
      <h1 className="h-full w-full text-neutral-500 dark:text-neutral-300" >Star</h1>
    ),
    href: "#",
  },
];
// TODO:Change the h1 tag to a icon of the github start 