import { createTRPCSolid } from 'solid-trpc'
import { httpLink } from '@trpc/client'
import { QueryClient } from '@tanstack/solid-query'
import { AppRouter } from '../../trpc'
import { Component, JSX } from 'solid-js'

export const trpc = createTRPCSolid<AppRouter>()

export const client = trpc.createClient({
  links: [
    httpLink({
      url: '/api/trpc'
    })
  ]
})

export const queryClient = new QueryClient()

export const TRPCProvider: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  )
}
