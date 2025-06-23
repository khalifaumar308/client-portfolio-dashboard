"use client"
import { Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ExperienceUpdate } from "@/lib/admin-actions/experience"

interface ExperienceTableProps {
  experiences: ExperienceUpdate[]
}

export function ExperiencesTable({ experiences }: ExperienceTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {experiences.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No experiences found.
              </TableCell>
            </TableRow>
          ) : (
            experiences.map((exp) => (
              <TableRow key={exp._id}>
                <TableCell className="font-medium">{exp.role}</TableCell>
                <TableCell>{exp.company || "-"}</TableCell>
                <TableCell>{exp.period}</TableCell>
                <TableCell className="max-w-xs truncate">{exp.description}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link href={`/admin/experience/edit/${exp._id}`}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
