import { CredentialsForm } from "@/components/admin/credentials-form";

export default function NewCredentialPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Credential</h1>
        <CredentialsForm />
      </div>
    </div>
  );
}