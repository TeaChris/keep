import { FC } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'


const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Image src={logo} alt="logo" className="mx-auto h-8 w-8" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome!</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Task account and agree to our User
          Agreement and Privacy Policy.
        </p>

        {/* sign in form */}
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          New to Task?{' '}
          <Link
            href="/sign-up"
            className="hover:text-brand text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
