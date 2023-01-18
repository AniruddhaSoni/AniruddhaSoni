import ResumeInfo from "./resume/ResumeInfo";
import resumeInfo from "../static/resume.json";

export default function Resume() {
  return (
    <div id="resume" className="py-24 flex w-10/12 m-auto flex-col">
      <div className="flex w-full flex-wrap items-center justify-between ">
        <h1 className="text-4xl lg:text-8xl font-extrabold text-accent">
          Resume
        </h1>
        <a
          href="/pdfs/Aniruddha_Soni.pdf"
          download
          className="btn btn-primary btn-outline"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full lg:w-8/12 m-auto">
        <h1 className="text-xl md:text-3xl font-bold text-primary my-8">
          Education
        </h1>
        <div className="w-full bg-neutral py-3 px-2 rounded-md md:flex gap-4 justify-center mb-4 text-lg">
          <div className="lg:w-3/12">
            <div className="mb-1 font-bold text-info">
              Oct, 2020 - July 2024
            </div>
            <div className="mb-1">B.Tech</div>
            <div className=" font-bold">
              Rajasthan Technical University, Kota
            </div>
          </div>
          <ul className="lg:w-8/12 md:pl-0 pl-6">
            <li className="list-disc mb-2">
              Aggregate <span className="font-bold">9.55</span> SGPA{" "}
            </li>
          </ul>
        </div>
      </div>
      {/* Experience section */}
      <div className="w-full lg:w-8/12 m-auto">
        <h1 className="text-xl md:text-3xl font-bold text-primary my-8">
          Experience
        </h1>
        {resumeInfo.map((info) => {
          if (info.type === 0) {
            return (
              <ResumeInfo
                key={info.place}
                time={info.time}
                position={info.position}
                place={info.place}
                desc={info.desc}
              />
            );
          }
        })}
      </div>
      {/* Volunteering section */}
      <div className="w-full lg:w-8/12 m-auto">
        <h1 className="text-xl md:text-3xl font-bold text-primary my-8">
          Open-Source/Communities
        </h1>
        {resumeInfo.map((info) => {
          if (info.type === 1) {
            return (
              <ResumeInfo
                key={info.place}
                time={info.time}
                position={info.position}
                place={info.place}
                desc={info.desc}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
