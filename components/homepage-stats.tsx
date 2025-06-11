import { getStats } from "@/lib/api"
import { StatCard } from "@/components/stat-card"

export async function HomepageStats() {
  const stats = await getStats()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat) => (
        <StatCard key={stat.id} value={stat.value} label={stat.label} />
      ))}
    </div>
  )
}
