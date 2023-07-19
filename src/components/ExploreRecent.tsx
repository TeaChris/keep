import { FC } from 'react'

interface ExploreRecentProps {}

const ExploreRecent: FC<ExploreRecentProps> = ({}) => {
  return (
    <section className="w-full h-fit flex flex-col items-start gap-4">
      <div className="w-full">
        <h5 className="text-2xl lg:text-4xl text-zinc-700">
          Explore your recent projects
        </h5>
      </div>
      <div className="w-full h-fit flex flex-wrap items-center gap-4"></div>
    </section>
  )
}

export default ExploreRecent
