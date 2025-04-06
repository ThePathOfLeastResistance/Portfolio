import { Highlight } from "../components/ui/highlight";
import { Card } from "../components/card.tsx";

export default function Projects() {
  return (
    <div>
      <Highlight testimonials={testimonials} />{" "}
      <div className="grid-cols-3 gap-4 grid">
        <Card projectName="Lazer Engraver" iconPath="/images/lazer.png" projectDescription="Lazer Engraver" languages={["C++", "Python"]}>
          <h1 className="font-bold text-xl"><a>Check it OUT!</a></h1>
          <h1 className="font-normal text-sm"><a href="">Github</a></h1>
        </Card>
      </div>
    </div>
  );
}

const testimonials = [
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "Lazer Engraver",
    techstack: "Hardware",
    src: "/",
  },
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "Lazer Engraver",
    techstack: "Hardware",
    src: "/",
  },
  {
    description:
      "This project has been a game-changer for our team. The user interface is intuitive and the performance is top-notch.",
    project: "Lazer Engraver",
    techstack: "Hardware",
    src: "/",
  },
];
