export default function Testimonial(params) {
  return (
    <div className="w-full font-black text-center py-4 flex items-center justify-center text-secondary">
      <span className="text-5xl">
        {/* “Opportunities don&apos;t happen. You create them.” */}
        {params.testimonial}
      </span>
    </div>
  );
}
