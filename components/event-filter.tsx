"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Option {
  name: string
  value: string
}

interface EventFilterProps {
  label: string
  options: Option[]
}

export function EventFilter({ label, options }: EventFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paramName = label.toLowerCase()
  const currentValue = searchParams.get(paramName) || "all"
  const [value, setValue] = useState(currentValue)

  const handleValueChange = (newValue: string) => {
    setValue(newValue)

    const params = new URLSearchParams(searchParams.toString())

    if (newValue === "all") {
      params.delete(paramName)
    } else {
      params.set(paramName, newValue)
    }

    router.push(`/events?${params.toString()}`)
  }

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Filter by ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
