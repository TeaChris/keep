import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import ProjectData from '@/components/ProjectData'
import Link from 'next/link'

export default function Projects() {
  return (
    <main className="w-full h-fit mt-8">
      <div className="container mx-auto flex flex-col items-center h-fit max-w-7xl gap-8 mt-40">
        <div className="w-full h-46 flex justify-between items-center">
          <h2 className="text-2xl lg:text-4xl text-zinc-700 font-medium">
            projects
          </h2>
          <Link href="/projects/add">
            <Button>
              <BsPlusCircle size={17} />
              add new project
            </Button>
          </Link>
        </div>

        <div className="w-full h-fit min-h-[24rem] flex flex-col items-start gap-8 px-4">
          <div className="w-full h-40 flex flex-col items-start gap-1">
            <div className="w-[90%] h-20 flex items-center justify-between mx-auto">
              <h5 className="text-xl text-zinc-700">project name</h5>
              <h5 className="text-xl text-zinc-700">actions</h5>
            </div>
            <div className="w-full h-1 content-none bg-zinc-900 rounded-md"></div>
          </div>

          <div className="w-[90%] mx-auto h-fit">
            <ProjectData />
          </div>
        </div>
      </div>
    </main>
  )
}
