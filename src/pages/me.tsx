import { createSignal } from 'solid-js'
import { trpc } from '../providers/trpc'

export default function Me() {
  const [name] = createSignal('yuki')
  const { data } = trpc.hello.useQuery()
  console.log(data)

  return <p>Me page</p>
}
