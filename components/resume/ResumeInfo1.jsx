export default function ResumeInfo1(props) {
  return (
    <div className="w-full bg-neutral py-3 px-2 rounded-md md:flex gap-4 justify-center mb-4 text-lg">
      <ul className="lg:w-10/12 md:pl-0 pl-6 list-disc">
        <li>{props.item}</li>
      </ul>
    </div>
  );
}
