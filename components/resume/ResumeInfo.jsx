export default function ResumeInfo(props) {
  return (
    <div className="w-full bg-neutral py-3 px-2 rounded-md md:flex gap-4 justify-center mb-4 text-lg">
      <div className="lg:w-3/12">
        <div className="mb-1 font-bold text-info">
          {props.time.from} - {props.time.to}
        </div>
        <div className="mb-1">{props.position.toUpperCase()}</div>
        <div className=" font-bold">{props.place}</div>
      </div>
      <ul className="lg:w-8/12 md:pl-0 pl-6">
        {props.desc.map((point) => {
          return (
            <li key={point} className="list-disc mb-2">
              {point}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
