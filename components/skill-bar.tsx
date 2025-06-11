"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  percentage: number
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h3 className="text-base font-medium">{skill}</h3>
        <span className="text-sm font-medium text-primary">{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
