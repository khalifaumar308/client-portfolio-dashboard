import HeroForm from "@/components/admin/hero-form"
import { getHero } from "@/lib/admin-actions/hero"
import Image from "next/image"
export const dynamic = "force-dynamic";

async function page() {
  const hero = await getHero()
  return (
    <div className="max-w-3xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <h1 className="text-3xl font-bold mb-2">Hero Section</h1>
      <p className="text-muted-foreground mb-6">
        This section controls the main hero banner on your homepage. Update the hero's title, heading, image, and stats below. Changes will be reflected immediately on the public site.
      </p>
      <div className="mb-8 bg-white/80 dark:bg-background/80 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        {hero.imageUrl && (
          <div className="relative w-48 h-32 md:w-64 md:h-40 flex-shrink-0 rounded-lg overflow-hidden border">
            <Image src={hero.imageUrl} alt="Hero image preview" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 space-y-2">
          <div className="text-xl font-semibold">{hero.title}</div>
          <div className="text-lg text-muted-foreground">{hero.heading}</div>
          {hero.subText && <div className="text-sm text-muted-foreground">{hero.subText}</div>}
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {hero.yearsOfExperience} yrs experience
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {hero.clientsServed} clients
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {hero.endorsements} endorsements
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {hero.partnerships} partnerships
            </span>
          </div>
          {hero.socialMediaLinks?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {hero.socialMediaLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary text-xs hover:text-primary/80"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <HeroForm hero={hero} editMode={hero.title !== 'Default Hero'} />
    </div>
  )
}

export default page