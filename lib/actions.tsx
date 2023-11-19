'use server'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'
import { getDateTime } from './getDateTime'
import { revalidatePath } from 'next/cache'

export const newUser = async () => {
  const session = await getServerSession(authOptions)
  try {
    await prisma.user.create({
      data: {
        createdAt: getDateTime(),
        updatedAt: getDateTime(),
        email: session?.user?.email as string,
        name: session?.user?.name,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const newIdea = async (formdata: FormData) => {
  const session = await getServerSession(authOptions)
  try {
    await prisma.idea.create({
      data: {
        createdAt: getDateTime(),
        updatedAt: getDateTime(),
        name: formdata.get('name') as string,
        description: formdata.get('description') as string,
        status: 'new',
        user: {
          connect: {
            email: session?.user?.email as string,
          },
        },
      },
    })
    revalidatePath('/planning')
  } catch (error) {
    console.log(error)
  }
}

export const getIdeas = async () => {
  const session = await getServerSession(authOptions)
  try {
    const ideas = await prisma.idea.findMany({
      where: {
        user: {
          email: session?.user?.email as string,
        },
      },
    })
    return ideas
  } catch (error) {
    console.log(error)
  }
}

export const progressIdea = async (formdata:FormData) => {
  const status = await prisma.idea.findUnique({
    where: {
      id: formdata.get('id') as string,
    },
    select: {
      status: true,
    },
  })
  try {
    if(status?.status === 'new') {
      await prisma.idea.update({
        where: {
          id: formdata.get('id') as string,
        },
        data: {
          status: 'in-progress',
        },
      })
    } else if(status?.status === 'in-progress') {
      await prisma.idea.update({
        where: {
          id: formdata.get('id') as string,
        },
        data: {
          status: 'done',
        },
      })
    } else if(status?.status === 'done') {
      await prisma.idea.update({
        where: {
          id: formdata.get('id') as string,
        },
        data: {
          status: 'abandoned',
        },
      })
    } else {
      await prisma.idea.update({
        where: {
          id: formdata.get('id') as string,
        },
        data: {
          status: 'new',
        },
      })
    }
    revalidatePath('/planning')
  } catch (error) {
    console.log(error)
  }
}

export const deleteIdea = async (formdata:FormData) => {
  try {
    await prisma.idea.delete({
      where: {
        id: formdata.get('id') as string,
      },
    })
    revalidatePath('/planning')
  } catch (error) {
    console.log(error)
  }
}

export const updateIdea = async (formdata:FormData) => {
  try {
    await prisma.idea.update({
      where: {
        id: formdata.get('id') as string,
      },
      data: {
        name: formdata.get('name') as string,
        description: formdata.get('description') as string,
      },
    })
    revalidatePath('/planning')
  } catch (error) {
    console.log(error)
  }
}