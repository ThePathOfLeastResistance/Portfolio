export default function About() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-full h-full mx-40 bg-cwhite-400 mt-60">
        <div className="flex flex-col justify-center w-full h-full items-start">
          <h1 className="text-5xl font-bold text-cblack-500">
            I'm James Cao. I live in Burlington, Ontario. Love Hackathons and
            building somthing cool
          </h1>
          <p className="mt-4 text-cblack-400 text-md font-normal">
            I am a high school student at nelson high school, I love playing
            badmitnion, fishing and backpacking, the farthest I have gone is
            algonquin with 74km trip, it was a terriable idea.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src="" alt="" />
          <ul className="flex flex-col items-start">
            <li>
              <a href="">
                <img src="" alt="" />
                <h3>Follow On Github</h3>
              </a>
            </li>
            <li>
              <a href="">
                <img src="" alt="" />
                <h3>Follow On X</h3>
              </a>
            </li>
            <li>
              <a href="">
                <img src="" alt="" />
                <h3>Follow On Linkedin</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
