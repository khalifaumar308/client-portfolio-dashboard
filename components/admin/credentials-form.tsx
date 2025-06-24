"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createCredential } from "@/lib/admin-actions/credentails";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const credentialSchema = z.object({
  _id: z.string().optional(),
  type: z.enum(["Education", "Certification"]),
  title: z.string().min(2, "Title is required"),
  issuer: z.string().min(2, "Issuer is required"),
  period: z.string().min(2, "Period is required"),
  details: z.string().min(2, "Details are required"),
});

export type CredentialFormValues = z.infer<typeof credentialSchema>;

export function CredentialsForm({ initialData, onSuccess }: { initialData?: Partial<CredentialFormValues>, onSuccess?: () => void }) {
  const form = useForm<CredentialFormValues>({
    resolver: zodResolver(credentialSchema),
    defaultValues: initialData || { type: "Education", title: "", issuer: "", period: "", details: "" },
  });
  const [pending, setPending] = useState(false);

  async function onSubmit(data: CredentialFormValues) {
    setPending(true);
    const formData = new FormData();
    formData.append("credentials", JSON.stringify(data));
    await createCredential(null, formData);
    setPending(false);
    if (onSuccess) onSuccess();
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>{initialData?._id ? "Edit Credential" : "Add New Credential"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Tabs defaultValue={form.watch("type")} onValueChange={val => form.setValue("type", val as "Education" | "Certification") }>
              <TabsList>
                <TabsTrigger value="Education">Education</TabsTrigger>
                <TabsTrigger value="Certification">Certification</TabsTrigger>
              </TabsList>
            </Tabs>
            <FormField name="title" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="issuer" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Issuer</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="period" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Period</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="details" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full rounded-full" disabled={pending}>
              {pending ? (initialData?._id ? "Updating..." : "Creating...") : (initialData?._id ? "Update Credential" : "Create Credential")}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
