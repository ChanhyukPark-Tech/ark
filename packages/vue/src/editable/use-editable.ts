import { connect, machine, type Context as EditableContext } from '@zag-js/editable'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, type UnwrapRef, watch } from 'vue'
import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'
import { transformComposableProps, useId } from '../utils'

interface EditablePropContext extends Optional<EditableContext, 'id'> {
  modelValue?: EditableContext['value']
}

export type UseEditableProps = {
  context: EditablePropContext
  emit: CallableFunction
}

export const useEditable = (props: UseEditableProps) => {
  const { context, emit } = transformComposableProps(props)

  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(
    machine({
      ...context,
      id: useId().value,
      getRootNode,
      value: context.modelValue ?? context.value,
      onCancel(details) {
        emit('cancel', details)
      },
      onChange(details) {
        emit('change', details)
        emit('update:modelValue', details.value)
      },
      onEdit() {
        emit('edit')
      },
      onSubmit(details) {
        emit('submit', details)
      },
    }),
  )

  const api = computed(() => connect(state.value, send, normalizeProps))

  watch(
    () => context.modelValue,
    (val, prevVal) => {
      if (val == undefined) return

      if (val === prevVal) return

      api.value.setValue(val)
    },
  )

  return api
}

export type UseEditableReturn = UnwrapRef<ReturnType<typeof useEditable>>
