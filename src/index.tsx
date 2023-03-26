/* @refresh reload */
import { render } from 'solid-js/web'
import { Routes } from 'generouted/solid-router'
import './index.css'

import { client, queryClient, trpc } from './providers/trpc'
import { QueryClientProvider } from '@tanstack/solid-query'

const root = document.getElementById('root')
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  )
}

render(() => (
  <trpc.Provider client={client} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </trpc.Provider>
), root!)
