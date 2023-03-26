import { initTRPC } from '@trpc/server'

export const t = initTRPC.create()

export const appRouter = t.router({
  hello: t.procedure
    // .input(
    //   z.object({
    //     text: z.string(),
    //   }),
    // )
    .query(({ input }) => {
      return {
        greeting: `hello`,
      };
    }),
})

export type AppRouter = typeof appRouter
