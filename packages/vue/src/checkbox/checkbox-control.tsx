import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { useCheckboxContext } from './checkbox-context'

export type CheckboxControlProps = HTMLArkProps<'div'>

export const CheckboxControl: ComponentWithProps<CheckboxControlProps> = defineComponent({
  name: 'CheckboxControl',
  setup(_, { attrs, slots }) {
    const api = useCheckboxContext()
    return () => (
      <ark.div {...api.value.controlProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})
