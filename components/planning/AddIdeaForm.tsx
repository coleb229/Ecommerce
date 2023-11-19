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
import { newIdea } from "@/lib/actions"

export const AddIdeaForm = () => {
  return(
    <Dialog>
      <DialogTrigger className="border-black shadow-lg border-[1px] bg-green-400">
        Add Idea
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add an idea using the form below</DialogTitle>
          <DialogDescription>
            <form action={newIdea} className="flex flex-col">
              <label htmlFor="name">Idea Title</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="description">Idea Description</label>
              <textarea name="description" id="description" />
              <SubmitButton label="Add Idea" />
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}