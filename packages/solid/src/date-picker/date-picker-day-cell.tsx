import type { DayCellProps } from '@zag-js/date-picker'
import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useDatePickerContext } from './date-picker-context'
import { DatePickerDayCellProvider } from './date-picker-day-cell-context'

export type DatePickerDayCellProps = Assign<HTMLArkProps<'div'>, DayCellProps>

export const DatePickerDayCell = (props: DatePickerDayCellProps) => {
  const [cellProps, localProps] = createSplitProps<DayCellProps>()(props, [
    'value',
    'disabled',
    'offset',
  ])
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(() => datePicker().getDayCellProps(cellProps), localProps)

  return (
    <DatePickerDayCellProvider value={cellProps}>
      <ark.div {...mergedProps} />
    </DatePickerDayCellProvider>
  )
}
