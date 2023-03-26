import { Component, JSX } from 'solid-js'
import clsx from 'clsx'
import { ValidationMessage } from '@felte/reporter-solid'

export type TextFieldProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  type?: 'password' | 'text'
  label?: string
  helperText?: string
  classes?: {
    label?: string
    labelText?: string
    errorLabel?: string
    errorLabelText?: string
  }
}

export const TextField: Component<TextFieldProps> = ({
  name,
  type = 'text',
  label,
  helperText,
  classes = {},
  ...props
}) => {
  return (
    <div class='form-control w-full max-w-xs'>
      {label && (
        <label class={clsx('label', classes.label)}>
          <span class={clsx('label-text', classes.labelText)}>
            {label}
          </span>
        </label>
      )}
      <input
        name={name}
        type={type}
        {...props}
        class={clsx('input input-bordered w-full max-w-xs', props.class)}
      />
      <ValidationMessage for={name}>
        {(messages) => messages?.length && (
          <label class={clsx('label', classes.errorLabel)}>
            <span class={clsx('label-text-alt text-error', classes.errorLabelText)}>
              {messages.join(' - ')}
            </span>
          </label>
        )}
      </ValidationMessage>
    </div>
  )
}
