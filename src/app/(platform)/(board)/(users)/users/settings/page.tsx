import { UserProfile } from '@clerk/nextjs'

export default function SettingsPage() {
  return (
    <div className="w-full">
      <UserProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
            },
            card: {
              border: '1px solid #e5e5e5',
              boxShadow: 'none',
              width: '100%',
            },
          },
        }}
      />
    </div>
  )
}
