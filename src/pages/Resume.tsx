export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex mt-50 mb-30 w-3/5 h-screen">
        <iframe
          src="\resume.pdf#toolbar=0&height=100vh"
          style={{border:"none"}}
          width="100%"
          title="James Cao's Resume"

        ></iframe>
      </div>
    </div>
  );
}
