import { Component } from 'solid-js'
import clsx from 'clsx'
import { Toast as SolidToast } from 'solid-toast'

export type SuccessToastProps = {
  t: SolidToast
  message: string
  toastXPosition?:
    | 'toast-start'
    | 'toast-center'
    | 'toast-end',
  toastYPosition?:
    | 'toast-top'
    | 'toast-middle'
    | 'toast-bottom',
  alertClass?:
    | 'alert-info'
    | 'alert-success'
    | 'alert-warning'
    | 'alert-error',
}

export const Toast: Component<SuccessToastProps> = ({
  t,
  message,
  toastXPosition = 'toast-start',
  toastYPosition = 'toast-bottom',
  alertClass,
}) => (
  <div class={clsx('toast', toastXPosition, toastYPosition)}>
    <div
      class={clsx(
        'alert',
        alertClass,
        t.visible && 'animate-enter',
        !t.visible && 'animate-leave',
      )}
    >
      <div>
        <span>{message}</span>
      </div>
    </div>
  </div>
)
