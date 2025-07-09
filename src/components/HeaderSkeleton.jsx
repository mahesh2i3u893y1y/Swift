const  HeaderSkeleton =() => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 px-9 bg-[#272A4B] text-white shadow-md">
      {/* Logo  */}
      <div className="w-32 h-8 bg-gray-400/40 rounded animate-pulse"></div>

      {/* User profile shimmer */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-400/40 animate-pulse"></div>
        <div className="w-24 h-4 bg-gray-400/40 rounded animate-pulse"></div>
      </div>
    </header>
  );
}

export default HeaderSkeleton