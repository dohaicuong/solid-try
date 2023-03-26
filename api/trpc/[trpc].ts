import { NextApiHandler } from 'next'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '../../trpc/index.ts'

const handler: NextApiHandler = (req, res) => {
  // return res.status(200).json({ name: 'John Doe' })
  return createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
  })(req, res)
}

export default handler
