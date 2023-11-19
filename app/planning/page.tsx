import { Workflow } from "@/components/planning/WorkFlow"
import { getIdeas } from "@/lib/actions"

export default async function PlanningPage() {
  const ideas = await getIdeas()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-4xl font-bold'>Planning</h1>
      <Workflow ideas={ideas} />
    </main>
  )
}
// first commit