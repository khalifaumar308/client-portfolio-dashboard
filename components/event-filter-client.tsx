"use client"
import { EventFilter } from "@/components/event-filter"

export function EventFiltersClient({ eventTypesData, eventRolesData }: { eventTypesData: any, eventRolesData: any }) {
  return (
    <>
      <EventFilter label="Type" options={eventTypesData} />
      <EventFilter label="Role" options={eventRolesData} />
    </>
  )
}