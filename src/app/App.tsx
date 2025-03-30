import { NavBar } from "../components/nav-bar.tsx";
// Icons
import { TbSearch } from "react-icons/tb";

import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-center h-[35rem] w-full">
        <NavBar
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
      <Outlet />
    </div>
  );
}

// This will be used for the nav bar

const links = [
  {
    title: "Home",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Components",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <TbSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
