import { createTRPCSolid } from 'solid-trpc'
import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { AppRouter } from '../../trpc'
import { Component, JSX } from 'solid-js'

export const trpc = createTRPCSolid<AppRouter>()

export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc'
    })
  ]
})

export const queryClient = new QueryClient()

export const TRPCProvider: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
