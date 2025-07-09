export default function SortButtons({ label }) {
  return (
    <button className="flex items-center space-x-1">
      <span>{label}</span>
      <span className="text-xs">⇅</span>
    </button>
  );
}
