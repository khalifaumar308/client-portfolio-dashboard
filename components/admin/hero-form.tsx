"use client"
import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createHero } from "@/lib/admin-actions/hero"
import UploadImage from "./UploadImage"
import Image from "next/image"
import { IHero } from "@/components/types"
import { Facebook, Linkedin, Twitter, Instagram, Globe, Youtube } from "lucide-react"

const socialOptions = [
  { platform: "Facebook", icon: <Facebook className="w-5 h-5" /> },
  { platform: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
  { platform: "X", icon: <Twitter className="w-5 h-5" /> },
  { platform: "Instagram", icon: <Instagram className="w-5 h-5" /> },
  { platform: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  { platform: "Website", icon: <Globe className="w-5 h-5" /> },
]

interface HeroFormProps {
  hero?: IHero
  editMode?: boolean
}

const defaultHero: IHero = {
  title: "",
  heading: "",
  imageUrl: "",
  subText: "",
  yearsOfExperience: 0,
  clientsServed: 0,
  endorsements: 0,
  partnerships: 0,
  socialMediaLinks: [],
}

const HeroForm = ({ hero, editMode }: HeroFormProps) => {
  const [state, formAction, pending] = useActionState(createHero, null)
  const [imageUrl, setImageUrl] = useState(hero?.imageUrl || "")
  const [finalHero, setFinalHero] = useState<IHero>(hero || { ...defaultHero })
  // State for displaying errors from server action
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (state && typeof state === "object" && "error" in state && state.error) {
      setError(state.error)
    } else {
      setError("")
    }
  }, [state])

  // Social links helpers
  const handleSocialChange = (idx: number, field: "platform" | "url", value: string) => {
    const updated = [...finalHero.socialMediaLinks]
    updated[idx] = { ...updated[idx], [field]: value }
    setFinalHero({ ...finalHero, socialMediaLinks: updated })
  }
  const addSocial = () => setFinalHero({
    ...finalHero,
    socialMediaLinks: [...finalHero.socialMediaLinks, { platform: "Facebook", url: "" }]
  })
  const removeSocial = (idx: number) => setFinalHero({ ...finalHero, socialMediaLinks: finalHero.socialMediaLinks.filter((_, i) => i !== idx) })

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold">Title <span className="text-destructive">*</span></Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter hero title"
                  value={finalHero.title}
                  onChange={e => setFinalHero({ ...finalHero, title: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="heading" className="font-semibold">Heading <span className="text-destructive">*</span></Label>
                <Input
                  id="heading"
                  name="heading"
                  placeholder="Enter hero heading"
                  value={finalHero.heading}
                  onChange={e => setFinalHero({ ...finalHero, heading: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subText" className="font-semibold">Subtext</Label>
                <Textarea
                  id="subText"
                  name="subText"
                  placeholder="Enter a short subtext"
                  value={finalHero.subText}
                  onChange={e => setFinalHero({ ...finalHero, subText: e.target.value })}
                  className="min-h-[80px] rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="yearsOfExperience" className="font-semibold">Years of Experience</Label>
                  <Input
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="number"
                    min={0}
                    value={finalHero.yearsOfExperience}
                    onChange={e => setFinalHero({ ...finalHero, yearsOfExperience: Number(e.target.value) })}
                    className="rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="clientsServed" className="font-semibold">Clients Served</Label>
                  <Input
                    id="clientsServed"
                    name="clientsServed"
                    type="number"
                    min={0}
                    value={finalHero.clientsServed}
                    onChange={e => setFinalHero({ ...finalHero, clientsServed: Number(e.target.value) })}
                    className="rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endorsements" className="font-semibold">Endorsements</Label>
                  <Input
                    id="endorsements"
                    name="endorsements"
                    type="number"
                    min={0}
                    value={finalHero.endorsements}
                    onChange={e => setFinalHero({ ...finalHero, endorsements: Number(e.target.value) })}
                    className="rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="partnerships" className="font-semibold">Partnerships</Label>
                  <Input
                    id="partnerships"
                    name="partnerships"
                    type="number"
                    min={0}
                    value={finalHero.partnerships}
                    onChange={e => setFinalHero({ ...finalHero, partnerships: Number(e.target.value) })}
                    className="rounded-lg"
                  />
                </div>
              </div>
              {/* Social Media Links */}
              <div className="grid gap-2">
                <Label className="font-semibold">Social Media Links</Label>
                {finalHero.socialMediaLinks.map((link, idx) => (
                  <div key={idx} className="flex gap-2 mb-2 items-center">
                    <div className="flex gap-1">
                      {socialOptions.map(option => (
                        <Button
                          key={option.platform}
                          type="button"
                          size="icon"
                          variant={link.platform === option.platform ? "default" : "outline"}
                          className="rounded-full"
                          onClick={() => handleSocialChange(idx, "platform", option.platform)}
                          aria-label={option.platform}
                        >
                          {option.icon}
                        </Button>
                      ))}
                    </div>
                    <Input
                      placeholder="URL"
                      value={link.url}
                      onChange={e => handleSocialChange(idx, "url", e.target.value)}
                      className="rounded-lg flex-1"
                    />
                    <Button type="button" variant="destructive" size="icon" onClick={() => removeSocial(idx)}>
                      &times;
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addSocial} className="rounded-full w-fit mt-1">+ Add Social Link</Button>
              </div>
              {/* Hero Image */}
              <div className="grid gap-2">
                <Label className="font-semibold">Hero Image</Label>
                <UploadImage onUpload={setImageUrl} />
                {imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border mt-2">
                    <Image src={imageUrl} alt="Hero image" fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
            {error && <div className="text-sm font-medium text-destructive mt-4">{error}</div>}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button type="submit" className="w-full rounded-full" disabled={pending}>
                {!editMode ? (pending ? "Creating..." : "Create Hero") : (pending ? "Updating..." : "Update Hero")}
              </Button>
            </div>
            <input type="hidden" name="hero" value={JSON.stringify({ ...finalHero, imageUrl })} />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default HeroForm