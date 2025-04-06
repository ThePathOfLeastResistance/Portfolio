import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";

export const Card = ({
  iconPath,
  children,
  childrenClassName,
  className,
  projectName,
  projectDescription,
  languages
}: {
  iconPath: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  className?: string;
  languages?: string[];
  projectName?: string;
  projectDescription?: string
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);

    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "h-70 w-80 bg-cwhite-300 rounded-lg border-cgrey-200 border-1 text-cblack-500 overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="h-full w-full p-10 my-auto scale-[1.15]">
              <div className="flex items-start flex-col">
                  <img className = "h-8 w-8 my-1" src={iconPath} alt={projectName} />
                    <h1 className="text-cblack-500 text-lg mt-2 font-bold">
                      {projectName}
                    </h1>
                    <p className="text-cblack-400 text-sm font-normal mt-2">
                      {projectDescription}
                    </p>
                    <div className="flex flex-row gap-2 mt-2 text-cgrey-500 text-xs font-normal">
                      {languages?.map((item) => (<p key={item}>{item}</p>) )}
                    </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 10,
  },
  bottom: {
    y: -10,
  },
  left: {
    x: 10,
  },
  right: {
    x: -10,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -10,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 10,
    opacity: 1,
  },
};
