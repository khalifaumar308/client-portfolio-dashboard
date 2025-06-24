import { CredentialsForm } from "@/components/admin/credentials-form";
import { getCredentailById } from "@/lib/admin-actions/credentails";

export default async function EditCredentialPage({ params }: { params: { id: string } }) {
  // Optionally fetch the credential by id and pass as initialData
  const credentail = (await getCredentailById(params.id))
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Credential</h1>
        <CredentialsForm initialData={{...credentail}} />
      </div>
    </div>
  );
}