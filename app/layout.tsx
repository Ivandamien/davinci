import { getServerSession } from 'next-auth'
import Login from '../components/Login'
import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import NextauthTs from '../pages/api/auth/[...nextauth.ts]'
import '../styles/globals.css'

export const metadata = {
  title: 'ChatGpt Clone',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session =await getServerSession(NextauthTs)
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>

          {!session ? (
            <Login />
            
          ): (
              
        <div className='flex'>
          {/* Sidebar */}
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>

          <SideBar/>
          </div>
          
          {/* Client provider - Notifications */}
          <div className='bg-[#343541] flex-1'>
        {children} 
          </div>
          
        </div>
          )}

        </SessionProvider>
        
      </body>
    </html>
  )
}
