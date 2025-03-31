import { Highlight } from "../components/ui/highlight";
import { Card } from "../components/card";

export default function Projects() {
  return (
    <div>
      <Highlight testimonials={testimonials} />{" "}
      <div className="grid-cols-3 gap-4 grid">
        <Card />
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
