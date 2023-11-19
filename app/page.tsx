'use server'
import { LoginButton, LogoutButton } from "@/components/LoginButtons"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { newUser } from "@/lib/actions"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    await newUser()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-4xl font-bold'>Next Ecommerce</h1>
      {session ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl">Welcome {session?.user?.name}</p>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </main>
  )
}