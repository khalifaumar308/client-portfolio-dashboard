import { Skeleton } from "@/components/ui/skeleton"

interface BlogPostsLoadingProps {
  count: number
}

export function BlogPostsLoading({ count }: BlogPostsLoadingProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-background shadow-md">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="relative space-y-4 p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  )
}
