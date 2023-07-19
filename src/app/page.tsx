import ExploreRecent from '@/components/ExploreRecent'
import { BsSearch } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="w-full h-fit mt-4">
      <div className="container mx-auto h-fit flex flex-col items-start gap-16 max-w-7xl py-8">
        <div className="w-full h-[35rem] max-h-max flex flex-col items-center gap-12">
          <div className="w-full h-fit flex flex-col items-center gap-4 mt-4">
            <h2 className="text-zinc-700 text-3xl lg:text-7xl text-center font-bold leading-0 lg:leading-[7rem]">
              An End To Final Year Project Topic Repitition
            </h2>
            <p className="text-zinc-500 text-xl ">
              Solve the world problem through your final year project
            </p>
          </div>
          <div className="w-full flex items-center bg-zinc-100 py-3 px-4 rounded-md text-zinc-700 mt-5 sm:mx-2">
            <BsSearch size={25} className="text-zinc-700" />
            <input
              type="text"
              // value=""
              // onChange=''
              // onKeyDown=''
              placeholder="Enter your project topic"
              className="ml-3 bg-transparent w-full py-1 px-0 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full h-fit">
          <ExploreRecent />
        </div>
      </div>
    </main>
  )
}
