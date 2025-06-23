import { ExperienceForm } from "@/components/admin/experience-form";
import { Button } from "@/components/ui/button";
import { getExperienceById } from "@/lib/admin-actions/experience";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type EditServicePageProps = {
  params: {
    id: string; // The ID of the service to edit
  };
};

async function page({ params }: EditServicePageProps) {
  const service = await getExperienceById(params.id);
  if (!service) {
    // If the service is not found, return a 404 page
    return <div className="text-center text-red-500">Experaince not found</div>;
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link href="/admin/experiance">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Edit Service</h1>
          <p className="text-muted-foreground">Update the service details</p>
        </div>
      </div>

      <ExperienceForm experience={service} editMode />
    </div>
  )
}

export default page