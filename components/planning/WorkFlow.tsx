'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddIdeaForm } from "./AddIdeaForm"
import { UpdateIdeaForm } from "./UpdateIdeaForm"
import { progressIdea, deleteIdea } from "@/lib/actions"

export const Workflow = ({ideas}:any) => {
  return (
    <div className="flex justify-evenly w-full my-20">
      <Ideas props={ideas} />
      <InProgress props={ideas} />
      <div className="flex flex-col justify-between">
        <Done props={ideas} />
        <Abandoned props={ideas} />
      </div>
    </div>
  )
}

const Ideas = ({props}:any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ideas</CardTitle>
        <CardDescription>Create a new idea</CardDescription>
      </CardHeader>
      <CardContent>
        {props.map((idea:any) => (
          idea.status === "new" && 
          <div key={idea.id} className="flex items-center">
            <DeleteButton idea={idea} />
            <div className="border-black border-[1px] rounded-md my-2">
              <div className="bg-slate-100 rounded-tl-md rounded-tr-md border-[1px] border-b-black font-bold flex justify-between">
                {idea.name}
                <UpdateIdeaForm idea={idea} />
              </div>
              <p>
                {idea.description.split('\n').map((x:any) => {
                  return <>{x}<br/></>
                })}
              </p>
            </div>
            <ProgressIdeaButton idea={idea} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <AddIdeaForm />
      </CardFooter>
    </Card>
  )
}

const InProgress = ({props}:any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>In Progress</CardTitle>
        <CardDescription>Working on an idea</CardDescription>
      </CardHeader>
      <CardContent>
      {props.map((idea:any) => (
          idea.status === "in-progress" && 
          <div key={idea.id} className="flex items-center">
            <DeleteButton idea={idea} />
            <div className="border-black border-[1px] rounded-md my-2">
              <div className="bg-slate-100 rounded-tl-md rounded-tr-md border-[1px] border-b-black font-bold flex justify-between">
                {idea.name}
                <UpdateIdeaForm idea={idea} />
              </div>
              <p>
                {idea.description.split('\n').map((x:any) => {
                  return <>{x}<br/></>
                })}
              </p>
            </div>
            <ProgressIdeaButton idea={idea} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

const Done = ({props}:any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Done</CardTitle>
        <CardDescription>Finished an idea</CardDescription>
      </CardHeader>
      <CardContent>
        {props.map((idea:any) => (
          idea.status === "done" && 
          <div key={idea.id} className="flex items-center">
            <DeleteButton idea={idea} />
            <div className="border-black border-[1px] rounded-md my-2">
              <div className="bg-slate-100 rounded-tl-md rounded-tr-md border-[1px] border-b-black font-bold flex justify-between">
                {idea.name}
                <UpdateIdeaForm idea={idea} />
              </div>
              <p>
                {idea.description.split('\n').map((x:any) => {
                  return <>{x}<br/></>
                })}
              </p>
            </div>
            <ProgressIdeaButton idea={idea} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

const Abandoned = ({props}:any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Abandoned</CardTitle>
        <CardDescription>Abandoned an idea</CardDescription>
      </CardHeader>
      <CardContent>
        {props.map((idea:any) => (
          idea.status === "abandoned" && 
          <div key={idea.id} className="flex items-center">
            <DeleteButton idea={idea} />
            <div className="border-black border-[1px] rounded-md my-2">
              <div className="bg-slate-100 rounded-tl-md rounded-tr-md border-[1px] border-b-black font-bold flex justify-between">
                {idea.name}
                <UpdateIdeaForm idea={idea} />
              </div>
              <p>
                {idea.description.split('\n').map((x:any) => {
                  return <>{x}<br/></>
                })}
              </p>
            </div>
            <ProgressIdeaButton idea={idea} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

const DeleteButton = ({idea}:any) => {
  return (
    <form action={deleteIdea}>
      <input type="hidden" name="id" value={idea.id} />
      <button type="submit" className="text-xs border-black border-[1px] rounded-md m-2 hover:bg-red-400 hover:text-white">
        Delete
      </button>
    </form>
  )
}

const ProgressIdeaButton = ({idea}:any) => {
  return (
    <form action={progressIdea}>
      <input type="hidden" name="id" value={idea.id} />
      <input type="hidden" name="status" value="new" />
      <button type="submit" className="text-xs border-black border-[1px] rounded-md m-2">
        -{'>'}
      </button>
    </form>
  )
}