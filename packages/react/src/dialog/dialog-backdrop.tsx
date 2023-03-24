import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import { ark, type HTMLArkProps } from '../factory'
import { useDialogContext } from './dialog-context'

export type DialogBackdropProps = HTMLArkProps<'div'>

export const DialogBackdrop = forwardRef<'div', DialogBackdropProps>((props, ref) => {
  const { backdropProps } = useDialogContext()
  const mergedProps = mergeProps(backdropProps, props)

  return <ark.div {...mergedProps} ref={ref} />
})
