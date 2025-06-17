import { useActionState } from "react";
import { SubmitButton } from "../submit-button";
import { addEvent } from "@/lib/admin-actions/event";
import { NewEvent } from "@/lib/models/Event";

const EventFormServer = ({event}:{event:NewEvent}) => {
  const [, formAction,] = useActionState(addEvent, null);
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="event" value={JSON.stringify(event)} />
        <SubmitButton />
      </form>
    </div>
  )
}

export default EventFormServer