import { Skeleton } from "@/components/ui/skeleton"

interface TestimonialsLoadingProps {
  count: number
}

export function TestimonialsLoading({ count }: TestimonialsLoadingProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md">
          <div className="relative flex flex-col items-center space-y-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-24 w-full" />
            <div className="w-full text-center">
              <Skeleton className="h-5 w-1/2 mx-auto mb-2" />
              <Skeleton className="h-4 w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
