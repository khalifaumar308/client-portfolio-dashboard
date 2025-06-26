"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateAbout } from "@/lib/admin-actions/about-actions";

const ICON_OPTIONS = [
	{ label: "Shield", value: "Shield" },
	{ label: "Lightbulb", value: "Lightbulb" },
	{ label: "Target", value: "Target" },
	{ label: "Users", value: "Users" },
	{ label: "Scale", value: "Scale" },
	{ label: "Heart", value: "Heart" },
	// Add more as needed
];

export function AboutForm({
	about,
	onSuccess,
}: {
	about: any;
	onSuccess?: () => void;
}) {
  const [form, setForm] = useState<{
    story: string;
    quate: string;
    beyondWork: string;
    philosophy: { title: string; description: string; icon: string }[];
    talk: string;
  }>({
		story: about?.story?.join("\n\n") || "",
		quate: about?.quate || "",
		beyondWork: about?.beyondWork || "",
		philosophy: about?.philosophy || [],
		talk: about?.talk || "",
	});
	const [philosophy, setPhilosophy] = useState(form.philosophy);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState("");

	const handlePhilosophyChange = (idx: number, field: string, value: string) => {
		const updated = [...philosophy];
		updated[idx] = { ...updated[idx], [field]: value };
		setPhilosophy(updated);
	};

	const addPhilosophy = () =>
		setPhilosophy([
			...philosophy,
			{ title: "", description: "", icon: ICON_OPTIONS[0].value },
		]);
	const removePhilosophy = (idx: number) =>
		setPhilosophy(philosophy.filter((_, i) => i !== idx));

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setPending(true);
		setError("");
		try {
			await updateAbout({
				story: form.story
					.split(/\n\n+/)
					.map((s: string) => s.trim())
					.filter(Boolean),
				quate: form.quate,
				beyondWork: form.beyondWork,
        philosophy,
        talk: form.talk
			});
			if (onSuccess) onSuccess();
    } catch (err: any) {
      console.log(err)
			setError(err.message || "Failed to update about page");
		} finally {
			setPending(false);
		}
	};

	return (
		<form
			className="space-y-8 max-h-[70vh] overflow-y-auto pb-24 relative"
			onSubmit={handleSubmit}
		>
			<div className="grid gap-4">
				<label className="font-semibold">
					My Story (separate paragraphs with blank lines)
				</label>
				<Textarea
					value={form.story}
					onChange={(e) => setForm({ ...form, story: e.target.value })}
					rows={8}
					required
				/>
			</div>
			<div className="grid gap-4">
				<label className="font-semibold">Quote</label>
				<Input
					value={form.quate}
					onChange={(e) => setForm({ ...form, quate: e.target.value })}
					required
				/>
			</div>
			<div className="grid gap-4">
				<label className="font-semibold">Beyond Work</label>
				<Textarea
					value={form.beyondWork}
					onChange={(e) => setForm({ ...form, beyondWork: e.target.value })}
					rows={5}
					required
				/>
      </div>
      <div className="grid gap-4">
        <label className="font-semibold">Lets Talk</label>
        <Textarea
          value={form.talk}
          onChange={(e) => setForm({ ...form, talk: e.target.value })}
          rows={3}
          required
        />
      </div>
			<div className="grid gap-4">
				<label className="font-semibold">Philosophy</label>
				{philosophy.map((item, idx) => (
					<div
						key={idx}
						className="flex flex-col gap-2 border p-3 rounded-md bg-muted/30"
					>
						<Input
							placeholder="Title"
							value={item.title}
							onChange={(e) =>
								handlePhilosophyChange(idx, "title", e.target.value)
							}
							required
						/>
						<select
							className="rounded border px-2 py-1"
							value={item.icon}
							onChange={(e) =>
								handlePhilosophyChange(idx, "icon", e.target.value)
							}
							required
						>
							{ICON_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
						<Textarea
							placeholder="Description"
							value={item.description}
							onChange={(e) =>
								handlePhilosophyChange(idx, "description", e.target.value)
							}
							rows={2}
							required
						/>
						<Button
							type="button"
							variant="destructive"
							size="sm"
							onClick={() => removePhilosophy(idx)}
						>
							Remove
						</Button>
					</div>
				))}
				<Button
					type="button"
					onClick={addPhilosophy}
					variant="outline"
					size="sm"
				>
					Add Philosophy
				</Button>
			</div>
			{error && <div className="text-red-500 text-sm">{error}</div>}
			<div className="fixed bottom-0 left-0 w-full max-w-2xl bg-background p-4 border-t z-50 flex justify-end">
				<Button
					type="submit"
					className="w-full rounded-full max-w-xs"
					disabled={pending}
				>
					{pending ? "Saving..." : "Save Changes"}
				</Button>
			</div>
		</form>
	);
}
