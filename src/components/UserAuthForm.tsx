'use client'

import { FC, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Icons } from './Icons'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  //   login with google logic
  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      //   toast notification
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // login with github logic
  const loginWithGithub = async () => {
    setIsLoading(true)

    try {
      await signIn('github')
    } catch (error) {
      //   toast notification
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        disabled={isLoading}
        onClick={loginWithGoogle}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        disabled={isLoading}
        onClick={loginWithGithub}
      >
        {isLoading ? null : <Icons.github className="h-4 w-4 mr-2" />}
        Github
      </Button>
    </div>
  )
}
export default UserAuthForm
