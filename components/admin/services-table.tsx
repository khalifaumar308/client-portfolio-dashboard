"use client"

import { useState } from "react"
import Link from "next/link"
import { MoreHorizontal, Pencil, Trash2, Star, ArrowUp, ArrowDown } from "lucide-react"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { deleteServiceAction } from "@/lib/admin-actions/service.action"
import { IService } from "@/components/types"

// interface Service {
//   id: string
//   title: string
//   slug: string
//   description: string
//   icon: string
//   featured: boolean
//   order: number
// }

interface ServicesTableProps {
  services: IService[]
}

export function ServicesTable({ services }: ServicesTableProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [serviceToDelete, setServiceToDelete] = useState<IService | null>(null)
  // Server action state for delete
  const [deleteState, deleteAction, isDeleting] = useActionState(deleteServiceAction, null)

  const handleDeleteClick = (service: IService) => {
    setServiceToDelete(service)
    setIsDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (serviceToDelete) {
      // In a real app, this would call an API to delete the service
      

      // For demo purposes, we'll just close the dialog
      setIsDeleteDialogOpen(false)

      // In a real app, you would refresh the data here
      // window.location.reload()
    }
  }

  const handleMoveUp = (id: string) => {
    // In a real app, this would call an API to update the order
    
  }

  const handleMoveDown = (id: string) => {
    // In a real app, this would call an API to update the order
    
  }

  const handleToggleFeatured = (id: string, featured: boolean) => {
    // In a real app, this would call an API to update the featured status
    
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Icon</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No services found.
                </TableCell>
              </TableRow>
            ) : (
              services.map((service) => (
                <TableRow key={service._id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                  <TableCell>{service.icon}</TableCell>
                  <TableCell>
                    {service.featured ? <Badge>Featured</Badge> : <Badge variant="outline">Standard</Badge>}
                  </TableCell>
                  <TableCell>
                    {/* <div className="flex items-center gap-2">
                      <span>{service.order}</span>
                      <div className="flex flex-col">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => handleMoveUp(service._id)}
                          disabled={service.order === 1}
                        >
                          <ArrowUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => handleMoveDown(service.id)}
                          disabled={service.order === services.length}
                        >
                          <ArrowDown className="h-3 w-3" />
                        </Button>
                      </div>
                    </div> */}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/services/edit/${service._id}`}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleFeatured(service._id, service.featured)}>
                          <Star className="mr-2 h-4 w-4" />
                          {service.featured ? "Remove from featured" : "Add to featured"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleDeleteClick(service)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the service &quot;{serviceToDelete?.title}&quot;. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <form
              action={deleteAction}
              onSubmit={() => setIsDeleteDialogOpen(false)}
              className="inline"
            >
              <input type="hidden" name="serviceId" value={serviceToDelete?._id || ""} />
              <AlertDialogAction
                type="submit"
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </form>
          </AlertDialogFooter>
          {deleteState?.error && (
            <div className="text-red-500 text-sm mt-2">{deleteState.error}</div>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
