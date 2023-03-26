import { A } from '@solidjs/router'
import { JSX } from 'solid-js'
import { Toaster } from 'solid-toast'
import { TRPCProvider } from '../providers/trpc'

export default ({ children }: { children: JSX.Element }) => {
  return (
    <TRPCProvider>
      <section>
        <header>
          <A href='/'>Home</A>{' '}
          <A href='/me'>Me</A>
        </header>
        <main>
          {children}
        </main>
        <Toaster />
      </section>
    </TRPCProvider>
  )
}
