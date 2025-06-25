"use client";

import { useEffect, useState } from "react";
import {
  getCapability,
  deleteCapability,
  getCapabilities,
} from "@/lib/admin-actions/capability-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CapabilityForm } from "@/components/admin/capability-form";
import { SkillBar } from "@/components/skill-bar";

function page() {
  const [capabilities, setCapabilities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchCapabilities() {
      try {
        // You may want to implement a getCapabilities function in capability-actions
        const data = await getCapabilities();
        setCapabilities(data);
      } catch (err) {
        setError("Failed to load capabilities");
      } finally {
        setLoading(false);
      }
    }
    fetchCapabilities();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this capability?")) return;
    try {
      await deleteCapability(id);
      setCapabilities(capabilities.filter((c) => c._id !== id));
    } catch (err) {
      console.log(err)
      setError("Failed to delete capability");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">
          Capabilities ({capabilities.length})
        </h1>
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogTrigger asChild>
            <Button onClick={() => setShowModal(true)}>
              Add New Capability
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Capability</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <CapabilityForm onSuccess={() => setShowModal(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        // <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        //   {capabilities.map((cap) => (
        //     <div key={cap._id} className="relative group border rounded-lg p-4 bg-white shadow">
        //       <div className="font-semibold text-lg mb-2">{cap.title}</div>
        //       <div className="mb-2 text-sm text-gray-600">{cap.description}</div>
              // <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              //   <Button size="sm" variant="outline">Edit</Button>
              //   <Button size="sm" variant="destructive" onClick={() => handleDelete(cap._id)}>
              //     Delete
              //   </Button>
              // </div>
        //     </div>
        //   ))}
        // </div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Expertise
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Areas where I bring specialized knowledge and proven experience.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
              {capabilities.map((cap) => (
                <div key={cap._id} className="relative group border rounded-lg p-4 bg-white shadow">
                  <SkillBar skill={cap.title} percentage={cap.percentage} />
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(cap._id)}>
                      Delete
                    </Button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
