export function BookSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-300 h-48 rounded-lg mb-3"></div>
      <div className="bg-zinc-300 h-4 rounded w-3/4 mb-2"></div>
      <div className="bg-zinc-300 h-3 rounded w-1/2"></div>
    </div>
  );
}

export function SelectedSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-300 h-64 rounded-lg"></div>
    </div>
  );
}

export function BookPageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="bg-zinc-300 h-12 rounded mb-3 w-3/4"></div>
          <div className="bg-zinc-300 h-6 rounded mb-2 w-1/2"></div>
          <div className="bg-zinc-300 h-4 rounded mb-6 w-2/3"></div>
          <div className="space-y-2 mb-6">
            <div className="bg-zinc-300 h-4 rounded w-full"></div>
            <div className="bg-zinc-300 h-4 rounded w-full"></div>
            <div className="bg-zinc-300 h-4 rounded w-3/4"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="bg-zinc-300 h-10 rounded w-24"></div>
            <div className="bg-zinc-300 h-10 rounded w-24"></div>
          </div>
        </div>
        <div>
          <div className="bg-zinc-300 h-64 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
