import ResumeInfo from "./resume/ResumeInfo";

export default function Resume() {
  return (
    <div className="py-24 flex w-10/12 m-auto flex-col">
      <div className="flex w-full flex-wrap items-center justify-between ">
        <h1 className="text-4xl lg:text-8xl font-extrabold text-accent">
          Resume
        </h1>
        <a href="" className="btn btn-primary btn-outline">
          Download Resume
        </a>
      </div>
      <div className="w-full lg:w-8/12 m-auto">
        <h1 className="text-xl md:text-3xl font-bold text-primary my-8">
          Experience
        </h1>
        <ResumeInfo />
      </div>
    </div>
  );
}
