import { getCredentails } from "@/lib/admin-actions/credentails";
import { TimelineItem } from "@/components/timeline-item";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/DeleteButton"


export default async function CredentialsPage() {
  const credentials = await getCredentails();
  const education = Array.isArray(credentials.education) ? credentials.education : [];
  const certification = Array.isArray(credentials.certification) ? credentials.certification : [];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Credentials</h1>
        <Link href="/admin/credentials/new">
          <Button className="rounded-full">+ Add New Credential</Button>
        </Link>
      </div>
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certification">Certifications</TabsTrigger>
        </TabsList>
        <TabsContent value="education">
          <div className="grid gap-6 md:grid-cols-2">
            {education.length === 0 && <p>No education credentials found.</p>}
            {education.map((item: any) => (
              <div key={item._id} className="relative group">
                <TimelineItem
                  icon={<GraduationCap className="h-6 w-6" />}
                  title={item.title}
                  organization={item.issuer}
                  period={item.period}
                  description={item.details}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DeleteButton id={item._id} />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certification">
          <div className="grid gap-6 md:grid-cols-2">
            {certification.length === 0 && <p>No certifications found.</p>}
            {certification.map((item: any) => (
              <div key={item._id} className="relative group">
                <TimelineItem
                  icon={<GraduationCap className="h-6 w-6" />}
                  title={item.title}
                  organization={item.issuer}
                  period={item.period}
                  description={item.details}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DeleteButton id={item._id} />
                </div>
            </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}