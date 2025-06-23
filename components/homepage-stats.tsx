import { getStats } from "@/lib/api"
import { StatCard } from "@/components/stat-card"
import { getHero } from "@/lib/admin-actions/hero"

export async function HomepageStats() {
  const hero = await getHero()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      <StatCard value={`${hero.yearsOfExperience}+`} label={'Years Experience'} />
      <StatCard value={`${hero.clientsServed}+`} label={'Clients Served'} />
      <StatCard value={`${hero.endorsements}+`} label={'Endorsements'} />
      <StatCard value={`${hero.partnerships}+`} label={'Partnerships'} />
    </div>
  )
}
