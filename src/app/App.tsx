import { NavBar } from "../components/nav-bar.tsx";
// Icons
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-cwhite-400">
      <div className="fixed top-0 z-90 flex items-center justify-center mt-7 w-full">
        <NavBar
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
    title: "Check out my House :)",
    icon: "Home",
    isLogo: false,
    href: "/",
  },

  {
    title: "Who is James Cao?",
    icon: "About",
    isLogo: false,
    href: "/about",
  },
  {
    title: "Wow, I am so cool",
    icon: "Projects",
    isLogo: false,
     href: "/projects",
  },
  {
    title: "Resume",
    icon: "Resume",
    isLogo: false,
    href: "/resume",
  },
  {
    title: "Other",
    icon: "Tools",
    isLogo: false, 
    href: "/other",
  },
  {
    title: "Other",
    icon: "Other",
   isLogo: false, 
    href: "/other",
  },
  {
    title: "GitHub Repos",
    icon: "Star",
    isLogo: true, 
    href: "#",
  },
];
// TODO:Change the h1 tag to a icon of the github start
