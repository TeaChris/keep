import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border bg-secondary px-7 py-2 shadow-md backdrop-blur transition-all hover:border-foreground hover:bg-secondary-foreground">
          <p className="text-sm font-semibold text-primary">
            🎉 Taskzen is now public for your management!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Taskzen helps <span className="text-primary">manage</span> your tasks.
        </h1>

        <p className="mt-5 max-w-prose text-violet-300 sm:text-lg">
          Collaborate seamlessly, project manage effortlessly, and elevate your
          productivity to new heights. Whether your team operates in a corporate
          skyscraper or from the comfort of home offices, Taskzen is tailored to
          match your unique workflow, ensuring you achieve it all with
          unparalleled efficiency.
        </p>
        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  )
}
