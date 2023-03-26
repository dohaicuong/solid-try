import { NextApiHandler } from 'next'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '../../trpc/index.js'

const handler: NextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})

export default handler
