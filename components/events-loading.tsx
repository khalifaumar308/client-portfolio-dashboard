import { Skeleton } from "@/components/ui/skeleton"

interface EventsLoadingProps {
  count: number
}

export function EventsLoading({ count }: EventsLoadingProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-background shadow-md">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="relative space-y-4 p-6">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
