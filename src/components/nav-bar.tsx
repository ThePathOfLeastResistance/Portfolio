import { cn } from "../lib/utils";

import { TbLayoutNavbarCollapse } from "react-icons/tb";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import { NavLink } from "react-router";


export const NavBar = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: string; href: string; isLogo: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: string; href: string; isLogo: boolean }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <NavLink
                  to={item.href}
                  key={item.title}
                  className={cn(
                    "h-7 w-16 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center",
                    ({ isActive }) =>
                      isActive
                        ? "bg-gray-200 dark:bg-neutral-800"
                        : "bg-gray-50 dark:bg-neutral-900"
                  )}
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <TbLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: string; href: string; isLogo: boolean }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isLogo,
}: {
  mouseX: MotionValue;
  title: string;
  icon: string;
  isLogo?: boolean;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  // [hovering other icons, when you hover, normal]
  // I set it to [90%, 140%, 100%]
  const widthTransform = useTransform(distance, [-150, 0, 150], [72, 112, 80]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [36, 56, 40]);

  // const textTransformIcon = useTransform(
  //   distance,
  //   [-150, 0, 150],
  //   [18, 28, 20]
  // );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // const textSize = useSpring(textTransformIcon, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // });

  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="mx-4 bg-cwhite-400 flex items-center justify-center relative rounded-lg border-2 border-gray-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 90, x: "50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-cgrey-400 border border-gray-200 text-cblack-500 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          // style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center mx-auto justify-center"
        >
          {isLogo ? (
            <img src={icon} alt="" />
          ) : (
            <motion.h1
              className="h-full w-full"
            >
              {icon}
            </motion.h1>
          )}
          {/* TODO: figure out the styling for this part */}
        {/* TODO: Add cool text animations */}
        </motion.div>
      </motion.div>
    </NavLink>
  );
}
