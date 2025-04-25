import { Highlight } from "../components/ui/highlight";
import { Card } from "../components/card.tsx";

export default function Projects() {
  return (
    <div className="bg-cwhite-400 mt-40 flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <Highlight testimonials={testimonials} />{" "}
      <div className="md:grid-cols-2 grid-cols-1 gap-8 grid">
        <Card
          projectName="CNC Router"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="A DIY laser Engraver with a 12w laser module on a plane of 60cm by 60cm: The project is based on the open-source software GRBL"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>More Info</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
        <Card
          projectName="Laser Engraver"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>{" "}
        <Card
          projectName="Camera Slider"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
        <Card
          projectName="Automous Rover"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
        <Card
          projectName="CheckMint"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
        <Card
          projectName="Expreso"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
        <Card
          projectName="Portoflio Website"
          iconPath="\icon\laserEngraver.svg"
          projectDescription="laser Engraver"
          languages={["C++", "Python"]}
        >
          <h1 className="font-bold text-xl">
            <a>Check it OUT!</a>
          </h1>
          <h1 className="font-normal text-sm">
            <a href="">Github</a>
          </h1>
        </Card>
      </div>
    </div>
  );
}

const testimonials = [
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "Laser Engraver",
    techstack: "Hardware",
    src: "/",
  },
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "CheckMint",
    techstack: "Hardware",
    src: "/",
  },
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "CNC Router",
    techstack: "Hardware",
    src: "/",
  },
];
