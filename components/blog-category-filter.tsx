"use client"
import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

interface Category {
  name: string
  slug: string
}

interface BlogCategoryFilterProps {
  categories: Category[]
}

export function BlogCategoryFilter({ categories }: BlogCategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (slug === "all") {
      params.delete("category")
    } else {
      params.set("category", slug)
    }

    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-end">
      {categories.map((category) => (
        <Button
          key={category.slug}
          variant={currentCategory === category.slug ? "default" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={() => handleCategoryChange(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
