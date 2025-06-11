import { Skeleton } from "@/components/ui/skeleton"

interface PopularTopicsLoadingProps {
  count: number
}

export function PopularTopicsLoading({ count }: PopularTopicsLoadingProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md">
          <div className="relative space-y-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  )
}
