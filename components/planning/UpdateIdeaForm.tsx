'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SubmitButton } from "../Buttons"
import { updateIdea } from "@/lib/actions"
import { FaPencilAlt } from "react-icons/fa";

export const UpdateIdeaForm = ({idea}:any) => {
  return(
    <Dialog>
      <DialogTrigger className="m-2 shadow-lg">
        <FaPencilAlt />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add an idea using the form below</DialogTitle>
          <DialogDescription>
            <form action={updateIdea} className="flex flex-col">
              <input type="hidden" name="id" value={idea.id} />
              <label htmlFor="name">Idea Title</label>
              <input type="text" name="name" id="name" defaultValue={idea.name} />
              <label htmlFor="description">Idea Description</label>
              <textarea name="description" id="description" defaultValue={idea.description} />
              <SubmitButton label="Add Idea" />
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}