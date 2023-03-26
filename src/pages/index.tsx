import { reporter } from '@felte/reporter-solid'
import { createForm } from '@felte/solid'
import { validator } from '@felte/validator-zod'
import toast from 'solid-toast'
import { z } from 'zod'
import { TextField } from '../components/TextField'
import { Toast } from '../components/Toast'

const schema = z.object({
  email: z
    .string()
    .email()
    .nonempty({ message: 'Required' }),
  password: z
    .string()
    .nonempty({ message: 'Required' }),
})

export default function Home() {
  const { form } = createForm({
    extend: [
      validator({ schema }),
      reporter,
    ],
    onSubmit: input => {
      toast.custom(t => <Toast t={t} alertClass='alert-success' message={JSON.stringify(input)} />)
    }
  })

  return (
    <form ref={form}>
      <TextField
        type='text'
        name='email'
        label='Email'
      />
      <TextField
        type='password'
        name='password'
        label='Password'
      />
      <button class='btn' type='submit'>
        Sign In
      </button>
    </form>
  )
}
